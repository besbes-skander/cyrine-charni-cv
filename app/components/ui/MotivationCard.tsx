'use client';

interface MotivationCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function MotivationCard({ icon, title, description }: MotivationCardProps) {
  return (
    <div className="flex gap-4 items-start p-5 bg-white rounded-lg border border-brand-gray-200">
      <span className="text-2xl">{icon}</span>
      <div>
        <h4 className="font-semibold text-brand-gray-800 mb-2">{title}</h4>
        <p className="text-brand-gray-500 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
