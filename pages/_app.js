// pages/_app.js
import '../styles/global.css'; // Adjust the path if your CSS file is in another folder



export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
