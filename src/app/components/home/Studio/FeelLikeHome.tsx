import Image from "next/image";
import { Button } from "@/app/components/home/ui/Button";
import { libreBaskerville, poppins } from "@/lib/fonts";
import whitevelvet from "@/../public/assets/images/White_velvet.png";
import feelikehome from "@/../public/assets/images/feellikehome.png";
import feelikehome2 from "@/../public/assets/images/feelikehomepic2.png";
import feelikehome3 from "@/../public/assets/images/feelikehomepic3.png";

export default function FeelLikeHome() {
	return (
		<>
			<section className="relative py-16 lg:py-20 overflow-hidden">
				{/* White Velvet Background */}
				<div className="absolute inset-0">
					<Image
						src={whitevelvet}
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
										Feels Like Home{" "}
									</span>
									<br></br>
									<span className="text-3xl text-[#B6A66A] lg:text-4xl font-light italic ">
										Every Detail is Designed Around You..!!
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
										Lorem ipsum dolor sit amet, consectetur adipiscing
										elit. Sed do eiusmod tempor incididunt ut labore
										et dolore magna aliqua. Ut enim ad minim veniam,
										quis nostrud exercitation ullamco laboris nisi ut
										aliquip ex ea commodo consequat.
									</p>

									<p className="text-base lg:text-lg leading-relaxed">
										Duis aute irure dolor in reprehenderit in
										voluptate velit esse cillum dolore eu fugiat nulla
										pariatur. Excepteur sint occaecat cupidatat non
										proident, sunt in culpa qui officia deserunt
										mollit anim id est laborum. Lorem ipsum dolor sit
										amet, consectetur adipiscing elit. Sed do eiusmod
										tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud
										exercitation ullamco laboris nisi ut aliquip ex ea
										commodo consequat.
									</p>
								</div>

								{/* CTA Button */}
								<div className="pt-4">
									<Button
										variant="outline"
										className={
											"bg-transparent border-1 border-[#2C4F3C] text-[#2C4F3C] hover:bg-[#284836] hover:text-white px-8 py-[30px] font-[400] tracking-wider uppercase transition-colors duration-200 text-base rounded-sm cursor-pointer " +
											poppins.className
										}
									>
										MOD EXPERIENCE
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
											src={feelikehome || "/Rectangle_98.png"}
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

			{/* Two Images Section */}
			<section className="bg-white py-16 lg:py-20 lg:pt-6">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col md:flex-row gap-6 lg:gap-8">
						{/* First Image */}
						<div className="flex-1">
							<Image
								src={feelikehome2}
								alt="Feel like home image 2"
								width={600}
								height={400}
								className="w-full h-[300px] md:h-[400px] object-cover rounded-md"
							/>
						</div>

						{/* Second Image */}
						<div className="flex-1">
							<Image
								src={feelikehome3}
								alt="Feel like home image 3"
								width={600}
								height={400}
								className="w-full h-[300px] md:h-[400px] object-cover rounded-md"
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
