'use client';

import { CaseStudiesData } from '@/types';
import CaseStudyCard from '../ui/CaseStudyCard';

interface CaseStudiesSectionProps {
  caseStudies: CaseStudiesData['caseStudies'];
}

export default function CaseStudiesSection({ caseStudies }: CaseStudiesSectionProps) {
  return (
    <section id="realisations" className="py-24 px-6 bg-brand-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-800 mb-16 text-center">
          Mes réalisations concrètes
        </h2>

        <div className="space-y-16">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>
      </div>
    </section>
  );
}
