import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SiteLayout } from "../components/Layouts";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div className="w-full h-full min-h-screen text-base font-normal text-white bg-black font-clashgrotesk">
      <SiteLayout>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
          }}
        >
          <Component {...pageProps}></Component>
        </motion.div>
      </SiteLayout>
    </div>
  );
}

export default MyApp;
