'use client';

import { IconName } from '@/types';
import { getIcon } from '@/utils/iconMap';

interface JobCriteriaCardProps {
  icon: IconName;
  description: string;
}

export default function JobCriteriaCard({ icon, description }: JobCriteriaCardProps) {
  return (
    <div className="bg-brand-gray-50 p-6 rounded-[30px] border border-brand-gray-200 flex items-start gap-4">
      <div className="flex-shrink-0 text-brand-coral-500">
        {getIcon(icon, { size: 24, strokeWidth: 2 })}
      </div>
      <div className="text-brand-gray-800 leading-relaxed">{description}</div>
    </div>
  );
}
