import styles from "../conference.module.css";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Preventive Dentistry',
  description: 'Preventive dentistry focuses on maintaining oral health and preventing dental issues before they arise. This includes regular check-ups, cleanings, and patient education on proper oral hygiene practices.',
  keywords: ['preventive dentistry', 'oral health', 'dental check-ups', 'teeth cleaning', 'patient education'],
  openGraph: {
    title: 'Preventive Dentistry',
    description: 'Preventive dentistry focuses on maintaining oral health and preventing dental issues before they arise. This includes regular check-ups, cleanings, and patient education on proper oral hygiene practices.',
    type: 'website',
    url: 'https://dental.com/services/preventive-dentistry',
    images: [ 
      {
        url: 'https://dental.com/images/preventive-dentistry.jpg',
        width: 800,
        height: 600,
        alt: 'Preventive Dentistry',
      },
    ],
  },
  twitter: {
    title: 'Preventive Dentistry',
    description: 'Preventive dentistry focuses on maintaining oral health and preventing dental issues before they arise. This includes regular check-ups, cleanings, and patient education on proper oral hygiene practices.',
    card: 'summary_large_image',
    site: '@dental',
    creator: '@dental',
    images: ['https://dental.com/images/preventive-dentistry.jpg'],
  }
} 

export default async function Page() {
  return (
    <div className={styles.parentContainer}>
      <div className="self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100">
        Last Rendered: {new Date().toLocaleTimeString()}
      </div>
      <h1>preventive-dentistry</h1>
    </div>
  );
}
