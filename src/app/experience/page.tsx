import type { Metadata } from "next";
import ExperienceHero from "../components/home/Experience/ExperienceHero";
import MoreThanDentistryHome from "../components/home/Experience/MoreThanDentistry";

export const metadata: Metadata = {
	title: "Our experience",
	keywords: ["dental experience", "patient care", "dental clinic"],
	description:
		"At MOD Dental, we prioritize your comfort and satisfaction, ensuring a seamless and enjoyable dental experience from start to finish.",
};
export default function Page() {
	return (
		<>
			<ExperienceHero />
			<MoreThanDentistryHome />
		</>
	);
}
