import Link from 'next/link'
import { Facebook, Instagram } from 'lucide-react'

const navLinks = [
  { name: 'OUR DOCTORS', href: '/doctors' },
  { name: 'MOD EXPERIENCE', href: '/experience' }, 
  { name: 'OUR STUDIO', href: '/studio' },
  { name: 'OUR SERVICES', href: '/services' },
  { name: 'FOR PATIENTS', href: '/patients' },
  { name: 'CONTACT US', href: '/contact' },
  { name: 'OUR BLOGS', href: '/blogs' }
]

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Main Footer Section */}
      <div className="bg-[#2C4F3C] py-6 lg:py-8 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Navigation Links */}
            <div className="flex-1 flex justify-center">
              <nav className="flex flex-wrap justify-center gap-10 lg:gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-white text-sm font-[400] tracking-wide hover:text-white/80 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center lg:justify-end gap-3 absolute right-6">
              <a
                href="https://facebook.com"
                className="w-10 h-10 bg-[#B6A66A] rounded-full flex items-center justify-center hover:bg-[#A89660] transition-colors duration-200"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://instagram.com"
                className="w-10 h-10 bg-[#B6A66A] rounded-full flex items-center justify-center hover:bg-[#A89660] transition-colors duration-200"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://twitter.com"
                className="w-10 h-10 bg-[#B6A66A] rounded-full flex items-center justify-center hover:bg-[#A89660] transition-colors duration-200"
                aria-label="Follow us on X (Twitter)"
              >
                <svg 
                  className="w-4 h-4 text-white" 
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
      <div className="bg-[#B6A66A] p-4 flex items-center justify-end">
        <div className="flex">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm">
            <span className="text-gray-800">© MOD Dental Studio 2025</span>
            <Link
              href="/privacy-policy"
              className="text-gray-800 hover:text-gray-600 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}