import { useState } from 'react';
import Layout from '../components/Layout';
import NewsTicker from '../components/NewsTicker';
import { LESSONS_DATA } from '../lib/lessons';

export default function Lessons() {
  const [selectedYear, setSelectedYear] = useState('1am');
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);

  const currentYear = LESSONS_DATA[selectedYear];



  return (
    <Layout
      title="مبادئ أولية في الإعلام الآلي"
      description="دروس مبادئ أولية في الإعلام الآلي لجميع سنوات المتوسط - صور تعليمية"
    >
      <NewsTicker />

      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Hero */}
        <section className="relative w-full overflow-hidden shadow-lg rounded-2xl mb-8 min-h-[160px] md:min-h-[200px]">
          <img
            src="/images/lessons/hero.jpg"
            alt="مبادئ أولية في الإعلام الآلي"
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
              <h1 className="text-2xl md:text-4xl font-black mb-2 leading-tight">
                دروس مبادئ الإعلام الآلي للمتوسط
              </h1>
              <p className="text-sm md:text-base text-white/90">
                دروس تعليمية مصورة في مبادئ الإعلام الآلي لجميع سنوات المتوسط
              </p>
            </div>
          </div>
        </section>

        {/* اختيار السنة */}
        <div className="mb-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(LESSONS_DATA).map(([key, year]) => (
            <button
              key={key}
              onClick={() => setSelectedYear(key)}
              className={`relative overflow-hidden rounded-2xl p-5 text-white text-center transition-all duration-300 hover:scale-105 ${
                selectedYear === key
                  ? 'ring-4 ring-white ring-offset-2 ring-offset-gray-100 shadow-2xl scale-105'
                  : 'shadow-md hover:shadow-xl opacity-90'
              } bg-gradient-to-br ${year.color}`}
            >
              <div className="text-4xl mb-2">{year.icon}</div>
              <div className="font-bold text-sm md:text-base">{year.title}</div>
            </button>
          ))}
        </div>

        {/* وصف السنة المختارة */}
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
                {/* الصورة المصغرة */}
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

                {/* النص */}
                <div className="flex-1 min-w-0 py-1">
                  <h3 className="font-bold text-gray-900 dark:text-white text-base group-hover:text-indigo-600 transition line-clamp-2 leading-snug">
                    {lesson.title}
                  </h3>
                  {lesson.duration && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      <span>⏱️ {lesson.duration}</span>
                    </p>
                  )}
                </div>

                {/* سهم */}
                <div className="flex-shrink-0 text-gray-400 group-hover:text-indigo-600 group-hover:-translate-x-1 transition">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
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
              {/* زر الإغلاق الوحيد */}
              <button
                className="absolute top-4 left-4 z-20 w-11 h-11 rounded-full bg-red-500 hover:bg-red-600 text-white text-xl flex items-center justify-center transition shadow-lg"
                onClick={() => setSelectedLesson(null)}
                aria-label="إغلاق"
                title="إغلاق"
              >
                ✕
              </button>

              {/* رأس Modal */}
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

              {/* ===== الصورة - قابلة للنقر للتكبير ===== */}
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

                {/* تلميح "انقر للتكبير" */}
                <div className="absolute top-8 right-8 bg-black/70 backdrop-blur-sm text-white text-xs font-bold px-3 py-2 rounded-full flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  🔍 انقر للتكبير
                </div>
              </div>

              {/* المحتوى */}
              <div className="p-6 space-y-6">

                {/* الوصف */}
                {selectedLesson.description && (
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      📖 وصف الدرس
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {selectedLesson.description}
                    </p>
                  </div>
                )}

                {/* الأهداف */}
                {selectedLesson.objectives && selectedLesson.objectives.length > 0 && (
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      🎯 أهداف الدرس
                    </h3>
                    <ul className="list-disc mr-6 space-y-1 text-gray-700 dark:text-gray-300">
                      {selectedLesson.objectives.map((obj, i) => (
                        <li key={i}>{obj}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* النقاط الرئيسية */}
                {selectedLesson.keyPoints && selectedLesson.keyPoints.length > 0 && (
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      💡 النقاط الرئيسية
                    </h3>
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

                {/* الأسئلة */}
                {selectedLesson.exercises && selectedLesson.exercises.length > 0 && (
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      📝 أسئلة للمراجعة
                    </h3>
                    <ol className="list-decimal mr-6 space-y-1 text-gray-700 dark:text-gray-300">
                      {selectedLesson.exercises.map((ex, i) => (
                        <li key={i}>{ex}</li>
                      ))}
                    </ol>
                  </div>
                )}

                {/* زر إغلاق في النهاية */}
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
            {/* زر الإغلاق */}
            <button
              className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 text-white text-2xl flex items-center justify-center transition shadow-2xl"
              onClick={() => setLightboxImage(null)}
              aria-label="إغلاق"
            >
              ✕
            </button>

            {/* تعليمات */}
            <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md text-white text-xs font-bold px-3 py-2 rounded-full">
              💡 انقر خارج الصورة للإغلاق
            </div>

            {/* الصورة */}
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