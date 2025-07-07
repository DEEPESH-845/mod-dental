import type { Metadata } from "next";
import Hero from "./components/home/Hero";
import InstagramFeed from "./components/common/InstagramFeed";
import Doctors from "./components/home/Doctors";
import Features from "./components/home/Features";
import Gallery from "./components/home/Gallery";
import Services from "./components/home/Services";

import BespokeDentalStudio from "./components/home/DiagnosticPrevention";

import HeroAppointmentSectionButton from "./components/common/Appointment-Button";


export const metadata: Metadata = {
  title: "Home | MOD DENTAL",
};

export default function Page() {
  return (
    <>
     
     
      <Hero />
      <HeroAppointmentSectionButton/>
      <BespokeDentalStudio/>
      <Doctors />
      <Services />
      <Features />
      <Gallery />
      <InstagramFeed />
      
      
    </>
  );
}
