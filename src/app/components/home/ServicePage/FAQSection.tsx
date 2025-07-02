"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/app/components/home/ui/Button";
import { libreBaskerville, poppins, raleway } from "@/lib/fonts";

const faqData = [
	{
		id: 1,
		question: "How often should I visit the dentist for preventive care?",
		answer:
			"For most patients, we recommend visiting every 6 months for routine cleanings and checkups. However, some patients with specific oral health conditions may need more frequent visits. During your consultation, we'll create a personalized schedule that's right for you.",
	},
	{
		id: 2,
		question: "Are dental x-rays safe?",
		answer:
			"Yes, dental x-rays are very safe. Modern digital x-rays use significantly less radiation than traditional film x-rays. The amount of radiation exposure is minimal and comparable to the natural background radiation you're exposed to daily. We only take x-rays when necessary for diagnosis and treatment planning.",
	},
	{
		id: 3,
		question: "What can I do at home to maintain good oral health?",
		answer:
			"Maintaining good oral health at home involves brushing twice daily with fluoride toothpaste, flossing daily, using an antimicrobial mouthwash, eating a balanced diet low in sugary snacks, and avoiding tobacco products. Regular home care combined with professional cleanings is the best way to prevent dental problems.",
	},
];

export default function FAQSection() {
	const [openFAQ, setOpenFAQ] = useState<number | null>(null);

	const toggleFAQ = (id: number) => {
		setOpenFAQ(openFAQ === id ? null : id);
	};

	return (
		<section>
			{/* Full-width FAQ Title Section with White Background */}
			<div className="bg-white w-full">
				<div className="container px-4 sm:px-6 lg:px-8 pt-16 pb-3 flex justify-start items-start">
					<h2 className={"text-4xl lg:text-6xl font-light text-[#2C4F3C]" + " " + raleway.className}>
						FAQs
					</h2>
				</div>
			</div>

			{/* Main Content Area with Beige Background */}
			<div className="bg-[#F3EFE9] py-12 lg:py-16">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-32 lg:gap-36">
						{/* FAQ Items - Takes up 2/3 of the width on desktop */}
						<div className="lg:col-span-2 space-y-5">
							{faqData.map((faq) => (
								<div
									key={faq.id}
									className="border-b border-gray-300 pb-4"
								>
									<button
										onClick={() => toggleFAQ(faq.id)}
										className="w-full flex items-center justify-between text-left py-4 hover:text-gray-600 transition-colors duration-200"
										aria-expanded={openFAQ === faq.id}
										aria-controls={`faq-answer-${faq.id}`}
									>
										<span className="text-base lg:text-lg text-[#3B3B3B] font-normal pr-4">
											{faq.question}
										</span>
										{openFAQ === faq.id ? (
											<ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
										) : (
											<ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
										)}
									</button>
									{openFAQ === faq.id && (
										<div
											id={`faq-answer-${faq.id}`}
											className="mt-3 pb-4 text-gray-600 text-sm lg:text-base leading-relaxed"
										>
											{faq.answer}
										</div>
									)}
								</div>
							))}
						</div>

						{/* Have More Questions Section - White Square Box on Right */}
						<div className="lg:col-span-1">
							<div className="bg-white p-8 lg:p-10 h-full flex flex-col justify-center space-y-6 shadow-sm">
								<div className="space-y-4 text-center">
									<h3 className={"text-2xl lg:text-3xl font-light italic text-gray-800 leading-tight" + " " + libreBaskerville.className}>
										Have more questions?
									</h3>
									<p className={"text-gray-600 text-sm font-light lg:text-base leading-relaxed" + " " + poppins.className}>
										Give us a call to speak with one of our friendly
										team members, and schedule a consultation with Dr.
										Neha.
									</p>
								</div>

								<div className="flex justify-center pt-2">
									<Button
										onClick={() => window.location.href = "tel:+18327625635"}
										variant="outline"
										className="bg-white text-gray-700 border-[#2C4F3C] hover:bg-[#284836] hover:text-white p-6  py-7 font-medium tracking-wide transition-colors duration-200 w-full max-w-xs text-lg"
										size="lg"
									>
										CALL +1 (832) 762-5635
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}