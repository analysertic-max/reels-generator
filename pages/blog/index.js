import Layout from '../../components/Layout';
import Link from 'next/link';
import { blogArticlesList } from '../../lib/blogData';

export default function BlogIndex() {
  return (
    <Layout title="المدونة" description="مقالات ونصائح حول التسويق عبر فيسبوك والذكاء الاصطناعي">
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* ===== Hero Section بصورة خلفية ===== */}
        <section className="relative mb-12 rounded-3xl overflow-hidden shadow-2xl min-h-[400px] md:min-h-[450px]">
          {/* صورة الخلفية */}
          <img
            src="/images/hero2.jpg"
            alt="مدونة Reels Generator"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.style.background = 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)';
            }}
          />

          {/* طبقة داكنة لتحسين قراءة النص */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(49, 46, 129, 0.85) 0%, rgba(88, 28, 135, 0.80) 50%, rgba(131, 24, 67, 0.85) 100%)'
            }}
          ></div>

          {/* زخارف دائرية */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-300/20 rounded-full filter blur-3xl"></div>

          {/* المحتوى */}
          <div className="relative h-full flex items-center justify-center px-6 py-16 md:py-20">
            <div className="text-center text-white max-w-3xl mx-auto">

              {/* شارة عدد المقالات */}
              <div className="inline-block bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-bold mb-6 border border-white/40 shadow-lg">
                📚 {blogArticlesList.length} مقال منشور
              </div>

              {/* العنوان */}
              <h1 className="text-4xl md:text-6xl font-black mb-6 drop-shadow-2xl leading-tight">
                📖  مدونة نبض التقنية 
              </h1>

              {/* الوصف */}
              <p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-lg mb-8">
                آخر أخبار التكنولوجيا والذكاء الاصطناعي، وأدوات صناعة المحتوى، وكل ما يهم المبدع العربي في مكان واحد.
              </p>

              {/* مؤشرات */}
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-green-400">✓</span>
                  <span>محتوى أصلي</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-green-400">✓</span>
                  <span>نصائح عملية</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-green-400">✓</span>
                  <span>تحديث أسبوعي</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===== AdSense Banner ===== */}
        <div className="mb-8 text-center bg-white/60 backdrop-blur-sm border border-dashed border-gray-300 rounded-2xl p-6">
          <p className="text-xs text-gray-400">مساحة إعلانية - Google AdSense</p>
        </div>

        {/* ===== Articles Grid ===== */}
        {/* ===== Articles Grid ===== */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {blogArticlesList.map((article) => (
    <Link
      key={article.slug}
      href={`/blog/${article.slug}`}
      className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2 flex flex-col"
    >
      {/* صورة المقال - نسبة أبعاد موحدة */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100">
        <img
          src={article.image}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        {/* تدرج سفلي */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        {/* شارة الفئة */}
        <span className="absolute top-3 right-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
          {article.category}
        </span>
        {/* وقت القراءة أسفل الصورة */}
        <span className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full">
          ⏱️ {article.readTime}
        </span>
      </div>

      {/* المحتوى */}
      <div className="p-5 flex flex-col flex-1">
        <h2 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition line-clamp-2 leading-snug min-h-[56px]">
          {article.title}
        </h2>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3 flex-1">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-400 border-t pt-3">
          <span className="flex items-center gap-1">📅 {article.date}</span>
          <span className="flex items-center gap-1 text-indigo-600 font-bold group-hover:gap-2 transition-all">
            اقرأ المزيد
            <span className="group-hover:translate-x-[-4px] transition-transform">←</span>
          </span>
        </div>
      </div>
    </Link>
  ))}
</div>

        {/* ===== AdSense Banner Middle ===== */}
        <div className="my-10 text-center bg-white/60 backdrop-blur-sm border border-dashed border-gray-300 rounded-2xl p-6">
          <p className="text-xs text-gray-400">مساحة إعلانية - Google AdSense</p>
        </div>

        {/* ===== Newsletter ===== */}
<section className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[350px] md:min-h-[400px]">
  {/* صورة الخلفية */}
  <img
    src="/images/newsletter-bg.jpg"
    alt="اشترك في النشرة البريدية"
    className="absolute inset-0 w-full h-full object-cover"
    loading="lazy"
    onError={(e) => {
      e.target.style.display = 'none';
      e.target.parentElement.style.background = 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)';
    }}
  />

  {/* طبقة داكنة لتحسين قراءة النص */}
  <div
    className="absolute inset-0"
    style={{
      background: 'linear-gradient(135deg, rgba(49, 46, 129, 0.88) 30%, rgba(88, 28, 135, 0.82) 40%, rgba(131, 24, 67, 0.88) 50%)'
    }}
  ></div>

  {/* زخارف دائرية */}
  <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full filter blur-3xl"></div>
  <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-300/20 rounded-full filter blur-3xl"></div>

  {/* المحتوى */}
  <div className="relative h-full flex items-center justify-center px-6 py-12 md:py-16">
    <div className="text-center text-white max-w-2xl mx-auto">

      {/* أيقونة */}
      <div className="text-5xl md:text-6xl mb-4 drop-shadow-2xl">💌</div>

      {/* العنوان */}
      <h3 className="text-3xl md:text-4xl font-black mb-4 drop-shadow-lg">
        اشترك في النشرة البريدية
      </h3>

      {/* الوصف */}
      <p className="text-white/95 mb-8 leading-relaxed text-base md:text-lg font-medium drop-shadow-lg">
        مقالات جديدة ونصائح حصرية كل أسبوع في بريدك.
      </p>

      {/* النموذج */}
      <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          placeholder="بريدك الإلكتروني"
          className="flex-1 px-5 py-3.5 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-white/30 shadow-lg"
        />
        <button
          type="submit"
          className="bg-white text-indigo-600 px-8 py-3.5 rounded-full font-bold hover:scale-105 transition shadow-lg"
        >
          اشترك الآن
        </button>
      </form>

      {/* مؤشرات الثقة */}
      <div className="flex flex-wrap justify-center gap-3 mt-6 text-xs text-white/80">
        <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
          <span className="text-green-400">✓</span>
          <span>مجاني تماماً</span>
        </div>
        <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
          <span className="text-green-400">✓</span>
          <span>بدون إزعاج</span>
        </div>
        <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
          <span className="text-green-400">✓</span>
          <span>إلغاء في أي وقت</span>
        </div>
      </div>

    </div>
  </div>
</section>

      </div>
    </Layout>
  );
}