import type { Metadata } from "next";
import Hero from "./components/home/Hero";
import InstagramFeed from "./components/common/InstagramFeed";
import Doctors from "./components/home/Doctors";
import Features from "./components/home/Features";
import Gallery from "./components/home/Gallery";
import Services from "./components/home/Services";
import Testimonials from "./components/home/Testimonials";
import BespokeDentalStudio from "./components/home/DiagnosticPrevention";


export const metadata: Metadata = {
  title: "Home | MOD DENTAL",
};

export default function Page() {
  return (
    <>
     
      <Hero />
      <BespokeDentalStudio/>
      <Doctors />
      <Services />
      <Features />
      <Gallery />
      <InstagramFeed />
      <Testimonials />
    </>
  );
}
