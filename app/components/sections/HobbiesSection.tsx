'use client';

import { HobbiesData } from '@/types';
import HobbyCard from '../ui/HobbyCard';

interface HobbiesSectionProps {
  title: HobbiesData['title'];
  hobbies: HobbiesData['hobbies'];
  tagline: HobbiesData['tagline'];
}

export default function HobbiesSection({ title, hobbies, tagline }: HobbiesSectionProps) {
  return (
    <div className="py-24 px-6 bg-white min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-800 mb-16 text-center">
          {title}
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
        <div className="text-center mt-16">
          <p className="text-xl font-semibold text-brand-gray-800">
            {tagline.text}{' '}
            {tagline.parts.map((part, idx) => (
              <span key={idx} className="text-brand-coral-300">
                {part.text}
                {idx < tagline.parts.length - 1 ? ', ' : ''}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
