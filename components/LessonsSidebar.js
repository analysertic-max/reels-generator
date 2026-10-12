import Link from 'next/link';
import { useRouter } from 'next/router';

export default function LessonsSidebar({ activeSection, setActiveSection }) {
  const router = useRouter();
  const menuItems = [
    {
      key: 'lessons',
      title: 'مبادئ الإعلام الآلي',
      description: 'دروس لجميع سنوات المتوسط',
      icon: '📚',
      color: 'from-indigo-600 to-purple-600',
      activeColor: 'from-indigo-600 to-purple-600',
    },
    {
      key: 'powerpoint',
      title: 'إختصارات PowerPoint',
      description: 'اختصارات لوحة المفاتيح بالصور',
      icon: '⌨️',
      color: 'from-orange-500 to-red-500',
      activeColor: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <aside className="lg:col-span-1">
      <div className="sticky top-24 space-y-4">

        {/* العنوان */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 border border-gray-100 dark:border-gray-700">
          <h3 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2 text-sm">
            <span className="w-1 h-5 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
            🎓 المنصة التعليمية
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
            اختر القسم الذي تريد تصفحه
          </p>
        </div>

        {/* القائمة */}
        <nav className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-2 border border-gray-100 dark:border-gray-700 space-y-2">
          {menuItems.map((item) => {
            const isActive = activeSection === item.key;
            
            return (
              <button
               key={item.key}
               onClick={() => {
               setActiveSection(item.key);
              router.push(`/lessons?section=${item.key}`, undefined, { shallow: true });
               }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all text-right group ${
                  isActive
                    ? `bg-gradient-to-r ${item.activeColor} text-white shadow-lg scale-[1.02]`
                    : 'bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                <span className={`text-2xl flex-shrink-0 transition-transform ${
                  isActive ? 'scale-110' : 'group-hover:scale-110'
                }`}>
                  {item.icon}
                </span>
                <div className="flex-1 min-w-0 text-right">
                  <div className="text-sm font-bold leading-tight">
                    {item.title}
                  </div>
                  <div className={`text-[10px] mt-0.5 leading-tight ${
                    isActive ? 'text-white/90' : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    {item.description}
                  </div>
                </div>
              </button>
            );
          })}
        </nav>

        {/* روابط سريعة */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 border border-gray-100 dark:border-gray-700">
          <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-3 uppercase">
            روابط سريعة
          </h4>
          <div className="space-y-2">
            <Link
              href="/blog"
              className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
              <span>📰</span>
              <span>آخر الأخبار</span>
            </Link>
            <Link
              href="/varied"
              className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition"
            >
              <span>📚</span>
              <span>كل المواضيع</span>
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition"
            >
              <span>ℹ️</span>
              <span>من نحن</span>
            </Link>
          </div>
        </div>

     

      </div>
    </aside>
  );
}