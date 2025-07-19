import Image from "next/image";
import { Button } from "@/app/components/home/ui/Button";
import { raleway, poppins, libreBaskerville } from "@/lib/fonts";

const FirstVisitHero = () => {
	return (
		<div className="relative min-h-screen w-full overflow-hidden">
			{/* Background Image with Dark Overlay */}
			<div className="absolute inset-0">
				<Image
					src="/assets/images/FirstHero.png"
					alt="Dental care products including toothbrushes, soap, and dropper bottle"
					fill
					className="object-cover"
					priority
				/>
				{/* Dark overlay filter */}
				<div className="absolute inset-0 bg-black/40" />
			</div>

			{/* Content */}
			<div className="relative z-10 flex min-h-screen items-center">
				<div className="container px-10">
					<div className={"max-w-2xl" + " " + raleway.className}>
						{/* Main Heading */}
						<h1 className="mb-4 text-6xl font-light text-white sm:text-7xl lg:text-8xl xl:text-8xl">
							First
							<br />
							Visit Guide
						</h1>

						{/* Tagline */}
						<h2
							className={`py-6 text-2xl font-light italic text-white/90 sm:text-4xl lg:text-4xl ${libreBaskerville.className}`}
						>
							Thoughtful , Personalized & Seamless
						</h2>

						{/* Description */}
						<p
							className={
								"my-8 max-w-2xl text-sm font-light text-white/80 sm:text-base lg:text-lg" +
								" " +
								poppins.className
							}
						>
							We know that visiting a new dental office can feel unfamiliar, but
							from the moment you step through our doors, everything is designed
							to make you feel comfortable, cared for, and confident in your
							decision. At MOD Dentistry, we don’t just treat teeth, we care for
							people. Your first visit is where our relationship begins, and
							we’re here to listen, understand, and support your goals for a
							healthier, more radiant smile.
						</p>

						{/* CTA Button */}

						<Button
							className={
								"bg-[#2C4F3C] border-1 border-[#2C4F3C] text-white hover:bg-[#5e9c5c] hover:border-[#24a05b] px-4 py-3 text-sm font-light uppercase tracking-wider transition-colors  sm:px-5 sm:py-7 sm:text-base rounded-sm" +
								" " +
								poppins.className
							}
						>
							Request an Appointment
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FirstVisitHero;
