'use client';

import { getIcon } from '@/utils/iconMap';
import { CaseStudy } from '@/types';
import ResultStat from './ResultStat';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

const colorClasses: Record<string, { bg: string; iconBg: string }> = {
  pink: { bg: 'from-burgundy-50', iconBg: 'bg-burgundy-800' },
  purple: { bg: 'from-gold-50', iconBg: 'bg-gold-600' },
  blue: { bg: 'from-blue-50', iconBg: 'bg-blue-500' },
  green: { bg: 'from-green-50', iconBg: 'bg-green-500' },
  yellow: { bg: 'from-yellow-50', iconBg: 'bg-yellow-500' },
};

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const classes = colorClasses[caseStudy.color] || colorClasses.pink;

  return (
    <div className={`bg-gradient-to-br ${classes.bg} to-white p-8 rounded-2xl shadow-xl`}>
      {/* Header */}
      <div className="flex items-start gap-4 mb-6">
        <div className={`${classes.iconBg} p-3 rounded-xl`}>
          {getIcon(caseStudy.icon, { className: 'text-white', size: 32 })}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">
            {caseStudy.title}
          </h3>
          <p className="text-gray-600">{caseStudy.role} | {caseStudy.period}</p>
        </div>
      </div>

      {/* Content - Two columns for challenge/strategy or mission */}
      {(caseStudy.challenge || caseStudy.mission) && (
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Challenge */}
          {caseStudy.challenge && (
            <div>
              <h4 className="font-bold text-gray-900 mb-4">{caseStudy.challenge.title}</h4>
              <ul className="space-y-2 text-gray-700">
                {caseStudy.challenge.points.map((point, idx) => (
                  <li key={idx}>• {point}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Strategy or Mission */}
          {caseStudy.strategy && (
            <div>
              <h4 className="font-bold text-gray-900 mb-4">{caseStudy.strategy.title}</h4>
              <ul className="space-y-2 text-gray-700">
                {caseStudy.strategy.points.map((point, idx) => (
                  <li key={idx}>
                    • <span className="font-semibold">{point.text}</span> : {point.detail}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {caseStudy.mission && (
            <div>
              <h4 className="font-bold text-gray-900 mb-4">{caseStudy.mission.title}</h4>
              <ul className="space-y-2 text-gray-700">
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
        <div className="bg-white p-6 rounded-xl">
          <h4 className="font-bold text-gray-900 mb-4">📈 Les résultats</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {caseStudy.results.map((stat, idx) => (
              <ResultStat key={idx} {...stat} />
            ))}
          </div>
        </div>
      )}

      {/* Impact (for HUNTEED case) */}
      {caseStudy.impact && (
        <div className="bg-white p-6 rounded-xl">
          <h4 className="font-bold text-gray-900 mb-4">📈 Impact</h4>
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-600 mb-2">{caseStudy.impact.value}</div>
            <div className="text-gray-600">{caseStudy.impact.label}</div>
            <div className="mt-4 text-sm text-gray-500">
              {caseStudy.impact.detail}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
