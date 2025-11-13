'use client';

interface JobCriteriaCardProps {
  label: string;
  value: string;
}

export default function JobCriteriaCard({ label, value }: JobCriteriaCardProps) {
  return (
    <div className="bg-brand-gray-50 p-6 rounded-lg border border-brand-gray-200">
      <div className="text-sm text-brand-gray-500 mb-2">{label}</div>
      <div className="font-semibold text-lg text-brand-gray-800">{value}</div>
    </div>
  );
}
