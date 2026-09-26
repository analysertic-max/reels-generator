import Link from 'next/link';

export default function Logo({ size = 'md', variant = 'light' }) {
  const sizes = {
    sm: { height: 32, text: 'text-base' },
    md: { height: 42, text: 'text-lg' },
    lg: { height: 60, text: 'text-2xl' },
  };

  const s = sizes[size] || sizes.md;
  const isLight = variant === 'light';

  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      {/* أيقونة النبض */}
      <div className="relative">
        <svg
          width={s.height}
          height={s.height}
          viewBox="0 0 60 60"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform group-hover:scale-110 duration-300"
        >
          <defs>
            <linearGradient id="pulseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={isLight ? '#ffffff' : '#6366f1'} />
              <stop offset="50%" stopColor={isLight ? '#fef3c7' : '#a855f7'} />
              <stop offset="100%" stopColor={isLight ? '#fbbf24' : '#ec4899'} />
            </linearGradient>
          </defs>

          {/* دائرة */}
          <circle cx="30" cy="30" r="28" fill="url(#pulseGrad)" />
          <circle cx="30" cy="30" r="22" fill="none" stroke="white" strokeWidth="1.5" strokeOpacity="0.4" />

          {/* نبضة القلب / خط الإشارة */}
          <path
            d="M 14 30 L 20 30 L 24 22 L 28 38 L 32 26 L 36 34 L 40 30 L 46 30"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>

      {/* الاسم */}
      <div className="hidden sm:block leading-tight">
        <div className={`font-extrabold ${s.text} ${isLight ? 'text-white' : 'text-gray-800'} leading-none`}>
          نبض
        </div>
        <div className={`font-extrabold ${s.text} ${isLight ? 'text-yellow-200' : 'text-indigo-600'} leading-none`}>
          التقنية
        </div>
      </div>
    </Link>
  );
}