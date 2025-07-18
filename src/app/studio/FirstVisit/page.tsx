import FirstVisitHero from "@/app/components/home/FirstVisitGuide/FirstVisitHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "First Visit",
	description:
		"Prepare for your first visit to MOD Dental with our comprehensive guide. Learn what to expect, how to prepare, and what documents to bring for a smooth experience.",
};

const page = () => {
	return (
		<>
			<FirstVisitHero />
		</>
	);
};

export default page;
