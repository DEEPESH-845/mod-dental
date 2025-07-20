import Image, { type StaticImageData } from "next/image";
import { Button } from "@/app/components/home/ui/Button";
import { inter, poppins, raleway } from "@/lib/fonts";
import greenvelvet from "@/../public/assets/images/Green_Velvet.png";
import Link from "next/link";

export interface StudioGuideProps {
	readonly imgRight?: boolean;
	readonly imgSrc?: StaticImageData;
	readonly number?: string;
	readonly title?: string;
	readonly description?: string;
	readonly buttonText?: string;
	readonly linkto?: string;
}

export default function StudioGuide({
	imgRight = false,
	imgSrc,
	number = "00",
	title = "Title",
	description = "Description",
	buttonText = "Button Text",
	linkto = "#",
}: StudioGuideProps) {
	return (
		<section
			className={`py-16 lg:py-20 relative ${
				!imgRight ? "bg-[#F3EFE9]" : ""
			}`}
			style={
				imgRight
					? {
							backgroundImage: `url(${greenvelvet.src})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
					  }
					: {}
			}
		>
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
									src={imgSrc ?? ""}
									alt="Dental consultation between patient and dental professional"
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
						{/* Large Number and Title */}
						<div className="flex gap-3 items-center w-full">
							{/* Large Number */}
							<div
								className={`text-8xl lg:text-9xl font-semibold text-[#D4C4A0] leading-none ${inter.className}`}
							>
								{number}
							</div>

							{/* Title */}
							<div className="flex flex-col min-w-xs pt-9">
								<h2
									className={`text-3xl lg:text-4xl font-light ${
										imgRight ? "text-white" : "text-[#2C4F3C]"
									} ${raleway.className}`}
								>
									{title}
								</h2>
								{/* Decorative line with circle */}
								<div className="flex items-center mt-2">
									<div
										className={`w-full flex-1 h-0.5 bg-[#B6A66A]`}
									></div>
									<div
										className={`w-3 h-3 rounded-full bg-[#B6A66A]`}
									></div>
								</div>
							</div>
						</div>

						{/* Description */}
						<div
							className={`space-y-4 font-light pt-4 ${
								imgRight ? "text-white" : "text-[#3B3B3B]"
							} ${poppins.className}`}
						>
							<p className="text-base text-justify lg:text-base leading-relaxed">
								{description}
							</p>
						</div>

						{/* CTA Button */}
						<div className="pt-6">
							<Link href={linkto ?? "#"}>
								<Button
									variant="outline"
									className={`bg-transparent border-1 px-8 py-6 font-normal tracking-wider uppercase transition-colors duration-200 text-sm rounded-sm cursor-pointer ${
										imgRight
											? "border-white text-white hover:bg-white hover:text-[#2C4F3C]"
											: "border-[#2C4F3C] text-[#2C4F3C] hover:bg-[#284836] hover:text-white"
									} ${poppins.className}`}
								>
									{buttonText}
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
