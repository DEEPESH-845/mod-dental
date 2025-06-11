import styles from "../conference.module.css";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'SLeep Apnea',
  description: 'Learn about sleep apnea, its symptoms, and treatment options. Our dental clinic offers specialized care for sleep apnea patients.',
  keywords: 'sleep apnea, dental care, treatment, symptoms, snoring, oral appliance therapy',
  openGraph: {
    title: 'Sleep Apnea',
    description: 'Learn about sleep apnea, its symptoms, and treatment options. Our dental clinic offers specialized care for sleep apnea patients.',
    type: 'website',
    url: 'https://dental.com/services/sleep-apnea',
    images: [
      {
        url: 'https://dental.com/images/sleep-apnea.jpg',
        width: 800,
        height: 600,
        alt: 'Sleep Apnea',
      },
    ],
  },
  twitter: {
    title: 'Sleep Apnea',
    description: 'Learn about sleep apnea, its symptoms, and treatment options. Our dental clinic offers specialized care for sleep apnea patients.',
    card: 'summary_large_image',
    site: '@dental',
    creator: '@dental',
    images: ['https://dental.com/images/sleep-apnea.jpg'],
  }
}

export default async function Page() {
  return (
    <div className={styles.parentContainer}>
      <div className="self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100">
        Last Rendered: {new Date().toLocaleTimeString()}
      </div>
      <h1>sleep-apnea</h1>
    </div>
  );
}
