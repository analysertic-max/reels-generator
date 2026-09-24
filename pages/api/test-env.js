export default function handler(req, res) {
  res.status(200).json({
    hasKey: !!process.env.OPENAI_API_KEY,
    keyPreview: process.env.OPENAI_API_KEY
      ? process.env.OPENAI_API_KEY.substring(0, 10) + '...'
      : 'غير موجود',
  });
}