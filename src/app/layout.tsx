// These styles apply to every route in the application
import "./globals.css";
import type { Metadata } from "next";
import Footer from "./components/home/Footer";
import GetInTouch from "./components/home/GetInTouch";
import AppointmentForm from "./components/home/Appointment-Form";
import TestimonialSection from "./components/home/Testimonials";
import NavBar from "./components/home/Navbar";
import {
	raleway,
	poppins,
	libreBaskerville,
	inter,
	playball,
} from "@/lib/fonts";

// This metadata is used for the entire application
// It can be overridden by individual pages
// For example, the page at /home can have its own metadata
// which will override the default metadata defined here
export const metadata: Metadata = {
	metadataBase: new URL("https://mod-dental.com"),
	title: {
		default: "MOD DENTAL",
		template: "%s | MOD DENTAL",
	},
	description:
		"MOD DENTAL is a premier dental clinic specializing in smile enhancement and dental aesthetics. Our expert team provides personalized care to help you achieve the perfect smile.",
	keywords: [" dentistry", "smile enhancement", "dental aesthetics"],
	robots: {
		index: true,
		follow: true,
		noarchive: true,
		nosnippet: false,
		noimageindex: false,
	},
	icons: {
		icon: "/public/favicon/favicon.ico",
		shortcut: "/public/favicon/favicon-16x16.png",
	},
	openGraph: {
		type: "website",
		url: "https://mod-dental.com",
		title: "MOD DENTAL",
		locale: "en_US",
		description:
			"MOD DENTAL is a premier dental clinic specializing in smile enhancement and dental aesthetics. Our expert team provides personalized care to help you achieve the perfect smile.",
		images: [
			{
				url: "/public/images/logo.png",
				width: 500,
				height: 500,
				alt: "MOD Dental Logo",
			},
		],
		siteName: "MOD DENTAL",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={`${poppins.variable} ${raleway.variable} ${libreBaskerville.variable} ${inter.variable} ${playball.variable}`}
		>
			<body className="bg-base-200 overflow-x-hidden min-h-screen pt-32 antialiased">
				<NavBar />

				<div className="relative">{children}</div>
				<TestimonialSection />
				<AppointmentForm />
				<GetInTouch />
				<Footer />
			</body>
		</html>
	);
}
