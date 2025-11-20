'use client';

import { AboutData, HobbiesData } from '@/types';
import ValueCard from '../ui/ValueCard';
import HobbyCard from '../ui/HobbyCard';

interface ValuesHobbiesSectionProps {
  values: AboutData['values'];
  hobbiesTitle: HobbiesData['title'];
  hobbies: HobbiesData['hobbies'];
  hobbiesTagline: HobbiesData['tagline'];
}

export default function ValuesHobbiesSection({
  values,
  hobbiesTitle,
  hobbies,
  hobbiesTagline
}: ValuesHobbiesSectionProps) {
  return (
    <div className="py-24 px-6">
      <div className="max-w-7xl mx-auto w-full space-y-16">

        {/* Section Valeurs professionnelles */}
        <div className="bg-white p-10 rounded-[30px] border border-brand-gray-200 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-coral-500 mb-12 text-center">
            Mes valeurs professionnelles
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <ValueCard key={idx} {...val} />
            ))}
          </div>
        </div>

        {/* Section Mon équilibre */}
        <div className="bg-white p-10 rounded-[30px] border border-brand-gray-200 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-teal-500 mb-12 text-center">
            {hobbiesTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {hobbies.map((hobby, idx) => (
              <HobbyCard
                key={idx}
                iconName={hobby.icon}
                title={hobby.title}
                description={hobby.description}
                color={hobby.color}
              />
            ))}
          </div>
          {hobbiesTagline && (
            <div className="text-center mt-16">
              <p className="text-xl font-semibold text-brand-gray-800">
                {hobbiesTagline.text}{' '}
                {hobbiesTagline.parts.map((part, idx) => (
                  <span key={idx} className="text-brand-coral-300">
                    {part.text}
                    {idx < hobbiesTagline.parts.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
