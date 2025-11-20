'use client';

import { CaseStudiesData } from '@/types';
import CaseStudyCard from '../ui/CaseStudyCard';

interface CaseStudiesSectionProps {
  caseStudies: CaseStudiesData['caseStudies'];
}

export default function CaseStudiesSection({ caseStudies }: CaseStudiesSectionProps) {
  return (
    <div className="py-16 px-6 min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-coral-500 mb-10 text-center">
          Mes réalisations concrètes
        </h2>

        <div className="space-y-16">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>
      </div>
    </div>
  );
}
