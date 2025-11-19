'use client';

import { getIcon } from '@/utils/iconMap';
import { IconName } from '@/types';

interface HobbyCardProps {
  iconName: IconName;
  title: string;
  description: string;
  color: string;
}

export default function HobbyCard({ iconName, title, description, color }: HobbyCardProps) {
  return (
    <div className="bg-brand-gray-50 p-6 rounded-[30px] border border-brand-gray-200">
      <div className="text-brand-coral-300 mb-4">
        {getIcon(iconName, { size: 36 })}
      </div>
      <h3 className="text-lg font-semibold text-brand-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-brand-gray-500 leading-relaxed">{description}</p>
    </div>
  );
}
