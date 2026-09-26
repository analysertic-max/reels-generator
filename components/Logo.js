import Link from 'next/link';

export default function Logo({ size = 'md', variant = 'light' }) {
  const sizes = {
    sm: { height: 32, text: 'text-base' },
    md: { height: 40, text: 'text-lg' },
    lg: { height: 60, text: 'text-2xl' },
  };

  const s = sizes[size] || sizes.md;

  // variant: 'light' = نص أبيض (للـ Header المتدرج)، 'dark' = نص داكن
  const isLight = variant === 'light';

  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="relative">
        <svg
          width={s.height}
          height={s.height}
          viewBox="0 0 60 60"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform group-hover:scale-110 duration-300"
        >
          <defs>
            <linearGradient id="logoWhiteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#e0e7ff" />
            </linearGradient>
          </defs>
          <circle cx="30" cy="30" r="28" fill="url(#logoWhiteGrad)" />
          <circle cx="30" cy="30" r="23" fill="none" stroke="white" strokeWidth="2" strokeOpacity="0.3" />
          <path d="M 22 18 L 22 42 L 42 30 Z" fill="#6366f1" />
        </svg>
      </div>
      <div className="hidden sm:block">
        <div className={`font-extrabold ${s.text} ${isLight ? 'text-white' : 'text-gray-800'} leading-none`}>
          Reels
        </div>
        <div className={`font-extrabold ${s.text} ${isLight ? 'text-indigo-200' : 'text-indigo-600'} leading-none`}>
          Generator
        </div>
      </div>
    </Link>
  );
}