import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/Layout';
import NewsTicker from '../components/NewsTicker';
import { blogArticlesList } from '../lib/blogData';
import TrendingTabs from '../components/TrendingTabs';
import Head from 'next/head';


export default function Home() {
  // ترتيب المقالات حسب التاريخ (الأحدث أولاً)
  const sortedArticles = [...blogArticlesList].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  // التصنيفات الأساسية (التي تظهر في الـ Header)
const MAIN_CATEGORIES = [
  'تكنولوجيا',
  'ذكاء اصطناعي',
  'سوشيال ميديا',
  'هواتف ذكية',
  'تطبيقات وبرامج',
  'كيف',
  'تسويق',
  'تصميم',
];

// المقالات المتنوعة (لا تنتمي لأي تصنيف أساسي)
const diverseArticles = sortedArticles.filter(
  (article) => !MAIN_CATEGORIES.includes(article.category?.trim())
);

<Head>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "نبض التقنية",
        "url": "https://sifou.k04-generatorcd.vercel.app",
        "description": "منصة عربية لنشر آخر أخبار التكنولوجيا والذكاء الاصطناعي",
        "inLanguage": "ar",
        "publisher": {
          "@type": "Organization",
          "name": "نبض التقنية"
        }
      })
    }}
  />
</Head>

  return (
    <Layout
      title="آخر الأخبار + أدوات ذكية"
      description="نبض التقنية - آخر أخبار التكنولوجيا والذكاء الاصطناعي + أدوات ذكية مجانية لإنشاء المحتوى العربي"
    >
      <NewsTicker />

      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* ===== Hero Section ===== */}
        <section className="relative mb-8 rounded-2xl overflow-hidden shadow-xl min-h-[280px] md:min-h-[320px]">
          {/* ✅ استخدام next/image مع priority للتحميل الفوري */}
          <Image
            src="/images/hero-bg.jpg"
            alt="نبض التقنية - آخر الأخبار التقنية"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          {/* طبقة التدرج */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(49, 46, 129, 0.88) 0%, rgba(88, 28, 135, 0.82) 50%, rgba(131, 24, 67, 0.88) 100%)'
            }}
          ></div>

          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-300/10 rounded-full filter blur-3xl"></div>

          <div className="relative h-full flex items-center justify-center px-6 py-8 md:py-10">
            <div className="text-center text-white max-w-3xl mx-auto">

             

              <h1 className="text-2xl md:text-4xl font-black mb-3 leading-tight drop-shadow-xl">
                مدونة نبض التقنية   
              </h1>

             <p className="text-sm md:text-base text-white/95 max-w-xl mx-auto leading-relaxed mb-5 font-medium">
  تابع آخر أخبار التكنولوجيا والذكاء الاصطناعي والهواتف الذكية
</p>

              <div className="flex flex-wrap gap-3 justify-center mb-4">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full font-bold text-sm shadow-xl hover:scale-105 transition-all"
                  style={{
                    background: 'linear-gradient(135deg, #10b981, #059669)',
                    color: '#ffffff',
                  }}
                >
                  <span>📰</span>
                  <span>تصفح الأخبار</span>
                </Link>

               
              </div>

              <div className="flex flex-wrap justify-center gap-2 text-xs text-white/85">
                <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">✓ مجاني 100%</span>
                <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">✓ بدون تسجيل</span>
                <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">✓ محتوى عربي</span>
              </div>

            </div>
          </div>
        </section>

        {/* ===== قسم الأخبار: مقال كبير + مقالات جانبية ===== */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-8 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
              <h2 className="text-2xl md:text-3xl font-black text-gray-800 flex items-center gap-2">
                📰 آخر الأخبار
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </h2>
            </div>
            <Link
              href="/blog"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-xs font-bold hover:shadow-lg hover:scale-105 transition-all inline-flex items-center gap-1"
            >
              <span>عرض الكل</span>
              <span>←</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">

            {/* ===== المقال الرئيسي (الأحدث) ===== */}
            {sortedArticles[0] && (
              <Link
                href={`/blog/${sortedArticles[0].slug}`}
                className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 lg:col-span-3"
              >
                <div className="relative w-full aspect-[16/11] lg:h-full min-h-[400px] overflow-hidden bg-gray-900">
                  {/* ✅ next/image مع priority لأنها الصورة الرئيسية */}
                  <Image
                    src={sortedArticles[0].image}
                    alt={sortedArticles[0].title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent"></div>

                  <span className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    <span>جديد</span>
                  </span>

                  <span className="absolute top-4 left-4 bg-white/25 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/40">
                    {sortedArticles[0].category}
                  </span>

                  <div className="absolute bottom-0 right-0 left-0 p-6 md:p-8 text-white">
                    <h3 className="text-2xl md:text-3xl font-black mb-3 leading-tight drop-shadow-lg">
                      {sortedArticles[0].title}
                    </h3>
                    <p className="text-sm md:text-base text-white/90 line-clamp-2 mb-5 leading-relaxed max-w-2xl">
                      {sortedArticles[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between flex-wrap gap-3">
                      <div className="flex items-center gap-4 text-xs">
                        <span className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full">
                          📅 {sortedArticles[0].date}
                        </span>
                        <span className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full">
                          ⏱️ {sortedArticles[0].readTime}
                        </span>
                      </div>
                      <span className="bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 rounded-full font-bold text-xs shadow-lg group-hover:scale-105 transition-transform">
                        اقرأ المقال كامل ←
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {/* ===== المقالات الجانبية ===== */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {sortedArticles.slice(1, 5).map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group relative flex gap-3 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1 hover:border-indigo-200"
                >
                  <div className="relative w-28 md:w-32 h-28 md:h-32 flex-shrink-0 overflow-hidden bg-gray-100">
                    {/* ✅ next/image مع sizes مناسبة */}
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 640px) 112px, 128px"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <span className="absolute top-2 right-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow">
                      {article.category}
                    </span>
                  </div>

                  <div className="flex-1 py-3 pl-3 pr-2 flex flex-col justify-between">
                    <h3 className="text-sm font-bold text-gray-800 group-hover:text-indigo-600 transition line-clamp-3 leading-snug">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[11px] text-gray-600 mt-2">
                      <span className="flex items-center gap-1">
                        📅 {article.date}
                      </span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span className="flex items-center gap-1">
                        ⏱️ {article.readTime}
                      </span>
                    </div>
                  </div>

                  <div className="absolute top-0 right-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
              ))}
            </div>

          </div>
        </section>

        {/* ===== قسم التبويبات Trending ===== */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-8 bg-gradient-to-b from-amber-500 to-orange-600 rounded-full"></span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-800">
                🔥 الأكثر تفاعلاً
              </h2>
            </div>
          </div>

          <TrendingTabs />
        </section>

        {/* ===== قسم مواضيع متنوعة (تصنيفات غير أساسية) ===== */}
{diverseArticles.length > 0 && (
  <section className="mb-16">

    {/* رأس القسم */}
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-3">
        <span className="w-1.5 h-8 bg-gradient-to-b from-pink-500 to-rose-600 rounded-full"></span>
        <div>
          <h2 className="text-2xl md:text-3xl font-black text-gray-800 flex items-center gap-2">
            🎯 مواضيع متنوعة
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            مقالات في مجالات مختلفة 
          </p>
        </div>
      </div>
      <Link
  href="/varied"
  className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-4 py-2 rounded-full text-xs font-bold hover:shadow-lg hover:scale-105 transition-all inline-flex items-center gap-1"
>
  <span>عرض الكل ({diverseArticles.length})</span>
  <span>←</span>
</Link>
    </div>

    {/* شبكة المقالات المتنوعة */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {diverseArticles.slice(0, 6).map((article, index) => (
        <Link
          key={article.slug}
          href={`/blog/${article.slug}`}
          className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2 flex flex-col"
        >
          {/* الصورة */}
          <div className="relative w-full aspect-[16/10] overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100">
            <img
              src={article.image}
              alt={`${article.title} - ${article.category} - نبض التقنية`}
              title={article.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
            />

            {/* تدرج سفلي */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

            {/* شارة التصنيف */}
            <span className="absolute top-3 right-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              {article.category}
            </span>

            {/* رقم المقال */}
            <span className="absolute top-3 left-3 w-7 h-7 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-black flex items-center justify-center rounded-full shadow-md">
              {index + 1}
            </span>
          </div>

          {/* المحتوى */}
          <div className="p-5 flex flex-col flex-1">
            <h3 className="text-base font-bold text-gray-800 group-hover:text-pink-600 transition line-clamp-2 leading-snug mb-3 min-h-[48px]">
              {article.title}
            </h3>

            <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed mb-4 flex-1">
              {article.excerpt}
            </p>

            <div className="flex items-center justify-between text-xs text-gray-400 border-t pt-3 mt-auto">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">📅 {article.date}</span>
                <span className="flex items-center gap-1">⏱️ {article.readTime}</span>
              </div>
              <span className="flex items-center gap-1 text-pink-600 font-bold group-hover:gap-2 transition-all">
                اقرأ
                <span className="group-hover:translate-x-[-4px] transition-transform">←</span>
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>

  </section>
)}

        
       {/* ===== لماذا نبض التقنية؟ ===== */}
<section className="py-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
        لماذا يختارنا القارئ العربي؟
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
         كل مقال هو جهد حقيقي يبدأ من سؤال يطرحه القارئ، وينتهي بحل عملي يطبقه في حياته.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* بطاقة 1: السرعة */}
      <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:-translate-y-1">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition">
          ⚡
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">محتوى فوري</h3>
        <p className="text-gray-600 leading-relaxed text-sm">
          ننشر الأخبار في وقتها، ونحدّث المقالات عندما تتغير التقنيات. لا محتوى قديم، ولا معلومات منتهية الصلاحية.
        </p>
      </div>

      {/* بطاقة 2: العمق */}
      <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:-translate-y-1">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition">
          📚
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">عمق حقيقي</h3>
        <p className="text-gray-600 leading-relaxed text-sm">
          مقالاتنا ليست ملخصات سطحية. كل مقال يقدم تحليلاً، أمثلة، وجداول، حتى يخرج القارئ بفهم كامل.
        </p>
      </div>

      {/* بطاقة 3: البساطة */}
      <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:-translate-y-1">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition">
          🎯
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">لغة بسيطة</h3>
        <p className="text-gray-600 leading-relaxed text-sm">
          نكتب بلغة يفهمها المبتدئ، دون المساس بدقة المعلومة. لا مصطلحات معقدة، ولا حشو، فقط ما تحتاج معرفته.
        </p>
      </div>

      {/* بطاقة 4: المجانية */}
      <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:-translate-y-1">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition">
          🆓
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">مجاني بالكامل</h3>
        <p className="text-gray-600 leading-relaxed text-sm">
          كل المحتوى والأدوات مجانية. لا تسجيل، لا اشتراكات، لا رسوم خفية. المعرفة التقنية حق للجميع.
        </p>
      </div>
    </div>

    {/* شريط الإحصائيات */}
    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
      <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100">
        <div className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">32+</div>
        <div className="text-xs text-gray-600 mt-1 font-medium">مقالة عميقة</div>
      </div>
      <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100">
        <div className="text-3xl font-extrabold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">100%</div>
        <div className="text-xs text-gray-600 mt-1 font-medium">محتوى عربي</div>
      </div>
      <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100">
        <div className="text-3xl font-extrabold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">24/7</div>
        <div className="text-xs text-gray-600 mt-1 font-medium">تحديث مستمر</div>
      </div>
      <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100">
        <div className="text-3xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">0 دج</div>
        <div className="text-xs text-gray-600 mt-1 font-medium">مجاني للجميع</div>
      </div>
    </div>
  </div>
</section>


        {/* ===== CTA النهائي ===== */}
        <section className="relative rounded-3xl overflow-hidden shadow-2xl mb-12 min-h-[350px]">

          {/* ✅ next/image مع loading lazy لأنها في أسفل الصفحة */}
          <Image
            src="/images/cta.jpg"
            alt="ابدأ رحلتك التقنية مع نبض التقنية"
            fill
            sizes="100vw"
            className="object-cover"
            loading="lazy"
          />

          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 30% 40%, rgba(99, 102, 241, 0.6) 0%, transparent 50%),
                radial-gradient(circle at 70% 60%, rgba(236, 72, 153, 0.5) 0%, transparent 50%),
                linear-gradient(135deg, rgba(15, 23, 42, 0.92) 0%, rgba(49, 46, 129, 0.88) 50%, rgba(88, 28, 135, 0.92) 100%)
              `
            }}
          ></div>

          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}
          ></div>

          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-400/20 rounded-full filter blur-3xl"></div>

          <div className="relative px-8 py-16 text-center text-white">
            <div className="text-6xl mb-4 drop-shadow-2xl">🚀</div>

            <h3 className="text-3xl md:text-4xl font-black mb-4 drop-shadow-lg">
              ابدأ رحلتك التقنية الآن
            </h3>

            <p className="text-white/95 text-lg mb-8 max-w-xl mx-auto drop-shadow-lg">
              تصفح الأخبار، وطوّر مهاراتك ومعارفك التقنية مع نبض التقنية.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-extrabold text-lg shadow-2xl hover:scale-110 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  color: '#ffffff',
                  boxShadow: '0 15px 40px rgba(16, 185, 129, 0.6)',
                }}
              >
                <span>📰</span>
                <span>تصفح الأخبار</span>
              </Link>

              
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}