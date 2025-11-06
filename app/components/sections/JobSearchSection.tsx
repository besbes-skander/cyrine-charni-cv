'use client';

import { JobSearchData } from '@/types';
import JobCriteriaCard from '../ui/JobCriteriaCard';

interface JobSearchSectionProps {
  title: JobSearchData['title'];
  criteria: JobSearchData['criteria'];
  summary: JobSearchData['summary'];
}

export default function JobSearchSection({ title, criteria, summary }: JobSearchSectionProps) {
  return (
    <section className="py-20 px-6 bg-olive-25">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-olive-600">{title}</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {criteria.map((item, idx) => (
            <JobCriteriaCard key={idx} {...item} />
          ))}
        </div>
        <p className="text-xl text-gray-700 whitespace-pre-line">{summary}</p>
      </div>
    </section>
  );
}
