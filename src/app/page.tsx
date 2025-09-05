import About from "@/components/About";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
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
      <Blogs/>
      <Contact />
      <Footer />
    </main>
  );
}
