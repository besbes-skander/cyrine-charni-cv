'use client';

import { CaseStudiesData } from '@/types';
import CaseStudyCard from '../ui/CaseStudyCard';

interface CaseStudiesSectionProps {
  caseStudies: CaseStudiesData['caseStudies'];
}

export default function CaseStudiesSection({ caseStudies }: CaseStudiesSectionProps) {
  return (
    <section id="realisations" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Mes réalisations concrètes
        </h2>

        <div className="space-y-12">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>
      </div>
    </section>
  );
}
