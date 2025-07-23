// !Author: Himanish Puri

import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import receptionist from "@/../public/assets/images/receptionist.png";
import StudioGuide, {
	type StudioGuideProps,
} from "../components/home/Studio/StudioCards";
import firstvisitguide from "@/../public/assets/images/firstvisitguide.png";
import insurance from "@/../public/assets/images/insurance.png";
import patientform from "@/../public/assets/images/patientform.png";
import FeelLikeHome from "../components/home/Studio/FeelLikeHome";
import Link from "next/link";
import { poppins } from "@/lib/fonts";

export const metadata: Metadata = {
	title: "studio",
	keywords: ["dental studio", "dental design", "dental aesthetics"],
	description:
		"At MOD Dental, our studio is where creativity meets dental expertise, crafting personalized solutions for your unique smile needs.",
};

const studioCardsData: StudioGuideProps[] = [
	{
		imgSrc: firstvisitguide,
		imgRight: false,
		number: "01",
		title: "First Visit Guide",
		description:
			"We know first visits can bring a mix of emotions — curiosity, excitement, maybe even a little nervousness. That's why our First Visit Guide is here to walk you through everything, from the initial greeting to what happens in the chair. We make it easy, predictable, and comfortable — so you can feel confident and relaxed before, during, and after your appointment.",
		buttonText: "YOUR FIRST VISIT, MADE SPECIAL",
		linkto: "/studio/first-visit",
	},
	{
		imgSrc: insurance,
		imgRight: true,
		number: "02",
		title: "Insurance & Financing",
		description:
			"Navigating dental insurance and payments shouldn't be stressful. That's why we've made it simple and transparent. We accept most major insurance plans and offer flexible financing solutions tailored to your needs. Whether it's a routine cleaning or a bigger procedure, you'll know exactly where you stand — no surprises, no confusion.",
		buttonText: "INSURANCE & PAYMENT OPTIONS",
		linkto: "/studio/Finance",
	},
	{
		imgSrc: patientform,
		imgRight: false,
		number: "03",
		title: "Patient Forms",
		description:
			"Say goodbye to the waiting room paperwork. With our secure digital forms, you can complete everything at your own pace, from the comfort of home—well before your visit. It's one more way we make your experience smooth, thoughtful, and stress-free.",
		buttonText: "COMPLETE PATIENT FORMS ONLINE",
		linkto: "/studio/PatientForms",
	},
];

export default function DentalStudioHero() {
	return (
		<>
			<div className="relative min-h-screen w-full overflow-hidden">
				{/* Background Image */}
				<Image
					src={receptionist}
					alt="Modern dental office reception area"
					fill
					className="object-cover"
					priority
					quality={100}
				/>

				{/* Dark Overlay */}
				<div className="absolute inset-0 bg-black/40" />

				{/* Content */}
				<div className="relative z-10 flex min-h-screen items-center">
					<div className="container mx-auto px-6 lg:px-8">
						<div className="max-w-2xl">
							{/* Main Heading */}
							<h1
								className="mb-4 text-5xl font-normal leading-tight text-white lg:text-6xl xl:text-7xl"
								style={{ fontFamily: "Raleway, sans-serif" }}
							>
								Explore
								<br />
								Our Studio
							</h1>

							{/* Subheading */}
							<h2
								className="mb-8 text-2xl font-normal italic text-white lg:text-3xl xl:text-4xl"
								style={{ fontFamily: "Libre Baskerville, serif" }}
							>
								A Space Designed to Make You Smile
							</h2>

							{/* Body Text */}
							<div
								className="mb-12 max-w-lg space-y-4 text-sm leading-relaxed text-white lg:text-base"
								style={{ fontFamily: "Poppins, sans-serif" }}
							>
								<p>
									Our studio is thoughtfully designed to feel more like a
									retreat than a dental office. From calming colors to a clean,
									modern layout, every detail is meant to help you relax, feel
									at home and know you&apos;re in good hands.
								</p>
								<p>
									It&apos;s a space where comfort, care, and beautiful smiles
									come together.
								</p>
							</div>

							<Link href={"/appointment-form"} passHref>
								<Button
									className={
										"bg-[#2C4F3C] border-1 border-[#2C4F3C] text-white hover:bg-[#5e9c5c] hover:border-[#24a05b] px-4 py-3 text-sm font-light uppercase tracking-wider transition-colors  sm:px-5 sm:py-7 sm:text-base rounded-sm" +
										" " +
										poppins.className
									}
								>
									Request an Appointment
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<FeelLikeHome />
			{studioCardsData.map((card, index) => (
				<StudioGuide key={index * 23} {...card} />
			))}
		</>
	);
}
