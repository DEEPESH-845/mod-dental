"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, ArrowRight, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/app/components/home/ui/Button";
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/home/ui/sheet";

import MOD_Logo from "@/../public/assets/images/logo.png";

const navigationItems = [
	{ name: "OUR DOCTORS", href: "/bio/doctors/arora" },
	{ name: "MOD EXPERIENCE", href: "/experience" },
	{ name: "OUR STUDIO", href: "/studio" },
	{ name: "OUR SERVICES", href: "/services" },
	{ name: "FOR PATIENTS", href: "/patients" },
	{ name: "CONTACT US", href: "/contact" },
];

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-[#F6F1E9]/95 backdrop-blur-sm w-full border-b border-gray-200">
			<div className=" mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center h-32 justify-between">
					{/* Logo - Left side */}
					<div className="flex-shrink-0">
						<Link href="/">
							<Image
								src={MOD_Logo}
								alt="MOD Dentist"
								width={120}
								height={60}
								className="h-20 w-auto"
							/>
						</Link>
					</div>

					{/* Spacer to push content to the right */}
					<div className="flex-1" />

					<div className="flex flex-col items-center justify-between w-full lg:w-auto gap-4 lg:space-x-8">
						{/* Desktop CTA Buttons - Far right */}
						<div className="hidden lg:flex self-end items-center space-x-4">
							<Button
								variant="outline"
								className="bg-white text-gray-700 border-[#2C4F3C] hover:bg-[#284836] hover:text-white px-6 py-7 text-sm font-medium"
							>
								<Phone className="w-4 h-4 mr-2" />
								CALL +1 (832) 762 5635
							</Button>
						    <Button className="bg-[#2C4F3C] hover:bg-[#284836] text-white px-10 py-7 text-sm font-medium">
                                    PLAN YOUR VISIT
                                </Button>
								<span className="flex items-center justify-center rounded-full border border-[#2C4F3C] bg-transparent w-12 h-12 ml-2">
									<ArrowRight className="w-6 h-6 text-[#2C4F3C]" />
								</span>
						</div>

						{/* Desktop Navigation - Center-right */}
						<nav className="hidden lg:flex items-center space-x-8 mr-8">
							{navigationItems.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									className="text-gray-700 hover:text-gray-900 text-sm font-medium tracking-wide transition-colors duration-200 flex items-center"
								>
									{item.name}
									{(item.name === "MOD EXPERIENCE" ||
										item.name === "FOR PATIENTS" ||
										item.name === "OUR SERVICES") && (
										<ChevronDown className="w-4 h-4 ml-1 text-gray-400" />
									)}
								</Link>
							))}
						</nav>
					</div>

					{/* Mobile menu button */}
					<Sheet
						open={isOpen}
						onOpenChange={setIsOpen}
					>
						<SheetTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								className="lg:hidden ml-4"
							>
								<Menu className="h-6 w-6" />
								<span className="sr-only">Open menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent
							side="right"
							className="w-[300px] sm:w-[400px]"
						>
							<div className="flex flex-col space-y-6 mt-6">
								<nav className="flex flex-col space-y-4">
									{navigationItems.map((item) => (
										<Link
											key={item.name}
											href={item.href}
											className="text-gray-700 hover:text-gray-900 text-base font-medium tracking-wide transition-colors duration-200 flex items-center"
											onClick={() => setIsOpen(false)}
										>
											{item.name}
											{(item.name === "MOD EXPERIENCE" ||
												item.name === "FOR PATIENTS" ||
												item.name === "OUR SERVICES") && (
												<ChevronDown className="w-4 h-4 ml-1 text-gray-400" />
											)}
										</Link>
									))}
								</nav>
								<div className="flex flex-col space-y-3 pt-6 border-t border-gray-200">
									<Button
										variant="outline"
										className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50 w-full justify-center"
									>
										<Phone className="w-4 h-4 mr-2" />
										CALL +1 (832) 762 5635
									</Button>
									<Button className="bg-teal-700 hover:bg-teal-800 text-white w-full justify-center">
										PLAN YOUR VISIT
										<ArrowRight className="w-4 h-4 ml-2" />
									</Button>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</nav>
	);
}