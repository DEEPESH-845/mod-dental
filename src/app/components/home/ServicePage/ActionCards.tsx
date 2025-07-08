import Image from "next/image";
import calender from "@/../public/assets/Calendar.svg";
import placeMarker from "@/../public/assets/Place Marker.svg";
import phone from "@/../public/assets/Ringer Volume.svg";
import { poppins } from "@/lib/fonts";

export default function ActionCards() {
	return (
		<section className="bg-[#2C4F3C] py-8 lg:py-12 relative">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
				{" "}
				{/* Separators - positioned between sections */}
				<div className="hidden md:block h-screen absolute left-1/3 -top-12 bottom-0 border-l-4 border-white transform -translate-x-1/2"></div>
				<div className="hidden md:block h-screen absolute left-2/3 -top-12 bottom-0 border-l-4 border-white transform -translate-x-1/2"></div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-36">
					{/* Schedule Your Check-up Card */}
					<section className="group cursor-pointer">
						<div className="relative p-6 lg:p-8 corner-borders">
							<div className="flex items-center space-x-4">
								<div className="w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center flex-shrink-0">
									<Image
										src={calender}
										alt="Calendar icon"
										width={32}
										height={32}
										className="w-8 h-8 lg:w-10 lg:h-10"
									/>
								</div>
								<div className="flex-1">
									<h3
										className={`text-white text-lg font-light tracking-wider uppercase leading-tight ${poppins.className}`}
									>
										Schedule Your
									</h3>
									<h3
										className={`text-white text-lg font-light tracking-wider uppercase leading-tight ${poppins.className}`}
									>
										Check-up
									</h3>
								</div>
							</div>
						</div>
					</section>

					{/* Visit Our Practice Card */}
					<section className="group cursor-pointer">
						<div className="relative p-6 lg:p-8 corner-borders">
							<div className="flex items-center space-x-4">
								<div className="w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center flex-shrink-0">
									<Image
										src={placeMarker}
										alt="Location marker icon"
										width={32}
										height={32}
										className="w-8 h-8 lg:w-10 lg:h-10"
									/>
								</div>
								<div className="flex-1">
									<h3
										className={`text-white text-lg font-light tracking-wider uppercase leading-tight ${poppins.className}`}
									>
										Visit
									</h3>
									<h3
										className={`text-white text-lg font-light tracking-wider uppercase leading-tight ${poppins.className}`}
									>
										Our Practice
									</h3>
								</div>
							</div>
						</div>
					</section>

					{/* Call Card */}
					<section className="group cursor-pointer">
						<div className="relative p-6 lg:p-8 corner-borders">
							<div className="flex items-center space-x-4">
								<div className="w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center flex-shrink-0">
									<Image
										src={phone}
										alt="Phone icon"
										width={32}
										height={32}
										className="w-8 h-8 lg:w-10 lg:h-10"
									/>
								</div>
								<div className="flex-1">
									<h3
										className={`text-white text-lg font-light tracking-wider uppercase leading-tight ${poppins.className}`}
									>
										Call
									</h3>
									<h3
										className={`text-white text-lg font-light tracking-wider uppercase leading-tight ${poppins.className}`}
									>
										+1 (832) 762 5635
									</h3>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</section>
	);
}