import OpenAI from 'openai';

// قائمة الموديلات المجانية (سيتم تجربتها بالترتيب)
const FREE_MODELS = [
 'openrouter/free'
  	

];

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { reelData, options } = req.body;

  if (!process.env.OPENROUTER_API_KEY) {
    return res.status(500).json({
      success: false,
      error: 'مفتاح OPENROUTER_API_KEY غير موجود',
    });
  }

  if (!reelData?.title && !reelData?.description) {
    return res.status(400).json({
      success: false,
      error: 'لا توجد بيانات كافية',
    });
  }

  const openai = new OpenAI({
    apiKey: process.env.OPENROUTER_API_KEY,
    baseURL: 'https://openrouter.ai/api/v1',
    defaultHeaders: {
      'HTTP-Referer': 'http://localhost:3000',
      'X-Title': 'Reels Post Generator',
    },
  });

  const systemPrompt = `أنت خبير في كتابة منشورات فيسبوك التفاعلية بالعربية.
اكتب منشورات جذابة مع إيموجي و call-to-action.
يجب أن تعيد JSON فقط، بدون أي نص إضافي.`;

  const userPrompt = `المحتوى:
العنوان: ${reelData.title || 'بدون'}
الوصف: ${reelData.description || 'بدون'}

أنشئ ${options?.count || 5} منشورات.

أعد JSON بهذا الشكل:
{
  "posts": [
    { "type": "تفاعلي", "content": "..." },
    { "type": "قصة", "content": "..." },
    { "type": "مثير", "content": "..." },
    { "type": "نصائح", "content": "..." },
    { "type": "مختصر", "content": "..." }
  ]
}`;

  // جرّب كل موديل بالترتيب حتى ينجح أحدها
  let lastError = null;

  for (const modelName of FREE_MODELS) {
    try {
      console.log(`🚀 Trying model: ${modelName}`);

      const completion = await openai.chat.completions.create({
        model: modelName,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt },
        ],
        temperature: 0.9,
      });

      const content = completion.choices[0].message.content;
      console.log(`✅ Success with: ${modelName}`);

      let parsed;
      try {
        const jsonMatch = content.match(/\{[\s\S]*\}/);
        parsed = JSON.parse(jsonMatch ? jsonMatch[0] : content);
      } catch {
        parsed = { posts: [{ type: 'عام', content }] };
      }

      return res.status(200).json({
        success: true,
        model: modelName,
        posts: parsed.posts || [{ type: 'عام', content }],
      });

    } catch (error) {
      console.log(`❌ Failed with ${modelName}: ${error.message}`);
      lastError = error;
      continue; // جرّب الموديل التالي
    }
  }

  // فشلت كل الموديلات
  return res.status(500).json({
    success: false,
    error: 'جميع الموديلات المجانية غير متاحة حالياً',
    details: lastError?.message,
    hint: 'تحقق من https://openrouter.ai/models?max_price=0',
  });
}