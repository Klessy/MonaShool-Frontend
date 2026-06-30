import Hero from "@/components/sections/Hero";
import Why from "@/components/sections/Why";
import About from "@/components/sections/About";
import News from "@/components/sections/News";
import QuickStats from "@/components/sections/QuickStats";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Accordion from "@/components/sections/faq/Accordion";
import Programs from "@/components/sections/Programs";
import SchoolFamily from "@/components/sections/SchoolFamily";
import GraduationGallery from "@/components/sections/GraduationGallery";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <QuickStats /> */}
      <Why />
      <About />
      <Programs />
      <News />
      <GraduationGallery />
      <SchoolFamily />
      <Accordion />
      {/* <Gallery />
      <Testimonials /> */}
    </>
  );
}
