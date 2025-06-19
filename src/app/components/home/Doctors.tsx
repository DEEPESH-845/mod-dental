import Image from 'next/image'

const doctors = [
  {
    name: 'Dr. Neha Sharma',
    title: 'Lead Dentist & Founder',
    bio: 'With over 15 years of experience in cosmetic and restorative dentistry, Dr. Sharma is passionate about creating beautiful, healthy smiles. She graduated from the University of Texas Health Science Center and has completed advanced training in dental implants and smile design.',
    image: '/assets/images/dr-neha.jpg',
    specialties: ['Cosmetic Dentistry', 'Dental Implants', 'Smile Design']
  },
  {
    name: 'Dr. Smit Patel',
    title: 'Associate Dentist',
    bio: 'Dr. Patel brings a gentle touch and meticulous attention to detail to every procedure. Specializing in preventive care and restorative dentistry, he ensures that each patient receives personalized treatment in a comfortable environment.',
    image: '/assets/images/dr-smith.jpg',
    specialties: ['Preventive Care', 'Restorative Dentistry', 'Oral Surgery']
  }
]

export default function Doctors() {
  return (
    <section id="doctors" className="section-padding bg-dental-cream">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-dental-green mb-4 font-raleway">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-dental-dark/70 max-w-2xl mx-auto">
            Caring hands behind every smile. Our experienced dentists are dedicated to providing exceptional care with a personal touch.
          </p>
          <div className="w-24 h-0.5 bg-dental-green mx-auto mt-6" />
        </div>

        {/* Doctors Grid */}
        <div className="space-y-16">
          {doctors.map((doctor, index) => (
            <div
              key={doctor.name}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-medium text-dental-green mb-2">
                    {doctor.name}
                  </h3>
                  <p className="text-dental-gold font-medium mb-4">{doctor.title}</p>
                  <div className="w-16 h-0.5 bg-dental-green" />
                </div>

                <p className="text-dental-dark/80 leading-relaxed">
                  {doctor.bio}
                </p>

                <div>
                  <h4 className="font-medium text-dental-green mb-3">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {doctor.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="bg-dental-green/10 text-dental-green px-3 py-1 rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 pt-12 border-t border-dental-green/20">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary">
              REQUEST AN APPOINTMENT
            </a>
            <a href="tel:+18327625635" className="btn-secondary">
              CALL +1 (832) 762‑5635
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}