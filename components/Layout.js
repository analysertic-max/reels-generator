import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Logo from './Logo';

export default function Layout({
  children,
  title = 'نبض التقنية',
  description = 'آخر الأخبار + أدوات ذكية في منصة واحدة',
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  const fullTitle = `${title} | نبض التقنية`;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
  { href: '/', label: 'الرئيسية', icon: '🏠' },
  {
    href: '/blog',
    label: 'الأخبار',
    icon: '📰',
    dropdown: [
      { href: '/blog?category=تكنولوجيا', label: 'تكنولوجيا', icon: '💻' },
      { href: '/blog?category=سوشيال ميديا', label: 'سوشيال ميديا', icon: '📱' },
      { href: '/blog?category=تسويق', label: 'تسويق', icon: '📈' },
      { href: '/blog?category=تصميم', label: 'تصميم', icon: '🎨' },
      { href: '/blog?category=ذكاء اصطناعي', label: 'ذكاء اصطناعي', icon: '🤖' },
    ]
  },
  { href: '/tools', label: 'الأدوات', icon: '🛠️' },
  { href: '/about', label: 'من نحن', icon: 'ℹ️' },
  { href: '/contact', label: 'تواصل معنا', icon: '📧' },
];

  const isActive = (href) => router.pathname === href;

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="نبض التقنية" />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </Head>

      {/* ===== Header متدرج ===== */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'shadow-xl py-2' : 'shadow-lg py-3'
        }`}
      >
<div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 via-purple-600/90 to-pink-600/90 backdrop-blur-md"></div>        {scrolled && (
          <div className="absolute inset-0 bg-black/20 backdrop-blur-md"></div>
        )}

        <div className="relative max-w-7xl mx-auto px-4 flex items-center justify-between">
          <Logo size="md" variant="light" />

          {/* Desktop Menu */}
<nav className="hidden md:flex items-center gap-1">
  {navLinks.map((link) => (
    <div key={link.href} className="relative group">
      <Link
        href={link.href}
        className={`px-3 py-2 rounded-full text-sm font-bold transition-all duration-200 inline-flex items-center gap-1 ${
          isActive(link.href)
            ? 'bg-white text-indigo-700 shadow-md'
            : 'text-white hover:bg-white/20'
        }`}
      >
        <span>{link.icon}</span>
        <span>{link.label}</span>
        {link.dropdown && (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        )}
      </Link>

      {/* Dropdown */}
      {link.dropdown && (
        <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          {link.dropdown.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition font-medium"
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  ))}
</nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/tools"
              className="bg-white text-indigo-700 px-5 py-2 rounded-full text-sm font-bold hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              ✨ جرّب الأدوات
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 transition"
            aria-label="القائمة"
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden relative overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <nav className="bg-white/95 backdrop-blur-md border-t border-white/20 px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-bold transition ${
                  isActive(link.href)
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="mr-2">{link.icon}</span>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <div className="h-20" />

      <main className="min-h-screen relative z-10">
  {children}
</main>

      {/* ===== Footer ===== */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950 text-gray-300 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <svg width="40" height="40" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="footerPulse" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#818cf8" />
                      <stop offset="50%" stopColor="#a78bfa" />
                      <stop offset="100%" stopColor="#f472b6" />
                    </linearGradient>
                  </defs>
                  <circle cx="30" cy="30" r="28" fill="url(#footerPulse)" />
                  <path
                    d="M 14 30 L 20 30 L 24 22 L 28 38 L 32 26 L 36 34 L 40 30 L 46 30"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
                <div>
                  <div className="font-extrabold text-white leading-none">نبض</div>
                  <div className="font-extrabold bg-gradient-to-r from-indigo-300 to-pink-300 bg-clip-text text-transparent leading-none">
                    التقنية
                  </div>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-400">
                آخر الأخبار التقنية + أدوات ذكية مجانية في منصة عربية واحدة.
              </p>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full"></span>
                روابط سريعة
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition inline-flex items-center gap-2">
                    <span className="text-xs">→</span> الرئيسية
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition inline-flex items-center gap-2">
                    <span className="text-xs">→</span> الأخبار
                  </Link>
                </li>
                <li>
                  <Link href="/tools" className="text-gray-400 hover:text-white transition inline-flex items-center gap-2">
                    <span className="text-xs">→</span> الأدوات
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition inline-flex items-center gap-2">
                    <span className="text-xs">→</span> من نحن
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full"></span>
                قانوني
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white transition inline-flex items-center gap-2">
                    <span className="text-xs">→</span> سياسة الخصوصية
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white transition inline-flex items-center gap-2">
                    <span className="text-xs">→</span> الشروط والأحكام
                  </Link>
                </li>
                <li>
                  <Link href="/disclaimer" className="text-gray-400 hover:text-white transition inline-flex items-center gap-2">
                    <span className="text-xs">→</span> إخلاء المسؤولية
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full"></span>
                تواصل معنا
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 text-gray-400">
                  <span>📧</span> contact@nabd-tech.app
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <span>💬</span> دعم فني 24/7
                </li>
              </ul>

              <div className="flex gap-2 mt-4">
                {['📘', '🐦', '📷', '💼'].map((icon, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer transition"
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-6 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} نبض التقنية. جميع الحقوق محفوظة. صُنع بـ ❤️ للمحتوى العربي.</p>
          </div>
        </div>
      </footer>
    </>
  );
}