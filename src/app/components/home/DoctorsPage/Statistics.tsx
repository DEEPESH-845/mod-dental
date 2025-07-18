import React from "react";
import Image from "next/image";

const Statistics = () => {
	return (
		<section className="bg-dental-green min-h-screen flex items-center px-4 sm:px-6 lg:px-8 xl:px-12 overflow-hidden relative">
			{/* Background Image */}
			<div className="absolute inset-0">
				<Image
					src="/assets/images/Green_Velvet.png"
					alt="Green velvet background"
					fill
					className="object-cover"
					priority
				/>
			</div>

			{/* Content Overlay */}
			<div className="relative z-10">
				<div className="max-w-7xl mx-auto w-full">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
						{/* Left Content */}
						<div className="text-white space-y-6 lg:space-y-8 order-2 lg:order-1">
							{/* Main Heading */}
							<h1 className="text-3xl mt-7 pt-7 sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light leading-tight">
								<span className="text-dental-gold italic font-serif">
									Gentle
								</span>
								, Doctor-Led{" "}
								<span className="text-dental-gold italic font-serif">Care</span>{" "}
								You Can Trust
							</h1>

							{/* Description */}
							<p className="text-md pr-6 font-light opacity-90 text-center leading-relaxed max-w-2xl mx-auto">
								At MOD Dentist in Houston, our doctors believe in care that is
								as personal as your smile. With a gentle, minimally invasive
								approach, they focus on your comfort, listen to your needs, and
								tailor every treatment to you—building trust one visit at a
								time.
							</p>

							{/* Statistics */}
							<div className="grid grid-cols-2 sm:grid-cols-2  pt-4 lg:pt-6">
								<div className="text-center sm:text-center">
									<div className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl  font-light mb-1 pr-8 lg:mb-2">
										98%
									</div>
									<div className="text-xs sm:text-sm md:text-base lg:text-base font-light pr-10 opacity-90">
										Patient Satisfaction
									</div>
								</div>
								<div className="text-center sm:text-center">
									<div className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl  font-light mb-1 pr-40 lg:mb-2">
										1200+
									</div>
									<div className="text-xs sm:text-sm md:text-base lg:text-base  font-light pr-42 opacity-90">
										Smiles Transformed
									</div>
								</div>
								<div className="text-center sm:text-center">
									<div className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl  font-light mb-1 pt-8 pl-54 lg:mb-2">
										15+
									</div>
									<div className="text-xs sm:text-sm md:text-base font-light pl-50 opacity-90">
										Years of Experience
									</div>
								</div>
							</div>

							{/* Buttons */}
							<div className="flex flex-center sm:flex-row gap-3 pt-6 pb-8">
								<button className="bg-green-700 hover:bg-green-600 text-white px-6 py-3 text-lg font-medium tracking-wide transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 rounded-lg focus:ring-green-500 focus:ring-opacity-50">
									CALL +1 (832) 762-5635
								</button>
								<button className="border-2 border-white text-white hover:bg-white hover:text-green-900 px-6  py-3  text-lg font-medium tracking-wide transition-all duration-300 hover:shadow-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
									EXPLORE OUR STUDIO
								</button>
							</div>
						</div>

						{/* Right Content - Team Photo */}
						<div className="relative order-1 lg:order-2 mb-8 ml-10 lg:mb-0  flex justify-end items-end scale-125 translate-x-10">
							<div className="aspect-auto bg-white rounded-lg overflow-hidden shadow-2xl text-center">
								<Image
									src="/assets/images/Doctors_g.png"
									alt="MOD Dentist team of four doctors in white lab coats with blue lanyards standing together in a medical office with large windows"
									width={800}
									height={600}
									className="w-full h-full  object-cover"
									priority
									sizes="(max-width: 768px) 90vw, (max-width: 1200px) 120vw, 100vw"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Statistics;
