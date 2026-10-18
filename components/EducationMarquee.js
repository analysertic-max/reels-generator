import Link from 'next/link';

const EDUCATIONAL_LINKS = [
  {
    href: '/lessons?section=lessons',
    title: 'مبادئ الإعلام الآلي',
    description: 'دروس سنوات المتوسط',
    icon: '📚',
    color: 'from-indigo-600 to-purple-600',
    image: '/images/lessons/years/1am.jpg',
  },
  {
    href: '/lessons?section=powerpoint',
    title: 'إختصارات PowerPoint',
    description: 'اختصارات لوحة المفاتيح',
    icon: '⌨️',
    color: 'from-orange-500 to-red-500',
    image: '/images/shortcuts/hero.jpg',
  },
  {
    href: '/lessons?section=excel',
    title: 'سلسلة Excel',
    description: 'دروس شاملة لتعلم Excel',
    icon: '📊',
    color: 'from-green-600 to-emerald-600',
    image: '/images/excel/hero.jpg',
  },
  {
    href: '/lessons?section=templates',
    title: 'نماذج مفيدة',
    description: 'قوالب جاهزة للتعديل',
    icon: '📄',
    color: 'from-emerald-500 to-teal-600',
    image: '/images/templates/hero.jpg',
  },
];

export default function EducationMarquee() {
  // تكرار 3 مرات للحلقة اللانهائية
  const items = [...EDUCATIONAL_LINKS, ...EDUCATIONAL_LINKS, ...EDUCATIONAL_LINKS];

  return (
    <aside className="hidden xl:block w-64 flex-shrink-0">
      <div className="sticky top-24 space-y-4">
        
        {/* العنوان */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 border border-gray-100 dark:border-gray-700">
          <h3 className="font-black text-gray-900 dark:text-white mb-1 flex items-center gap-2 text-sm">
            <span className="w-1 h-5 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
            🎓 المنصة التعليمية
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            اختر القسم الذي تريد تصفحه
          </p>
        </div>

        {/* الشريط المتحرك */}
        <div className="relative h-[420px] overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-md border border-gray-100 dark:border-gray-700">
          
          {/* تدرجات الحواف */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white dark:from-gray-800 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-800 to-transparent z-10 pointer-events-none"></div>

          {/* الشريط العمودي */}
          <div className="flex flex-col gap-3 p-3 animate-marquee-vertical">
            {items.map((item, index) => (
              <Link
                key={`${item.href}-${index}`}
                href={item.href}
                className={`group flex-shrink-0 relative overflow-hidden rounded-xl bg-gradient-to-br ${item.color} p-3 text-white shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03]`}
              >
                {/* صورة خلفية */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                
                {/* محتوى */}
                <div className="relative">
                  <div className="text-2xl mb-1">{item.icon}</div>
                  <h4 className="font-bold text-sm leading-tight mb-0.5">
                    {item.title}
                  </h4>
                  <p className="text-[10px] opacity-90">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* AdSense */}
        <div className="bg-white/60 dark:bg-gray-800/60 border border-dashed border-gray-300 dark:border-gray-700 rounded-2xl p-4 text-center">
          <p className="text-[10px] text-gray-400">مساحة إعلانية</p>
        </div>

      </div>
    </aside>
  );
}