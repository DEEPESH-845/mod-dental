
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Patients',
  description: 'For our patients, we provide comprehensive dental care and personalized treatment plans to ensure optimal oral health and a beautiful smile.',}
export default function Page() {
  return (
    <>
      <h1>Patient Page</h1>
      <p>Welcome</p>
    </>
  );
}
