import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden sm:p-6 lg:p-8 ">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            preload="auto"
            muted
            className="w-full h-full object-cover"
          >
            <source src="/assets/video/skyline.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content */}
        <div className="absolute z-10 absolute inset-x-0 bottom-0  text-center max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light text-white mb-6 text-shadow font-raleway animate-fade-in">
            Dentistry, Reinvented For You
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-12 max-w-4xl mx-auto text-shadow-strong font-light leading-relaxed animate-slide-up">
            At Mod Dentist, we&apos;ve reimagined dental care around your
            comfort, convenience, and confidence.
            <br className="hidden sm:block" />
            This is dentistry reinvented—modern, transparent, and truly made for
            you.
          </p>
        </div>
      </section>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
        <Link
          href="#contact"
          className="w-full sm:w-auto bg-dental-green hover:bg-dental-green/90 text-white font-medium py-4 px-8 rounded-md transition-all duration-200 hover:shadow-lg text-center"
        >
          REQUEST AN APPOINTMENT
        </Link>
        <a
          href="tel:+18327625635"
          className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-dental-green font-medium py-4 px-8 rounded-md transition-all duration-200 text-center"
        >
          CALL +1 (832) 762‑5635
        </a>
      </div>
    </>
  );
}
