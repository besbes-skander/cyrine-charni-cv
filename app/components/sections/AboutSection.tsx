'use client';

import { AboutData } from '@/types';
import MotivationCard from '../ui/MotivationCard';
import ValueCard from '../ui/ValueCard';

interface AboutSectionProps {
  journey: AboutData['journey'];
  motivations: AboutData['motivations'];
  values: AboutData['values'];
}

export default function AboutSection({ journey, motivations, values }: AboutSectionProps) {
  // Render journey content with highlighted text, line by line
  const renderJourneyContent = (content: string, highlights: typeof journey.highlights) => {
    const lines = content.split('\n');

    return lines.map((line, lineIdx) => {
      let parts: (string | JSX.Element)[] = [line];

      highlights.forEach((highlight) => {
        const newParts: (string | JSX.Element)[] = [];
        parts.forEach((part) => {
          if (typeof part === 'string') {
            const splitParts = part.split(highlight.text);
            splitParts.forEach((splitPart, idx) => {
              newParts.push(splitPart);
              if (idx < splitParts.length - 1) {
                newParts.push(
                  <span key={`${highlight.text}-${idx}-${lineIdx}`} className="font-semibold">
                    {highlight.text}
                  </span>
                );
              }
            });
          } else {
            newParts.push(part);
          }
        });
        parts = newParts;
      });

      return (
        <p key={lineIdx} className="mb-4 last:mb-0">
          {parts}
        </p>
      );
    });
  };

  return (
    <div className="py-24 px-6 bg-brand-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-coral-500 mb-16 text-center">
          Qui suis-je au-delà du CV ?
        </h2>

        {/* Layout moderne avec scroll */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Mon parcours - colonne gauche */}
          <div className="bg-white p-8 rounded-xl border border-brand-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-semibold mb-6 text-brand-gray-800">{journey.title}</h3>
            <div className="text-brand-gray-500 leading-relaxed">
              {renderJourneyContent(journey.content, journey.highlights)}
            </div>
          </div>

          {/* Ce qui me stimule - colonne droite */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-brand-gray-800">Ce qui me stimule</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin">
              {motivations.map((motivation, idx) => (
                <MotivationCard key={idx} {...motivation} />
              ))}
            </div>
          </div>
        </div>

        {/* Valeurs */}
        <div className="bg-white p-10 rounded-xl border border-brand-gray-200 shadow-sm">
          <h3 className="text-2xl font-semibold mb-8 text-center text-brand-coral-500">Mes valeurs professionnelles</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <ValueCard key={idx} {...val} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
