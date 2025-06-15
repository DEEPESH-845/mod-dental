import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'

const navItems = [
  { name: 'OUR DOCTORS', href: '#doctors' },
  { name: 'MOD EXPERIENCE', href: '#features', hasDropdown: true },
  { name: 'OUR STUDIO', href: '#about' },
  { name: 'OUR SERVICES', href: '#services', hasDropdown: true },
  { name: 'FOR PATIENTS', href: '#testimonials', hasDropdown: true },
  { name: 'CONTACT US', href: '#contact' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dental-cream/95 backdrop-blur-md border-b border-dental-green/10">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-dental-green font-raleway">
              MOD DENTISTRY
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center text-sm font-medium text-dental-dark hover:text-dental-green transition-colors duration-200"
              >
                {item.name}
                {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+18327625635"
              className="flex items-center btn-secondary text-sm"
            >
              <Phone className="mr-2 h-4 w-4" />
              CALL (832) 762-5635
            </a>
            <Link href="#contact" className="btn-primary text-sm">
              PLAN YOUR VISIT
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-dental-green"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-dental-green/10">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-dental-dark hover:text-dental-green transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-dental-green/10">
                <a
                  href="tel:+18327625635"
                  className="btn-secondary text-center"
                >
                  CALL (832) 762-5635
                </a>
                <Link href="#contact" className="btn-primary text-center">
                  PLAN YOUR VISIT
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}