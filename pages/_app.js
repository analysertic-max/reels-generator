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
    <div className={`${cairo.variable} ${tajawal.variable} font-sans`}>
      <Head>
        <meta name="google-adsense-account" content="ca-pub-XXXXXXXXXXXXXXXX" />
      </Head>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <Component {...pageProps} />
    </div>
  );
}