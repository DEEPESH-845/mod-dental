import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-12 gap-4 items-center">
          {/* Image Side */}
          <div className="col-span-4 relative">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/assets/images/about-dental-office.jpg"
                alt="Modern dental office interior"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dental-green/20 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-dental-gold text-white p-6 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="col-span-8 space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-light text-dental-green font-raleway">
                A Bespoke Dental Studio
              </h2>
              <div className="text-lg text-dental-gold font-medium">
                in Houston, Texas
              </div>
              <div className="w-24 h-0.5 bg-dental-green" />
            </div>

            <div className="space-y-4 text-dental-dark/80 leading-relaxed">
              <p>
                At MOD Dentistry, we believe that exceptional dental care should be as comfortable as it is comprehensive. Our state-of-the-art facility combines cutting-edge technology with a warm, welcoming atmosphere designed to put you at ease from the moment you walk through our doors.
              </p>
              <p>
                We&apos;ve reimagined every aspect of the dental experience, from our ergonomic treatment rooms to our personalized care approach. Our team of skilled professionals is dedicated to providing you with the highest quality dental care while ensuring your comfort and peace of mind throughout your visit.
              </p>
              <p>
                Whether you&apos;re here for a routine cleaning, cosmetic enhancement, or complex restorative work, we&apos;re committed to helping you achieve optimal oral health and the confident smile you deserve.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="btn-primary text-center"
              >
                Schedule Consultation
              </a>
              <a
                href="#services"
                className="btn-secondary text-center"
              >
                View Our Services
              </a>
            </div>
          </div>

          <div className="col-span-6 relative">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/assets/images/office-pic2.jpg"
                alt="Modern dental office interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="col-span-2">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/assets/images/office-pic3.jpg"
                alt="Modern dental office interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="col-span-4">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/assets/images/office-pic4.jpg"
                alt="Modern dental office interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}