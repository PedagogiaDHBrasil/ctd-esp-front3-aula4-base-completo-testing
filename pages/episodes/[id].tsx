import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

export async function getStaticPaths(): Promise<any> {
  const episodes = await fetch("https://rickandmortyapi.com/api/episode").then(
    (res) => {
      return res.json();
    }
  );
  const paths = episodes.results.map((e: any) => ({
    params: {
      id: `${e.id}`,
    },
  }));
  return {
    paths,
    fallback: true, // false or 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const url = "https://rickandmortyapi.com/api/episode/" + params?.id;
  const episode = await fetch(url).then((res) => {
    return res.json();
  });
  console.log(episode);
  return {
    props: {
      id: params?.id,
      episode: episode,
    },
    revalidate: 60,
  };
};

type Props = {
  id: string;
  episode: any;
};

const EpisodePage: NextPage<Props> = ({ id, episode }) => {
  if (!id) return <></>;
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Rick and Morty Episode: {episode.name} - {episode.episode}
        </title>
        <meta name="description" content="The episode description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Rick and Morty Episode: {episode.name} - {episode.episode}
        </h1>
      </main>
    </div>
  );
};

export default EpisodePage;
