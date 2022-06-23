import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <Link href="/1234">Click</Link>
      </main>
    </div>
  );
}
