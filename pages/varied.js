import { useEffect } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import NewsTicker from '../components/NewsTicker';
import { blogArticlesList } from '../lib/blogData';

// التصنيفات الأساسية (يجب استبعادها)
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

// 🧹 دالة تنظيف النص من المسافات والأحرف المخفية
const cleanCategory = (str) => {
  if (!str) return '';
  return str
    .replace(/[\u200B-\u200D\uFEFF]/g, '') // إزالة المسافات الصفرية
    .replace(/\s+/g, ' ')                  // توحيد المسافات
    .trim();                               // إزالة المسافات الطرفية
};

export default function Varied() {
  // ترتيب المقالات حسب التاريخ
  const sortedArticles = [...blogArticlesList].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // 🎯 فلترة قوية
  const variedArticles = sortedArticles.filter((article) => {
    const cat = cleanCategory(article.category).toLowerCase();
    return !MAIN_CATEGORIES.some(
      (main) => cat === cleanCategory(main).toLowerCase()
    );
  });

  // 📊 تسجيل للتشخيص في console
  useEffect(() => {
    console.log('=== تشخيص صفحة مواضيع متنوعة ===');
    console.log('إجمالي المقالات:', blogArticlesList.length);
    console.log('المقالات المتنوعة:', variedArticles.length);
    console.log('--- تصنيفات المقالات المستبعدة ---');
    console.log(MAIN_CATEGORIES);
    console.log('--- تصنيفات المقالات المتنوعة ---');
    variedArticles.forEach((a) => {
      console.log(`"${a.category}" → "${cleanCategory(a.category)}"`);
    });
  }, [variedArticles]);

  // التصنيفات الفريدة
  const categories = [...new Set(variedArticles.map((a) => cleanCategory(a.category)))];

  return (
    <Layout
      title="مواضيع متنوعة"
      description="مقالات متنوعة في السفر، الصحة، المال، ريادة الأعمال، والتطوير الذاتي."
    >
      <NewsTicker />

      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* ===== Hero مصغّر وأنيق ===== */}
        <section className="mb-8 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-r from-pink-600 via-rose-600 to-orange-500">
          <div className="px-6 py-6 md:py-8 flex items-center justify-between flex-wrap gap-3">
            <div className="text-white">
              <h1 className="text-xl md:text-2xl font-black drop-shadow mb-1 flex items-center gap-2">
                🎯 مواضيع متنوعة
              </h1>
              <p className="text-white/90 text-xs md:text-sm">
                مقالات في مجالات مختلفة — سفر، صحة، مال، أعمال
              </p>
            </div>
            <span className="bg-white/20 backdrop-blur-md text-white text-xs md:text-sm font-bold px-3 py-1.5 rounded-full border border-white/30">
              {variedArticles.length} مقال
            </span>
          </div>
        </section>

     

        {/* ===== Grid + Sidebar ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2">
            {variedArticles.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <div className="text-6xl mb-4">📭</div>
                <p className="text-gray-600">لا توجد مقالات متنوعة بعد.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {variedArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-1 flex flex-col"
                  >
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
                      <img
                        src={article.image}
                        alt={`${article.title} - ${article.category} - نبض التقنية`}
                        title={article.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <span className="absolute top-3 right-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                        {cleanCategory(article.category)}
                      </span>
                    </div>

                    <div className="p-5 flex flex-col flex-1">
                      <h2 className="text-base font-bold text-gray-800 group-hover:text-pink-600 transition line-clamp-2 leading-snug mb-3 min-h-[48px]">
                        {article.title}
                      </h2>
                      <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed mb-4 flex-1">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-400 border-t pt-3">
                        <div className="flex items-center gap-3">
                          <span>📅 {article.date}</span>
                          <span>⏱️ {article.readTime}</span>
                        </div>
                        <span className="text-pink-600 font-bold">اقرأ ←</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            
          </div>

          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>

      </div>
    </Layout>
  );
}