"use client";

import { useRef, useEffect } from "react";

export default function HeroSection() {
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		// Since we don't have an actual video file, we'll use the static image
		// In a real implementation, you would set up the video element here
	}, []);

	return (
		<section className="relative h-screen flex items-end justify-center overflow-hidden">
			{/* Hero Content */}
			<div className="relative z-10 text-center pb-52 px-4 sm:px-6 lg:px-8 mx-auto hero-content">
				<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight hero-text">
					Dentistry Reinvented For You
				</h1>
				<div className="max-w-4xl mx-auto">
					<p className="text-lg sm:text-xl md:text-2xl text-white font-light leading-relaxed mb-4">
						At Mod Dentist, we&apos;ve reimagined dental care around your
						comfort, convenience, and confidence.
					</p>
					<p className="text-lg sm:text-xl md:text-2xl text-white font-light leading-relaxed">
						This is dentistry reinvented—modern, transparent, and truly
						made for you.
					</p>
				</div>
			</div>

			{/* Video element (hidden, for future implementation) */}
			<video
				ref={videoRef}
				className="absolute inset-0 w-full h-full object-cover"
				muted
				playsInline
				loop
				autoPlay
				preload="metadata"
			>
				{/* Video source would go here when available */}
				<source
					src="/assets/video/hero-video.mp4"
					type="video/mp4"
				/>
			</video>
      
		</section>
    
    
	);
    
}
