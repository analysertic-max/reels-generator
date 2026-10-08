import { useState, useMemo } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { blogArticlesList } from '../lib/blogData';

export default function ArchivePage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = useMemo(() => {
    const cats = new Set(blogArticlesList.map((a) => a.category));
    return ['all', ...Array.from(cats)];
  }, []);

  const sortedArticles = useMemo(() => {
    return [...blogArticlesList].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
  }, []);

  const filteredArticles = useMemo(() => {
    return sortedArticles.filter((article) => {
      const matchCategory =
        selectedCategory === 'all' || article.category === selectedCategory;
      const matchSearch =
        searchQuery === '' ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [sortedArticles, selectedCategory, searchQuery]);

  const groupedByMonth = useMemo(() => {
    const groups = {};
    filteredArticles.forEach((article) => {
      const date = new Date(article.date);
      const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      const monthLabel = date.toLocaleDateString('ar-EG', {
        year: 'numeric',
        month: 'long',
      });
      if (!groups[monthKey]) {
        groups[monthKey] = { label: monthLabel, articles: [] };
      }
      groups[monthKey].articles.push(article);
    });
    return Object.entries(groups).sort((a, b) => b[0].localeCompare(a[0]));
  }, [filteredArticles]);

  return (
    <Layout
      title="الأرشيف الكامل للأخبار | نبض التقنية"
      description="تصفح كل مقالات نبض التقنية مرتبة حسب التاريخ والفئة. أرشيف كامل لمحتوى عربي تقني أصلي."
    >
      <div className="max-w-6xl mx-auto px-4 py-12">

        <div className="text-center mb-10">
          <span className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4">
            📚 الأرشيف
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            أرشيف نبض التقنية
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            كل ما نشرناه، مرتباً حسب التاريخ. {sortedArticles.length} مقالة في انتظارك.
          </p>
        </div>

        <div className="mb-6">
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="ابحث في الأرشيف..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-3 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
              🔍
            </span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-indigo-300 hover:text-indigo-600'
              }`}
            >
              {cat === 'all' ? 'الكل' : cat}
            </button>
          ))}
        </div>

        {filteredArticles.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-600 text-lg">لا توجد مقالات تطابق بحثك.</p>
          </div>
        ) : (
          <div className="space-y-12">
            {groupedByMonth.map(([monthKey, group]) => (
              <div key={monthKey}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-8 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {group.label}
                  </h2>
                  <span className="text-sm text-gray-500 font-medium">
                    ({group.articles.length} مقالة)
                  </span>
                </div>

                <div className="space-y-4">
                  {group.articles.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/blog/${article.slug}`}
                      className="group block bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-gray-100 hover:-translate-y-1"
                    >
                      <div className="flex flex-col md:flex-row gap-4 p-4">
                        <div className="md:w-48 flex-shrink-0 relative aspect-[16/10] md:aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                            loading="lazy"
                          />
                        </div>

                        <div className="flex-1 flex flex-col justify-center">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                              {article.category}
                            </span>
                            <span className="text-xs text-gray-500 flex items-center gap-1">
                              📅 {article.date}
                            </span>
                            <span className="text-xs text-gray-500 flex items-center gap-1">
                              ⏱️ {article.readTime}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition mb-2 line-clamp-2">
                            {article.title}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                            {article.excerpt}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition"
          >
            <span>تصفح كل المقالات</span>
            <span>←</span>
          </Link>
        </div>
      </div>
    </Layout>
  );
}