import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '../../components/Layout';
import Sidebar from '../../components/Sidebar';
import NewsTicker from '../../components/NewsTicker';
import { blogArticlesList } from '../../lib/blogData';

const ARTICLES_PER_PAGE = 6;

export default function BlogIndex() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  // قراءة التصنيف من الـ URL
  useEffect(() => {
    if (router.isReady && router.query.category) {
      setSelectedCategory(decodeURIComponent(router.query.category));
      setCurrentPage(1);
    } else if (router.isReady) {
      setSelectedCategory('الكل');
    }
  }, [router.isReady, router.query.category]);

  // التصنيفات
  const categories = ['الكل', 'تكنولوجيا', 'سوشيال ميديا', 'تسويق', 'تصميم', 'ذكاء اصطناعي'];

  // فلترة حسب التصنيف
  const filtered = selectedCategory === 'الكل'
    ? blogArticlesList
    : blogArticlesList.filter((a) => a.category === selectedCategory);

  // Pagination
  const totalPages = Math.ceil(filtered.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const currentArticles = filtered.slice(startIndex, startIndex + ARTICLES_PER_PAGE);

    const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
    // تحديث الـ URL
    if (cat === 'الكل') {
      router.push('/blog', undefined, { shallow: true });
    } else {
      router.push(`/blog?category=${encodeURIComponent(cat)}`, undefined, { shallow: true });
    }
  };

  return (
    <Layout title="الأخبار" description="آخر أخبار التكنولوجيا والذكاء الاصطناعي والسوشيال ميديا">
      <NewsTicker />

      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* ===== Hero Section ===== */}
        <section className="relative mb-8 rounded-3xl overflow-hidden shadow-2xl min-h-[300px]">
          <img
            src="/images/blog-hero.jpg"
            alt="مدونة نبض التقنية"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.style.background = 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/85 via-purple-900/80 to-pink-900/85"></div>

          <div className="relative px-6 py-12 text-center text-white">
            <div className="inline-block bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-bold mb-4 border border-white/40">
              📰 {blogArticlesList.length} مقال منشور
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-3 drop-shadow-2xl">
              آخر الأخبار
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              تابع آخر أخبار التكنولوجيا، الذكاء الاصطناعي، والسوشيال ميديا
            </p>
          </div>
        </section>

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
                <div className="text-6xl mb-4">📭</div>
                <p className="text-gray-600">لا توجد مقالات في هذا التصنيف.</p>
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
                ))}
              </div>
            )}

            {/* ===== Pagination ===== */}
            {totalPages > 1 && (
              <div className="mt-10 flex items-center justify-center gap-2">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-xl bg-white border border-gray-200 text-gray-700 font-bold hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                  ← السابق
                </button>

                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
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
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-xl bg-white border border-gray-200 text-gray-700 font-bold hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                  التالي →
                </button>
              </div>
            )}

            {/* ===== AdSense ===== */}
            <div className="mt-10 text-center bg-white/60 border border-dashed border-gray-300 rounded-2xl p-6">
              <p className="text-xs text-gray-400">مساحة إعلانية - Google AdSense</p>
            </div>

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