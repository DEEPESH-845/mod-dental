import Image from 'next/image'

const galleryImages = [
  {
    id: 1,
    src: '/assets/images/before-after1.jpg',
    alt: 'Before and after smile transformation'
  },
  {
    id: 2,
    src: '/assets/images/before-after2.jpg',
    alt: 'Dental implant results'
  },
  {
    id: 3,
    src: '/assets/images/before-after4.jpg',
    alt: 'Cosmetic dentistry results'
  },
  {
    id: 4,
    src: '/assets/images/before-after1.jpg',
    alt: 'Teeth whitening transformation'
  },
  {
    id: 5,
    src: '/assets/images/before-after2.jpg',
    alt: 'Cosmetic dentistry results'
  },
  {
    id: 6,
    src: '/assets/images/before-after4.jpg',
    alt: 'Teeth whitening transformation'
  }
]

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-dental-cream">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-light text-dental-green font-raleway">
                Where every
              </h2>
              <div className="text-4xl lg:text-5xl font-light">
                <span className="text-dental-gold">Smile</span>{' '}
                <span className="text-dental-green">Tells a</span>{' '}
                <span className="text-dental-gold">Story</span>
              </div>
              <div className="w-24 h-0.5 bg-dental-green" />
            </div>

            <p className="text-dental-dark/80 leading-relaxed text-lg">
              Take a peek at the beautiful smile transformations we&apos;ve created! 
              From subtle fixes to full makeovers, our gallery shows how we help real 
              people feel more confident every day. Each smile is a reminder of the care 
              we put into every detail. Your dream smile could be next—let&apos;s make it happen together!
            </p>

            <div className="space-y-4">
              <a href="#contact" className="block btn-primary text-center">
                REQUEST AN APPOINTMENT
              </a>
              <a href="tel:+18327625635" className="block btn-secondary text-center">
                CALL +1 (832) 762‑5635
              </a>
            </div>
          </div>

          {/* Gallery Side */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`relative overflow-hidden rounded-lg ${
                    index % 3 === 0 ? 'row-span-2' : ''
                  }`}
                >
                  <div className="relative h-64 lg:h-80">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dental-green/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </div>

            {/* Gradient Overlays */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-dental-cream to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-dental-cream to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}