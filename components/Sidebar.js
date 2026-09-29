import Link from 'next/link';
import { blogArticlesList } from '../lib/blogData';
import { useState } from 'react';

export default function Sidebar() {
  // أكثر المقالات قراءة (عشوائية)
  const trending = blogArticlesList.slice(0, 5);

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  // التصنيفات
  const categories = [
  { name: 'تكنولوجيا', icon: '💻', count: 5, color: 'from-indigo-500 to-blue-600' },
  { name: 'هواتف ذكية', icon: '📱', count: 0, color: 'from-cyan-500 to-blue-600' },
  { name: 'تطبيقات وبرامج', icon: '💾', count: 0, color: 'from-violet-500 to-purple-600' },
  { name: 'كيف', icon: '🛠️', count: 0, color: 'from-emerald-500 to-green-600' },
  { name: 'سوشيال ميديا', icon: '📣', count: 8, color: 'from-pink-500 to-rose-600' },
  { name: 'تسويق', icon: '📈', count: 12, color: 'from-teal-500 to-cyan-600' },
  { name: 'تصميم', icon: '🎨', count: 6, color: 'from-purple-500 to-fuchsia-600' },
  { name: 'ذكاء اصطناعي', icon: '🤖', count: 7, color: 'from-amber-500 to-orange-600' },
];


  // السوشيال ميديا
    // ⚠️ استبدل # بروابط حساباتك الحقيقية
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61593629871213',      // ← ضع رابط صفحتك
      followers: '782',
      gradient: 'from-blue-600 to-blue-800',
      hoverColor: 'hover:shadow-blue-500/50',
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@haner41ha',    // ← ضع رابط حسابك
      followers: '14',
      gradient: 'from-gray-900 to-black',
      hoverColor: 'hover:shadow-pink-500/50',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/nabd_tec',  // ← ضع رابط حسابك
      followers: '1',
      gradient: 'from-purple-600 via-pink-600 to-orange-500',
      hoverColor: 'hover:shadow-purple-500/50',
    },
  ];

  return (
    <aside className="space-y-6">

      {/* ===== Social Media Box ===== */}
      <div className="bg-white rounded-2xl shadow-lg p-5 border border-gray-100">
        <div className="flex items-center justify-between mb-4">
  <h3 className="font-black text-gray-800 flex items-center gap-2 text-lg">
    <span className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
    تابعنا
  </h3>
  <span className="text-xs bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-2.5 py-1 rounded-full font-bold">
    انضم إلينا
  </span>
</div>

                <div className="space-y-3">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative bg-gradient-to-br ${social.gradient} ${social.hoverColor} text-white rounded-xl p-4 flex items-center justify-between shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 overflow-hidden`}
            >
              {/* توهج خلفي */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full filter blur-2xl group-hover:bg-white/20 transition-colors"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/5 rounded-full filter blur-xl"></div>

              {/* أيقونة + الاسم */}
              <div className="relative flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-inner">
                  {social.name === 'Facebook' && (
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  )}
                  {social.name === 'TikTok' && (
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  )}
                  {social.name === 'Instagram' && (
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                    </svg>
                  )}
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm">{social.name}</span>
                  <span className="text-xs opacity-80">{social.followers} متابع</span>
                </div>
              </div>

              {/* سهم */}
              <div className="relative flex items-center gap-2">
                <span className="text-xs font-bold opacity-80 hidden sm:block">تابعنا</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:-translate-x-1 transition-transform"
                >
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
              </div>
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
  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full filter blur-2xl"></div>
  <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-400/10 rounded-full filter blur-2xl"></div>

  <div className="relative p-5 text-white text-center">
    {/* أيقونة */}
    <div className="text-4xl mb-3 drop-shadow-lg">💌</div>

    {/* العنوان */}
    <h3 className="font-black text-lg mb-2 drop-shadow">النشرة البريدية</h3>

    {/* الوصف */}
    <p className="text-white/90 text-xs mb-5 leading-relaxed">
      اشترك لتصلك آخر المقالات والأخبار
    </p>

    {status === 'success' ? (
      /* حالة النجاح */
      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
        <div className="text-3xl mb-2">✅</div>
        <p className="text-sm font-bold mb-1">تم الاشتراك بنجاح!</p>
        <p className="text-xs opacity-90">شكراً لك، ستصلك آخر المقالات قريباً</p>
      </div>
    ) : (
      /* النموذج */
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setStatus('sending');

          try {
            const res = await fetch('https://formspree.io/f/xaenvdzr', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
              },
              body: JSON.stringify({
                email,
                _subject: 'مشترك جديد في النشرة البريدية',
              }),
            });

            if (res.ok) {
              setStatus('success');
              setEmail('');
              setTimeout(() => setStatus('idle'), 5000);
            } else {
              setStatus('error');
              setTimeout(() => setStatus('idle'), 3000);
            }
          } catch (err) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
          }
        }}
        className="space-y-3"
      >
        {/* حقل البريد الإلكتروني */}
        <div className="relative">
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-400"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="أدخل بريدك الإلكتروني"
            disabled={status === 'sending'}
            className="w-full pr-10 pl-3 py-3 rounded-xl bg-white text-gray-900 font-medium text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-lg disabled:opacity-60 transition-all"
          />
        </div>

        {/* زر الاشتراك */}
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full py-3 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          style={{
            background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
            color: '#1f2937',
          }}
        >
          {status === 'sending' ? (
            <>
              <span className="animate-spin">⏳</span>
              <span>جاري الإرسال...</span>
            </>
          ) : status === 'error' ? (
            <>
              <span>❌</span>
              <span>حاول مجدداً</span>
            </>
          ) : (
            <>
              <span>📩</span>
              <span>اشترك الآن</span>
            </>
          )}
        </button>

        {/* نص مساعد */}
        <p className="text-[10px] text-white/70 text-center leading-relaxed">
          🔒 لن نشارك بريدك مع أي طرف ثالث
        </p>
      </form>
    )}
  </div>
</div>
      
   

    </aside>
  );
}