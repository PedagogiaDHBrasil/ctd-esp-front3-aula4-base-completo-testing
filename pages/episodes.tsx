import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export const getStaticProps: GetStaticProps = async () => {
  const episodes = await fetch("https://rickandmortyapi.com/api/episode").then(
    (res) => {
      return res.json();
    }
  );
  return {
    props: {
      episodes: episodes.results,
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 10 seconds
      revalidate: 10, // In seconds
    },
  };
};

type Props = {
  episodes: any;
};

const EpisodesPage: NextPage<Props> = ({ episodes }) => {
  // const [episodes, setEpisodes] = useState([]);

  // const fetchEpisodes = async () => {
  //   const episodes = await fetch("https://rickandmortyapi.com/api/episode").then((res) => {
  //     return res.json()
  //   });
  //   console.log(episodes);
  //   return episodes.results;
  // }

  // useEffect(() => {
  //   fetchEpisodes().then(e => setEpisodes(e));
  // }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Rick and Morty Episodes</title>
        <meta name="description" content="The entire episode list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Rick and Morty s Episodes</h1>

        <div className={styles.grid}>
          {episodes.map((e: any) => (
            <a className={styles.card} key={e.id}>
              <h2>
                {e.name} - {e.episode} &rarr;
              </h2>
              <p>{e.air_date}</p>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
};

export default EpisodesPage;
