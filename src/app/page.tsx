import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Stats from "@/components/site/Stats";
import Capabilities from "@/components/site/Capabilities";
import Process from "@/components/site/Process";
import Testimonials from "@/components/site/Testimonials";
import FAQ from "@/components/site/FAQ";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Capabilities />
        <Process />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
