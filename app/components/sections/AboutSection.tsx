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
  // Render journey content with highlighted text
  const renderJourneyContent = (content: string, highlights: typeof journey.highlights) => {
    let parts: (string | JSX.Element)[] = [content];

    highlights.forEach((highlight) => {
      const newParts: (string | JSX.Element)[] = [];
      parts.forEach((part) => {
        if (typeof part === 'string') {
          const splitParts = part.split(highlight.text);
          splitParts.forEach((splitPart, idx) => {
            newParts.push(splitPart);
            if (idx < splitParts.length - 1) {
              newParts.push(
                <span key={`${highlight.text}-${idx}`} className="font-semibold text-brand-coral-300">
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

    return parts;
  };

  return (
    <section id="a-propos" className="py-24 px-6 bg-brand-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-800 mb-16 text-center">
          Qui suis-je au-delà du CV ?
        </h2>
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-10 rounded-lg border border-brand-gray-200">
            <h3 className="text-2xl font-semibold mb-6 text-brand-gray-800">{journey.title}</h3>
            <p className="text-brand-gray-500 leading-relaxed">
              {renderJourneyContent(journey.content, journey.highlights)}
            </p>
          </div>
          <div className="space-y-5">
            <h3 className="text-2xl font-semibold mb-6 text-brand-gray-800">Ce qui me fait vibrer</h3>
            {motivations.map((motivation, idx) => (
              <MotivationCard key={idx} {...motivation} />
            ))}
          </div>
        </div>

        {/* Valeurs */}
        <div className="bg-white p-10 rounded-lg border border-brand-gray-200">
          <h3 className="text-2xl font-semibold mb-8 text-center text-brand-gray-800">Mes valeurs professionnelles</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <ValueCard key={idx} {...val} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
