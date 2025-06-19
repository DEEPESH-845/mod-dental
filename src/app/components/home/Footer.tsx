import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

const navLinks = [
  'OUR DOCTORS',
  'MOD EXPERIENCE', 
  'OUR STUDIO',
  'OUR SERVICES',
  'FOR PATIENTS',
  'CONTACT US',
  'OUR BLOGS'
]

export default function Footer() {
  return (
    <footer className="bg-dental-green">
      {/* Navigation Links */}
      <div className="container-custom py-8">
        <nav className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-white hover:text-dental-gold transition-colors duration-200 text-sm font-medium"
            >
              {link}
            </Link>
          ))}
        </nav>
      </div>

      {/* Social Media & Copyright */}
      <div className="border-t border-white/20">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dental-gold rounded-full flex items-center justify-center hover:bg-dental-gold/80 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dental-gold rounded-full flex items-center justify-center hover:bg-dental-gold/80 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dental-gold rounded-full flex items-center justify-center hover:bg-dental-gold/80 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>

            {/* Copyright */}
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-white/80">
              <span>© MOD Dental Studio 2025</span>
              <Link
                href="/privacy"
                className="hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-dental-gold">
        <div className="container-custom py-2">
          <div className="text-center text-dental-dark text-sm">
            Designed with ❤️ for modern dental care
          </div>
        </div>
      </div>
    </footer>
  )
}