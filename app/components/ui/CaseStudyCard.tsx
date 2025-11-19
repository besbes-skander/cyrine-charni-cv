'use client';

import { getIcon } from '@/utils/iconMap';
import { CaseStudy } from '@/types';
import ResultStat from './ResultStat';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <div className="bg-white p-10 rounded-[30px] border border-brand-gray-200">
      {/* Header */}
      <div className="flex items-start gap-4 mb-8">
        <div className="bg-brand-coral-500 p-3 rounded-[30px]">
          {getIcon(caseStudy.icon, { className: 'text-white', size: 28 })}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-brand-gray-800">
            {caseStudy.title}
          </h3>
          <p className="text-brand-gray-500">{caseStudy.role} | {caseStudy.period}</p>
        </div>
      </div>

      {/* Content - Two columns for challenge/strategy or mission */}
      {(caseStudy.challenge || caseStudy.mission) && (
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Challenge */}
          {caseStudy.challenge && (
            <div>
              <h4 className="font-semibold text-brand-gray-800 mb-4">{caseStudy.challenge.title}</h4>
              <ul className="space-y-2 text-brand-gray-500">
                {caseStudy.challenge.points.map((point, idx) => (
                  <li key={idx}>• {point}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Strategy or Mission */}
          {caseStudy.strategy && (
            <div>
              <h4 className="font-semibold text-brand-gray-800 mb-4">{caseStudy.strategy.title}</h4>
              <ul className="space-y-2 text-brand-gray-500">
                {caseStudy.strategy.points.map((point, idx) => (
                  <li key={idx}>
                    • <span className="font-semibold text-brand-gray-800">{point.text}</span> : {point.detail}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {caseStudy.mission && (
            <div>
              <h4 className="font-semibold text-brand-gray-800 mb-4">{caseStudy.mission.title}</h4>
              <ul className="space-y-2 text-brand-gray-500">
                {caseStudy.mission.points.map((point, idx) => (
                  <li key={idx}>• {point}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Results */}
      {caseStudy.results && (
        <div className="bg-brand-gray-50 p-6 rounded-[30px] border-t border-brand-gray-200">
          <h4 className="font-semibold text-brand-gray-800 mb-4">Les résultats</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {caseStudy.results.map((stat, idx) => (
              <ResultStat key={idx} {...stat} />
            ))}
          </div>
        </div>
      )}

      {/* Impact (for HUNTEED case) */}
      {caseStudy.impact && (
        <div className="bg-brand-gray-50 p-6 rounded-[30px] border-t border-brand-gray-200">
          <h4 className="font-semibold text-brand-gray-800 mb-4">Impact</h4>
          <div className="text-center">
            <div className="text-5xl font-bold text-brand-amber-500 mb-2">{caseStudy.impact.value}</div>
            <div className="text-brand-gray-500">{caseStudy.impact.label}</div>
            <div className="mt-4 text-sm text-brand-gray-500">
              {caseStudy.impact.detail}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
