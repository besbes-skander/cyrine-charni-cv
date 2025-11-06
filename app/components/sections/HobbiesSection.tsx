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
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
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
        <div className="text-center mt-12">
          <p className="text-2xl font-bold text-gray-900">
            {tagline.text}{' '}
            {tagline.parts.map((part, idx) => {
              const colorClass = part.color === 'pink' ? 'text-pink-500' :
                part.color === 'purple' ? 'text-purple-500' : 'text-gray-900';
              return (
                <span key={idx} className={colorClass}>
                  {part.text}
                  {idx < tagline.parts.length - 1 ? ', ' : ''}
                </span>
              );
            })} ✨
          </p>
        </div>
      </div>
    </section>
  );
}
