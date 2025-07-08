"use client";

import Image from "next/image";
import { libreBaskerville, poppins } from "@/lib/fonts";

// Importing images
const hallwayImage = "/assets/images/hallway.png";
const treatmentRoomImage = "/assets/images/Rectangle 60.png";
const equipmentImage = "/assets/images/Rectangle 61.png";
const receptionImage = "/assets/images/Rectangle 62.png";

interface BespokeDentalStudioProps {
  readonly location?: string;
  readonly title?: string;
  readonly description?: string;
  readonly mainImage?: string;
  readonly galleryImages?: {
    treatment?: string;
    equipment?: string;
    reception?: string;
  };
}

export default function BespokeDentalStudio({
  location = "in Houston, Texas",
  title = "A Bespoke Dental Studio",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nCurabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  mainImage = hallwayImage,
  galleryImages = {
    treatment: treatmentRoomImage,
    equipment: equipmentImage,
    reception: receptionImage,
  },
}: BespokeDentalStudioProps) {
  return (
    <section className="bg-[#F3EFE9] py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Column - Images */}
          <div className="space-y-6">
            {/* Main Featured Image with Border Frame */}
            <div className="relative">
              {/* Border Frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#C9B998] rounded-lg z-0"></div>

              {/* Main Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={mainImage}
                  alt="Modern dental studio hallway"
                  width={600}
                  height={400}
                  className="w-full h-[350px] lg:h-[400px] object-cover rounded-md"
                  priority
                />
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-[2fr_1fr] gap-4 lg:gap-6 h-[280px] lg:h-[320px] ">
              {/* Left - Treatment Room Image (Larger) */}
              {/* Treatment Room Image */}
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={galleryImages.treatment || treatmentRoomImage}
                  alt="Dental treatment room"
                  width={400}
                  height={300}
                  className="w-full h-[200px] lg:h-[240px] object-cover"
                />
              </div>

              {/* Equipment Detail Image */}
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={galleryImages.equipment || equipmentImage}
                  alt="Dental equipment detail"
                  width={400}
                  height={300}
                  className="w-full h-[200px] lg:h-[240px] object-cover"
                />
              </div>

              {/* Reception Area Image */}
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={galleryImages.reception || receptionImage}
                  alt="Dental studio reception"
                  width={400}
                  height={300}
                  className="w-full h-[200px] lg:h-[240px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6 lg:pl-8">
            {/* Title */}
            <div>
              <h2
                className={`text-3xl lg:text-4xl xl:text-5xl font-light text-[#2C4F3C] ${libreBaskerville.className}`}
              >
                {title}
              </h2>
              <p
                className={`text-lg lg:text-xl text-[#2C4F3C] italic mt-2 ${libreBaskerville.className}`}
              >
                {location}
              </p>
            </div>

            {/* Description */}
            <div className={`space-y-4 text-[#3B3B3B] ${poppins.className}`}>
              {description.split("\n\n").map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base lg:text-lg leading-relaxed font-light"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
