import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Metrics } from "@/components/sections/Metrics";
import { Mission } from "@/components/sections/Mission";
import { Portfolio } from "@/components/sections/Portfolio";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Mission />
        <Portfolio />
        <Metrics />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
