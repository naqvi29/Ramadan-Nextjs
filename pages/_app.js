// pages/_app.js
import Head from 'next/head';
import '../styles/global.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ramadan Clock By ARY</title>
        <meta name="description" content="Ramadan Clock By ARY" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* The following meta tags are an attempt to allow CORS.
            Note: These meta tags do not replace proper server-side CORS configuration. */}
        <meta http-equiv="Access-Control-Allow-Origin" content="*" />
        <meta http-equiv="Access-Control-Allow-Methods" content="GET, POST, PUT, DELETE, OPTIONS" />
        <meta http-equiv="Access-Control-Allow-Headers" content="X-Requested-With, Accept, Content-Type, Authorization" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

