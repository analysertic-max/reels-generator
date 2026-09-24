import axios from 'axios';
import * as cheerio from 'cheerio';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { url } = req.body;

  if (!url || !url.includes('facebook.com') && !url.includes('fb.watch')) {
    return res.status(400).json({ error: 'رابط غير صالح' });
  }

  try {
    // محاولة استخراج البيانات من الـ meta tags
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1)',
      },
      timeout: 10000,
    });

    const $ = cheerio.load(response.data);

    const title =
      $('meta[property="og:title"]').attr('content') ||
      $('title').text() ||
      '';

    const description =
      $('meta[property="og:description"]').attr('content') ||
      $('meta[name="description"]').attr('content') ||
      '';

    const image =
      $('meta[property="og:image"]').attr('content') || '';

    // استخراج الهاشتاغات من الوصف
    const hashtags = (description.match(/#[\w\u0600-\u06FF]+/g) || []);

    // تنظيف الوصف من الهاشتاغات
    const cleanDescription = description
      .replace(/#[\w\u0600-\u06FF]+/g, '')
      .trim();

    return res.status(200).json({
      success: true,
      data: {
        title: title.replace(/\|.*$/, '').trim(),
        description: cleanDescription,
        hashtags,
        image,
        url,
      },
    });
  } catch (error) {
    console.error('Extract error:', error.message);
    
    // في حال فشل الاستخراج، نرجع بيانات افتراضية
    // ليتمكن المستخدم من الكتابة يدوياً
    return res.status(200).json({
      success: true,
      data: {
        title: '',
        description: '',
        hashtags: [],
        image: '',
        url,
        note: 'لم نتمكن من استخراج البيانات تلقائياً. أدخل الوصف يدوياً.',
      },
    });
  }
}