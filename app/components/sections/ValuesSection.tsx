'use client';

import { AboutData } from '@/types';
import ValueCard from '../ui/ValueCard';

interface ValuesSectionProps {
  values: AboutData['values'];
}

export default function ValuesSection({ values }: ValuesSectionProps) {
  return (
    <div className="py-24 px-6 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
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
      </div>
    </div>
  );
}
