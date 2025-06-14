import Script from "next/script";

export default function Page() {
  return (
    <>
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        strategy = "lazyOnload"
      ></Script>
      <div
        className="elfsight-app-9ea0a0ba-b1c5-4472-9530-99eccc19fea5"
        data-elfsight-app-lazy
      ></div>
    </>
  );
}
