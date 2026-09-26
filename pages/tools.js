import Link from 'next/link';
import Layout from '../components/Layout';

export default function Tools() {
  const tools = [
    {
      icon: '🎬',
      title: 'مولد منشورات Reels',
      description: 'حوّل أي Reel أو فيديو قصير إلى منشورات نصية تفاعلية جاهزة للنشر في مجموعات فيسبوك.',
      href: '/tools/reels-generator',
      color: 'from-indigo-500 to-purple-600',
      badge: 'متاح',
      badgeColor: 'from-green-400 to-emerald-500',
      features: ['3-10 منشورات متنوعة', 'دعم كامل للعربية', 'مجاني 100%'],
    },
    
    {
      icon: '✍️',
      title: 'كاتب المحتوى',
      description: 'توليد نصوص ومقالات احترافية بالذكاء الاصطناعي في ثوانٍ.',
      href: '/tools/content-writer',
      color: 'from-emerald-500 to-teal-600',
      badge: 'قريباً',
      badgeColor: 'from-amber-400 to-orange-500',
      features: ['مقالات كاملة', 'نبرات متعددة', 'SEO محسّن'],
    },
    {
      icon: '📊',
      title: 'محلل الهاشتاغات',
      description: 'اختر أفضل الهاشتاغات لمنشوراتك بناءً على تحليل ذكي.',
      href: '/tools/hashtag-analyzer',
      color: 'from-amber-500 to-orange-600',
      badge: 'قريباً',
      badgeColor: 'from-amber-400 to-orange-500',
      features: ['تحليل فوري', 'اقتراحات ذكية', 'مقارنة أداء'],
    },
  ];

  return (
    <Layout title="الأدوات" description="مجموعة أدوات ذكية مجانية لإنشاء المحتوى العربي">
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Hero */}
        {/* ===== Hero Section بصورة خلفية ===== */}
<section className="relative mb-12 rounded-3xl overflow-hidden shadow-2xl min-h-[400px] md:min-h-[450px]">

  {/* صورة الخلفية */}
  <img
    src="/images/tools-hero.jpg"
    alt="أدوات نبض التقنية"
    className="absolute inset-0 w-full h-full object-cover scale-105"
    loading="eager"
    onError={(e) => {
      e.target.style.display = 'none';
      e.target.parentElement.style.background =
        'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)';
    }}
  />

  {/* طبقة داكنة متعددة الألوان */}
  <div
    className="absolute inset-0"
    style={{
      background: `
        radial-gradient(circle at 25% 35%, rgba(99, 102, 241, 0.6) 0%, transparent 50%),
        radial-gradient(circle at 75% 65%, rgba(236, 72, 153, 0.5) 0%, transparent 50%),
        linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(49, 46, 129, 0.85) 50%, rgba(88, 28, 135, 0.9) 100%)
      `
    }}
  ></div>

  {/* شبكة نقاط خفيفة */}
  <div
    className="absolute inset-0 opacity-15"
    style={{
      backgroundImage: 'radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)',
      backgroundSize: '30px 30px'
    }}
  ></div>

  {/* توهجات */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500/40 rounded-full filter blur-3xl"></div>
  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-500/40 rounded-full filter blur-3xl"></div>

  {/* المحتوى */}
  <div className="relative h-full flex items-center justify-center px-6 py-16 md:py-20">
    <div className="text-center text-white max-w-3xl mx-auto">

      {/* الشارة */}
      <div className="inline-block bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-bold mb-6 border border-white/40 shadow-lg">
        🛠️ أدوات مجانية 100%
      </div>

      {/* العنوان */}
      <h1 className="text-4xl md:text-6xl font-black mb-6 drop-shadow-2xl leading-tight">
        أدوات نبض التقنية
      </h1>

      {/* الوصف */}
      <p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-lg mb-8">
        مجموعة أدوات ذكية لإنشاء محتوى عربي احترافي بضغطة زر.
      </p>

      {/* مؤشرات */}
      <div className="flex flex-wrap justify-center gap-4 text-sm">
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
          <span className="text-green-400 text-lg">✓</span>
          <span>مجاني 100%</span>
        </div>
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
          <span className="text-green-400 text-lg">✓</span>
          <span>بدون تسجيل</span>
        </div>
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
          <span className="text-green-400 text-lg">✓</span>
          <span>محتوى عربي</span>
        </div>
      </div>

    </div>
  </div>
</section>

        {/* الأدوات */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.title}
              href={tool.href}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2 flex flex-col"
            >
              <div className={`relative h-48 bg-gradient-to-br ${tool.color} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full filter blur-3xl"></div>
                </div>
                <span className="relative text-8xl drop-shadow-2xl group-hover:scale-125 transition-transform duration-500">
                  {tool.icon}
                </span>
                <span className={`absolute top-4 left-4 bg-gradient-to-r ${tool.badgeColor} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md`}>
                  {tool.badge}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition">
                  {tool.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-5 flex-1">
                  {tool.description}
                </p>

                <ul className="space-y-2 mb-5">
                  {tool.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-green-500 font-bold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-indigo-600 font-bold group-hover:gap-3 gap-2 inline-flex items-center transition-all">
                    استخدم الآن
                    <span className="group-hover:translate-x-[-4px] transition-transform">←</span>
                  </span>
                  <span className="text-xs text-gray-400">مجاني</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* AdSense */}
        <div className="my-10 text-center bg-white/60 backdrop-blur-sm border border-dashed border-gray-300 rounded-2xl p-6">
          <p className="text-xs text-gray-400">مساحة إعلانية - Google AdSense</p>
        </div>

        {/* CTA */}
        <section className="relative rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"></div>
          <div className="relative px-8 py-12 text-center text-white">
            <div className="text-5xl mb-4">💡</div>
            <h3 className="text-2xl md:text-3xl font-black mb-3">
              هل لديك اقتراح لأداة جديدة؟
            </h3>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              نسعد بأفكارك. تواصل معنا وسنعمل على تطوير الأداة.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-3 rounded-full font-bold hover:scale-105 transition shadow-lg"
            >
              📧 تواصل معنا
            </Link>
          </div>
        </section>

      </div>
    </Layout>
  );
}