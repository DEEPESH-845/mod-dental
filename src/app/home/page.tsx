import type { Metadata } from "next";
import About from "../components/home/About";
import Doctors from "../components/home/Doctors";
import Features from "../components/home/Features";
import Gallery from "../components/home/Gallery";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Testimonials from "../components/home/Testimonials";
import InstagramFeed from "../components/common/InstagramFeed";

export const metadata: Metadata = {
  title: "Home",
};

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Doctors />
      <Services />
      <Features />
      <Gallery />
      <InstagramFeed />
      <Testimonials />
    </>
  );
}
