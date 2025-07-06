import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { NAV_LINKS } from '@/config/navbar';

export default function Footer() {
  return (
    <footer className="bg-dental-green">
      {/* Navigation Links */}
      <div className="container-custom py-8">
        <nav className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={`#${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-white hover:text-dental-gold transition-colors duration-200 text-sm font-medium"
            >
              {link.label}
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