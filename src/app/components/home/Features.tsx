import { features } from "@/config/features"; // Example: adjust the import path as needed
import { ReactNode, Key } from "react";

export default function Features() {
  return (
    <section id="features" className="py-20 bg-[#F6F1E9]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-light text-[#2C4F3C] mb-4">
            Patient Centered. <span className="font-normal">Comfort Focused.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Innovative comforts that transform routine visits into extraordinary experiences.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature: { icon: React.ElementType; title: ReactNode; description: ReactNode; }, index: Key | null | undefined) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-32 h-32 mx-auto mb-6 bg-dental-green/10 rounded-full flex items-center justify-center group-hover:bg-dental-green/20 transition-colors duration-300">
                  <Icon className="w-16 h-16 text-dental-green" />
                </div>

                {/* Content */}
                <h3 className="text-xl lg:text-2xl font-medium text-dental-green mb-4">
                  {feature.title}
                </h3>
                <p className="text-dental-dark/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
