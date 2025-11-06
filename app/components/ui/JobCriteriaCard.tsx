'use client';

interface JobCriteriaCardProps {
  label: string;
  value: string;
}

export default function JobCriteriaCard({ label, value }: JobCriteriaCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
      <div className="text-sm opacity-90 mb-1">{label}</div>
      <div className="font-bold text-lg">{value}</div>
    </div>
  );
}
