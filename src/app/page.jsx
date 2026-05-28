import Hero from "@/components/sections/Hero";
import Why from "@/components/sections/Why";
import About from "@/components/sections/About";
import News from "@/components/sections/News";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Accordion from "@/components/sections/faq/Accordion";
import Programs from "@/components/sections/Programs";

export default function Home() {
  return (
    <>
      <Hero />
      <Why />
      <About />
      <Programs />
      <News />
      <Accordion />
      {/* <Gallery />
      <Testimonials /> */}
    </>
  );
}
