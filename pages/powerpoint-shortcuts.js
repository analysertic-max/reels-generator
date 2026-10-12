import { useState } from 'react';
import Layout from '../components/Layout';
import NewsTicker from '../components/NewsTicker';

// قائمة الإختصارات


// التصنيفات
const CATEGORIES = ['الكل', 'أساسيات', 'الشرائح', 'التنقل', 'العرض', 'الوسائط', 'التعديل'];

export default function PowerPointShortcuts() {
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [lightboxImage, setLightboxImage] = useState(null);

  // فلترة
  const filtered = selectedCategory === 'الكل'
    ? SHORTCUTS
    : SHORTCUTS.filter((s) => s.category === selectedCategory);

  return (
    <Layout
      title="إختصارات برنامج PowerPoint"
      description="جميع اختصارات برنامج PowerPoint بالصور - اختصارات لوحة المفاتيح لعروض تقديمية احترافية"
    >
      <NewsTicker />

      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Hero */}
        <section className="relative w-full overflow-hidden shadow-lg rounded-2xl mb-8 min-h-[160px] md:min-h-[200px]">
          <img
            src="/images/shortcuts/hero.jpg"
            alt="اختصارات PowerPoint"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.style.background = 'linear-gradient(135deg, #d24726 0%, #ed6c47 50%, #f4b183 100%)';
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(80, 30, 20, 0.88) 0%, rgba(150, 60, 30, 0.85) 50%, rgba(200, 90, 50, 0.88) 100%)'
            }}
          ></div>

          <div className="relative h-full flex items-center justify-center px-6 py-8">
            <div className="text-center text-white max-w-2xl mx-auto">
              <div className="text-4xl md:text-5xl mb-3">⌨️</div>
              <h1 className="text-2xl md:text-4xl font-black mb-2 leading-tight">
                إختصارات برنامج PowerPoint
              </h1>
              <p className="text-sm md:text-base text-white/90">
                جميع اختصارات لوحة المفاتيح لبرنامج PowerPoint بالصور
              </p>
            </div>
          </div>
        </section>

       

        {/* شبكة الإختصارات */}
        {filtered.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-12 text-center">
            <div className="text-6xl mb-4">📭</div>
            <p className="text-gray-600 dark:text-gray-400">
              لا توجد اختصارات في هذا التصنيف
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((shortcut) => (
              <div
                key={shortcut.id}
                onClick={() => setLightboxImage(shortcut.image)}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-zoom-in hover:-translate-y-1"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-700">
                  <img
                    src={shortcut.image}
                    alt={shortcut.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/600x450/d24726/ffffff?text=' + encodeURIComponent(shortcut.title);
                    }}
                  />

                  {/* طبقة عند Hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                    <span className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity">
                      🔍
                    </span>
                  </div>

                  {/* شارة التصنيف */}
                  <span className="absolute top-3 right-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    {shortcut.category}
                  </span>
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-gray-900 dark:text-white text-base group-hover:text-orange-600 transition">
                    {shortcut.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}

     

        {/* Lightbox */}
        {lightboxImage && (
          <div
            className="fixed inset-0 z-[200] bg-black/98 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 text-white text-2xl flex items-center justify-center transition shadow-2xl"
              onClick={() => setLightboxImage(null)}
              aria-label="إغلاق"
            >
              ✕
            </button>

            <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md text-white text-xs font-bold px-3 py-2 rounded-full">
              💡 انقر خارج الصورة للإغلاق
            </div>

            <img
              src={lightboxImage}
              alt="عرض كامل"
              className="max-w-[95vw] max-h-[95vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

      </div>
    </Layout>
  );
}