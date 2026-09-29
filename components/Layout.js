import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Logo from './Logo';
import ScrollToTop from './ScrollToTop';

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
  {
    href: '/blog',
    label: 'الأقسام',
    icon: '📂',
    dropdown: [
      { href: '/blog?category=هواتف ذكية', label: 'الهواتف الذكية', icon: '📱' },
      { href: '/blog?category=تطبيقات وبرامج', label: 'التطبيقات والبرامج', icon: '💻' },
      { href: '/blog?category=كيف', label: 'كيف', icon: '🛠️' },
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

              {/* ===== أيقونات السوشيال ميديا ===== */}
<div className="flex gap-3 mt-5">
  {/* Facebook */}
  <a
    href="https://www.facebook.com/profile.php?id=61593629871213"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    className="group w-11 h-11 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:scale-110"
  >
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="white"
      className="group-hover:scale-110 transition-transform"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  </a>

  {/* TikTok */}
  <a
    href="https://www.tiktok.com/@haner41ha"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="TikTok"
    className="group w-11 h-11 rounded-full bg-gradient-to-br from-gray-900 to-black hover:from-gray-800 hover:to-gray-900 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-pink-500/50 hover:scale-110 relative overflow-hidden"
  >
    {/* تأثير تيك توك الملون */}
    <span className="absolute inset-0 bg-gradient-to-tr from-cyan-400 via-pink-500 to-red-500 opacity-0 group-hover:opacity-30 transition-opacity"></span>
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="white"
      className="relative group-hover:scale-110 transition-transform"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/nabd_tec"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="group w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-purple-500/50 hover:scale-110 relative overflow-hidden"
    style={{
      background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'
    }}
  >
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="white"
      className="group-hover:scale-110 transition-transform"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  </a>
</div>

            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-6 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} نبض التقنية. جميع الحقوق محفوظة. صُنع بـ ❤️ للمحتوى العربي.</p>
          </div>
                </div>
      </footer>

      {/* زر العودة للأعلى */}
      <ScrollToTop />
    </>
  );
}