import Image from "next/image";
import { Button } from "@/app/components/home/ui/Button";
import { raleway, poppins, libreBaskerville } from "@/lib/fonts";

const DoctorsHero = () => {
	return (
		<div className="relative min-h-screen w-full overflow-hidden">
			{/* Background Image with Dark Overlay */}
			<div className="absolute inset-0">
				<Image
					src="/assets/images/DoctorsHero.png"
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
							Meet
							<br />
							Our Doctors
						</h1>

						{/* Tagline */}
						<h2
							className={`py-6 text-2xl font-light italic text-white/90 sm:text-4xl lg:text-4xl ${libreBaskerville.className}`}
						>
							Caring Hands behind every Smile
						</h2>

						{/* Description */}
						<p
							className={
								"my-8 max-w-2xl text-sm font-light text-white/80 sm:text-base lg:text-lg" +
								" " +
								poppins.className
							}
						>
							At MOD Dentist in Houston our doctors aren’t just experts in
							dental care, they’re passionate smile makers who truly care about
							you. From the moment you walk in you’ll feel the difference with
							gentle hands listening hearts and a team that treats you like
							family. We believe every smile has a story and we’re here to make
							yours shine one comfortable confident visit at a time
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

export default DoctorsHero;
