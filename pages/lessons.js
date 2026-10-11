import { useState } from 'react';
import Layout from '../components/Layout';
import NewsTicker from '../components/NewsTicker';
import { LESSONS_DATA } from '../lib/lessons';

export default function Lessons() {
  const [selectedYear, setSelectedYear] = useState('1am');
  const [selectedLesson, setSelectedLesson] = useState(null);

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

        {/* شبكة الدروس */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentYear.lessons.map((lesson) => (
            <div
              key={lesson.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer hover:-translate-y-1"
              onClick={() => setSelectedLesson(lesson)}
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-700">
                <img
                  src={lesson.image}
                  alt={lesson.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/600x450/6366f1/ffffff?text=' + encodeURIComponent(lesson.title);
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                  <span className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity">🔍</span>
                </div>
                <span className="absolute top-3 right-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-gray-900 dark:text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                  الدرس {lesson.id}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 dark:text-white text-base mb-1">
                  {lesson.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  ⏱️ {lesson.duration}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal عرض الدرس */}
        {selectedLesson && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedLesson(null)}
          >
            <div
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full my-8 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* رأس Modal */}
              <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
                <button
                  className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition"
                  onClick={() => setSelectedLesson(null)}
                  aria-label="إغلاق"
                >
                  ✕
                </button>
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

              {/* الصورة */}
              <div className="relative w-full aspect-[16/10] bg-gray-100 dark:bg-gray-700">
                <img
                  src={selectedLesson.image}
                  alt={selectedLesson.title}
                  className="absolute inset-0 w-full h-full object-contain"
                />
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

              </div>
            </div>
          </div>
        )}

      </div>
    </Layout>
  );
}