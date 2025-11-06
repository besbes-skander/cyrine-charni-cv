'use client';

interface JobCriteriaCardProps {
  label: string;
  value: string;
}

export default function JobCriteriaCard({ label, value }: JobCriteriaCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover-lift">
      <div className="text-sm text-gray-600 mb-2 font-medium">{label}</div>
      <div className="font-bold text-xl text-gray-900">{value}</div>
    </div>
  );
}
