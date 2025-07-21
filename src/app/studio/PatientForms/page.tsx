import PatientHero from "@/app/components/home/PatientForm/PatientHero";
import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Patient Forms",
	description:
		"Access and complete your patient forms online for a smooth and efficient visit to MOD Dental. Our patient portal allows you to fill out necessary documents at your convenience, ensuring a streamlined check-in process.",
};

const page = () => {
	return (
		<>
			<PatientHero />
		</>
	);
};

export default page;
