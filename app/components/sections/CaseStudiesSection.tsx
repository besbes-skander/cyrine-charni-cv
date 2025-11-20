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
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 800);
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
            disabled={isTransitioning}
            className="absolute left-4 lg:left-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-brand-coral-500 text-brand-coral-500 hover:text-white p-3 rounded-full shadow-lg transition-all hover:scale-110 border border-brand-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Réalisation précédente"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Cards Container - Plus large, sans overflow */}
          <div className="relative px-4 lg:px-20 py-8">
            <div className="flex items-stretch justify-center gap-6">
              {/* Carte gauche */}
              <div className="hidden lg:flex w-[450px] flex-shrink-0">
                <div
                  className={`w-full transition-all duration-800 ease-out transform ${
                    isTransitioning ? 'translate-x-12 opacity-20' : 'translate-x-0 opacity-60'
                  } scale-90 hover:scale-95 pointer-events-none`}
                  style={{ filter: 'blur(0.5px)' }}
                >
                  <CaseStudyCard caseStudy={caseStudies[leftIndex]} />
                </div>
              </div>

              {/* Carte centrale */}
              <div className="w-full lg:w-[650px] flex-shrink-0">
                <div
                  className={`w-full transition-all duration-800 ease-out transform ${
                    isTransitioning ? 'scale-95 opacity-80' : 'scale-100 opacity-100'
                  }`}
                >
                  <CaseStudyCard caseStudy={caseStudies[centerIndex]} />
                </div>
              </div>

              {/* Carte droite */}
              <div className="hidden lg:flex w-[450px] flex-shrink-0">
                <div
                  className={`w-full transition-all duration-800 ease-out transform ${
                    isTransitioning ? '-translate-x-12 opacity-20' : 'translate-x-0 opacity-60'
                  } scale-90 hover:scale-95 pointer-events-none`}
                  style={{ filter: 'blur(0.5px)' }}
                >
                  <CaseStudyCard caseStudy={caseStudies[rightIndex]} />
                </div>
              </div>
            </div>
          </div>

          {/* Bouton suivant */}
          <button
            onClick={handleNext}
            disabled={isTransitioning}
            className="absolute right-4 lg:right-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-brand-coral-500 text-brand-coral-500 hover:text-white p-3 rounded-full shadow-lg transition-all hover:scale-110 border border-brand-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Réalisation suivante"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicateurs de pagination */}
          <div className="flex justify-center gap-2 mt-6">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsTransitioning(false), 800);
                  }
                }}
                disabled={isTransitioning}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-brand-coral-500 w-8'
                    : 'bg-brand-gray-300 hover:bg-brand-coral-300 w-2'
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
