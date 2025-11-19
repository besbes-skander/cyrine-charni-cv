'use client';

import { getIconComponent } from '@/utils/iconMap';

interface MotivationCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function MotivationCard({ icon, title, description }: MotivationCardProps) {
  const IconComponent = icon ? getIconComponent(icon) : null;

  return (
    <div className="flex gap-4 items-start p-5 bg-white rounded-[30px] border border-brand-gray-200">
      {IconComponent && (
        <div className="flex-shrink-0 mt-0.5">
          <IconComponent className="w-5 h-5 text-brand-teal-500 opacity-70" strokeWidth={1.5} />
        </div>
      )}
      <div>
        <h4 className="font-semibold text-brand-teal-500 mb-2">{title}</h4>
        <p className="text-brand-gray-500 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
