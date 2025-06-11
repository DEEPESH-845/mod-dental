import styles from "../conference.module.css";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Smile Makeover',
  description: 'Transform your smile with our comprehensive smile makeover services.',
  keywords: ['smile makeover', 'cosmetic dentistry', 'teeth whitening', 'veneers'],
  openGraph: {
    title: 'Smile Makeover',
    description: 'Transform your smile with our comprehensive smile makeover services.',
    type: 'website',
    url: 'https://dental.com/services/smile-makeover',
    images: [
      {
        url: 'https://dental.com/images/smile-makeover.jpg',
        width: 800,
        height: 600,
        alt: 'Smile Makeover',
      },
    ],
  },
  twitter: {
    title: 'Smile Makeover',
    description: 'Transform your smile with our comprehensive smile makeover services.',
    card: 'summary_large_image',
    site: '@dental',
    creator: '@dental',
    images: ['https://dental.com/images/smile-makeover.jpg'],
  }
}

export default async function Page() {
  return (
    <div className={styles.parentContainer}>
      <div className="self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100">
        Last Rendered: {new Date().toLocaleTimeString()}
      </div>
      <h1>smile-makeover</h1>
    </div>
  );
}
