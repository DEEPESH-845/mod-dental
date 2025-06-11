import styles from "../conference.module.css";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Dental Implants',
  description: 'Explore our dental implants services for a confident smile.',
  keywords: ['dental implants', 'tooth replacement', 'oral health'],
  openGraph: {
    title: 'Dental Implants',
    description: 'Explore our dental implants services for a confident smile.',
    type: 'website',
    url: 'https://dental.com/services/dental-implants',
    images: [
      {
        url: 'https://dental.com/images/dental-implants.jpg',
        width: 800,
        height: 600,
        alt: 'Dental Implants',
      },
    ],
  },
  twitter: {
    title: 'Dental Implants',
    description: 'Explore our dental implants services for a confident smile.',
    card: 'summary_large_image',
    site: '@dental',
    creator: '@dental',
    images: ['https://dental.com/images/dental-implants.jpg'],
  }
}

export default async function Page() {
  return (
    <div className={styles.parentContainer}>
      <div className="self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100">
        Last Rendered: {new Date().toLocaleTimeString()}
      </div>
      <h1>Dental Implants</h1>
    </div>
  );
}
