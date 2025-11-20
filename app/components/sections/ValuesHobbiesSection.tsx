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
    <div className="py-24 px-6 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Grid avec 2 colonnes sur desktop */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Colonne gauche : Valeurs professionnelles */}
          <div className="bg-white p-8 rounded-[30px] border border-brand-gray-200 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-coral-500 mb-10 text-center">
              Mes valeurs professionnelles
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {values.map((val, idx) => (
                <ValueCard key={idx} {...val} />
              ))}
            </div>
          </div>

          {/* Colonne droite : Mon équilibre */}
          <div className="bg-white p-8 rounded-[30px] border border-brand-gray-200 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-teal-500 mb-10 text-center">
              {hobbiesTitle}
            </h2>
            <div className="grid grid-cols-2 gap-6 mb-8">
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
              <div className="text-center mt-6 pt-6 border-t border-brand-gray-200">
                <p className="text-lg font-semibold text-brand-gray-800">
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
    </div>
  );
}
