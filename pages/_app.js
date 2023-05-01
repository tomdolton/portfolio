import "@/styles/globals.css";
import Head from "next/head";

import { Saira } from "next/font/google";

const saira = Saira({
  subsets: ["latin"],
  variable: "--font-saira",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`${saira.variable} font-sans`}>
        <Component {...pageProps} />;
      </div>
    </>
  );
}
