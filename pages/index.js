import Skills from "@/components/Skills";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className={`min-h-screen text-white flex-col`}>
        <Banner />

        <About />

        <Projects />

        <Skills />

        <Contact />
      </main>

      <Footer />
    </>
  );
}
