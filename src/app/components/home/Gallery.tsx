"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { playball } from "@/lib/fonts";

const galleryImages = [
	{
		id: 1,
		src: "/assets/images/before-after1.jpg",
		alt: "Before and after smile transformation",
		size: "large", // Top left large image
	},
	{
		id: 2,
		src: "/assets/images/before-after2.jpg",
		alt: "Dental implant results",
		size: "small", // Top right small
	},
	{
		id: 3,
		src: "/assets/images/before-after4.jpg",
		alt: "Cosmetic dentistry results",
		size: "medium", // Middle left medium
	},
	{
		id: 4,
		src: "/assets/images/before-after1.jpg",
		alt: "Teeth whitening transformation",
		size: "medium", // Middle right medium
	},
	{
		id: 5,
		src: "/assets/images/before-after2.jpg",
		alt: "Bottom large image",
		size: "wide", // Bottom wide image
	},
	{
		id: 6,
		src: "/assets/images/before-after4.jpg",
		alt: "Bottom small left",
		size: "small",
	},
	{
		id: 7,
		src: "/assets/images/before-after1.jpg",
		alt: "Bottom small right",
		size: "small",
	},
];

export default function Gallery() {
	const router = useRouter();
	const handleStudioClick = () => {
		router.push("/studio");
	};
	return (
		<section id="gallery" className="section-padding bg-white">
			<div className="container-custom">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* Content Side */}
					<div className="space-y-8 text-center">
						<div className="space-y-4 mr-6">
							<h2
								className={` text-4xl lg:text-5xl ${playball.className} text-[#2C4F3C] `}
							>
								Where every
							</h2>
							<div className="text-4xl lg:text-5xl mb-12 font-light">
								<span className={` ${playball.className} text-[#B6A66A]`}>
									Smile
								</span>{" "}
								<span className={`${playball.className} text-[#2C4F3C]`}>
									Tells a
								</span>{" "}
								<span className={`${playball.className} text-[#B6A66A]`}>
									Story
								</span>
							</div>
							<div className="w-full h-0.5 mb-18 bg-[#B6A66A] mx-auto" />
						</div>

						<p className="text-[#3B3B3B] leading-relaxed text-md max-w-2xl mx-auto">
							Take a peek at the beautiful smile transformations we&apos;ve
							created! From subtle fixes to full makeovers, our gallery shows
							how we help real people feel more confident every day. Each smile
							is a reminder of the care we put into every detail. Your dream
							smile could be next—let&apos;s make it happen together!
						</p>

						<div className="space-y-2 mt-20 flex flex-col items-center">
							<a
								href="tel:+18327625635"
								className="inline-block btn-primary text-center px-8 py-3 text-sm"
							>
								REQUEST AN APPOINTMENT
							</a>
							<a
								onClick={handleStudioClick}
								className="inline-block btn-secondary text-center px-13 py-3 text-sm"
							>
								EXPLORE OUR STUDIO
							</a>
						</div>
					</div>

					{/* Gallery Side - Custom Masonry Layout */}
					<div className="relative">
						<div className="grid grid-cols-4 grid-rows-6 gap-4 h-[600px] lg:h-[800px]">
							{/* Top left - Large before/after face */}
							<div className="col-span-2 row-span-3 relative overflow-hidden rounded-lg">
								<Image
									src={galleryImages[0].src}
									alt={galleryImages[0].alt}
									fill
									className="object-cover hover:scale-105 transition-transform duration-300"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-dental-green/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
							</div>

							{/* Top right small */}
							<div className="col-span-2 row-span-1 relative overflow-hidden rounded-lg">
								<Image
									src={galleryImages[1].src}
									alt={galleryImages[1].alt}
									fill
									className="object-cover hover:scale-105 transition-transform duration-300"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-dental-green/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
							</div>

							{/* Middle right - Medium */}
							<div className="col-span-2 row-span-2 relative overflow-hidden rounded-lg">
								<Image
									src={galleryImages[2].src}
									alt={galleryImages[2].alt}
									fill
									className="object-cover hover:scale-105 transition-transform duration-300"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-dental-green/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
							</div>

							{/* Middle left - Medium */}
							<div className="col-span-2 row-span-2 relative overflow-hidden rounded-lg">
								<Image
									src={galleryImages[3].src}
									alt={galleryImages[3].alt}
									fill
									className="object-cover hover:scale-105 transition-transform duration-300"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-dental-green/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
							</div>

							{/* Bottom wide */}
							<div className="col-span-2 row-span-1 relative overflow-hidden rounded-lg">
								<Image
									src={galleryImages[4].src}
									alt={galleryImages[4].alt}
									fill
									className="object-cover hover:scale-105 transition-transform duration-300"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-dental-green/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
							</div>

							{/* Bottom small left */}
							<div className="col-span-2 row-span-1 relative overflow-hidden rounded-lg">
								<Image
									src={galleryImages[5].src}
									alt={galleryImages[5].alt}
									fill
									className="object-cover hover:scale-105 transition-transform duration-300"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-dental-green/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
							</div>

							{/* Bottom small right */}
							<div className="col-span-2 row-span-1 relative overflow-hidden rounded-lg">
								<Image
									src={galleryImages[6].src}
									alt={galleryImages[6].alt}
									fill
									className="object-cover hover:scale-105 transition-transform duration-300"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-dental-green/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
							</div>
						</div>

						{/* Gradient Overlays */}
						<div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-dental-cream to-transparent pointer-events-none" />
						<div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-dental-cream to-transparent pointer-events-none" />
					</div>
				</div>
			</div>
		</section>
	);
}
