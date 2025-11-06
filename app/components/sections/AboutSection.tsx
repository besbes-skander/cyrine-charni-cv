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
              const colorClass = highlight.color === 'pink' ? 'text-pink-600' :
                highlight.color === 'purple' ? 'text-purple-600' :
                  highlight.color === 'blue' ? 'text-blue-600' : 'text-gray-900';
              newParts.push(
                <span key={`${highlight.text}-${idx}`} className={`font-semibold ${colorClass}`}>
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
    <section id="a-propos" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          🌟 Qui suis-je au-delà du CV ?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">{journey.title}</h3>
            <p className="text-gray-700 leading-relaxed">
              {renderJourneyContent(journey.content, journey.highlights)}
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">💡 Ce qui me fait vibrer</h3>
            {motivations.map((motivation, idx) => (
              <MotivationCard key={idx} {...motivation} />
            ))}
          </div>
        </div>

        {/* Valeurs */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-8 rounded-2xl text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">🎯 Mes valeurs professionnelles</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <ValueCard key={idx} {...val} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
