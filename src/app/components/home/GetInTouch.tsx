"use client"


import GoogleMap from "./GoogleMap"

export default function GetInTouch() {

  return (
    <div className="min-h-screen bg-[#F3EFE9]">
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Side - Contact Information */}
        <div className="lg:w-1/2 bg-[#F3EFE9] p-6 sm:p-8 lg:p-12 xl:p-16 relative">
          <div className="max-w-md">
            {/* Header */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#2C4F3C] mb-2 font-serif leading-tight">
              Get in Touch
            </h1>
            <p className="text-gray-600  mb-12 text-sm leading-relaxed">
              Spacious, secure, and reliable paid parking available on-site.
            </p>

            {/* Contact Sections - Simple vertical layout */}
            <div className="space-y-8 lg:space-y-10">
              {/* Phone Section */}
              <div>
                <h2 className="text-2xl lg:text-3xl font-light text-[#2C4F3C] mb-1 italic font-serif">Phone</h2>
                <p className="text-xs text-[#809385] mb-1">Call us now !</p>
                <a href="tel:+18327625635" className="text-lg underline decoration-[#BFB17E] text-[#BFB17E] text- hover:text-[#CA8A04] hover:decoration-[#CA8A04] transition-colors">
                  +1 (832) 762-5635
                </a>
              </div>

              {/* Email Section */}
              <div>
                <h2 className="text-2xl lg:text-3xl font-light text-[#2C4F3C] mb-1 italic font-serif">Email</h2>
                <p className="text-xs text-[#809385] mb-1">Send us an email</p>
                <a
                  href="mailto:moddentist@gmail.com"
                  className="text-lg underline decoration-[#BFB17E] text-[#BFB17E] text- hover:text-[#CA8A04] hover:decoration-[#CA8A04] transition-colors break-all"
                >
                  moddentist@gmail.com
                </a>
              </div>

              {/* Office Section */}
              <div>
                <h2 className="text-2xl lg:text-3xl font-light text-[#2C4F3C] mb-1 italic font-serif">Office</h2>
                <p className="text-xs text-[#809385] mb-1">Get directions</p>
                <button className="text-lg underline decoration-[#BFB17E] text-[#BFB17E] text- hover:text-[#CA8A04] hover:decoration-[#CA8A04] transition-colors ">
                  105, Full Address
                </button>
              </div>
            </div>
          </div>

          {/* Hours Section - Positioned to the right as in original image */}
          <div className="mt-14 lg:mt-0 lg:absolute lg:top-48 lg:left-80 xl:left-96 2xl:left-[420px]">
            <h2 className="text-2xl lg:text-3xl font-light text-[#2C4F3C] mb-4 lg:mb-6 italic font-serif">Hours</h2>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between w-48 lg:w-52">
                <span className="text-gray-600">Monday</span>
                <span className="text-gray-600">8AM - 6PM</span>
              </div>
              <div className="flex justify-between w-48 lg:w-52">
                <span className="text-gray-600">Tuesday</span>
                <span className="text-yellow-600">Appointment Only</span>
              </div>
              <div className="flex justify-between w-48 lg:w-52">
                <span className="text-gray-600">Wednesday</span>
                <span className="text-gray-600">Closed</span>
              </div>
              <div className="flex justify-between w-48 lg:w-52">
                <span className="text-gray-600">Thursday</span>
                <span className="text-yellow-600">Appointment Only</span>
              </div>
              <div className="flex justify-between w-48 lg:w-52">
                <span className="text-gray-600">Friday</span>
                <span className="text-gray-600">7AM - 5PM</span>
              </div>
              <div className="flex justify-between w-48 lg:w-52">
                <span className="text-gray-600">Saturday</span>
                <span className="text-yellow-600">Appointment Only</span>
              </div>
              <div className="flex justify-between w-48 lg:w-52">
                <span className="text-gray-600">Sunday</span>
                <span className="text-gray-600">Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Interactive Map */}
        <div className="lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-auto relative">
          <GoogleMap />
        </div>
      </div>
     </div>
  )
}
