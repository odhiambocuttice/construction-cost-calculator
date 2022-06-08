import Head from "next/head";
import Image from "next/image";
import { Calculator } from "../components/Calculator";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Construction Cost Calc</title>
        <meta name="description" content="Construction Cost Calculator" />
        <link rel="icon" href="/icon.svg" className="" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome :)</h1>

        <div className={styles.card}>
          <p className={styles.description}>
            Emmanuel's Construction Cost Calculator
          </p>
        </div>
        <Calculator />
      </main>

      <footer className={styles.footer}>
        <a href="" target="_blank" rel="noopener noreferrer">
          Powered by Emmanuel
          <span className={styles.logo}>
            <Image
              src="/icon.svg"
              alt="Emmanuel's Picture"
              width={100}
              height={16}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}
