import { Raleway, Poppins, Libre_Baskerville, Inter , Playball } from "next/font/google";

export const raleway = Raleway({
	variable: "--font-raleway",
	subsets: ["latin"],
	style: ["normal"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const libreBaskerville = Libre_Baskerville({
	variable: "--font-libre-baskerville",
	subsets: ["latin", "latin-ext"],
	style: ["italic"],
	weight: ["400", "700"],
});


export const playball = Playball({
	variable: "--font-playball",
	subsets: ["latin", "latin-ext"],
	weight: ["400"],
});

export const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	style: ["normal", "italic"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});