import FinanceHero from "@/app/components/home/Finance/Hero";
import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Finance",
	description:
		"Prepare for financial aspects of your dental care with our comprehensive guide. Learn about payment options, insurance coverage, and financial planning for your dental treatments.",
};

const page = () => {
	return (
		<>
			<FinanceHero />
		</>
	);
};

export default page;
