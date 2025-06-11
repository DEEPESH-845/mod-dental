import Image from "next/image";
import conferencePic from "./../images/media-image-1.jpg";
import styles from "./conference.module.css";

export default function Page() {
  return (
    <>
      <div className={styles.bgWrap}>
        <Image
          src={conferencePic}
          alt="Conference Pic"
          placeholder="blur"
          quality={100}
          sizes="100vw"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </>
  );
}
