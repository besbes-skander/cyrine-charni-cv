'use client';

import { JobSearchData } from '@/types';
import JobCriteriaCard from '../ui/JobCriteriaCard';
import { getBrandGradient } from '@/utils/themeHelpers';

interface JobSearchSectionProps {
  title: JobSearchData['title'];
  criteria: JobSearchData['criteria'];
  summary: JobSearchData['summary'];
}

export default function JobSearchSection({ title, criteria, summary }: JobSearchSectionProps) {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-800 mb-16">{title}</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {criteria.map((item, idx) => (
            <JobCriteriaCard key={idx} {...item} />
          ))}
        </div>
        <p className="text-lg text-brand-gray-500 whitespace-pre-line leading-relaxed">{summary}</p>
      </div>
    </section>
  );
}
