import styles from "../conference.module.css";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Cosmetic Dentistry',
  description: 'Explore our cosmetic dentistry services to enhance your smile and boost your confidence.',
  keywords: ['cosmetic dentistry', 'smile enhancement', 'dental aesthetics'],
  openGraph: {
    title: 'Cosmetic Dentistry',
    description: 'Explore our cosmetic dentistry services to enhance your smile and boost your confidence.',
    type: 'website',
    url: '/services/cosmetic-dentistry',
    images: [
      {
        url: '/images/cosmetic-dentistry.jpg',
        width: 800,
        height: 600,
        alt: 'Cosmetic Dentistry',
      },
    ],
  },
  twitter: {
    title: 'Cosmetic Dentistry',
    description: 'Explore our cosmetic dentistry services to enhance your smile and boost your confidence.',
    card: 'summary_large_image',
    site: '@dental',
    creator: '@dental',
    images: ['/images/cosmetic-dentistry.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    noarchive: true,
    nosnippet: false,
    noimageindex: false
  },
  applicationName: 'Dental',
  authors: [
    {
      name: 'Dental Team',
      url: 'https://dental.com',
    },
  ],
  publisher: 'Dental',
  creator: 'Dental',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
  }
}

export default async function Page() {
  return (
    <div className={styles.parentContainer}>
      <div className="self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100">
        Last Rendered: {new Date().toLocaleTimeString()}
      </div>
      <h1>cosmetic-dentistry</h1>
    </div>
  );
}
