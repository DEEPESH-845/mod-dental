// Navigation links and dropdowns for NavBar
export const NAV_LINKS = [
  { label: 'OUR DOCTORS', href: '/bio/doctors/arora' },
  { label: 'MOD EXPERIENCE', dropdown: [
    { label: 'COSMETIC DENTISTRY', href: '/services/cosmetic-dentistry' },
    { label: 'DENTAL IMPLANTS', href: '/services/dental-implants' },
  ]},
  { label: 'OUR SERVICES', dropdown: [
    { label: 'COSMETIC DENTISTRY', href: '/services/cosmetic-dentistry' },
    { label: 'DENTAL IMPLANTS', href: '/services/dental-implants' },
    { label: 'PREVENTIVE DENTISTRY', href: '/services/preventive-dentistry' },
    { label: 'RESTORATIVE DENTISTRY', href: '/services/restorative-dentistry' },
    { label: 'SLEEP APNEA', href: '/services/sleep-apnea' },
    { label: 'SMILE MAKEOVER', href: '/services/smile-makeover' },
    { label: 'TEETH STRAIGHTENING', href: '/services/teeth-straightening' },
    { label: 'WISDOM EXTRACTION', href: '/services/wisdom-extraction' },
  ]},
  { label: 'FOR PATIENTS', dropdown: [
    { label: 'INSURANCE', href: '../accordion' },
    { label: 'FORMS', href: '../overlays' },
    { label: 'PAYMENTS', href: '../advance-forms' },
  ]},
  { label: 'ABOUT US', href: '/about' },
  { label: 'BLOGS', href: '/posts' },
];

export const NAV_ACTIONS = [
  { type: 'phone', label: 'CALL (832) 762-5635', href: 'tel:+18327625635' },
  { type: 'link', label: 'PLAN YOUR VISIT', href: '#contact' },
];

export const LOGO = {
  src: '/assets/images/logo.png',
  alt: 'MOD Dental Studio Logo',
  width: 150,
  height: 50,
};
