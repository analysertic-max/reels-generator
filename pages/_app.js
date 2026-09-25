import '../styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="google-adsense-account" content="ca-pub-XXXXXXXXXXXXXXXX" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}