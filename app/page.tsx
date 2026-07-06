import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/landing/Hero";
import Stats from "@/components/landing/Stats";
import Services from "@/components/landing/Services";
import Industries from "@/components/landing/Industries";
import Portfolio from "@/components/landing/Portfolio";
import WhyChoose from "@/components/landing/WhyChoose";
import CTA from "@/components/landing/CTA";
import Contact from "@/components/landing/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Industries />
      <Portfolio />
      <WhyChoose />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}