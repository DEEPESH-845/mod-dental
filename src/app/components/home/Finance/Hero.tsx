import Image from "next/image";
import { Button } from "@/app/components/home/ui/Button";
import { raleway, poppins, metal } from "@/lib/fonts";

const FinanceHero = () => {
	return (
		<div className="relative min-h-screen w-full overflow-hidden">
			{/* Background Image with Dark Overlay */}
			<div className="absolute inset-0">
				<Image
					src="/assets/images/Finance.png"
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
							Insurance &
							<br />
							Financing{" "}
						</h1>

						{/* Tagline */}
						<h2
							className={`py-6 text-2xl font-light italic text-white/90 sm:text-4xl lg:text-4xl ${metal.className}`}
						>
							Great Dental Care, always Accessible.
						</h2>

						{/* Description */}
						<p
							className={
								"my-5 max-w-2xl text-sm font-light text-white/80 sm:text-base lg:text-lg" +
								" " +
								poppins.className
							}
						>
							Smiles shouldn’t come with surprises — especially when it comes to
							cost. From the moment you step in, we believe in complete
							transparency and gentle guidance. Whether it’s understanding your
							insurance, exploring financing options, or simply asking a
							question - we’re here to make every step feel easy, supportive and
							stress-free. Your peace of mind matters just as much as your
							smile.
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

export default FinanceHero;
