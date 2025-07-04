'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { services } from '@/config/services';

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 3

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerView >= services.length ? 0 : prev + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, services.length - itemsPerView) : prev - 1
    )
  }

  return (
    <section id="services" className="section-padding bg-dental-green">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12">
          <div className="text-white mb-8 lg:mb-0">
            <h2 className="text-3xl lg:text-4xl font-light mb-2 font-raleway">
              All-in-one
            </h2>
            <h3 className="text-2xl lg:text-3xl font-light ml-8">
              right here in one place
            </h3>
          </div>
          <div className="text-dental-gold text-xl lg:text-2xl font-medium">
            Comprehensive Dental Solutions
          </div>
        </div>

        {/* Services Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {services.map((service) => (
                <div
                  key={service.id}
                  className="w-full lg:w-1/3 flex-shrink-0 px-2"
                >
                  <div className="relative h-[500px] rounded-lg overflow-hidden group cursor-pointer">
                    <Image
                      src={service.src}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-card-gradient" />
                    
                    {/* Service Badge */}
                    <div className="absolute top-4 left-4 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2">
                      <span className="text-white font-medium">{service.title}</span>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <p className="text-2xl lg:text-3xl font-light mb-2">
                        {service.description}
                      </p>
                      <p className="text-2xl lg:text-3xl font-medium text-dental-gold">
                        {service.highlight}
                      </p>
                      <p className="text-sm mt-3 opacity-90">
                        {service.details}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-end mt-8 gap-4">
            <div className="flex-1 h-0.5 bg-white/20" />
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors duration-200"
              aria-label="Previous services"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-dental-cream hover:bg-white flex items-center justify-center transition-colors duration-200"
              aria-label="Next services"
            >
              <ChevronRight className="w-6 h-6 text-dental-green" />
            </button>
            <div className="w-24 h-0.5 bg-white/20" />
          </div>
        </div>
      </div>
    </section>
  )
}