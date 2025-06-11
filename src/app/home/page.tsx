import Image from "next/image";
import ourStoryPic from "../images/Hero-Image-New1-p-2000.webp"
import styles from "./home.module.css";

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Home',
}

export default function Page() {
  return (
    <>
      <div className={styles.bgWrap}>
        <Image
          src={ourStoryPic}
          alt="Out story pic"
          placeholder="blur"
          quality={100}
          sizes="90vw"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <h1 className={styles.bgHeader}>We care about your smile</h1>
      <p className={styles.bgText}>
      Our experienced team offers a range of services in a friendly atmosphere, ensuring your dental health is our top priority.
      </p>
    </>
  );
}
