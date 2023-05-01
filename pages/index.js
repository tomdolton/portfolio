import Image from "next/image";
import { Saira } from "next/font/google";
import Skills from "@/components/Skills";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";

const saira = Saira({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={`min-h-screen text-white flex-col ${saira.className}`}>
        <Banner />

        <div className="container">
          <h1 className="text-4xl mb-48 pb-48">Portfolio</h1>
          <div className="py-48 my-48"></div>
          <Skills />
        </div>
      </main>
    </>
  );
}
