import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/landing/Hero";
import Trusted from "@/components/landing/Trusted";
import Stats from "@/components/landing/Stats";
import Services from "@/components/landing/Services";
import Industries from "@/components/landing/Industries";
import Portfolio from "@/components/landing/Portfolio";
import WhyChoose from "@/components/landing/WhyChoose";
import CTA from "@/components/landing/CTA";
import Contact from "@/components/landing/Contact";
import Testimonials from "@/components/landing/Testimonials";
import About from "@/components/landing/About";
import BusinessSolutions from "@/components/landing/BusinessSolutions";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Trusted />
      <Stats />
      <About />
      <Services />
      <Industries />
      <Portfolio />
      <BusinessSolutions />
      <WhyChoose />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}