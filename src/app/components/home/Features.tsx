import { Coffee, Lightbulb, Monitor, Volume2, Users, Armchair } from 'lucide-react'

const features = [
  {
    icon: Armchair,
    title: 'E-Comfort Dental Chairs',
    description: 'Sit back and relax in our ergonomic, electronically adjustable chairs designed for total comfort.'
  },
  {
    icon: Coffee,
    title: 'Beverage Bar Bliss',
    description: 'Enjoy a warm cup of coffee or tea from our in-clinic beverage counter before your appointment.'
  },
  {
    icon: Lightbulb,
    title: 'Mood Lighting Options',
    description: 'Customizable lighting designed to match your mood and help you feel calm and at ease.'
  },
  {
    icon: Monitor,
    title: 'Entertainment While You Wait',
    description: 'Catch up on your favorite Netflix shows or calming videos while we prepare your treatment.'
  },
  {
    icon: Volume2,
    title: 'Noise-Free Environment',
    description: 'We maintain a peaceful, sound-controlled space to ease anxiety and enhance relaxation.'
  },
  {
    icon: Users,
    title: 'Kid-Friendly Zone',
    description: 'Dedicated play area and fun distractions to keep your little ones comfortable and engaged.'
  }
]

export default function Features() {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-light text-dental-green mb-6 font-raleway">
            Patient-Centered Experience
          </h2>
          <p className="text-lg lg:text-xl text-dental-dark/70 max-w-4xl mx-auto">
            Innovative comforts that transform routine visits into extraordinary experiences.
          </p>
          <div className="w-24 h-0.5 bg-dental-green mx-auto mt-8" />
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-32 h-32 mx-auto mb-6 bg-dental-green/10 rounded-full flex items-center justify-center group-hover:bg-dental-green/20 transition-colors duration-300">
                <feature.icon className="w-16 h-16 text-dental-green" />
              </div>

              {/* Content */}
              <h3 className="text-xl lg:text-2xl font-medium text-dental-green mb-4">
                {feature.title}
              </h3>
              <p className="text-dental-dark/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-12 border-t border-dental-green/20">
          <h3 className="text-2xl font-medium text-dental-green mb-6">
            Experience the Difference
          </h3>
          <a href="#contact" className="btn-primary">
            Schedule Your Visit Today
          </a>
        </div>
      </div>
    </section>
  )
}