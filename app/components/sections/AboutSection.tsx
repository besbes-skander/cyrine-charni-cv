'use client';

import { AboutData } from '@/types';
import MotivationCard from '../ui/MotivationCard';

interface AboutSectionProps {
  journey: AboutData['journey'];
  motivations: AboutData['motivations'];
}

export default function AboutSection({ journey, motivations }: AboutSectionProps) {
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
    <div className="py-16 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-coral-500 mb-10 text-center">
          Qui suis-je au-delà du CV ?
        </h2>

        {/* Layout moderne avec scroll */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Mon parcours - colonne gauche */}
          <div className="bg-white p-8 rounded-[30px] border border-brand-gray-200 shadow-sm hover:shadow-md transition-shadow">
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
      </div>
    </div>
  );
}
