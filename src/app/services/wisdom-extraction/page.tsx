import styles from "../conference.module.css";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Wisom Extraction',
  description: 'Learn about wisdom extraction services, including the procedure, recovery, and aftercare for a healthy smile.',
  keywords: ['wisdom extraction', 'tooth removal', 'oral surgery', 'dental care'],
  openGraph: {
    title: 'Wisdom Extraction',
    description: 'Learn about wisdom extraction services, including the procedure, recovery, and aftercare for a healthy smile.',
    type: 'website',
    url: 'https://dental.com/services/wisdom-extraction',
    images: [
      {
        url: 'https://dental.com/images/wisdom-extraction.jpg',
        width: 800,
        height: 600,
        alt: 'Wisdom Extraction',
      },
    ],
  },
  twitter: {
    title: 'Wisdom Extraction',
    description: 'Learn about wisdom extraction services, including the procedure, recovery, and aftercare for a healthy smile.',
    card: 'summary_large_image',
    site: '@dental',
    creator: '@dental',
    images: ['https://mod-dental.com/images/wisdom-extraction.jpg']
  }
}

export default async function Page() {
  return (
    <div className={styles.parentContainer}>
      <div className="self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100">
        Last Rendered: {new Date().toLocaleTimeString()}
      </div>
      <h1>wisdom-extraction</h1>
    </div>
  );
}
