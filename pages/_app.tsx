import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SiteLayout } from "../components/Layouts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full h-full min-h-screen text-base font-medium text-white bg-black font-clashgrotesk">
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </div>
  );
}

export default MyApp;
