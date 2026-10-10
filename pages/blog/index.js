import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '../../components/Layout';
import Sidebar from '../../components/Sidebar';
import NewsTicker from '../../components/NewsTicker';
import { blogArticlesList } from '../../lib/blogData';

const ARTICLES_PER_PAGE = 9;

export default function BlogIndex() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [searchQuery, setSearchQuery] = useState('');


  // قراءة التصنيف من الـ URL
  // قراءة التصنيف والبحث من الـ URL
useEffect(() => {
  if (router.isReady) {
    if (router.query.category) {
      setSelectedCategory(decodeURIComponent(router.query.category));
    } else {
      setSelectedCategory('الكل');
    }

    if (router.query.search) {
      setSearchQuery(decodeURIComponent(router.query.search));
    } else {
      setSearchQuery('');
    }

    setCurrentPage(1);
  }
}, [router.isReady, router.query.category, router.query.search]);

  // التصنيفات
 const categories = [
  'الكل',
  'تكنولوجيا',
  'هواتف ذكية',
  'تطبيقات وبرامج',
  'كيف',
  'سوشيال ميديا',
  'تسويق',
  'تصميم',
  'ذكاء اصطناعي',
];

  // فلترة حسب التصنيف
  let filtered = selectedCategory === 'الكل'
  ? blogArticlesList
  : blogArticlesList.filter((a) => a.category?.trim() === selectedCategory?.trim());

// فلترة حسب البحث
if (searchQuery.trim()) {
  const query = searchQuery.trim().toLowerCase();
  filtered = filtered.filter(
    (a) =>
      a.title?.toLowerCase().includes(query) ||
      a.excerpt?.toLowerCase().includes(query) ||
      a.content?.toLowerCase().includes(query) ||
      a.category?.toLowerCase().includes(query)
  );
}

  // Pagination
  const totalPages = Math.ceil(filtered.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const currentArticles = filtered.slice(startIndex, startIndex + ARTICLES_PER_PAGE);

      const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
    // العودة لأعلى الصفحة
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (cat === 'الكل') {
      router.push('/blog', undefined, { shallow: true });
    } else {
      router.push(`/blog?category=${encodeURIComponent(cat)}`, undefined, { shallow: true });
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // العودة لأعلى الصفحة
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout title="الأخبار" description="آخر أخبار التكنولوجيا والذكاء الاصطناعي والسوشيال ميديا">
      <NewsTicker />

      <div className="max-w-7xl mx-auto px-4 py-8">

     {/* ===== Hero Section - مصغّر Full Width ===== */}
<section className="relative w-full overflow-hidden shadow-lg min-h-[140px] md:min-h-[170px]">
  
  {/* الصورة الخلفية */}
  <img
    src="/images/blog-hero.jpg"
    alt="مدونة نبض التقنية - آخر الأخبار"
    className="absolute inset-0 w-full h-full object-cover"
    loading="eager"
    onError={(e) => {
      e.target.style.display = 'none';
      e.target.parentElement.style.background = 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)';
    }}
  />

  {/* طبقة داكنة متدرجة */}
  <div
    className="absolute inset-0"
    style={{
      background: 'linear-gradient(135deg, rgba(30, 27, 75, 0.88) 0%, rgba(88, 28, 135, 0.85) 50%, rgba(131, 24, 67, 0.88) 100%)'
    }}
  ></div>

  {/* زخارف خفيفة */}
  <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full filter blur-3xl"></div>
  <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-300/10 rounded-full filter blur-3xl"></div>

  {/* المحتوى */}
  <div className="relative h-full flex items-center justify-center px-6 py-4 md:py-6">
    <div className="text-center text-white max-w-2xl mx-auto">

      {/* شارة صغيرة */}
      <span className="inline-block bg-white/20 backdrop-blur-md text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-full border border-white/30 mb-2">
        📰 {blogArticlesList.length} مقال منشور
      </span>

      {/* العنوان */}
      <h1 className="text-xl md:text-3xl font-black mb-1.5 leading-tight drop-shadow-lg">
        آخر الأخبار
      </h1>

      {/* الوصف */}
      <p className="text-xs md:text-sm text-white/90 max-w-lg mx-auto leading-relaxed">
        تابع آخر أخبار التكنولوجيا، الذكاء الاصطناعي، والسوشيال ميديا
      </p>

    </div>
  </div>
</section>

        {/* ===== نتائج البحث ===== */}
{searchQuery && (
  <div className="mb-6 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-5 flex items-center justify-between">
    <div className="flex items-center gap-3">
      <span className="text-2xl">🔍</span>
      <div>
        <p className="text-sm text-gray-600">نتائج البحث عن:</p>
        <p className="font-bold text-indigo-600 text-lg">"{searchQuery}"</p>
        <p className="text-xs text-gray-500 mt-1">
          {filtered.length} نتيجة {filtered.length === 0 ? '(لا توجد نتائج)' : 'وجدت'}
        </p>
      </div>
    </div>
    <button
      onClick={() => {
        router.push('/blog', undefined, { shallow: true });
        setSearchQuery('');
      }}
      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold transition"
    >
      ✕ إلغاء البحث
    </button>
  </div>
)}

        {/* ===== Category Filter ===== */}
        <div className="mb-8 bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <span className="text-sm font-bold text-gray-600 whitespace-nowrap">تصفية:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ===== Main Grid ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ===== Articles Column ===== */}
          <div className="lg:col-span-2">

            {currentArticles.length === 0 ? (
  <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
    <div className="text-6xl mb-4">{searchQuery ? '🔍' : '📭'}</div>
    <p className="text-gray-600 mb-4">
      {searchQuery
        ? `لا توجد نتائج مطابقة لـ "${searchQuery}"`
        : 'لا توجد مقالات في هذا التصنيف.'}
    </p>
    <button
      onClick={() => {
        handleCategoryChange('الكل');
        if (searchQuery) {
          router.push('/blog', undefined, { shallow: true });
          setSearchQuery('');
        }
      }}
      className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-bold"
    >
      {searchQuery ? 'مسح البحث' : 'عرض كل المقالات'}
    </button>
  </div>
) : (
  
              <div className="space-y-6">
                {currentArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col md:flex-row hover:-translate-y-1"
                  >
                    {/* الصورة */}
                    <div className="relative md:w-2/5 h-48 md:h-auto overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100 flex-shrink-0">
                      <img
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

                    {/* المحتوى */}
                    <div className="p-5 flex flex-col flex-1">
                      <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition line-clamp-2 leading-snug">
                        {article.title}
                      </h2>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3 flex-1">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-600 border-t pt-3">
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
                ))}
              </div>
            )}

            {/* ===== Pagination ===== */}
            {totalPages > 1 && (
              <div className="mt-10 flex items-center justify-center gap-2">
                <button
  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
  disabled={currentPage === 1}
  className="px-4 py-2 rounded-xl bg-white border border-gray-200 text-gray-700 font-bold hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
>
  ← السابق
</button>

{[...Array(totalPages)].map((_, i) => (
  <button
    key={i}
    onClick={() => handlePageChange(i + 1)}
    className={`w-10 h-10 rounded-xl font-bold transition ${
      currentPage === i + 1
        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
        : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
    }`}
  >
    {i + 1}
  </button>
))}

<button
  onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
  disabled={currentPage === totalPages}
  className="px-4 py-2 rounded-xl bg-white border border-gray-200 text-gray-700 font-bold hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
>
  التالي →
</button>
              </div>
            )}

            

          </div>

          {/* ===== Sidebar ===== */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>

        </div>

      </div>
    </Layout>
  );
}