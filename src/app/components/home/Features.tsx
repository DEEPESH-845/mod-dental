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
    <section id="features" className="py-20 bg-[#F6F1E9]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-light text-[#2C4F3C] mb-4">
            Patient Centered. <span className="font-normal">Comfort Focused.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Innovative comforts that transform routine visits into extraordinary experiences.
          </p>
        </div>

                  {/* Features Grid */}
               {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
                 <div
              key={index}
              className={`text-center p-8 relative ${
                // Add right border to all items by default
                'border-r border-[#B6A76A]'
              } ${
                // Medium screens: remove border for even positions (2nd, 4th, 6th)
                (index + 1) % 2 === 0 ? 'md:border-r-0' : ''
              } ${
                // Large screens: remove border for 3rd, 6th positions
                (index + 1) % 3 === 0 ? 'lg:border-r-0' : 'lg:border-r lg:border-[#B6A76A]'
              }`}
            >
              {/* Horizontal divider - only show for top row items */}
              {index >= 2 && (
                <div className="absolute top-0 left-0 right-0 h-px bg-[#B6A76A] md:hidden"></div>
              )}
              {index >= 2 && (
                <div className="absolute top-0 left-0 right-0 h-px bg-[#B6A76A] hidden md:block lg:hidden"></div>
              )}
              {index >= 3 && (
                <div className="absolute top-0 left-0 right-0 h-px bg-[#B6A76A] hidden lg:block"></div>
              )}

              {/* Icon */}
              <div className="w-32 h-32 mx-auto mb-6 bg-[#E4E2DC] rounded-full flex items-center justify-center">
                <feature.icon className="w-12 h-12 text-gray-500" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-medium text-[#4A7D5A] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed px-4">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
