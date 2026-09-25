import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const FONT_PATH = path.join(process.cwd(), 'public', 'fonts', 'Cairo.ttf');

/**
 * يقسم النص إلى أسطر بحيث لا يتجاوز كل سطر الحد الأقصى
 */
function wrapText(text, maxCharsPerLine = 25) {
  const words = text.split(/\s+/);
  const lines = [];
  let currentLine = '';

  for (const word of words) {
    if ((currentLine + ' ' + word).trim().length <= maxCharsPerLine) {
      currentLine = (currentLine + ' ' + word).trim();
    } else {
      if (currentLine) lines.push(currentLine);
      currentLine = word;
    }
  }
  if (currentLine) lines.push(currentLine);

  return lines;
}

/**
 * يهرّب الأحرف الخاصة بـ XML
 */
function escapeXml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * يحوّل Buffer إلى Base64 Data URL
 */
function bufferToDataUrl(buffer, mimeType = 'image/png') {
  return `data:${mimeType};base64,${buffer.toString('base64')}`;
}

/**
 * يضيف النص العربي فوق الصورة
 * @param {Buffer} imageBuffer - صورة الخلفية
 * @param {string} text - النص العربي
 * @param {object} options - خيارات إضافية
 */
export async function addArabicTextToImage(imageBuffer, text, options = {}) {
  const {
    fontSize = 56,
    fontFamily = 'Cairo',
    textColor = '#FFFFFF',
    strokeColor = 'rgba(0,0,0,0.5)',
    strokeWidth = 2,
    paddingBottom = 200,
    paddingSide = 60,
    backgroundColor = 'rgba(0,0,0,0.55)',
    maxCharsPerLine = 22,
  } = options;

  // 1. احصل على أبعاد الصورة
  const image = sharp(imageBuffer);
  const metadata = await image.metadata();
  const width = metadata.width || 1024;
  const height = metadata.height || 1024;

  // 2. اقسم النص إلى أسطر
  const lines = wrapText(text, maxCharsPerLine);

  // 3. احسب ارتفاع الصندوق الخلفي
  const lineHeight = fontSize * 1.4;
  const textBlockHeight = lines.length * lineHeight;
  const boxHeight = textBlockHeight + 60; // padding داخلي
  const boxY = height - boxHeight - paddingBottom;
  const boxX = paddingSide;
  const boxWidth = width - paddingSide * 2;

  // 4. ابنِ النص كـ SVG
  const svgLines = lines
    .map((line, i) => {
      const y = boxY + 40 + i * lineHeight + fontSize * 0.8;
      return `<text x="${width / 2}" y="${y}" 
        font-family="${fontFamily}" 
        font-size="${fontSize}" 
        font-weight="bold" 
        fill="${textColor}" 
        stroke="${strokeColor}" 
        stroke-width="${strokeWidth}"
        text-anchor="middle" 
        direction="rtl"
        unicode-bidi="embed">${escapeXml(line)}</text>`;
    })
    .join('\n');

  // 5. SVG كامل مع الصندوق الخلفي
  const svgOverlay = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <!-- صندوق شبه شفاف خلف النص -->
      <rect 
        x="${boxX}" 
        y="${boxY}" 
        width="${boxWidth}" 
        height="${boxHeight}" 
        rx="20" 
        ry="20" 
        fill="${backgroundColor}" 
      />
      <!-- النص العربي -->
      ${svgLines}
    </svg>
  `;

  // 6. دمج الصورة مع النص
  const composed = await image
    .composite([
      {
        input: Buffer.from(svgOverlay),
        top: 0,
        left: 0,
      },
    ])
    .png()
    .toBuffer();

  return composed;
}

export { bufferToDataUrl, wrapText };