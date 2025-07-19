"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReviewCard from "@/app/components/home/ReviewCard";
import { inter, libreBaskerville, poppins } from "@/lib/fonts";

import ananya from "@/../public/assets/images/ananya.png";
import pooja from "@/../public/assets/images/pooja.png";
import karan from "@/../public/assets/images/karan.png";
import greenVelvet from "@/../public/assets/images/Green_Velvet.png";

const testimonialData = [
	{
		id: 1,
		name: "Ananya Roy",
		text: "Excellent service from start to finish. They explained every step clearly and treated my tooth pain effectively and quickly.",
		rating: 5,
		avatar: ananya,
	},
	{
		id: 2,
		name: "Pooja Luthra",
		text: "The whitening treatment gave incredible results! My smile looks fresh and bright. Staff were kind and professional throughout.",
		rating: 5,
		avatar: pooja,
	},
	{
		id: 3,
		name: "Karan Deshmukh",
		text: "I've always been afraid of dental visits, but the team made me feel calm and cared for. My smile has never looked better..!!",
		rating: 5,
		avatar: karan,
	},
];

export default function Testimonial2Section() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex(
			(prev) => (prev + 1) % Math.max(1, testimonialData.length - 2),
		);
	};

	const prevSlide = () => {
		setCurrentIndex(
			(prev) =>
				(prev - 1 + Math.max(1, testimonialData.length - 2)) %
				Math.max(1, testimonialData.length - 2),
		);
	};

	return (
		<section className="relative py-16 lg:py-20 overflow-hidden">
			{/* Background Image */}
			<div className="absolute inset-0">
				<Image
					src={greenVelvet}
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
							<p className="text-white/90 text-2xl lg:text-4xl font-light italic mb-4">
								We made these people
							</p>
							<p className="text-[#B6A66A] text-5xl lg:text-7xl font-light italic">
								Smile..
							</p>
						</div>
					</div>

					{/* Google Rating Section */}
					<div className="mb-10">
						<div className="text-white">
							{/* Google and Rating on same row */}
							<div className="flex items-center space-x-3">
								<svg
									className="w-14 h-13"
									viewBox="0 0 272 92"
									fill="none"
								>
									<path
										d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
										fill="currentColor"
									/>
									<path
										d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
										fill="currentColor"
									/>
									<path
										d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"
										fill="currentColor"
									/>
									<path
										d="M225 3v65h-9.5V3h9.5z"
										fill="currentColor"
									/>
									<path
										d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"
										fill="currentColor"
									/>
									<path
										d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"
										fill="currentColor"
									/>
								</svg>
								<span className="text-xl font-light">Rating</span>
							</div>

							{/* Rating details on second row */}
							<div className="flex items-center space-x-3">
								<span className="text-4xl font-bold">4.7</span>
								<div className="flex items-center">
									{[...Array(5)].map((_, i) => (
										<Star
											key={i}
											className="w-5 h-5 fill-current"
										/>
									))}
								</div>
								<span
									className={
										"text-base font-extralight " + inter.className
									}
								>
									108 Reviews
								</span>
							</div>
						</div>
					</div>

					{/* Reviews Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
						{testimonialData
							.slice(currentIndex, currentIndex + 3)
							.map((review) => (
								<ReviewCard
									key={review.id}
									review={review}
								/>
							))}
					</div>

					{/* Bottom Section with Line, Button, and Navigation */}
					<div className="relative">
						{/* Horizontal Line */}
						<div
							className="absolute top-1/2 left-0 right-0 w-[200vw] -ml-[50vw] -translate-x-1/2 h-px bg-[#B6A76A] transform -translate-y-1/2"
							style={{ left: "100%" }}
						></div>

						{/* Content over the line */}
						<div className="relative flex items-center justify-between">
							{/* Write a Review Button */}
							<Button
								variant="outline"
								className={
									"bg-white border-white/30 hover:bg-white/20 p-6 text-base font-medium tracking-wide rounded-sm text-[#2C4F3C]" +
									" " +
									poppins.className
								}
							>
								WRITE A REVIEW
							</Button>

							{/* Navigation Arrows */}
							<div className="flex items-center space-x-2 bg-[#325240] rounded-2xl">
								<button
									onClick={prevSlide}
									className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
									aria-label="Previous reviews"
								>
									<ChevronLeft className="w-5 h-5" />
								</button>
								<button
									onClick={nextSlide}
									className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
									aria-label="Next reviews"
								>
									<ChevronRight className="w-5 h-5" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
