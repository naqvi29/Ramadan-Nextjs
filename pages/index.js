import Head from 'next/head';
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className={styles.fullWidthPage}>
      <Head>
        <title>Full Width Image</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.imageContainer}>
        <img src="/index.jpg" alt="Full Width" className="img-fluid w-100" />
      </div>
      
    </div>
  );
}
