"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Check } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/Button";
import { raleway, poppins, libreBaskerville } from "@/lib/fonts";

const FirstAppointment = () => {
	const appointmentSteps = [
		{
			id: 1,
			title: "Warm Welcome & Introduction",
			description:
				"From the front desk to your dental chair, our friendly team is excited to meet you and learn about your needs.",
		},
		{
			id: 2,
			title: "One-on-One Consultation",
			description:
				"We'll take the time to understand your medical history, past dental experiences, and any current concerns you may have.",
		},
		{
			id: 3,
			title: "Comprehensive Exam & Digital X-Rays",
			description:
				"We use the latest technology to evaluate your oral health thoroughly, no discomfort, no rush, just precise, thoughtful care.",
		},
		{
			id: 4,
			title: "Personalized Care Plan",
			description:
				"Based on your exam, we'll craft a treatment plan tailored just for you, aligned with your goals, comfort level, and schedule.",
		},
	];

	const router = useRouter();

	const handleMeetDoctors = () => {
		router.push("/bio/doctors");
	};

	const handleRequestAppointment = () => {
		router.push("/contact");
	};

	return (
		<section className=" relative bg-white py-20 px-6">
			{/* Background Image */}
			<div className=" inset-0">
				<Image
					src="/assets/images/White_velvet.png"
					alt="white velvet background"
					fill
					className=" object-cover"
					quality={1}
					style={{ filter: "brightness(1.7)", objectPosition: "left" }}
					placeholder="blur"
					blurDataURL="/assets/images/White_velvet.png"
					sizes="(max-width: 768px) 50vw, 25vw"
					priority
				/>
			</div>
			<div className="  max-w-7xl mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
					{/* Left Column - Content */}
					<div className="lg:col-span-7 space-y-10">
						{/* Header Section */}
						<div className="space-y-3">
							<h2
								className={`text-5xl font-light text-dental-green leading-tight tracking-wide ${raleway.className}`}
							>
								What to Expect
							</h2>
							<h3
								className={`text-4xl font-normal text-dental-gold-accent leading-relaxed ${libreBaskerville.className}`}
							>
								During your First Appointment
							</h3>
							<p
								className={`text-gray-600 text-lg leading-relaxed max-w-lg pt-2 ${poppins.className}`}
							>
								Your first visit is all about you, your comfort, your concerns
								and your dental health.
							</p>
						</div>

						{/* Appointment Steps */}
						<div className="max-w-4xl mx-auto py-6 px-6 grid gap-6">
							{appointmentSteps.map((step) => (
								<div
									key={step.id}
									className="flex items-start border-3 border-solid border-dental-gold space-x-4 p-4"
									style={{
										borderRadius: "8px",
										boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
									}}
								>
									<div
										className="flex-shrink-0"
										style={{
											width: "24px",
											height: "24px",
											backgroundColor: "#FFF7E6",
											border: "2px solid #F5D27A",
											borderRadius: "4px",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
										}}
									>
										<Check
											className="text-[#D69D2E]"
											size={16}
											strokeWidth={2.5}
										/>
									</div>
									<div>
										<h4
											className="text-dental-green font-medium"
											style={{ fontSize: "16px", lineHeight: "24px" }}
										>
											{step.title}
										</h4>
										<p
											className="text-gray-600"
											style={{
												fontSize: "14px",
												lineHeight: "20px",
												marginTop: "12px",
											}}
										>
											{step.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Right Column - Image */}
					<div className="lg:col-span-5 relative">
						<div className="relative">
							{/* Main Image Container */}
							<div className=" overflow-hidden ">
								<div className="aspect-[3/4]">
									<Image
										src="/assets/images/FA.png"
										alt="Patient consultation during first dental appointment"
										fill
										className="object-cover shadow-xl rounded-2xl"
										sizes="(max-width: 768px) 100vw, 40vw"
										priority
									/>
								</div>
							</div>

							{/* Decorative Elements */}
							<div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full opacity-30 -z-10"></div>
							<div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full opacity-20 -z-10"></div>
						</div>
						{/* Call-to-Action Buttons */}
						<div className="flex flex-col sm:flex-row gap-4 pt-10">
							<Button
								onClick={handleRequestAppointment}
								className="border border-[#2C4F3C] bg-[#2C4F3C] text-white hover:bg-[#3b614c]  px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-medium rounded-md transition-colors duration-200 flex items-center gap-2 whitespace-nowrap"
							>
								REQUEST AN APPOINTMENT
							</Button>
							<button
								onClick={handleMeetDoctors}
								className="border border-gray-400 text-gray-600 hover:text-white hover:bg-[#2C4F3C] px-6 py-3 font-medium rounded-md transition-colors duration-200 flex items-center gap-2 whitespace-nowrap "
							>
								MEET OUR DOCTORS
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FirstAppointment;
