import Link from 'next/link';
import { blogArticlesList } from '../lib/blogData';

export default function NewsTicker() {
  // ترتيب حسب التاريخ (الأحدث أولاً) واختيار 6
  const latest = [...blogArticlesList]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 6);

  return (
    <div className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white overflow-hidden shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center">
        {/* شارة "عاجل" */}
        <div className="flex-shrink-0 bg-white text-red-600 font-black px-4 py-2 flex items-center gap-2 z-10">
          <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
          <span className="text-sm">اخر الأخبار</span>
        </div>

        {/* الشريط المتحرك */}
        <div className="flex-1 overflow-hidden py-2 relative">
          <div className="flex items-center gap-8 whitespace-nowrap animate-marquee">
            {[...latest, ...latest].map((article, i) => (
              <Link
                key={i}
                href={`/blog/${article.slug}`}
                className="inline-flex items-center gap-2 hover:underline text-sm font-medium"
              >
                <span className="text-yellow-300">📰</span>
                <span>{article.title}</span>
                <span className="text-white/60 mx-2">•</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}