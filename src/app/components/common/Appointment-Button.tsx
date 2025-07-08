'use client';

import { Button } from "@/app/components/home/ui/Button";

interface HeroAppointmentSectionProps {
  readonly phoneNumber?: string;
  readonly onRequestAppointment?: () => void;
  readonly onCallClick?: () => void;
}

export default function HeroAppointmentSectionButton({
  phoneNumber = "+1 (832) 762-5635",
  onRequestAppointment,
  onCallClick,
}: HeroAppointmentSectionProps) {
  const handleCallClick = () => {
    if (onCallClick) {
      onCallClick();
    } else {
      // Default behavior - initiate phone call
      window.location.href = `tel:${phoneNumber.replace(/\s/g, '')}`;
    }
  };

  return (
    <section className="relative w-full bg-white">
      {/* Main container with decorative lines */}
      <div className="relative">
        {/* Top decorative line */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px]" />
        
        {/* Content container */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 py-8 sm:py-12 px-4">
          {/* Left decorative line (hidden on mobile) */}
          <div className="hidden sm:block flex-1 h-[1px] bg-gray-300 max-w-[200px] lg:max-w-[300px]" />
          
          {/* Request Appointment Button */}
          <Button
            onClick={onRequestAppointment}
            className="bg-[#2C4F3C] hover:bg-[#1e3429] text-white px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-medium rounded-md transition-colors duration-200 whitespace-nowrap"
          >
            REQUEST AN APPOINTMENT
          </Button>
          
          {/* Call Button */}
          <Button
            onClick={handleCallClick}
            className="border border-[#2C4F3C] bg-white text-[#2C4F3C] hover:bg-[#2C4F3C] hover:text-white px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-medium rounded-md transition-colors duration-200 flex items-center gap-2 whitespace-nowrap"
          >
            <a href={`tel:${phoneNumber.replace(/\s/g, '')}`}>
                    <span>CALL</span>
                    <span className="font-normal">{phoneNumber}</span>
                  </a>
          </Button>
          
          {/* Right decorative line (hidden on mobile) */}
          <div className="hidden sm:block flex-1 h-[1px] bg-gray-300 max-w-[200px] lg:max-w-[300px]" />
        </div>
      </div>
    </section>
  );
}
