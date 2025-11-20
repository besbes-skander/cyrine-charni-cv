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
    <div className="pt-8 pb-16 px-6 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto text-center w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-coral-500 mb-10">{title}</h2>
        <div className="grid md:grid-cols-2 gap-8 [&>*:nth-child(5)]:md:col-span-2 [&>*:nth-child(5)]:md:max-w-md [&>*:nth-child(5)]:md:mx-auto">
          {criteria.map((item, idx) => (
            <JobCriteriaCard key={idx} {...item} />
          ))}
        </div>
        {summary && <p className="text-lg text-brand-gray-500 whitespace-pre-line leading-relaxed mt-12">{summary}</p>}
      </div>
    </div>
  );
}
