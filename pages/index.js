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
                كل ما يخص التقنية في مكان واحد
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

        
        {/* ===== قسم لماذا نبض التقنية - مُحسّن SEO ===== */}
<section className="mb-16">
  <div className="text-center mb-10">
    <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-3">
      لماذا تختار نبض التقنية لمتابعة أخبار التكنولوجيا؟
    </h2>
    <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
      منصة عربية متخصصة في تغطية آخر مستجدات التقنية والذكاء الاصطناعي والهواتف الذكية،
      بمحتوى أصلي موثوق يخدم القارئ العربي.
    </p>
  </div>

  {/* بطاقات الميزات */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:-translate-y-1">
      <div className="w-20 h-20 mb-5 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform">
        ✅
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">
        محتوى عربي أصلي 100%
      </h3>
      <p className="text-gray-600 leading-relaxed text-sm">
        كل مقال يُكتب بعناية من فريقنا المختص، بمعلومات دقيقة من مصادر موثوقة،
        بلغة عربية واضحة تناسب الجميع.
      </p>
    </div>

    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:-translate-y-1">
      <div className="w-20 h-20 mb-5 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform">
        📱
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">
        تغطية شاملة ومتنوعة
      </h3>
      <p className="text-gray-600 leading-relaxed text-sm">
        من الهواتف الذكية إلى التطبيقات والبرامج، ومن الذكاء الاصطناعي إلى شروحات "كيف"،
        تجد كل ما يهمك في مكان واحد.
      </p>
    </div>

    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:-translate-y-1">
      <div className="w-20 h-20 mb-5 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform">
        🔄
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">
        تحديث يومي مستمر
      </h3>
      <p className="text-gray-600 leading-relaxed text-sm">
        نواكب آخر المستجدات التقنية يومياً، لتصلك الأخبار لحظة بلحظة وتبقى دائماً
        على اطلاع بما يحدث في عالم التكنولوجيا.
      </p>
    </div>
  </div>

  {/* ===== فقرة SEO غنية ===== */}
  <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-gray-100">
    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-5">

      <p className="text-base md:text-lg">
        <strong>نبض التقنية</strong> هي منصة عربية متخصصة في نشر أخبار التكنولوجيا الحديثة
        ومراجعات الأجهزة الإلكترونية، وتهدف إلى تبسيط المحتوى التقني للقارئ العربي
        بمختلف مستوياته. نغطي مجموعة واسعة من المواضيع التي تشمل:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="flex items-start gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border-r-4 border-blue-500">
          <span className="text-2xl">💻</span>
          <div>
            <strong className="text-gray-800">أخبار التكنولوجيا:</strong>
            <span className="text-gray-600 text-sm block mt-1">
              آخر تطورات الشركات الكبرى مثل Apple و Samsung و Google.
            </span>
          </div>
        </div>

        <div className="flex items-start gap-3 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-4 border-r-4 border-cyan-500">
          <span className="text-2xl">📱</span>
          <div>
            <strong className="text-gray-800">الهواتف الذكية:</strong>
            <span className="text-gray-600 text-sm block mt-1">
              مراجعات ومقارنات لأحدث الهواتف مع الأسعار والمواصفات.
            </span>
          </div>
        </div>

        <div className="flex items-start gap-3 bg-gradient-to-r from-purple-50 to-fuchsia-50 rounded-xl p-4 border-r-4 border-purple-500">
          <span className="text-2xl">🤖</span>
          <div>
            <strong className="text-gray-800">الذكاء الاصطناعي:</strong>
            <span className="text-gray-600 text-sm block mt-1">
              شرح أدوات AI وكيفية استخدامها في الحياة اليومية والعمل.
            </span>
          </div>
        </div>

        <div className="flex items-start gap-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-4 border-r-4 border-emerald-500">
          <span className="text-2xl">🛠️</span>
          <div>
            <strong className="text-gray-800">شروحات "كيف":</strong>
            <span className="text-gray-600 text-sm block mt-1">
              دروس عملية خطوة بخطوة لحل المشاكل التقنية.
            </span>
          </div>
        </div>

        <div className="flex items-start gap-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 border-r-4 border-amber-500">
          <span className="text-2xl">💾</span>
          <div>
            <strong className="text-gray-800">التطبيقات والبرامج:</strong>
            <span className="text-gray-600 text-sm block mt-1">
              أفضل التطبيقات المجانية والمدفوعة لجميع الأجهزة.
            </span>
          </div>
        </div>

        <div className="flex items-start gap-3 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-4 border-r-4 border-pink-500">
          <span className="text-2xl">📈</span>
          <div>
            <strong className="text-gray-800">نصائح التسويق الرقمي:</strong>
            <span className="text-gray-600 text-sm block mt-1">
              استراتيجيات فعّالة لصناع المحتوى وأصحاب المشاريع.
            </span>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-800 mt-6">
        لماذا يثق القراء العرب في نبض التقنية؟
      </h3>

      <ul className="space-y-3 mr-6">
        <li className="flex items-start gap-2">
          <span className="text-green-500 font-bold mt-1">✓</span>
          <span>
            <strong>محتوى أصلي 100%:</strong> كل مقال مكتوب حصرياً لموقعنا،
            وليس منقولاً أو مُترجَماً آلياً.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-green-500 font-bold mt-1">✓</span>
          <span>
            <strong>لغة عربية واضحة:</strong> نشرح المواضيع التقنية بلغة
            يفهمها المبتدئ، دون المساس بدقة المعلومات.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-green-500 font-bold mt-1">✓</span>
          <span>
            <strong>محتوى عملي:</strong> لا نكتفي بالأخبار، بل نقدم نصائح
            قابلة للتطبيق فوراً.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-green-500 font-bold mt-1">✓</span>
          <span>
            <strong>مجاني بالكامل:</strong> كل المحتوى متاح مجاناً، دون
            تسجيل أو اشتراكات إجبارية.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-green-500 font-bold mt-1">✓</span>
          <span>
            <strong>تحديث يومي:</strong> ننشر مقالات جديدة بشكل منتظم
            لتبقى على اطلاع دائم.
          </span>
        </li>
      </ul>

      <h3 className="text-xl font-bold text-gray-800 mt-6">
        لمن هذا الموقع؟
      </h3>

      <p>
        <strong>نبض التقنية</strong> موجّه لجميع القراء العرب المهتمين بعالم التكنولوجيا، سواء كنت:
      </p>

      <ul className="list-disc mr-6 space-y-2">
        <li>مستخدم عادي يريد فهم الأجهزة التقنية قبل الشراء.</li>
        <li>طالب أو متعلم يبحث عن شروحات مبسطة.</li>
        <li>صاحب مشروع يريد متابعة آخر أخبار التقنية.</li>
        <li>صانع محتوى يبحث عن أفكار ومعلومات موثوقة.</li>
        <li>مهتم بالذكاء الاصطناعي وأدواته الحديثة.</li>
      </ul>

      <h3 className="text-xl font-bold text-gray-800 mt-6">
        التزامنا تجاه القارئ العربي
      </h3>

      <p>
        نلتزم في <strong>نبض التقنية</strong> بتقديم محتوى تقني عربي بمعايير
        عالمية، يجمع بين الدقة والوضوح والفائدة العملية. هدفنا أن نصبح
        <strong> المرجع العربي الأول</strong> في تبسيط التقنية، وأن نساهم
        في سد الفجوة بين المحتوى التقني الأجنبي والقارئ العربي.
      </p>

      <p className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-5 border-r-4 border-indigo-500 font-medium">
        📧 <strong>هل لديك سؤال أو اقتراح؟</strong> نرحب بتواصلك معنا عبر
        صفحة <a href="/contact" className="text-indigo-600 hover:underline font-bold">اتصل بنا</a>.
        رأيك يهمنا لتطوير المحتوى وتحسين تجربتك.
      </p>

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