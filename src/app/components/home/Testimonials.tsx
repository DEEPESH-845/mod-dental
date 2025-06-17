import Script from "next/script";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-dental-green">
      {/* Elfsight Google Reviews | MOD Google Reviews */}
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        async
      ></Script>
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
          <div className="text-white mb-8 lg:mb-0">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Client Testimonials
            </h2>
            <p className="text-xl lg:text-2xl font-light opacity-90">
              Don&apos;t take our words for it, see what our clients say
            </p>
          </div>

          <div className="text-right">
            <p className="text-3xl lg:text-4xl font-light text-white mb-2">
              We made these people
            </p>
            <p className="text-5xl lg:text-6xl font-light text-dental-gold">
              Smile..
            </p>
          </div>
        </div>

        <div
          className="elfsight-app-b8874a0b-cb75-4c68-9b8e-2c88c49f8328"
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
}
