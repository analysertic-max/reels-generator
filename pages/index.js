import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../components/Layout';
import NewsTicker from '../components/NewsTicker';
import TrendingTabs from '../components/TrendingTabs';
import { blogArticlesList } from '../lib/blogData';

export default function Home() {
 const [activeSlide, setActiveSlide] = useState(0);

  // ترتيب المقالات حسب التاريخ (الأحدث أولاً)
  const sortedArticles = [...blogArticlesList].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

    const featuredArticles = sortedArticles.slice(0, 4);

      // تغيير تلقائي كل 6 ثوانٍ
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % featuredArticles.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [featuredArticles.length])

  // التصنيفات الأساسية
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

  // المقالات المتنوعة
  const diverseArticles = sortedArticles.filter(
    (article) => !MAIN_CATEGORIES.includes(article.category?.trim())
  );

  return (
    <Layout
      title="آخر الأخبار + أدوات ذكية"
      description="نبض التقنية - آخر أخبار التكنولوجيا والذكاء الاصطناعي + أدوات ذكية مجانية لإنشاء المحتوى العربي"
    >
      {/* ===== Schema Markup ===== */}
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

      {/* ===== شريط الأخبار - Full Width ===== */}
      <NewsTicker />

   {/* ===== Hero Section - بصورة بدون أزرار ===== */}
<section className="relative w-full overflow-hidden shadow-lg min-h-[220px] md:min-h-[260px]">

  {/* الصورة الخلفية */}
  <img
    src="/images/logo.jpg"
    alt="نبض التقنية"
    className="absolute inset-0 w-full h-full object-cover"
    loading="eager"
    onError={(e) => {
      e.target.style.display = 'none';
      e.target.parentElement.style.background = 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)';
    }}
  />

  {/* طبقة داكنة متدرجة (تعمل في الوضعين) */}
  <div
    className="absolute inset-0"
    style={{
      background: 'linear-gradient(135deg, rgba(30, 27, 75, 0.88) 0%, rgba(88, 28, 135, 0.85) 50%, rgba(131, 24, 67, 0.88) 100%)'
    }}
  ></div>

  {/* زخارف خفيفة */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
  <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-300/10 rounded-full filter blur-3xl"></div>

  {/* المحتوى */}
  <div className="relative h-full flex items-center justify-center px-6 py-8 md:py-10">
    <div className="text-center text-white max-w-3xl mx-auto">

      {/* شارة صغيرة */}
      <span className="inline-block bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30 mb-4">
         آخر الأخبار التقنية
      </span>

      {/* العنوان */}
      <h1 className="text-2xl md:text-4xl font-black mb-3 leading-tight drop-shadow-lg">
        مدونة نبض التقنية
      </h1>

      {/* الوصف */}
      <p className="text-sm md:text-base text-white/90 max-w-xl mx-auto leading-relaxed">
        منصة عربية متخصصة في آخر أخبار التكنولوجيا والذكاء الاصطناعي والهواتف الذكية
      </p>

      {/* خط فاصل أنيق */}
      <div className="flex items-center justify-center gap-2 mt-5">
        <div className="w-8 h-0.5 bg-white/40 rounded-full"></div>
        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
        <div className="w-8 h-0.5 bg-white/40 rounded-full"></div>
      </div>

    </div>
  </div>
</section>

      {/* ===== باقي المحتوى (محدود العرض) ===== */}
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* ===== قسم الأخبار ===== */}
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

            {/* ===== المقال الرئيسي (سلايدر تلقائي) ===== */}
<div className="lg:col-span-3 relative">

  {featuredArticles.map((article, index) => (
    <Link
      key={article.slug}
      href={`/blog/${article.slug}`}
      className={`group absolute inset-0 transition-opacity duration-1000 ${
        index === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
      }`}
      style={{ position: index === activeSlide ? 'relative' : 'absolute' }}
    >
      <div className="relative w-full aspect-[16/11] lg:h-full min-h-[400px] overflow-hidden bg-gray-900 rounded-2xl">
        <img
          src={article.image}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading={index === 0 ? 'eager' : 'lazy'}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent"></div>

        {/* شارة "جديد" */}
        <span className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
          <span>جديد</span>
        </span>

        {/* شارة التصنيف */}
        <span className="absolute top-4 left-4 bg-white/25 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/40">
          {article.category}
        </span>

        {/* المحتوى */}
        <div className="absolute bottom-0 right-0 left-0 p-6 md:p-8 text-white">
          <h3 className="text-2xl md:text-3xl font-black mb-3 leading-tight drop-shadow-lg line-clamp-2">
            {article.title}
          </h3>
          <p className="text-sm md:text-base text-white/90 line-clamp-2 mb-5 leading-relaxed max-w-2xl">
            {article.excerpt}
          </p>
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full">
                📅 {article.date}
              </span>
              <span className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full">
                ⏱️ {article.readTime}
              </span>
            </div>
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 rounded-full font-bold text-xs shadow-lg group-hover:scale-105 transition-transform">
              اقرأ المقال كامل ←
            </span>
            
          </div>
        </div>
      </div>
    </Link>
  ))}

  {/* ===== مؤشرات السلايدر (Dots) ===== */}
  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
    {featuredArticles.map((_, index) => (
      <button
        key={index}
        onClick={(e) => {
          e.preventDefault();
          setActiveSlide(index);
        }}
        aria-label={`الانتقال إلى المقال ${index + 1}`}
        className={`transition-all duration-300 rounded-full ${
          index === activeSlide
            ? 'w-8 h-2 bg-white'
            : 'w-2 h-2 bg-white/50 hover:bg-white/80'
        }`}
      ></button>
    ))}
  </div>

</div>

            {/* المقالات الجانبية */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {sortedArticles.slice(1, 5).map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group relative flex gap-3 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1 hover:border-indigo-200"
                >
                  <div className="relative w-28 md:w-32 h-28 md:h-32 flex-shrink-0 overflow-hidden bg-gray-100">
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
                      <span className="flex items-center gap-1">📅 {article.date}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span className="flex items-center gap-1">⏱️ {article.readTime}</span>
                    </div>
                  </div>

                  <div className="absolute top-0 right-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
              ))}
            </div>

          </div>
        </section>

        {/* ===== قسم Trending ===== */}
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

        {/* ===== قسم مواضيع متنوعة ===== */}
        {diverseArticles.length > 0 && (
          <section className="mb-16">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {diverseArticles.slice(0, 6).map((article, index) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2 flex flex-col"
                >
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100">
                    <Image
                      src={article.image}
                      alt={`${article.title} - ${article.category} - نبض التقنية`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    <span className="absolute top-3 right-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                      {article.category}
                    </span>

                    <span className="absolute top-3 left-3 w-7 h-7 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-black flex items-center justify-center rounded-full shadow-md">
                      {index + 1}
                    </span>
                  </div>

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

      {/* ===== قسم اقرأ أيضاً (سلايدر تلقائي) ===== */}
<section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-8 bg-gradient-to-b from-pink-500 to-rose-600 rounded-full"></span>
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-gray-800 flex items-center gap-2">
                    اقرأ أيضاً
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    تصفح وتشبع بالمعرفة                  </p>
                </div>
              </div>
    <Link
      href="/blog"
      className="text-cyan-600 dark:text-cyan-400 font-bold hover:gap-3 gap-2 inline-flex items-center transition-all text-sm"
    >
      <span>عرض الكل</span>
      <span>←</span>
    </Link>
  </div>

  <div className="relative overflow-hidden py-4 marquee-container">
    
    {/* تدرجات على الحواف */}
    <div 
      className="absolute top-0 right-0 bottom-0 w-20 z-10 pointer-events-none fade-right"
    ></div>
    <div 
      className="absolute top-0 left-0 bottom-0 w-20 z-10 pointer-events-none fade-left"
    ></div>

    {/* الشريط المتحرك */}
    <div className="flex gap-5 animate-marquee-horizontal">
      {[...sortedArticles.slice(10, 25), ...sortedArticles.slice(10, 25)].map((article, index) => (
        <Link
  key={`${article.slug}-${index}`}
  href={`/blog/${article.slug}`}
  className="group flex-shrink-0 w-72 rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden bg-white dark:bg-gray-800"

          style={{ backgroundColor: 'var(--card-bg)' }}
        >
          <div className="relative w-full h-40 overflow-hidden bg-gray-100 dark:bg-gray-700">
            <img
              src={article.image}
              alt={`${article.title} - ${article.category} - نبض التقنية`}
              title={article.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <span className="absolute top-3 right-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">
              {article.category}
            </span>
          </div>

          <div className="p-4" style={{ backgroundColor: 'var(--card-bg)' }}>
            <h3 
              className="text-sm font-bold group-hover:text-cyan-600 transition line-clamp-2 leading-snug mb-2 min-h-[40px]"
              style={{ color: 'var(--text-primary)' }}
            >
              {article.title}
            </h3>
            <div className="flex items-center justify-between text-xs">
              <span style={{ color: 'var(--text-secondary)' }}>📅 {article.date}</span>
              <span className="text-cyan-600 font-bold">اقرأ ←</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>

{/* ===== قسم مبادئ الإعلام الآلي ===== */}
<section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-8 bg-gradient-to-b from-pink-500 to-rose-600 rounded-full"></span>
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-gray-800 flex items-center gap-2">
                    مبادئ أولية في الإعلام الآلي
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    صفحة تعليمية متخصصة في الإعلام الآلي                    </p>
                </div>
              </div>
    <Link
      href="/lessons"
      className="text-blue-600 dark:text-blue-400 font-bold hover:gap-3 gap-2 inline-flex items-center transition-all text-sm"
    >
      <span>كل الدروس</span>
      <span>←</span>
    </Link>
  </div>

  {/* شبكة السنوات */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {[
      { key: '1am', title: 'الأولى متوسط', icon: '📘', color: 'from-blue-500 to-indigo-600' },
      { key: '2am', title: 'الثانية متوسط', icon: '📗', color: 'from-emerald-500 to-teal-600' },
      { key: '3am', title: 'الثالثة متوسط', icon: '📙', color: 'from-amber-500 to-orange-600' },
      { key: '4am', title: 'الرابعة متوسط', icon: '📕', color: 'from-pink-500 to-rose-600' },
    ].map((year) => (
      <Link
        key={year.key}
        href={`/lessons#${year.key}`}
        className={`group bg-gradient-to-br ${year.color} rounded-2xl p-6 text-white text-center transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl`}
      >
        <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
          {year.icon}
        </div>
        <div className="font-bold text-sm md:text-base mb-1">{year.title}</div>
        <div className="text-xs opacity-80">دروس مصورة</div>
      </Link>
    ))}
  </div>
</section>

       {/* ===== CTA النهائي - مصغّر واحترافي ===== */}
<section className="relative w-full overflow-hidden shadow-lg min-h-[180px] md:min-h-[220px]">

  {/* الصورة الخلفية */}
  <img
    src="/images/blog-hero.jpg"
    alt="ابدأ رحلتك التقنية مع نبض التقنية"
    className="absolute inset-0 w-full h-full object-cover"
    loading="lazy"
    onError={(e) => {
      e.target.style.display = 'none';
      e.target.parentElement.style.background = 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #db2777 100%)';
    }}
  />

  {/* طبقة داكنة متدرجة */}
  <div
    className="absolute inset-0"
    style={{
      background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.92) 0%, rgba(49, 46, 129, 0.88) 50%, rgba(88, 28, 135, 0.92) 100%)'
    }}
  ></div>

  {/* زخارف خفيفة */}
  <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full filter blur-3xl"></div>
  <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-300/10 rounded-full filter blur-3xl"></div>

  {/* المحتوى */}
  <div className="relative h-full flex items-center justify-center px-6 py-6 md:py-8">
    <div className="text-center text-white max-w-2xl mx-auto">

      {/* أيقونة صغيرة */}
      <div className="text-3xl md:text-4xl mb-2 drop-shadow-lg">🚀</div>

      {/* العنوان */}
      <h3 className="text-xl md:text-3xl font-black mb-2 leading-tight drop-shadow-lg">
        ابدأ رحلتك التقنية الآن
      </h3>

      {/* الوصف */}
      <p className="text-xs md:text-sm text-white/90 max-w-lg mx-auto leading-relaxed mb-4">
        تصفح الأخبار، وطوّر مهاراتك ومعارفك التقنية مع نبض التقنية
      </p>

      {/* الزر */}
      <div className="flex flex-wrap gap-3 justify-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm bg-white text-indigo-700 hover:bg-indigo-50 hover:scale-105 transition-all shadow-lg"
        >
          <span>📰</span>
          <span>تصفح الأخبار</span>
        </Link>
      </div>

    </div>
  </div>
</section>

      </div>
    </Layout>
  );
}