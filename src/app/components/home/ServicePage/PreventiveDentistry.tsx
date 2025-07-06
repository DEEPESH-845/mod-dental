import Image from "next/image";
import { Button } from "@/app/components/home/ui/Button";
import { libreBaskerville, poppins } from "@/lib/fonts";
import preventiveDentistryImg from "@/../public/assets/PreventiveDenstistry.png";

export default function PreventiveDentistrySection() {
	return (
		<section className="relative py-16 lg:py-20 overflow-hidden">
			{/* White Velvet Background */}
			<div className="absolute inset-0">
				<Image
					src="/assets/White_Velvet.png"
					alt="White velvet background"
					fill
					className="object-cover"
					priority
				/>
			</div>

			{/* Content over background */}
			<div className="relative z-10">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
						{/* Content Section - Left Side */}
						<div className="space-y-6 lg:pr-8">
							{/* Heading */}
							<h2 className={libreBaskerville.className}>
								<span className="text-3xl text-[#2C4F3C] lg:text-4xl font-extralight">
									What is{" "}
								</span>
                                <br></br>
								<span className="text-3xl text-[#B6A66A] lg:text-4xl font-light italic ">
									Preventive Dentistry
								</span>
								<span className="text-3xl text-[#2C4F3C] lg:text-4xl font-light">
									?
								</span>
							</h2>

							{/* Content Paragraphs */}
							<div
								className={
									"space-y-4 text-[#3B3B3B] font-light pt-5 " +
									poppins.className
								}
							>
								<p className="text-base lg:text-lg leading-relaxed">
									Preventive dentistry is the practice of caring for
									your teeth and gums to keep them healthy and free
									from damage. It focuses on early detection, routine
									care, and smart habits that stop problems before they
									start — such as cavities, gum disease, and tooth
									loss. This includes regular dental checkups,
									cleanings, and consistent oral hygiene. It helps
									preserve both your oral and overall health.
								</p>

								<p className="text-base lg:text-lg leading-relaxed">
									At MOD Dentist in Houston, we use a modern approach
									to prevention by combining advanced technology,
									personalized care, and patient education. A strong
									prevention plan is the foundation for a healthy,
									confident smile, and we&apos;re here to help you maintain
									it at every stage of life.
								</p>
							</div>

							{/* CTA Button */}
							<div className="pt-4">
								<Button
									variant="outline"
									className={
										"bg-transparent border-1 border-[#2C4F3C] text-[#2C4F3C] hover:bg-[#284836] hover:text-white px-8 py-[30px] font-[400] tracking-wider uppercase transition-colors duration-200 text-base rounded-sm " +
										poppins.className
									}
								>
									Schedule Today
								</Button>
							</div>
						</div>

						{/* Image Section - Right Side */}
						<div className="relative lg:order-2">
							{/* Image with Border Frame */}
							<div className="relative">
								{/* Border Frame - visible at top-right */}
								<div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#B6A76A] z-0"></div>

								{/* Main Image */}
								<div className="relative z-10 rounded-lg overflow-hidden shadow-lg">
									<Image
										src={
											preventiveDentistryImg || "/Rectangle_98.png"
										}
										alt="Dental care products showing preventive dentistry items"
										width={600}
										height={400}
										className="w-full h-auto object-cover"
										priority
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}