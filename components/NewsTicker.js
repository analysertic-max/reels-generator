import Link from 'next/link';
import { blogArticlesList } from '../lib/blogData';

export default function NewsTicker() {
  // ترتيب حسب التاريخ (الأحدث أولاً) واختيار 4 مقالات فقط
  const latest = [...blogArticlesList]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4);

  return (
    <div className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white overflow-hidden shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center">
        {/* شارة "عاجل" */}
        <div className="flex-shrink-0 bg-white text-red-600 font-black px-4 py-2 flex items-center gap-2 z-10">
          <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
          <span className="text-sm">عاجل</span>
        </div>

        {/* الشريط المتحرك - بطيء */}
        <div className="flex-1 overflow-hidden py-2 relative">
          <div className="flex items-center gap-12 whitespace-nowrap animate-marquee-slow">
            {[...latest, ...latest, ...latest].map((article, i) => (
              <Link
                key={`${article.slug}-${i}`}
                href={`/blog/${article.slug}`}
                className="inline-flex items-center gap-2 hover:underline text-sm font-medium"
              >
                <span className="text-yellow-300">📰</span>
                <span>{article.title}</span>
                <span className="text-white/60 mx-3">•</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* حركة بطيئة: 80 ثانية للدورة الكاملة */
        @keyframes marquee-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee-slow {
          animation: marquee-slow 80s linear infinite;
        }
        .animate-marquee-slow:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}