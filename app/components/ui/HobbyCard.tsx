'use client';

import { getIcon } from '@/utils/iconMap';
import { IconName } from '@/types';

interface HobbyCardProps {
  iconName: IconName;
  title: string;
  description: string;
  color: string;
}

const colorClasses: Record<string, { bg: string; text: string }> = {
  pink: { bg: 'from-brand-red-50', text: 'text-brand-red-600' },
  purple: { bg: 'from-purple-50', text: 'text-purple-600' },
  blue: { bg: 'from-brand-blue-50', text: 'text-brand-blue-500' },
  green: { bg: 'from-brand-green-50', text: 'text-brand-green-500' },
  yellow: { bg: 'from-brand-yellow-50', text: 'text-brand-yellow-400' },
};

export default function HobbyCard({ iconName, title, description, color }: HobbyCardProps) {
  const classes = colorClasses[color] || colorClasses.pink;

  return (
    <div className={`bg-gradient-to-br ${classes.bg} to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow`}>
      <div className={`${classes.text} mb-4`}>
        {getIcon(iconName, { size: 40 })}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
