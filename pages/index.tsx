import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rick and Morty Blog</title>
        <meta name="description" content="Un blog fantastico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Rick and Morty</h1>

        <div className={styles.grid}>
          <Link href="/episodes" className={styles.card}>
            <>
              <h2>Episodes &rarr;</h2>
              <p>View episodes</p>
            </>
          </Link>

          <Link href="/characters" className={styles.card}>
            <>
              <h2>Characters &rarr;</h2>
              <p>View characters</p>
            </>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
