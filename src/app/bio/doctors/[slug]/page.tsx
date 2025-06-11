
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Doctors',
  description: 'Meet our experienced dental team dedicated to providing exceptional care and expertise for your oral health needs.',
}
export default function Page() {
  return (
    <>
      <h1>Meet our Doctors</h1>
      <p>Dr Arora is awesone.</p>
    </>
  );
}
