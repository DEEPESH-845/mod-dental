"use client";

import Image from "next/image";
import { libreBaskerville } from "@/lib/fonts";
import Script from "next/script";



export default function TestimonialSection() {

	return (
		<section className="relative py-16 lg:py-20 overflow-hidden">
        <Script
        src="https://static.elfsight.com/platform/platform.js"
        async
      ></Script>
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

			{/* Content */}
			<div className="relative z-10">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					{/* Header Section */}
					<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12">
						{/* Left Side - Main Title */}
						<div className="mb-8 lg:mb-0">
							<h2 className="text-4xl lg:text-5xl font-light text-white mb-4">
								Client Testimonials
							</h2>
							<p className="text-white/90 text-lg lg:text-xl font-light">
								Don&apos;t take our words for it, see what our clients
								say
							</p>
						</div>

						{/* Right Side - Smile Text */}
						<div
							className={
								"text-right font-[400]" +
								" " +
								libreBaskerville.className
							}
						>
							<p className="text-white/90 text-2xl lg:text-3xl font-light italic mb-4">
								We made these people
							</p>
							<p className="text-[#B6A66A] text-5xl lg:text-6xl font-light italic">
								Smile..
							</p>
						</div>
					</div>

				  <div
          className="elfsight-app-b8874a0b-cb75-4c68-9b8e-2c88c49f8328"
          data-elfsight-app-lazy
        ></div>
				</div>
			</div>
		</section>
	);
}