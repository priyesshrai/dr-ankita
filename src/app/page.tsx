import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/Marquee";
import OtherFacilityes from "@/components/OtherFacilityes";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <OtherFacilityes />
      <MarqueeStrip />
      <Contact />
    </main>
  );
}
