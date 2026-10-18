const EXTERNAL_DATA_URL = 'https://sifouk04-generatorcd.vercel.app';

function generateSiteMap() {
  // ===== الصفحات الثابتة =====
  const staticPages = [
    { path: '', priority: '1.0', changefreq: 'daily' },
    { path: '/blog', priority: '0.9', changefreq: 'daily' },
    { path: '/varied', priority: '0.8', changefreq: 'weekly' },
    
    // ✅ إضافة صفحات الدروس
    { path: '/lessons', priority: '0.9', changefreq: 'weekly' },
    { path: '/lessons?section=powerpoint', priority: '0.8', changefreq: 'weekly' },
    { path: '/lessons?section=templates', priority: '0.8', changefreq: 'weekly' },

    { path: '/about', priority: '0.8', changefreq: 'monthly' },
    { path: '/contact', priority: '0.8', changefreq: 'monthly' },
    { path: '/privacy', priority: '0.5', changefreq: 'monthly' },
    { path: '/terms', priority: '0.5', changefreq: 'monthly' },
    { path: '/disclaimer', priority: '0.5', changefreq: 'monthly' },
  ];

  // ===== المقالات =====
  const articleSlugs = [
    'how-to-increase-facebook-engagement',
    'best-times-to-post-on-facebook',
    'ai-content-creation-tips',
    'facebook-post-ideas',
    'best-image-for-post',
    'facebook-growth-strategies',
    'social-media-mistakes',
    'best-times-instagram',
    'ai-tools-for-arabic-content',
    'social-media-algorithms-2026',
    'increase-followers-facebook',
    'free-photos-for-social-media',
    'whatsapp-business-tips',
    'best-time-to-post-2026',
    'hamza-BenDeledj-build-chield',
    'elon-Musk-Nuclei-Weapeon',
    'cherif-chiban-AlgerianDz',
    'Elon-Musk-thread-fromAI',
    'algerian-registrationDZlger',
    'iphone-ios27-update',
    'nvidia-build-a-guardian-ai',
    'samsung-in-algeria',
    'samsung-GalaxyS26Ultra',
    'best-smartphones-2026',
    'best-apps-2026',
    'how-to-speed-up-computer',
    'huawei-mate-90-pro-max-sim-card',
    'solar-panel-2026-technology',
    'amazon-industry-database',
    'best-travel-destinations-2026',
    'morning-habits-success',
    'how-to-save-money',
    'healthy-food-tips',
    'start-small-business',
    'learn-language-fast',
    'humain-math', // ✅ تم إضافة مقال الرياضيات
  ];

  // ✅ توليد ملف XML
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages
  .map(
    (page) => `  <url>
    <loc>${EXTERNAL_DATA_URL}${page.path}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
${articleSlugs
  .map(
    (slug) => `  <url>
    <loc>${EXTERNAL_DATA_URL}/blog/${slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;
}

function SiteMap() {
  return null;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600');
  
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default SiteMap;