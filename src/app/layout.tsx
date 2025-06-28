// These styles apply to every route in the application
import "./globals.css";
import FlyonuiScript from "./components/common/FlyonuiScript";
import NavBar from "./components/common/NavBar";
import type { Metadata } from "next"
import Footer from "./components/home/Footer";
import Contact from "./components/common/Contact";
import GetInTouch from "./components/home/GetInTouch";
import Navbar from "./components/common/NavBar";
import HeroAppointmentSectionButton from "./components/common/Appointment-Button";

// This metadata is used for the entire application
// It can be overridden by individual pages
// For example, the page at /home can have its own metadata
// which will override the default metadata defined here
export const metadata: Metadata = {
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
    siteName: "MOD DENTAL"
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className="bg-base-200 overflow-x-hidden min-h-screen">
         <Navbar/>
        <div className="relative">{children}</div>
        <GetInTouch/>
        <Footer/>
      </body>
      <FlyonuiScript />
    </html>
  );
}
