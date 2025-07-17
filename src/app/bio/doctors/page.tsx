import Doctors from "@/app/components/home/Doctors";
import DoctorsHero from "@/app/components/home/DoctorsPage/DoctorsHero";
import Education from "@/app/components/home/DoctorsPage/Education";
import Statistics from "@/app/components/home/DoctorsPage/Statistics";
import Gallery from "@/app/components/home/Gallery";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Doctors",
	description:
		"Meet our experienced dental team dedicated to providing exceptional care and expertise for your oral health needs.",
};
export default function Home() {
	return (
		<>
			<DoctorsHero />
			<Doctors />
			<Statistics />
			<Education />
			<Gallery />
		</>
	);
}
