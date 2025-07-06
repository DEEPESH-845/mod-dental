"use client";

import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

type ServiceSlug =
  | "dental-implants"
  | "cosmetic-dentistry"
  | "orthodontics"
  | "root-canal-treatment"
  | "teeth-whitening"
  | "dental-crowns"
  | "periodontal-treatment"
  | "pediatric-dentistry"
  | "emergency-dental-care"
  | "dental-cleaning"
  | "preventive-dentistry"
  | "restorative-dentistry"
  | "sleep-apnea"
  | "smile-makeover"
  | "teethe-straightening"
  | "wisdon-extraction"
  | "dental-bridges"
  | "dental-x-rays"
  | "dental-fillings"
  | "dental-veneers"
  | "dental-orthotics";

const servicePageMetadata: Record<
  ServiceSlug,
  {
    name: string;
    description: string;
    image: string;
  }
> = {
  "dental-implants": {
    name: "Dental Implants",
    description:
      "Dental implants are a permanent solution for missing teeth, providing a natural look and feel. They are designed to blend seamlessly with your existing teeth, restoring both function and aesthetics.",
    image: "/assets/images/dental-implants.jpg",
  },
  "cosmetic-dentistry": {
    name: "Cosmetic Dentistry",
    description:
      "Cosmetic dentistry focuses on improving the appearance of your teeth, gums, and smile. It includes procedures like teeth whitening, veneers, and bonding to enhance your smile's aesthetics.",   
    image: "/assets/images/cosmetic-dentistry.jpg",
  }, 
  "orthodontics": {
    name: "Orthodontics",
    description:
      "Orthodontics involves the correction of misaligned teeth and jaws using braces or aligners. It aims to improve both function and appearance, ensuring a healthy bite and smile.",
    image: "/assets/images/orthodontics.jpg",
  }, 
  "root-canal-treatment": {
    name: "Root Canal Treatment",
    description:
      "Root canal treatment is a procedure to save a tooth that is badly decayed or infected. It involves removing the infected pulp, cleaning the inside of the tooth, and sealing it to prevent further infection.",
    image: "/assets/images/root-canal-treatment.jpg",
  },
  "teeth-whitening": {
    name: "Teeth Whitening",
    description:
      "Teeth whitening is a cosmetic procedure that lightens the color of your teeth, removing stains and discoloration. It can be done in-office or with at-home kits for a brighter smile.",
    image: "/assets/images/teeth-whitening.jpg",
  },
  "dental-crowns": {
    name: "Dental Crowns",
    description:
      "Dental crowns are custom-made caps placed over damaged or decayed teeth to restore their shape, size, and function. They provide strength and improve the appearance of your smile.",
    image: "/assets/images/dental-crowns.jpg",
  },
  "periodontal-treatment": {
    name: "Periodontal Treatment",
    description:
      "Periodontal treatment focuses on the prevention, diagnosis, and treatment of gum disease. It includes scaling, root planing, and other procedures to maintain healthy gums and prevent tooth loss.",
    image: "/assets/images/periodontal-treatment.jpg",
  },
  "pediatric-dentistry": {
    name: "Pediatric Dentistry",
    description:
      "Pediatric dentistry specializes in the dental care of children, from infancy through adolescence. It focuses on the unique dental needs of children, ensuring healthy development and a positive dental experience.",
    image: "/assets/images/pediatric-dentistry.jpg",
  },
  "emergency-dental-care": {
    name: "Emergency Dental Care",
    description:
      "Emergency dental care provides immediate treatment for dental issues that require urgent attention, such as severe pain, broken teeth, or infections. It ensures prompt relief and prevents further complications.",
    image: "/assets/images/emergency-dental-care.jpg",
  },
  "dental-cleaning": {
    name: "Dental Cleaning",
    description:
      "Dental cleaning is a preventive procedure that removes plaque and tartar buildup from your teeth. It helps maintain oral health, prevents cavities, and keeps your smile bright.",
    image: "/assets/images/dental-cleaning.jpg",
  },
  "preventive-dentistry": {
    name: "Preventive Dentistry", 
    description:
      "Preventive dentistry focuses on maintaining oral health through regular check-ups, cleanings, and education. It aims to prevent dental issues before they arise, ensuring a healthy smile for life.",
    image: "/assets/images/preventive-dentistry.jpg",
  },
  "restorative-dentistry": {
    name: "Restorative Dentistry",
    description:
      "Restorative dentistry involves restoring the function and aesthetics of damaged or missing teeth. It includes procedures like fillings, crowns, bridges, and dentures to bring back your smile's health and beauty.", 
    image: "/assets/images/restorative-dentistry.jpg",
  },
  "sleep-apnea": {
    name: "Sleep Apnea Treatment", 
    description:
      "Sleep apnea treatment focuses on managing sleep disorders that cause breathing interruptions during sleep. It includes oral appliances, CPAP therapy, and lifestyle changes to improve sleep quality and overall health.", 
    image: "/assets/images/sleep-apnea.jpg",
  },
  "smile-makeover": {
    name: "Smile Makeover",
    description:
      "A smile makeover is a comprehensive approach to enhancing your smile through various cosmetic and restorative procedures. It combines treatments like teeth whitening, veneers, and orthodontics to achieve your desired smile.",  
    image: "/assets/images/smile-makeover.jpg",
  },
  "teethe-straightening": {
    name: "Teeth Straightening",

    description:
      "Teeth straightening involves correcting misaligned teeth using braces or clear aligners. It improves both the function and appearance of your smile, ensuring a healthy bite and confident look.", 
    image: "/assets/images/teeth-straightening.jpg",
  },
  "wisdon-extraction": {
    name: "Wisdom Tooth Extraction",
    description:
      "Wisdom tooth extraction is a common dental procedure to remove impacted or problematic wisdom teeth. It helps prevent pain, infection, and damage to adjacent teeth, ensuring optimal oral health.", 
    image: "/assets/images/wisdom-tooth-extraction.jpg",
  },
  "dental-bridges": { 
    name: "Dental Bridges",
    description:
      "Dental bridges are prosthetic devices used to replace one or more missing teeth. They bridge the gap between teeth, restoring function and aesthetics while maintaining the alignment of your smile.",
    image: "/assets/images/dental-bridges.jpg",
  },  
  "dental-x-rays": {
    name: "Dental X-Rays",
    description:
      "Dental X-rays are diagnostic tools that provide detailed images of your teeth, gums, and jawbone. They help dentists identify issues not visible during a regular examination, ensuring accurate diagnosis and treatment planning.",
    image: "/assets/images/dental-x-rays.jpg",
  },
  "dental-fillings": {
    name: "Dental Fillings",
    description:
      "Dental fillings are used to restore teeth damaged by decay or trauma. They fill cavities, preventing further damage and restoring the tooth's function and appearance.",
    image: "/assets/images/dental-fillings.jpg",
  },
  "dental-veneers": {
    name: "Dental Veneers",
    description:
      "Dental veneers are thin shells of porcelain or composite resin that cover the front surface of teeth. They enhance the appearance of your smile by correcting imperfections like discoloration, chips, or gaps.",
    image: "/assets/images/dental-veneers.jpg",
  },
  "dental-orthotics": {
    name: "Dental Orthotics",
    description:
      "Dental orthotics are custom-made devices that help correct bite issues and jaw alignment. They provide support and stability to the jaw, improving function and comfort.",
    image: "/assets/images/dental-orthotics.jpg",
  }
};

interface ServiceLayoutProps {
  children: ReactNode;
}

const ServiceLayout = ({ children }: ServiceLayoutProps) => {
  const pathname = usePathname();
  const serviceSlug = pathname.split("/").pop() as ServiceSlug;
  const product = servicePageMetadata[serviceSlug];

  if (!product) {
    return <section>
      {children}
    </section>
  }

  const jsonLd = {
    "@context": "http://www.schema.org",
    "@type": "Dentist",
    name: product.name,
    url: "https://mod-dental.com",
    logo: "https://mod-dental.com/asset/images/logo.png",
    priceRange: "$$",
    image: "https://mod-dental.com/asset/images/logo.png",
    description: product.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "3660 Barker Cypress Road, Suite # 210",
      addressLocality: "Houston",
      addressRegion: "Texas",
      postalCode: "77084",
      addressCountry: "Harris",
    },
    hasMap:
      "https://www.google.com/maps?ll=29.822593,-95.686152&z=10&t=m&hl=en-US&gl=US&mapclient=embed&cid=8234393762155388055",
    openingHours: "Tu 08:00-18:00 Th 01:00-01:00 Fr 01:00-01:00",
    telephone: "+11231231234",
  };

  return (
    <section>
      {/* Add JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {/* ... */}
      {children}
    </section>
  );
};

export default ServiceLayout;
