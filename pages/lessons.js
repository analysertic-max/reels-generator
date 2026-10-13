import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import NewsTicker from '../components/NewsTicker';
import LessonsSidebar from '../components/LessonsSidebar';
import { LESSONS_DATA } from '../lib/lessons';
import { POWERPOINT_SHORTCUTS, POWERPOINT_CATEGORIES } from '../lib/powerpoint/shortcuts';
import { USEFUL_TEMPLATES, TEMPLATE_CATEGORIES } from '../lib/templates/usefulTemplates';

export default function Lessons() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState('lessons');
  
  // حالة قسم الإعلام الآلي
  const [selectedYear, setSelectedYear] = useState('1am');
  const [selectedLesson, setSelectedLesson] = useState(null);
  
  // حالة قسم PowerPoint
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [selectedTemplateCategory, setSelectedTemplateCategory] = useState('الكل');
  
  // حالة Lightbox المشتركة
  const [lightboxImage, setLightboxImage] = useState(null);

  // قراءة section من URL
useEffect(() => {
  if (router.isReady && router.query.section) {
    const section = router.query.section;
    if (['lessons', 'powerpoint', 'templates'].includes(section)) {
      setActiveSection(section);
    }
  }
}, [router.isReady, router.query.section]);

  const currentYear = LESSONS_DATA[selectedYear];
  
  // فلترة اختصارات PowerPoint
  const filteredShortcuts = selectedCategory === 'الكل'
    ? POWERPOINT_SHORTCUTS
    : POWERPOINT_SHORTCUTS.filter((s) => s.category === selectedCategory);
  
  const filteredTemplates = selectedTemplateCategory === 'الكل'
  ? USEFUL_TEMPLATES
  : USEFUL_TEMPLATES.filter((t) => t.category === selectedTemplateCategory);

  return (
    <Layout
      title="المنصة التعليمية - نبض التقنية"
      description="دروس مبادئ الإعلام الآلي واختصارات PowerPoint - منصة تعليمية عربية"
    >
      <NewsTicker />

      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Hero */}
        <section className="relative w-full overflow-hidden shadow-lg rounded-2xl mb-8 min-h-[160px] md:min-h-[200px]">
          <img
            src="/images/lessons/hero.jpg"
            alt="المنصة التعليمية"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.style.background = 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)';
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(30, 27, 75, 0.88) 0%, rgba(88, 28, 135, 0.85) 50%, rgba(131, 24, 67, 0.88) 100%)'
            }}
          ></div>

          <div className="relative h-full flex items-center justify-center px-6 py-8">
            <div className="text-center text-white max-w-2xl mx-auto">
              <div className="text-4xl mb-2">🎓</div>
              <h1 className="text-2xl md:text-4xl font-black mb-2 leading-tight">
                المنصة التعليمية
              </h1>
              <p className="text-sm md:text-base text-white/90">
                دروس مبادئ الإعلام الآلي واختصارات PowerPoint
              </p>
            </div>
          </div>
        </section>

        {/* ===== Grid: Sidebar + Content ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* القائمة الجانبية */}
          <LessonsSidebar 
            activeSection={activeSection} 
            setActiveSection={setActiveSection} 
          />

          {/* المحتوى الرئيسي */}
          <main className="lg:col-span-3">

            {/* ===== قسم الإعلام الآلي ===== */}
            {activeSection === 'lessons' && (
              <div>
                {/* اختيار السنة */}
                <div className="mb-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(LESSONS_DATA).map(([key, year]) => (
  <button
    key={key}
    onClick={() => setSelectedYear(key)}
    className={`group relative overflow-hidden rounded-2xl text-white text-center transition-all duration-300 hover:scale-105 aspect-[4/3] ${
      selectedYear === key
        ? 'ring-4 ring-white ring-offset-2 ring-offset-gray-100 shadow-2xl scale-105'
        : 'shadow-md hover:shadow-xl'
    }`}
  >
    {/* الصورة الخلفية - واضحة */}
    <img
      src={year.image}
      alt={year.title}
      loading="lazy"
      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      onError={(e) => {
        e.target.style.display = 'none';
      }}
    />

    {/* تدرج لوني - شفاف جداً فقط لضمان قراءة النص */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

    {/* المحتوى */}
    <div className="relative h-full flex flex-col items-center justify-center p-3">
      <div className="text-3xl md:text-4xl mb-1 drop-shadow-2xl group-hover:scale-110 transition-transform">
        {year.icon}
      </div>
      <div className="font-bold text-xs md:text-sm drop-shadow-lg">
        {year.title}
      </div>
    </div>

    {/* شارة مختار */}
    {selectedYear === key && (
      <div className="absolute top-2 right-2 bg-green-500 text-white text-[10px] font-black px-2 py-1 rounded-full shadow-lg">
        ✓
      </div>
    )}
  </button>
))}
                </div>

                {/* وصف السنة */}
                <div className="mb-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md p-5 border-r-4 border-indigo-500">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {currentYear.icon} {currentYear.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {currentYear.description}
                  </p>
                </div>

                {/* قائمة الدروس */}
                <div className="space-y-3">
                  {currentYear.lessons.map((lesson, index) => (
                    <div
                      key={lesson.id}
                      onClick={() => setSelectedLesson(lesson)}
                      className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 cursor-pointer hover:-translate-x-1"
                    >
                      <div className="flex items-center gap-4 p-3">
                        <div className="relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
                          <img
                            src={lesson.image}
                            alt={lesson.title}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            onError={(e) => {
                              e.target.src = 'https://via.placeholder.com/200x200/6366f1/ffffff?text=' + (index + 1);
                            }}
                          />
                          <span className="absolute top-1 right-1 w-6 h-6 bg-gradient-to-br from-indigo-600 to-purple-600 text-white text-xs font-black flex items-center justify-center rounded-full shadow-lg">
                            {index + 1}
                          </span>
                        </div>

                        <div className="flex-1 min-w-0 py-1">
                          <h3 className="font-bold text-gray-900 dark:text-white text-base group-hover:text-indigo-600 transition line-clamp-2 leading-snug">
                            {lesson.title}
                          </h3>
                          {lesson.duration && (
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                              ⏱️ {lesson.duration}
                            </p>
                          )}
                        </div>

                        <div className="flex-shrink-0 text-gray-400 group-hover:text-indigo-600 group-hover:-translate-x-1 transition">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="15 18 9 12 15 6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

         {/* ===== قسم PowerPoint ===== */}
{activeSection === 'powerpoint' && (
  <div>
    {/* Hero PowerPoint - بصورة خلفية */}
    <div className="relative mb-6 rounded-2xl overflow-hidden shadow-lg min-h-[140px] md:min-h-[180px]">
      
      {/* الصورة الخلفية */}
      <img
        src="/images/shortcuts/hero.jpg"
        alt="اختصارات PowerPoint"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />

      {/* تدرج لوني - خفيف ليسمح برؤية الصورة */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/85 via-red-600/75 to-pink-600/85"></div>

      {/* زخارف */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-300/20 rounded-full filter blur-3xl"></div>

      {/* المحتوى */}
      <div className="relative h-full flex items-center justify-center px-6 py-8">
        <div className="text-center text-white max-w-2xl mx-auto">

         
          {/* العنوان */}
          <h2 className="text-2xl md:text-3xl font-black mb-2 leading-tight drop-shadow-lg">
            إختصارات برنامج PowerPoint
          </h2>

          {/* الوصف */}
          <p className="text-sm md:text-base text-white/95 max-w-xl mx-auto leading-relaxed drop-shadow-lg">
            جميع اختصارات لوحة المفاتيح لبرنامج PowerPoint بالصور
          </p>

          {/* خط فاصل */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-8 h-0.5 bg-white/50 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <div className="w-8 h-0.5 bg-white/50 rounded-full"></div>
          </div>

        </div>
      </div>
    </div>

    {/* شبكة الإختصارات */}
    {filteredShortcuts.length === 0 ? (
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-12 text-center">
        <div className="text-6xl mb-4">📭</div>
        <p className="text-gray-600 dark:text-gray-400">
          لا توجد اختصارات في هذا التصنيف
        </p>
      </div>
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredShortcuts.map((shortcut) => (
          <div
            key={shortcut.id}
            onClick={() => setLightboxImage(shortcut.image)}
            className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-zoom-in hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
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
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                <span className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity">🔍</span>
              </div>
              <span className="absolute top-3 right-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                {shortcut.category}
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-gray-900 dark:text-white text-base group-hover:text-orange-600 transition">
                {shortcut.title}
              </h3>
              {shortcut.keys && (
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-mono" dir="ltr">
                  {shortcut.keys}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
)}


{/* ===== قسم نماذج مفيدة ===== */}
{activeSection === 'templates' && (
  <div>
    {/* Hero Templates - بصورة خلفية */}
    <div className="relative mb-6 rounded-2xl overflow-hidden shadow-lg min-h-[140px] md:min-h-[180px]">
      
      {/* الصورة الخلفية */}
      <img
        src="/images/templates/hero.jpg"
        alt="نماذج مفيدة"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />

      {/* تدرج لوني */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/85 via-teal-600/75 to-cyan-600/85"></div>

      {/* زخارف */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-300/20 rounded-full filter blur-3xl"></div>

      {/* المحتوى */}
      <div className="relative h-full flex items-center justify-center px-6 py-8">
        <div className="text-center text-white max-w-2xl mx-auto">

          <div className="text-4xl md:text-5xl mb-3 drop-shadow-2xl">📄</div>

          <h2 className="text-2xl md:text-3xl font-black mb-2 leading-tight drop-shadow-lg">
            نماذج مفيدة
          </h2>

          <p className="text-sm md:text-base text-white/95 max-w-xl mx-auto leading-relaxed drop-shadow-lg">
            قوالب جاهزة للتعديل والاستخدام في مختلف المجالات
          </p>

          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-8 h-0.5 bg-white/50 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <div className="w-8 h-0.5 bg-white/50 rounded-full"></div>
          </div>

        </div>
      </div>
    </div>

    {/* التصنيفات */}
    <div className="mb-6 flex items-center gap-2 flex-wrap">
      <span className="text-sm font-bold text-gray-600 dark:text-gray-400">تصفية:</span>
      {TEMPLATE_CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelectedTemplateCategory(cat)}
          className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
            selectedTemplateCategory === cat
              ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md'
              : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-emerald-300'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>

    {/* شبكة النماذج */}
    {filteredTemplates.length === 0 ? (
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-12 text-center">
        <div className="text-6xl mb-4">📭</div>
        <p className="text-gray-600 dark:text-gray-400">
          لا توجد نماذج في هذا التصنيف
        </p>
      </div>
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTemplates.map((template) => (
          <div
            key={template.id}
            className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 hover:-translate-y-1"
          >
            {/* الصورة */}
            <div
              className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-700 cursor-zoom-in"
              onClick={() => setLightboxImage(template.image)}
            >
              <img
                src={template.image}
                alt={template.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/600x450/10b981/ffffff?text=' + encodeURIComponent(template.title);
                }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                <span className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity">🔍</span>
              </div>
              <span className="absolute top-3 right-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                {template.category}
              </span>
            </div>

            {/* المحتوى */}
            <div className="p-4">
              <h3 className="font-bold text-gray-900 dark:text-white text-base group-hover:text-emerald-600 transition mb-1">
                {template.title}
              </h3>
              {template.description && (
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                  {template.description}
                </p>
              )}

              {/* زر التنزيل */}
              {template.fileUrl && (
                <a
                  href={template.fileUrl}
                  download
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-xs font-bold px-4 py-2 rounded-full transition shadow-md hover:shadow-lg"
                >
                  <span>⬇️</span>
                  <span>تحميل النموذج</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
)}
          </main>
        </div>

        {/* ===== Modal عرض الدرس ===== */}
        {selectedLesson && (
          <div
            className="fixed inset-0 z-[100] overflow-y-auto backdrop-blur-md bg-black/80"
            onClick={() => setSelectedLesson(null)}
            style={{ paddingTop: '80px' }}
          >
            <div
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full mx-auto my-6 overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 left-4 z-20 w-11 h-11 rounded-full bg-red-500 hover:bg-red-600 text-white text-xl flex items-center justify-center transition shadow-lg"
                onClick={() => setSelectedLesson(null)}
                aria-label="إغلاق"
              >
                ✕
              </button>

              <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white pr-20">
                <span className="inline-block bg-white/20 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full mb-2">
                  الدرس {selectedLesson.id}
                </span>
                <h2 className="text-2xl md:text-3xl font-black">
                  {selectedLesson.title}
                </h2>
                {selectedLesson.duration && (
                  <p className="text-sm opacity-90 mt-1">⏱️ {selectedLesson.duration}</p>
                )}
              </div>

              <div
                className="relative w-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4 md:p-6 cursor-zoom-in group"
                onClick={() => setLightboxImage(selectedLesson.image)}
              >
                <img
                  src={selectedLesson.image}
                  alt={selectedLesson.title}
                  className="max-w-full h-auto max-h-[70vh] object-contain rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/800x600/6366f1/ffffff?text=' + encodeURIComponent(selectedLesson.title);
                  }}
                />
                <div className="absolute top-8 right-8 bg-black/70 backdrop-blur-sm text-white text-xs font-bold px-3 py-2 rounded-full flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  🔍 انقر للتكبير
                </div>
              </div>

              <div className="p-6 space-y-6">
                {selectedLesson.description && (
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">📖 وصف الدرس</h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {selectedLesson.description}
                    </p>
                  </div>
                )}

                {selectedLesson.objectives && selectedLesson.objectives.length > 0 && (
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">🎯 أهداف الدرس</h3>
                    <ul className="list-disc mr-6 space-y-1 text-gray-700 dark:text-gray-300">
                      {selectedLesson.objectives.map((obj, i) => (
                        <li key={i}>{obj}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedLesson.keyPoints && selectedLesson.keyPoints.length > 0 && (
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">💡 النقاط الرئيسية</h3>
                    <ul className="space-y-2">
                      {selectedLesson.keyPoints.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                          <span className="text-green-500 font-bold mt-1">✓</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedLesson.exercises && selectedLesson.exercises.length > 0 && (
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">📝 أسئلة للمراجعة</h3>
                    <ol className="list-decimal mr-6 space-y-1 text-gray-700 dark:text-gray-300">
                      {selectedLesson.exercises.map((ex, i) => (
                        <li key={i}>{ex}</li>
                      ))}
                    </ol>
                  </div>
                )}

                <div className="text-center pt-4">
                  <button
                    onClick={() => setSelectedLesson(null)}
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-bold transition shadow-lg"
                  >
                    ✕ إغلاق
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===== Lightbox لتكبير الصورة ===== */}
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