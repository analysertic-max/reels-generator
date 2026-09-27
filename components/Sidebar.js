import Link from 'next/link';
import { blogArticlesList } from '../lib/blogData';

export default function Sidebar() {
  // أكثر المقالات قراءة (عشوائية)
  const trending = blogArticlesList.slice(0, 5);

  // التصنيفات
  const categories = [
    { name: 'تكنولوجيا', icon: '💻', count: 5, color: 'from-indigo-500 to-blue-600' },
    { name: 'سوشيال ميديا', icon: '📱', count: 8, color: 'from-pink-500 to-rose-600' },
    { name: 'تسويق', icon: '📈', count: 12, color: 'from-emerald-500 to-teal-600' },
    { name: 'تصميم', icon: '🎨', count: 6, color: 'from-purple-500 to-fuchsia-600' },
    { name: 'ذكاء اصطناعي', icon: '🤖', count: 7, color: 'from-amber-500 to-orange-600' },
  ];

  // السوشيال ميديا
  const socialLinks = [
    { name: 'Facebook', icon: '📘', color: 'bg-blue-600', followers: '318K', href: '#' },
    { name: 'YouTube', icon: '▶️', color: 'bg-red-600', followers: '500', href: '#' },
    { name: 'TikTok', icon: '🎵', color: 'bg-black', followers: '8K', href: '#' },
    { name: 'Instagram', icon: '📷', color: 'bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500', followers: '900', href: '#' },
  ];

  return (
    <aside className="space-y-6">

      {/* ===== Social Media Box ===== */}
      <div className="bg-white rounded-2xl shadow-lg p-5 border border-gray-100">
        <h3 className="font-black text-gray-800 mb-4 flex items-center gap-2 text-lg">
          <span className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
          تابعنا
        </h3>

        <div className="grid grid-cols-2 gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className={`${social.color} text-white rounded-xl p-3 flex flex-col items-center justify-center hover:scale-105 transition transform shadow-md`}
            >
              <span className="text-2xl mb-1">{social.icon}</span>
              <span className="text-xs font-bold">{social.followers}</span>
              <span className="text-[10px] opacity-80 mt-0.5">{social.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* ===== AdSense Box ===== */}
      <div className="bg-white rounded-2xl shadow-lg p-5 border border-gray-100">
        <div className="text-center bg-gray-50 border border-dashed border-gray-300 rounded-lg p-6">
          <p className="text-xs text-gray-400">مساحة إعلانية</p>
          <p className="text-[10px] text-gray-300 mt-1">Google AdSense</p>
        </div>
      </div>

      {/* ===== Trending Articles ===== */}
      <div className="bg-white rounded-2xl shadow-lg p-5 border border-gray-100">
        <h3 className="font-black text-gray-800 mb-4 flex items-center gap-2 text-lg">
          <span className="w-1 h-6 bg-gradient-to-b from-pink-500 to-rose-600 rounded-full"></span>
          🔥 الأكثر قراءة
        </h3>

        <div className="space-y-4">
          {trending.map((article, i) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="flex gap-3 group"
            >
              <div className="relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-1 right-1 bg-indigo-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {i + 1}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-gray-800 group-hover:text-indigo-600 transition line-clamp-2 leading-snug">
                  {article.title}
                </h4>
                <p className="text-xs text-gray-400 mt-1">📅 {article.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ===== Categories ===== */}
      <div className="bg-white rounded-2xl shadow-lg p-5 border border-gray-100">
        <h3 className="font-black text-gray-800 mb-4 flex items-center gap-2 text-lg">
          <span className="w-1 h-6 bg-gradient-to-b from-emerald-500 to-teal-600 rounded-full"></span>
          📂 التصنيفات
        </h3>

        <div className="space-y-2">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={`/blog?category=${encodeURIComponent(cat.name)}`}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition group"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{cat.icon}</span>
                <span className="font-bold text-gray-700 group-hover:text-indigo-600 transition">
                  {cat.name}
                </span>
              </div>
              <span className={`text-xs font-bold text-white bg-gradient-to-r ${cat.color} px-2.5 py-1 rounded-full`}>
                {cat.count}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* ===== Newsletter Box ===== */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700"></div>
        <div className="relative p-5 text-white text-center">
          <div className="text-3xl mb-2">💌</div>
          <h3 className="font-black text-lg mb-2">النشرة البريدية</h3>
          <p className="text-white/90 text-xs mb-4">
            اشترك لتصلك آخر المقالات
          </p>
          <form className="space-y-2">
            <input
              type="email"
              placeholder="بريدك الإلكتروني"
              className="w-full px-3 py-2 rounded-lg text-gray-800 text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-white text-indigo-600 py-2 rounded-lg font-bold text-sm hover:scale-105 transition"
            >
              اشترك
            </button>
          </form>
        </div>
      </div>

    </aside>
  );
}