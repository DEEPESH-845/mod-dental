import Link from 'next/link'
import { Facebook, Instagram } from 'lucide-react'

const navLinks = [
  { name: 'OUR DOCTORS', href: '/bio/doctors/dr-arora' },
  { name: 'MOD EXPERIENCE', href: '/experience' }, 
  { name: 'OUR STUDIO', href: '/studio' },
  { name: 'OUR SERVICES', href: '/services' },
  { name: 'FOR PATIENTS', href: '/patients' },
  { name: 'CONTACT US', href: '/contact' },
  { name: 'OUR BLOGS', href: '/blogs' }
]

export default function Footer() {
  return (
    <footer className="w-full relative">
      {/* Main Footer Section */}
      <div className="bg-[#2C4F3C] py-6 lg:py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Navigation Links */}
            <div className="flex-1 flex justify-center lg:justify-center">
              <nav className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-white text-xs sm:text-sm font-[400] tracking-wide hover:text-white/80 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center lg:justify-end gap-3">
              <a
                href="https://facebook.com"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-[#B6A66A] rounded-full flex items-center justify-center hover:bg-[#A89660] transition-colors duration-200"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </a>
              <a
                href="https://instagram.com"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-[#B6A66A] rounded-full flex items-center justify-center hover:bg-[#A89660] transition-colors duration-200"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </a>
              <a
                href="https://twitter.com"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-[#B6A66A] rounded-full flex items-center justify-center hover:bg-[#A89660] transition-colors duration-200"
                aria-label="Follow us on X (Twitter)"
              >
                <svg 
                  className="w-3 h-3 sm:w-4 sm:h-4 text-white" 
                  fill="currentColor" 
                  viewBox="0 0 24 24" 
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#B6A66A] p-4 flex items-center justify-center sm:justify-end">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 lg:gap-6 text-xs sm:text-sm">
          <span className="text-gray-800">© MOD Dental Studio 2025</span>
          <Link
            href="/privacy-policy"
            className="text-gray-800 hover:text-gray-600 transition-colors duration-200"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}