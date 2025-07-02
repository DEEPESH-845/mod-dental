import Image, { StaticImageData } from "next/image";
import { Button } from "@/app/components/home/ui/Button";
import { libreBaskerville, poppins } from "@/lib/fonts";

interface DiagnosticPreventionProps {
	readonly imgRight?: boolean;
	readonly imgSrc?: StaticImageData;
	readonly title?: string;
	readonly description1?: string;
	readonly description2?: string;
}

export default function DiagnosticPrevention({
	imgRight = false,
	imgSrc,
	title = "TBD",
	description1,
	description2,
}: DiagnosticPreventionProps) {
	return (
		<section className="bg-[#F3EFE9] py-16 lg:py-20">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
					{/* Image Section */}
					<div
						className={`relative ${
							imgRight ? "lg:order-2" : "lg:order-1"
						}`}
					>
						{/* Image with Border Frame */}
						<div className="relative">
							{/* Border Frame - visible at top-left or top-right based on imgRight */}
							<div
								className={`absolute -top-4 w-full h-full border-2 border-[#B6A76A] z-0 ${
									imgRight ? "-right-4" : "-left-4"
								}`}
							></div>

							{/* Main Image */}
							<div className="relative z-10 rounded-lg overflow-hidden shadow-lg">
								<Image
									src={imgSrc || "/Rectangle_98.png"}
									alt="Dental examination showing preventive care with dental mirror"
									width={600}
									height={400}
									className="w-full h-auto object-cover"
									priority
								/>
							</div>
						</div>
					</div>

					{/* Content Section */}
					<div
						className={`space-y-6 ${
							imgRight ? "lg:order-1 lg:pr-8" : "lg:order-2 lg:pl-8"
						}`}
					>
						{/* Heading */}
						<h2
							className={
								"text-3xl text-[#2C4F3C] lg:text-4xl font-light italic underline decoration-[#2C4F3C] decoration-[1.5px] underline-offset-[16px] " +
								libreBaskerville.className
							}
						>
							{title}
						</h2>

						{/* Content Paragraphs */}
						<div
							className={
								"space-y-4 text-[#3B3B3B] font-light pt-5" + " " + poppins.className
							}
						>
							<p className="text-base lg:text-lg leading-relaxed">
								{description1}
							</p>

							<p className="text-base lg:text-lg leading-relaxed">
								{description2}
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
				</div>
			</div>
		</section>
	);
}