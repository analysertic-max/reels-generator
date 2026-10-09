import '../styles/globals.css';
import Head from 'next/head';
import Script from 'next/script';
import { Cairo, Tajawal } from 'next/font/google';

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
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="1Cv4XDA7NX1_as_XjjEvzSoelqWSMPtGzMmBB6_pBA0" />

       
      </Head>

      {/* ===== Google Analytics (gtag.js) ===== */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-VMD7X77GTQ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-VMD7X77GTQ');
        `}
      </Script>

      

      {/* ===== منع وميض الوضع الليلي ===== */}
      <Script id="dark-mode-init" strategy="beforeInteractive">
        {`
          try {
            const theme = localStorage.getItem('theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (theme === 'dark' || (!theme && prefersDark)) {
              document.documentElement.classList.add('dark');
            }
          } catch (e) {}
        `}
      </Script>

      <Component {...pageProps} />
    </div>
  );
}