import { useState } from 'react';
import Link from 'next/link';
import { blogArticlesList } from '../lib/blogData';

export default function TrendingTabs() {
  const [activeTab, setActiveTab] = useState('latest');

  // ترتيب المقالات حسب التاريخ
  const sortedByDate = [...blogArticlesList].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const tabs = [
    {
      id: 'latest',
      label: 'أحدث الأخبار',
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3.5 2" />
        </svg>
      ),
      articles: sortedByDate.slice(0, 6),
    },
    {
      id: 'popular',
      label: 'الأكثر قراءة',
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 12s4-6.5 10-6.5S22 12 22 12s-4 6.5-10 6.5S2 12 2 12z" />
          <circle cx="12" cy="12" r="2.6" />
        </svg>
      ),
      articles: sortedByDate.slice(2, 8), // ترتيب وهمي
    },
    {
      id: 'hot24',
      label: 'الأسخن 24 ساعة',
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.5 2c1.3 3-1.7 4.4-1.7 7.3a3.6 3.6 0 007.2 0c0-1.8-.8-2.7-.8-2.7s1.8 1 1.8 4.6a6.5 6.5 0 11-13 0c0-4.7 3.7-6.5 3.7-6.5s-.7 2.6.9 2.6c1.1 0 1.9-.9 1.9-5.3z" />
        </svg>
      ),
      articles: sortedByDate.slice(1, 7),
    },
    {
      id: 'hotWeek',
      label: 'الأسخن هذا الأسبوع',
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.5 2c1.3 3-1.7 4.4-1.7 7.3a3.6 3.6 0 007.2 0c0-1.8-.8-2.7-.8-2.7s1.8 1 1.8 4.6a6.5 6.5 0 11-13 0c0-4.7 3.7-6.5 3.7-6.5s-.7 2.6.9 2.6c1.1 0 1.9-.9 1.9-5.3z" />
        </svg>
      ),
      articles: sortedByDate.slice(3, 9),
    },
  ];

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 md:p-6 border border-gray-100">
      {/* التبويبات */}
      <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-thin">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* المقالات */}
      <div className="space-y-3 mt-2">
        {currentTab.articles.map((article, i) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="group flex items-center gap-4 p-2 rounded-xl hover:bg-gray-50 transition"
          >
            {/* الصورة + الرقم */}
            <div className="relative w-24 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <span className="absolute top-1 right-1 w-6 h-6 bg-gradient-to-br from-indigo-600 to-purple-600 text-white text-xs font-black flex items-center justify-center rounded-full shadow-lg">
                {i + 1}
              </span>
            </div>

            {/* النص */}
            <div className="flex-1 min-w-0">
              <h3 className="text-sm md:text-base font-bold text-gray-800 group-hover:text-indigo-600 transition line-clamp-2 leading-snug mb-1">
                {article.title}
              </h3>
              <div className="flex items-center gap-3 text-xs text-gray-400">
                <span>📅 {article.date}</span>
                <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                  {article.category}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}