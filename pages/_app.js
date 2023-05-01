import "@/styles/globals.css";

import { Saira } from "next/font/google";

const saira = Saira({
  subsets: ["latin"],
  variable: "--font-saira",
});

export default function App({ Component, pageProps }) {
  return <Component className={saira.variable} {...pageProps} />;
}
