import styles from "../conference.module.css";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Restorative Dentistry',
  description: 'Restorative dentistry focuses on restoring the function and aesthetics of teeth. It includes procedures like fillings, crowns, bridges, and implants to repair damage caused by decay, trauma, or wear.',
  keywords: ['restorative dentistry', 'dental restoration', 'fillings', 'crowns', 'bridges', 'implants'],
  openGraph: {
    title: 'Restorative Dentistry',
    description: 'Restorative dentistry focuses on restoring the function and aesthetics of teeth. It includes procedures like fillings, crowns, bridges, and implants to repair damage caused by decay, trauma, or wear.',
    type: 'website',
    url: 'https://dental.com/services/restorative-dentistry',
    images: [
      {
        url: 'https://dental.com/images/restorative-dentistry.jpg',
        width: 800,
        height: 600,
        alt: 'Restorative Dentistry',
      },
    ],
  },
  twitter: {
    title: 'Restorative Dentistry',
    description: 'Restorative dentistry focuses on restoring the function and aesthetics of teeth. It includes procedures like fillings, crowns, bridges, and implants to repair damage caused by decay, trauma, or wear.',
    card: 'summary_large_image',
    site: '@dental',
    creator: '@dental',
    images: ['https://dental.com/images/restorative-dentistry.jpg'],
  }
}

export default async function Page() {
  return (
    <div className={styles.parentContainer}>
      <div className="self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100">
        Last Rendered: {new Date().toLocaleTimeString()}
      </div>
      <h1>Restorative Dentistry</h1>
    </div>
  );
}
