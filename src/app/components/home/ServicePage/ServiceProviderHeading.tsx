import { raleway, libreBaskerville } from "@/lib/fonts";

export default function ServicesHeading() {
	return (
		<div className="text-center py-12 pt-16 lg:py-16 bg-[#f3efe9]">
			{/* Main Heading - First Row */}
			<h1
				className={`text-3xl lg:text-4xl xl:text-5xl font-normal text-[#2C4F3C] mb-4 ${raleway.className}`}
			>
				Preventive Dentistry Services
			</h1>

			{/* Subheading - Second Row with Mixed Styling */}
			<div className="relative">
				<h2
					className={`text-xl lg:text-2xl xl:text-3xl leading-relaxed ${raleway.className}`}
				>
					<span className="font-light text-[#2C4F3C]">Focused on </span>
					<span className={`font-medium text-[#B6A66A] italic ${libreBaskerville.className}`}>
						Enhancing
					</span>
					<span className="font-light text-[#2C4F3C]"> Your </span>
					<span className={`font-medium text-[#B6A66A] italic ${libreBaskerville.className}`}>
						Oral Health
					</span>
					<span className="font-light text-[#2C4F3C]">
						{" "}
						and Preserving Natural Beauty
					</span>
				</h2>

				{/* Underline with Offset */}
				<div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 lg:w-2/3 h-px bg-[#B6A66A] opacity-60"></div>
			</div>
		</div>
	);
}