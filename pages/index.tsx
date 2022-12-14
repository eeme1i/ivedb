import type { NextPage } from "next";
import Head from "next/head";
import { Button, GhostButton } from "../components/Button";
import { NavigationLink } from "../components/Navigation/NavigationLink";
import { StandardLink } from "../components/Navigation/StandardLink";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>dope ass app fr</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="space-y-8">
        <section className="h-[80vh] min-h-[32em] flex flex-col justify-center bg-[url('/svg/bg.svg')] bg-cover px-8 bg-center space-y-4">
          <h1 className="text-6xl font-normal font-clashdisplay">
            Your favorites, <br /> in one place, <br /> in high quality.
          </h1>
          <div className="flex space-x-2">
            <Button href="/app" color="white">
              <p>Enter</p>
            </Button>
            <GhostButton href="https://eem.works" color="white">
              <p>Submit</p>
            </GhostButton>
          </div>
        </section>
        <section className="flex flex-col w-full space-y-8 sm:flex-row sm:space-y-0 sm:space-x-8 ">
          <div className="w-full p-4 text-black bg-yellow-300 sm:p-8 min-h-[33vh]">
            <h1 className="text-4xl font-clashdisplay">Disclaimer</h1>
            <p>
              This website is not affiliated with any of the artists or
              companies mentioned on this website. All content is owned by their
              respective owners.
              <br />
              <br />
              For any questions, or content removal, please contact me{" "}
              <StandardLink href="mailto:eeruoh@gmail.com" color="black">
                here
              </StandardLink>
              .
            </p>
          </div>
          <div className="w-full p-4 bg-neutral-900 sm:p-8 min-h-[33vh]">
            <h1 className="text-4xl font-normal font-clashdisplay">About</h1>
            <p>
              This website is built with{" "}
              <StandardLink color="white" href="https://nextjs.org">
                Next.js
              </StandardLink>
              ,{" "}
              <StandardLink color="white" href="https://tailwindcss.com">
                TailwindCSS
              </StandardLink>
              , and TypeScript. The source code is available on{" "}
              <StandardLink color="white" href="https://github.com/eeme1i/fc">
                Github
              </StandardLink>
              .
              <br />
              <br />
              All video and audio is downloaded via YouTube (or similar) using
              the best quality format available. Videos are uploaded in .mp4
              format for ease of use.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
