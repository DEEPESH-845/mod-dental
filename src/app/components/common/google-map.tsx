
import { GoogleMapsEmbed } from "@next/third-parties/google";

export default function Page() {
  return (
    <div>
    <GoogleMapsEmbed
      apiKey="AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
      height={700}
      width={700}
      mode="place"
      q="Dental+Credible,Barkers+Branch,Texas,USA"
    />
  </div>
  );
};

