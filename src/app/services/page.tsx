'use client';

import ActionCards from "@/app/components/home/ServicePage/ActionCards";
import FAQSection from "@/app/components/home/ServicePage/FAQSection";
// import Footer from "@/app/components/home/Footer";
import PreventiveDentistry from "@/app/components/home/ServicePage/PreventiveDentistry";
import ServiceHero from "@/app/components/home/ServicePage/ServiceHero";
import ServicesProvided from "@/app/components/home/ServicePage/ServiceProvided";


export default function Home() {
	return (
		<main>
			<ServiceHero />
			<ActionCards />
			<PreventiveDentistry />
			<ServicesProvided />
			<FAQSection />
			
		   
		</main>
	);
}