'use client';

import { ColorVariant } from '@/types';

interface ResultStatProps {
  label: string;
  value: string;
  color: ColorVariant;
}

const colorClasses: Record<ColorVariant, string> = {
  pink: 'text-brand-coral-500',
  purple: 'text-brand-teal-500',
  blue: 'text-brand-teal-500',
  green: 'text-brand-amber-500',
  yellow: 'text-brand-amber-500',
};

export default function ResultStat({ label, value, color }: ResultStatProps) {
  return (
    <div className="text-center p-4">
      <div className={`text-2xl font-bold ${colorClasses[color]} mb-1`}>{value}</div>
      <div className="text-xs text-brand-gray-500">{label}</div>
    </div>
  );
}
