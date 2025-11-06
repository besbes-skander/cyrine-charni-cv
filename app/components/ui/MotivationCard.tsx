'use client';

interface MotivationCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function MotivationCard({ icon, title, description }: MotivationCardProps) {
  return (
    <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
      <span className="text-3xl">{icon}</span>
      <div>
        <h4 className="font-bold text-gray-900 mb-1">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}
