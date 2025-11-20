'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CaseStudiesData } from '@/types';
import CaseStudyCard from '../ui/CaseStudyCard';

interface CaseStudiesSectionProps {
  caseStudies: CaseStudiesData['caseStudies'];
}

export default function CaseStudiesSection({ caseStudies }: CaseStudiesSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };

  // Calculer les index pour gauche, centre, droite (avec wrap-around)
  const getIndex = (offset: number) => {
    const index = currentIndex + offset;
    if (index < 0) return caseStudies.length + index;
    if (index >= caseStudies.length) return index - caseStudies.length;
    return index;
  };

  const leftIndex = getIndex(-1);
  const centerIndex = currentIndex;
  const rightIndex = getIndex(1);

  return (
    <div className="py-16 px-6 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-coral-500 mb-10 text-center">
          Mes réalisations concrètes
        </h2>

        {/* Carrousel Container */}
        <div className="relative">
          {/* Bouton précédent */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-brand-coral-500 text-brand-coral-500 hover:text-white p-3 rounded-full shadow-lg transition-all hover:scale-110 border border-brand-gray-200"
            aria-label="Réalisation précédente"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Cards Container avec overflow pour les cartes latérales */}
          <div className="relative overflow-hidden px-16">
            <div className="flex items-center justify-center gap-0">
              {/* Carte gauche */}
              <div className="hidden lg:block absolute left-0 w-[500px] -translate-x-1/3 z-0 pointer-events-none">
                <div className="scale-75 opacity-50 blur-[1px] transition-all duration-700 ease-in-out transform">
                  <CaseStudyCard caseStudy={caseStudies[leftIndex]} />
                </div>
              </div>

              {/* Carte centrale */}
              <div className="w-full lg:w-[500px] z-10 transition-all duration-700 ease-in-out transform">
                <CaseStudyCard caseStudy={caseStudies[centerIndex]} />
              </div>

              {/* Carte droite */}
              <div className="hidden lg:block absolute right-0 w-[500px] translate-x-1/3 z-0 pointer-events-none">
                <div className="scale-75 opacity-50 blur-[1px] transition-all duration-700 ease-in-out transform">
                  <CaseStudyCard caseStudy={caseStudies[rightIndex]} />
                </div>
              </div>
            </div>
          </div>

          {/* Bouton suivant */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-brand-coral-500 text-brand-coral-500 hover:text-white p-3 rounded-full shadow-lg transition-all hover:scale-110 border border-brand-gray-200"
            aria-label="Réalisation suivante"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicateurs de pagination */}
          <div className="flex justify-center gap-2 mt-8">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-brand-coral-500 w-8'
                    : 'bg-brand-gray-300 hover:bg-brand-coral-300'
                }`}
                aria-label={`Aller à la réalisation ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
