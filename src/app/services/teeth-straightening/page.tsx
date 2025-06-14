import styles from "../conference.module.css";
import type { Metadata } from "next";
import AccordionGroup from "../../components/posts/AccordionGroup"; // Adjust the path as needed

export const metadata: Metadata = {
  title: "Teeth Straightening",
  description:
    "Learn about teeth straightening services, including braces and aligners, to achieve a perfect smile.",
  keywords: ["teeth straightening", "braces", "aligners", "orthodontics"],
  openGraph: {
    title: "Teeth Straightening",
    description:
      "Learn about teeth straightening services, including braces and aligners, to achieve a perfect smile.",
    url: "https://example.com/services/teeth-straightening",
    type: "website",
    images: [
      {
        url: "https://example.com/images/teeth-straightening.jpg",
        width: 800,
        height: 600,
        alt: "Teeth Straightening",
      },
    ],
  },
  twitter: {
    title: "Teeth Straightening",
    description:
      "Learn about teeth straightening services, including braces and aligners, to achieve a perfect smile.",
    card: "summary_large_image",
    site: "@example",
    creator: "@example",
    images: ["https://example.com/images/teeth-straightening.jpg"],
  },
};

export default async function Page() {
  return (
    <div className={styles.parentContainer}>
      <div className="self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100">
        Last Rendered: {new Date().toLocaleTimeString()}
      </div>
      <h1>teeth-straightening</h1>
      <AccordionGroup />
    </div>
  );
}
