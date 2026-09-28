import '../styles/globals.css';
import Head from 'next/head';
import Script from 'next/script';
import { Cairo, Tajawal } from 'next/font/google';

// تحميل الخطوط
const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-cairo',
  display: 'swap',
});

const tajawal = Tajawal({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-tajawal',
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>نبض التقنية | أخبار ومقالات وأدوات تقنية</title>
        <meta name="description" content="مدونة نبض التقنية - أخبار ومقالات وأدوات في عالم التكنولوجيا والذكاء الاصطناعي" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* === الخلفية التقنية === */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        
        {/* 1. تدرج بنفسجي/أزرق أساسي */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/40 to-slate-950"></div>
        
        {/* 2. توهج بنفسجي في الزاوية العلوية اليسرى */}
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]"></div>
        
        {/* 3. توهج أزرق في الزاوية السفلية اليمنى */}
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"></div>
        
        {/* 4. توهج وردي خفيف في المنتصف */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-600/10 rounded-full blur-[150px]"></div>
        
        {/* 5. نمط الشبكة العصبية (SVG خفيف) */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a855f7' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        {/* 6. خطوط دائرية متوهجة */}
        <div className="absolute top-20 right-20 w-64 h-64 border border-purple-500/10 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 border border-blue-500/10 rounded-full"></div>

        {/* 7. نقاط النبض المتوهجة */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-fuchsia-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
      </div>

      {/* === المحتوى === */}
      <main className={`${cairo.variable} ${tajawal.variable} font-sans relative z-10`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}