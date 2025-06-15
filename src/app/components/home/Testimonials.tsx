'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    text: "Excellent service from start to finish. They explained every step clearly and treated my tooth pain effectively and quickly. The office is beautiful and the staff is incredibly professional.",
    author: "Ananya Roy",
    rating: 5,
    image: "/assets/images/clearning-teeth.jpg"
  },
  {
    id: 2,
    text: "The whitening treatment gave incredible results! My smile looks fresh and bright. Staff were kind and professional throughout. I couldn't be happier with the outcome.",
    author: "Pooja Luthra",
    rating: 5,
    image: "/assets/images/sleep-apnea.png"
  },
  {
    id: 3,
    text: "I've always been afraid of dental visits, but the team here made me feel calm and cared for. My smile has never looked better! The atmosphere is so relaxing.",
    author: "Karan Deshmukh",
    rating: 5,
    image: "/assets/images/teeth-examine.png"
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="section-padding bg-dental-green">
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

        {/* Rating Summary */}
        <div className="flex items-center gap-8 mb-12 text-white">
          <div>
            <div className="text-4xl font-bold mb-2">4.9</div>
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-sm opacity-75">Based on 150+ reviews</div>
          </div>
          <div className="text-lg">
            <div>Excellent Rating</div>
            <div className="text-sm opacity-75">Google Reviews</div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative mb-12">
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`bg-white rounded-lg p-6 transition-all duration-300 ${
                  index === currentIndex ? 'transform scale-105 shadow-xl' : 'opacity-75'
                }`}
              >
                <Quote className="w-8 h-8 text-dental-gold mb-4" />
                <p className="text-dental-dark mb-6 leading-relaxed">
                  {testimonial.text}
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-dental-green">
                      {testimonial.author}
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-end mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-dental-cream hover:bg-white flex items-center justify-center transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-dental-green" />
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://www.google.com/search?q=MOD+Dentistry+Houston+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-dental-green font-medium py-3 px-8 rounded-md hover:bg-dental-cream transition-colors duration-200"
          >
            WRITE A REVIEW
          </a>
        </div>
      </div>
    </section>
  )
}