import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Layout({ children, title = 'مولد منشورات من Reels', description = 'حوّل أي Reel إلى منشورات جاهزة للنشر في مجموعات فيسبوك بالذكاء الاصطناعي' }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const fullTitle = `${title} | Reels Generator`;

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Reels Generator" />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🎬</span>
            <span className="font-bold text-gray-800 text-lg">Reels Generator</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition">
              الرئيسية
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition">
              المدونة
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition">
              من نحن
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition">
              اتصل بنا
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-600 text-2xl"
            aria-label="القائمة"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="flex flex-col px-4 py-3 space-y-2 text-sm">
              <Link href="/" className="text-gray-600 hover:text-blue-600 py-2">الرئيسية</Link>
              <Link href="/blog" className="text-gray-600 hover:text-blue-600 py-2">المدونة</Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 py-2">من نحن</Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 py-2">اتصل بنا</Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About */}
            <div>
              <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                <span>🎬</span> Reels Generator
              </h3>
              <p className="text-sm leading-relaxed">
                أداة ذكية لتحويل فيديوهات Reels إلى منشورات تفاعلية جاهزة للنشر في مجموعات فيسبوك،
                باستخدام أحدث تقنيات الذكاء الاصطناعي.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold mb-3">روابط سريعة</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:text-white transition">الرئيسية</Link></li>
                <li><Link href="/blog" className="hover:text-white transition">المدونة</Link></li>
                <li><Link href="/about" className="hover:text-white transition">من نحن</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">اتصل بنا</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white font-bold mb-3">قانوني</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="hover:text-white transition">سياسة الخصوصية</Link></li>
                <li><Link href="/terms" className="hover:text-white transition">الشروط والأحكام</Link></li>
                <li><Link href="/disclaimer" className="hover:text-white transition">إخلاء المسؤولية</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-bold mb-3">تواصل معنا</h3>
              <ul className="space-y-2 text-sm">
                <li>📧 contact@reels-generator.app</li>
                <li>💬 دعم فني 24/7</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
            <p>© {new Date().getFullYear()} Reels Generator. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </>
  );
}