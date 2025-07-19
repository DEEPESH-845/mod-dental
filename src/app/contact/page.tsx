import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Mail,
	ChevronDown,
	Facebook,
	Linkedin,
	LucideTwitter,
} from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Contact Us",
};

import GreenVelvet from "@/../public/assets/images/Green_Velvet.png";
import WhiteVelvet from "@/../public/assets/images/White_velvet.png";
import talkingWomen from "@/../public/assets/images/talking_women.png";
import indiaFlag from "@/../public/assets/images/india-flag.png";
import ringerVolume from "@/../public/assets/Ringer Volume.svg";
import placeMarker from "@/../public/assets/Place Marker.svg";
import officeView from "@/../public/assets/images/office_view.png"
import { libreBaskerville, poppins, raleway } from "@/lib/fonts";

export default function ContactForm() {
	return (
		<>
			<div className="min-h-screen flex">
				{/* Left Section - Green Velvet Background */}
				<div
					className="w-1/2 p-8 text-white relative"
					style={{
						backgroundImage: `url(${GreenVelvet.src})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
					}}
				>
					<div className="">
						{/* Contact Us Heading */}
						<div className="inline-block relative">
							<h1 className={"text-3xl mb-2 " + raleway.className}>
								Contact Us
							</h1>
							<div className="absolute -left-8 -bottom-2 flex items-center">
								<div className="h-[2px] w-[200px] bg-[#B6A66A]"></div>
								<div className="w-2 h-2 bg-[#B6A66A] rounded-full"></div>
							</div>
						</div>

						{/* Main Image */}
						<div className="my-8">
							<div className="rounded-lg">
								<Image
									src={talkingWomen}
									alt="Dental consultation"
									width={300}
									height={200}
									className="w-full h-auto rounded"
								/>
							</div>
						</div>

						{/* Contact Information */}
						<div className={"space-y-4 mb-8 w-full " + poppins.className}>
							{/* First Row - Phone and Email */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div className="flex items-center space-x-3 bg-gray-300/30 bg-opacity-50 p-3 py-5 rounded-sm w-full">
									<Image
										src={ringerVolume}
										alt="Phone icon"
										width={30}
										height={30}
										className="flex-shrink-0"
									/>
									<span className="whitespace-nowrap">
										+1 (832) 762-5635
									</span>
								</div>
								<div className="flex items-center space-x-3 bg-gray-300/30 bg-opacity-50 py-5 p-3 rounded-sm w-full">
									<Mail
										strokeWidth={2}
										className="w-7 h-7 flex-shrink-0"
									/>
									<span className="whitespace-nowrap">
										moddentist@gmail.com
									</span>
								</div>
							</div>

							{/* Second Row - Address */}
							<div className="flex items-start space-x-3 bg-gray-300/30 bg-opacity-50 p-3 py-5 rounded-sm w-full">
								<Image
									src={placeMarker}
									alt="Place marker icon"
									width={30}
									height={30}
									className="flex-shrink-0 pt-3"
								/>
								<div className="whitespace-normal">
									<div>MOD Dentist, Houston,</div>
									<div>Full Address</div>
								</div>
							</div>
						</div>

						{/* Social Media */}
						<div className={"text-center mt-20 " + poppins.className}>
							{/* Header with horizontal lines */}
							<div className="flex items-center justify-center mb-5">
								<div className="flex-grow border-t border-gray-400 mx-12"></div>
								<p className="font-light text-gray-300">
									Connect with us on
								</p>
								<div className="flex-grow border-t border-gray-400 mx-12"></div>
							</div>

							{/* Social icons */}
							<div className="flex justify-center space-x-6">
								<div className="w-10 h-10 bg-[#B6A66A] rounded-full flex items-center justify-center">
									<span className="text-white">
										<Facebook />
									</span>
								</div>
								<div className="w-10 h-10 bg-[#B6A66A] rounded-full flex items-center justify-center">
									<span className="text-white">
										<Linkedin />
									</span>
								</div>
								<div className="w-10 h-10 bg-[#B6A66A] rounded-full flex items-center justify-center">
									<span className="text-white">
										<LucideTwitter />{" "}
										{/* Replace with the actual X icon */}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Right Section - White Velvet Background */}
				<div
					className="w-1/2 p-8 relative"
					style={{
						backgroundImage: `url(${WhiteVelvet.src})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
					}}
				>
					<div>
						{/* Form Heading */}
						<div className="text-left mb-8 p-3">
							<h2
								className={
									"text-4xl italic mb-6 text-[#B6A66A] leading-12" +
									" " +
									libreBaskerville.className
								}
							>
								Want to Speak with Us
								<br />
								<span className="ml-28">Book Your Consultation..?</span>
							</h2>
						</div>

						{/* Form */}
						<form className="space-y-6">
							{/* First Name and Last Name */}
							<div className="grid grid-cols-2 gap-4">
								<div>
									<label
										htmlFor="firstName"
										className={
											"block text-sm mb-2 text-gray-500 " +
											poppins.className
										}
									>
										First Name{" "}
										<span className="text-[#B6A66A]">*</span>
									</label>
									<Input
										type="text"
										id="firstName"
										className={
											"w-full border border-gray-400 rounded p-6 " +
											poppins.className
										}
									/>
								</div>
								<div>
									<label
										htmlFor="lastName"
										className={
											"block text-sm mb-2 text-gray-500 " +
											poppins.className
										}
									>
										Last Name{" "}
										<span className="text-[#B6A66A]">*</span>
									</label>
									<Input
										type="text"
										id="lastName"
										className="w-full border border-gray-400 rounded p-6"
									/>
								</div>
							</div>

							{/* Phone Number */}
							<div>
								<label
									htmlFor="phone"
									className={
										"block text-sm mb-2 text-gray-500 " +
										poppins.className
									}
								>
									Phone Number{" "}
									<span className="text-[#B6A66A]">*</span>
								</label>
								<div className="relative">
									<div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center">
										<Image
											src={indiaFlag}
											alt="India flag"
											width={20}
											height={15}
											className="mr-1"
										/>
										<span className={"text-sm " + poppins.className}>
											<ChevronDown className="h-3 w-3 text-gray-500" />
										</span>
									</div>
									<Input
										type="tel"
										id="phone"
										className={
											"w-full border border-gray-400 rounded p-6 " +
											poppins.className
										}
									/>
								</div>
							</div>

							{/* Email */}
							<div>
								<label
									htmlFor="email"
									className={
										"block text-sm mb-2 text-gray-500 " +
										poppins.className
									}
								>
									Email <span className="text-[#B6A66A]">*</span>
								</label>
								<Input
									type="email"
									id="email"
									className={
										"w-full border border-gray-400 rounded p-6 " +
										poppins.className
									}
								/>
							</div>

							{/* Message */}
							<div>
								<label
									htmlFor="message"
									className={
										"block text-sm mb-2 text-gray-500 " +
										poppins.className
									}
								>
									Message
								</label>
								<Textarea
									id="message"
									className={
										"w-full border border-gray-400 rounded p-6 h-32 resize-none " +
										poppins.className
									}
								/>
							</div>

							{/* Submit Button */}
							<Button
								className={
									"w-full bg-[#2C4F3C] hover:bg-[#243d30] text-white py-7 rounded-sm text-base  " +
									raleway.className
								}
							>
								SUBMIT
							</Button>
						</form>
					</div>
				</div>
			</div>
			<div className={"min-h-screen bg-[#F5F2ED] " + `${raleway.className}`}>
				{/* Hero Section */}
				<div className="px-6 py-16 text-center">
					<div className="max-w-7xl mx-auto">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-700 leading-tight mb-8">
							Your Journey
							<br />
							to a{" "}
							<span className="italic text-[#B6A76A] font-[400]">
								Healthier Smile
							</span>{" "}
							starts here
						</h1>

						<p
							className={`${poppins.className} text-gray-600 text-base md:text-lg leading-relaxed mb-12`}
						>
							Step into MOD Dental, where advanced care meets
							personalized attention. From your first visit to every
							follow-up, we are here to make your smile shine brighter.
							Reach out today and begin your journey toward comfort,
							confidence and lifelong dental health. Our modern clinic is
							designed to make you feel relaxed, welcomed, and truly
							cared for.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
							<Button
								className={`bg-[#2C4F3C] text-white ${poppins.className} font-[400] px-7 py-6 text-sm tracking-wider hover:bg-[#234032] transition-colors rounded-sm`}
							>
								EXPLORE OUR STUDIO
							</Button>
							<Button
								variant="outline"
								className={`border-2 border-[#2C4F3C] text-[#2C4F3C] ${poppins.className} font-[400] px-7 py-6 text-sm tracking-wider hover:bg-gray-50 transition-colors rounded-sm`}
							>
								CALL +1 (832) 702-8636
							</Button>
						</div>
					</div>
				</div>

				{/* Office Image Section */}
				<div className="">
					<div className="">
						<div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-lg">
							<Image
								src={officeView}
								alt="Modern dental office interior with arched alcove, mirrors, and contemporary design"
								fill
								className="object-cover"
								priority
							/>
						</div>
					</div>
				</div>

				{/* Bottom spacing */}
				<div className="h-16"></div>
			</div>
		</>
	);
}
