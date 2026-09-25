import { HfInference } from '@huggingface/inference';
import OpenAI from 'openai';
import { IMAGE_STYLES, DEFAULT_STYLE } from '../../lib/imageStyles';
import { addArabicTextToImage, bufferToDataUrl } from '../../lib/imageComposer';

export const config = {
  api: {
    responseLimit: '10mb',
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { 
    postContent, 
    style = DEFAULT_STYLE,
    addText = true,
    customText = '',
  } = req.body || {};

  // فحص أمان
  if (!postContent || typeof postContent !== 'string' || postContent.trim() === '') {
    return res.status(400).json({ error: 'محتوى المنشور مطلوب' });
  }

  if (!process.env.HUGGINGFACE_API_KEY) {
    return res.status(500).json({ error: 'مفتاح HUGGINGFACE_API_KEY غير موجود' });
  }

  const selectedStyle = IMAGE_STYLES[style] || IMAGE_STYLES[DEFAULT_STYLE];

  try {
    // ===== 1. توليد البروميت البصري =====
    console.log('🚀 Generating visual prompt...');

    const openai = new OpenAI({
      apiKey: process.env.OPENROUTER_API_KEY,
      baseURL: 'https://openrouter.ai/api/v1',
      defaultHeaders: {
        'HTTP-Referer': 'http://localhost:3000',
        'X-Title': 'Reels Post Generator',
      },
    });

    let basePrompt = 'beautiful abstract background, soft colors, serene atmosphere';

    try {
      const promptResponse = await openai.chat.completions.create({
        model: 'openrouter/free',
        messages: [
          {
            role: 'system',
            content: `You generate visual prompts for AI image models.
Convert Arabic text into a detailed ENGLISH visual description (15-25 words).
Focus on SCENE, SUBJECT, MOOD, COLORS, ATMOSPHERE.
Do NOT include any text in the image.
Leave empty space at bottom for text overlay.`,
          },
          {
            role: 'user',
            content: `Convert to visual prompt: "${postContent}"`,
          },
        ],
        temperature: 0.8,
        max_tokens: 100,
      });

      const generated = promptResponse?.choices?.[0]?.message?.content;
      if (generated && typeof generated === 'string') {
        basePrompt = generated.trim();
      }
    } catch (promptError) {
      console.error('⚠️ Prompt generation failed, using fallback:', promptError.message);
      // نستمر بالبروميت الافتراضي
    }

    const visualPrompt = `${basePrompt}, ${selectedStyle.promptSuffix}`;
    console.log('✅ Prompt:', visualPrompt);

    // ===== 2. توليد الصورة =====
    console.log('🎨 Generating background image...');

    const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);
    const imageBlob = await hf.textToImage({
      inputs: visualPrompt,
      model: 'black-forest-labs/FLUX.1-schnell',
    });

    const arrayBuffer = await imageBlob.arrayBuffer();
    let imageBuffer = Buffer.from(arrayBuffer);

    console.log('✅ Background generated:', imageBuffer.length, 'bytes');

    // ===== 3. إضافة النص العربي =====
    if (addText) {
      console.log('✍️ Adding Arabic text overlay...');

      let textForImage = (customText && typeof customText === 'string') 
        ? customText.trim() 
        : '';

      if (!textForImage) {
        try {
          const extractResponse = await openai.chat.completions.create({
            model: 'openrouter/free',
            messages: [
              {
                role: 'system',
                content: 'Extract the most powerful, short phrase from the text (max 8 words in Arabic). Output ONLY the phrase, nothing else.',
              },
              {
                role: 'user',
                content: postContent,
              },
            ],
            temperature: 0.7,
            max_tokens: 50,
          });

          const extracted = extractResponse?.choices?.[0]?.message?.content;
          if (extracted && typeof extracted === 'string') {
            textForImage = extracted.trim();
          }
        } catch (extractError) {
          console.error('⚠️ Extraction failed, using first words:', extractError.message);
        }

        // احتياطي: استخدم أول 50 حرفاً من المنشور
        if (!textForImage) {
          textForImage = postContent.substring(0, 50).trim();
        }
      }

      console.log('📝 Text for image:', textForImage);

      // حجم الخط حسب الطول
      const textLength = textForImage.length;
      let fontSize = 64;
      let maxCharsPerLine = 20;

      if (textLength > 40) {
        fontSize = 44;
        maxCharsPerLine = 26;
      } else if (textLength > 25) {
        fontSize = 52;
        maxCharsPerLine = 23;
      } else if (textLength <= 15) {
        fontSize = 72;
        maxCharsPerLine = 15;
      }

      imageBuffer = await addArabicTextToImage(imageBuffer, textForImage, {
        fontSize,
        textColor: '#FFFFFF',
        strokeColor: 'rgba(0,0,0,0.7)',
        strokeWidth: 3,
        backgroundColor: 'rgba(0,0,0,0.6)',
        maxCharsPerLine,
      });

      console.log('✅ Text added');
    }

    // ===== 4. Data URL =====
    const imageUrl = bufferToDataUrl(imageBuffer);

    return res.status(200).json({
      success: true,
      imageUrl,
      visualPrompt,
      style,
      hasText: addText,
    });

  } catch (error) {
    console.error('=== Error ===');
    console.error('Message:', error.message);
    console.error('Stack:', error.stack);

    return res.status(500).json({
      success: false,
      error: error.message || 'فشل في توليد الصورة',
    });
  }
}