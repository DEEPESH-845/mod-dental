'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import GoogleMap from './google-map'

const contactInfo = [
  {
    icon: Phone,
    label: 'Call us now!',
    value: '+1 (832) 762‑5635',
    href: 'tel:+18327625635'
  },
  {
    icon: Mail,
    label: 'Send us an email',
    value: 'moddentist@gmail.com',
    href: 'mailto:moddentist@gmail.com'
  },
  {
    icon: MapPin,
    label: 'Get directions',
    value: '105 Main Street, Houston, TX',
    href: 'https://maps.google.com'
  }
]

const hours = [
  { day: 'Monday', hours: '8AM - 6PM' },
  { day: 'Tuesday', hours: 'Appointment Only' },
  { day: 'Wednesday', hours: 'Closed' },
  { day: 'Thursday', hours: 'Appointment Only' },
  { day: 'Friday', hours: '7AM - 5PM' },
  { day: 'Saturday', hours: 'Appointment Only' },
  { day: 'Sunday', hours: 'Closed' }
]

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    service: '',
    patientType: 'new',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        {/* Appointment Request Form */}
        <div className="text-center mb-16">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mb-6">
            <h2 className="text-4xl lg:text-5xl font-light text-dental-green font-raleway">
              Request an
            </h2>
            <h2 className="text-4xl lg:text-6xl font-light text-dental-gold">
              Appointment
            </h2>
          </div>
          <div className="w-32 h-0.5 bg-dental-green mx-auto mb-6" />
          <p className="text-dental-dark/70 max-w-4xl mx-auto leading-relaxed">
            Someone from the office will reach out to you to confirm the appointment. 
            If it&apos;s urgent, kindly call the office to check if your appointment is confirmed.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Column 1 */}
            <div className="space-y-6">
              <div>
                <label className="block text-dental-green/70 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full p-3 border border-dental-green rounded-md focus:outline-none focus:ring-2 focus:ring-dental-green/50"
                  required
                />
              </div>
              <div>
                <label className="block text-dental-green/70 font-medium mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full p-3 border border-dental-green rounded-md focus:outline-none focus:ring-2 focus:ring-dental-green/50"
                />
              </div>
              <div>
                <label className="block text-dental-green/70 font-medium mb-2">
                  Service Required
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full p-3 border border-dental-green rounded-md focus:outline-none focus:ring-2 focus:ring-dental-green/50"
                >
                  <option value="">Select a service</option>
                  <option value="dental-implants">Dental Implants</option>
                  <option value="teeth-cleaning">Teeth Cleaning</option>
                  <option value="teeth-whitening">Teeth Whitening</option>
                  <option value="smile-makeover">Smile Makeover</option>
                  <option value="wisdom-extraction">Wisdom Extraction</option>
                </select>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              <div>
                <label className="block text-dental-green/70 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-dental-green rounded-md focus:outline-none focus:ring-2 focus:ring-dental-green/50"
                  required
                />
              </div>
              <div>
                <label className="block text-dental-green/70 font-medium mb-2">
                  Preferred Time
                </label>
                <input
                  type="time"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full p-3 border border-dental-green rounded-md focus:outline-none focus:ring-2 focus:ring-dental-green/50"
                />
              </div>
              <div>
                <label className="block text-dental-green/70 font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full p-3 border border-dental-green rounded-md focus:outline-none focus:ring-2 focus:ring-dental-green/50 resize-none"
                />
              </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-6">
              <div>
                <label className="block text-dental-green/70 font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-dental-green rounded-md focus:outline-none focus:ring-2 focus:ring-dental-green/50"
                  required
                />
              </div>
              <div>
                <label className="block text-dental-green/70 font-medium mb-2">
                  Patient Type
                </label>
                <div className="flex">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, patientType: 'new' }))}
                    className={`flex-1 p-3 border border-dental-green transition-colors duration-200 ${
                      formData.patientType === 'new'
                        ? 'bg-dental-gold text-white'
                        : 'bg-transparent text-dental-green hover:bg-dental-green/10'
                    }`}
                  >
                    New Patient
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, patientType: 'returning' }))}
                    className={`flex-1 p-3 border border-dental-green border-l-0 transition-colors duration-200 ${
                      formData.patientType === 'returning'
                        ? 'bg-dental-gold text-white'
                        : 'bg-transparent text-dental-green hover:bg-dental-green/10'
                    }`}
                  >
                    Returning Patient
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="btn-primary px-12"
            >
              SUBMIT REQUEST
            </button>
          </div>
        </form>

        {/* Contact Information */}
        <div className="bg-dental-green rounded-lg p-8">
          <div className="bg-dental-cream rounded-lg overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Contact Details */}
              <div className="p-8 lg:p-12">
                <h3 className="text-3xl lg:text-4xl font-light text-dental-green mb-6 font-raleway">
                  Get in Touch
                </h3>
                <p className="text-dental-dark/70 mb-8">
                  Spacious, secure, and reliable paid parking available on-site.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Contact Info */}
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index}>
                        <div className="flex items-center gap-3 mb-2">
                          <info.icon className="w-5 h-5 text-dental-green" />
                          <h4 className="text-xl font-medium text-dental-green">
                            {info.icon === Phone ? 'Phone' : info.icon === Mail ? 'Email' : 'Office'}
                          </h4>
                        </div>
                        <p className="text-sm text-dental-dark/60 mb-1">{info.label}</p>
                        <a
                          href={info.href}
                          className="text-dental-gold font-medium hover:text-dental-gold/80 transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      </div>
                    ))}
                  </div>

                  {/* Hours */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="w-5 h-5 text-dental-green" />
                      <h4 className="text-xl font-medium text-dental-green">Hours</h4>
                    </div>
                    <div className="space-y-2">
                      {hours.map((item, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="text-sm text-dental-dark/60">{item.day}</span>
                          <span className="text-sm font-medium text-dental-gold">{item.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Image */}
              <div className="lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-auto relative">
              <GoogleMap  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}