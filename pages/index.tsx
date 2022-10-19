import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="h-[24em] flex flex-col justify-center">
          <h1 className="text-6xl font-normal font-clashdisplay">
            Your favorites, <br /> in one place, <br /> in high quality.
          </h1>
        </section>
      </main>
    </div>
  );
};

export default Home;
