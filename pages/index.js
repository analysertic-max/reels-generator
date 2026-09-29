import Link from 'next/link';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import NewsTicker from '../components/NewsTicker';
import { blogArticlesList } from '../lib/blogData';

export default function Home() {
  const latestArticles = blogArticlesList.slice(0, 9);

  const tools = [
    {
      icon: '🎬',
      title: 'مولد منشورات من Reels',
      description: 'حوّل أي Reel إلى منشورات تفاعلية جاهزة للنشر في مجموعات فيسبوك.',
      href: '/tools/reels-generator',
      color: 'from-indigo-500 to-purple-600',
      badge: 'متاح',
      badgeColor: 'from-green-400 to-emerald-500',
    },
    
    {
      icon: '✍️',
      title: 'كاتب المحتوى',
      description: 'توليد نصوص ومقالات احترافية بالذكاء الاصطناعي في ثوانٍ.',
      href: '#',
      color: 'from-emerald-500 to-teal-600',
      badge: 'قريباً',
      badgeColor: 'from-amber-400 to-orange-500',
    },
    {
      icon: '📊',
      title: 'محلل الهاشتاغات',
      description: 'اختر أفضل الهاشتاغات لمنشوراتك بناءً على تحليل ذكي.',
      href: '#',
      color: 'from-amber-500 to-orange-600',
      badge: 'قريباً',
      badgeColor: 'from-amber-400 to-orange-500',
    },
  ];

    return (
    <Layout
      title="آخر الأخبار + أدوات ذكية"
      description="نبض التقنية - آخر أخبار التكنولوجيا والذكاء الاصطناعي + أدوات ذكية مجانية لإنشاء المحتوى العربي"
    >
      <NewsTicker />

      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* ===== Hero Section ===== */}
        <section className="relative mb-12 rounded-3xl overflow-hidden shadow-2xl min-h-[500px] md:min-h-[600px]">
          <img
            src="/images/hero.jpg"
            alt="نبض التقنية"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.style.background = 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)';
            }}
          />

          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(49, 46, 129, 0.88) 0%, rgba(88, 28, 135, 0.82) 50%, rgba(131, 24, 67, 0.88) 100%)'
            }}
          ></div>

          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-300/10 rounded-full filter blur-3xl"></div>

          <div className="relative h-full flex items-center justify-center px-6 py-16 md:py-24">
            <div className="text-center text-white max-w-4xl mx-auto">

              {/* الشعار */}
<div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/30 shadow-lg mb-8 transition-all duration-300 hover:bg-white/20" >
  <img 
   src="/images/nabd.jpg"
    alt="شعار نبض التقنية" 
    className="w-12 h-12 rounded-full object-cover border-2 border-purple-400/50 shadow-md "
  />
  <span className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent tracking-wide drop-shadow-md">
    نبض التقنية
  </span>
</div>

              {/* العنوان الرئيسي */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight drop-shadow-2xl">
                كل ما يخص التقنية في مكان واحد
              </h1>

              {/* الوصف */}
              <p className="text-lg md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed mb-10 font-medium drop-shadow-lg">
                تابع آخر أخبار التكنولوجيا والذكاء الاصطناعي
                <br />
                واستخدم أدواتنا المجانية لإنشاء محتوى احترافي
              </p>

              {/* الأزرار */}
              <div className="flex flex-wrap gap-4 justify-center mb-10">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 px-10 py-5 rounded-full font-extrabold text-lg shadow-2xl hover:scale-110 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #10b981, #059669)',
                    color: '#ffffff',
                    boxShadow: '0 15px 40px rgba(16, 185, 129, 0.6)',
                  }}
                >
                  <span>📰</span>
                  <span>تصفح الأخبار</span>
                </Link>

                <Link
                  href="/tools"
                  className="inline-flex items-center gap-2 px-10 py-5 rounded-full font-extrabold text-lg shadow-2xl hover:scale-110 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                    color: '#1f2937',
                    boxShadow: '0 15px 40px rgba(251, 191, 36, 0.6)',
                  }}
                >
                  <span>🛠️</span>
                  <span>جرّب الأدوات</span>
                </Link>
              </div>

              {/* مؤشرات الثقة */}
              <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-white/90">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-green-400 text-lg">✓</span>
                  <span>مجاني 100%</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-green-400 text-lg">✓</span>
                  <span>بدون تسجيل</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-green-400 text-lg">✓</span>
                  <span>محتوى عربي</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===== AdSense Banner Top ===== */}
        <div className="mb-10 text-center bg-white/60 backdrop-blur-sm border border-dashed border-gray-300 rounded-2xl p-6">
          <p className="text-xs text-gray-400">مساحة إعلانية - Google AdSense</p>
        </div>

        {/* ===== قسم الأخبار + Sidebar ===== */}
<section className="mb-16">
  <div className="flex items-center justify-between mb-8">
    <div className="flex items-center gap-3">
      <span className="w-1.5 h-8 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
      <h2 className="text-3xl md:text-4xl font-black text-gray-800">
        📰 آخر الأخبار
      </h2>
    </div>
    <Link
      href="/blog"
      className="text-indigo-600 font-bold hover:gap-3 gap-2 inline-flex items-center transition-all"
    >
      <span>عرض الكل</span>
      <span>←</span>
    </Link>
  </div>



  {/* Grid: Articles + Sidebar */}
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

    {/* ===== Articles Column ===== */}
    <div className="lg:col-span-2 space-y-6">
  {latestArticles.map((article, index) => (
    <div key={article.slug}>
      {/* المقال */}
      <Link
        href={`/blog/${article.slug}`}
        className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col md:flex-row hover:-translate-y-1"
      >
<div className="relative md:w-2/5 h-56 md:h-auto overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100 flex-shrink-0">          <img
            src={article.image}
            alt={article.title}
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <span className="absolute top-3 right-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
            {article.category}
          </span>
        </div>

        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition line-clamp-2 leading-snug">
            {article.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3 flex-1">
            {article.excerpt}
          </p>
          <div className="flex items-center justify-between text-xs text-gray-400 border-t pt-3">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">📅 {article.date}</span>
              <span className="flex items-center gap-1">⏱️ {article.readTime}</span>
            </div>
            <span className="flex items-center gap-1 text-indigo-600 font-bold">
              اقرأ المزيد ←
            </span>
          </div>
        </div>
      </Link>

    

      {/* Newsletter بعد المقال الأول */}
      
       
      
    </div>
  ))}
</div>

    {/* ===== Sidebar ===== */}
    <div className="lg:col-span-1">
      <Sidebar />
    </div>

  </div>
</section>

        {/* ===== AdSense Banner Middle ===== */}
        <div className="mb-10 text-center bg-white/60 backdrop-blur-sm border border-dashed border-gray-300 rounded-2xl p-6">
          <p className="text-xs text-gray-400">مساحة إعلانية - Google AdSense</p>
        </div>



        {/* ===== قسم الأدوات ===== */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-8 bg-gradient-to-b from-pink-500 to-purple-600 rounded-full"></span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-800">
                🛠️ أدواتنا الذكية
              </h2>
            </div>
            <Link
              href="/tools"
              className="text-pink-600 font-bold hover:gap-3 gap-2 inline-flex items-center transition-all"
            >
              <span>كل الأدوات</span>
              <span>←</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool) => (
              <Link
                key={tool.title}
                href={tool.href}
                className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2 flex flex-col"
              >
                {tool.badge && (
                  <span className={`absolute top-3 left-3 z-10 bg-gradient-to-r ${tool.badgeColor} text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md`}>
                    {tool.badge}
                  </span>
                )}

                <div className={`relative h-40 bg-gradient-to-br ${tool.color} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full filter blur-2xl"></div>
                  </div>
                  <span className="relative text-7xl drop-shadow-2xl group-hover:scale-125 transition-transform duration-500">
                    {tool.icon}
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition">
                    {tool.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">
                    {tool.description}
                  </p>
                  <div className="mt-4 flex items-center text-indigo-600 font-bold text-sm">
                    <span>استخدم الآن</span>
                    <span className="mr-1 group-hover:translate-x-[-4px] transition-transform">←</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ===== AdSense Banner ===== */}
        <div className="mb-10 text-center bg-white/60 backdrop-blur-sm border border-dashed border-gray-300 rounded-2xl p-6">
          <p className="text-xs text-gray-400">مساحة إعلانية - Google AdSense</p>
        </div>

        {/* ===== قسم لماذا نحن ===== */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-3">
              ✨ لماذا نبض التقنية؟
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              منصة عربية شاملة تجمع الأخبار والأدوات في مكان واحد
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center border border-gray-100 hover:-translate-y-1">
              <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform">
                ✅
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                محتوى عربي 100%
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                مقالات وأدوات مصممة خصيصاً للمحتوى العربي بجودة عالية.
              </p>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center border border-gray-100 hover:-translate-y-1">
              <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform">
                🆓
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                أدوات مجانية بدون تسجيل
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                استخدم كل الأدوات مجاناً، بدون حساب ولا بطاقة بنكية.
              </p>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center border border-gray-100 hover:-translate-y-1">
              <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform">
                🔄
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                تحديث يومي
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                محتوى جديد وأخبار محدّثة يومياً لتبقى على اطلاع دائم.
              </p>
            </div>
          </div>
        </section>

        {/* ===== AdSense Banner Bottom ===== */}
        <div className="my-10 text-center bg-white/60 backdrop-blur-sm border border-dashed border-gray-300 rounded-2xl p-6">
          <p className="text-xs text-gray-400">مساحة إعلانية - Google AdSense</p>
        </div>

        {/* ===== CTA النهائي ===== */}
        
<section className="relative rounded-3xl overflow-hidden shadow-2xl mb-12 min-h-[350px]">

  {/* صورة الخلفية */}
  <img
    src="/images/cta.jpg"
    alt="ابدأ رحلتك التقنية"
    className="absolute inset-0 w-full h-full object-cover"
    loading="lazy"
    onError={(e) => {
      e.target.style.display = 'none';
      e.target.parentElement.style.background = 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 50%)';
    }}
  />

  {/* طبقة داكنة متعددة الألوان */}
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

  {/* شبكة نقاط خفيفة */}
  <div
    className="absolute inset-0 opacity-15"
    style={{
      backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)',
      backgroundSize: '30px 30px'
    }}
  ></div>

  {/* توهجات */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300/20 rounded-full filter blur-3xl"></div>
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-400/20 rounded-full filter blur-3xl"></div>

  {/* المحتوى */}
  <div className="relative px-8 py-16 text-center text-white">
    <div className="text-6xl mb-4 drop-shadow-2xl">🚀</div>

    <h3 className="text-3xl md:text-4xl font-black mb-4 drop-shadow-lg">
      ابدأ رحلتك التقنية الآن
    </h3>

    <p className="text-white/95 text-lg mb-8 max-w-xl mx-auto drop-shadow-lg">
      تصفح الأخبار، جرّب الأدوات، وطوّر مهاراتك التقنية مع نبض التقنية.
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

      <Link
        href="/tools"
        className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-extrabold text-lg shadow-2xl hover:scale-110 transition-all duration-300"
        style={{
          background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
          color: '#1f2937',
          boxShadow: '0 15px 40px rgba(251, 191, 36, 0.6)',
        }}
      >
        <span>🛠️</span>
        <span>جرّب الأدوات</span>
      </Link>
    </div>
  </div>
</section>

      </div>
    </Layout>
  );
}