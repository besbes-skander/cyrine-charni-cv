'use client';

import { ColorVariant } from '@/types';

interface ResultStatProps {
  label: string;
  value: string;
  color: ColorVariant;
}

const colorClasses: Record<ColorVariant, { bg: string; text: string }> = {
  pink: { bg: 'bg-brand-red-50', text: 'text-brand-red-600' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-600' },
  blue: { bg: 'bg-brand-blue-50', text: 'text-brand-blue-500' },
  green: { bg: 'bg-brand-green-50', text: 'text-brand-green-500' },
  yellow: { bg: 'bg-brand-yellow-50', text: 'text-brand-yellow-400' },
};

export default function ResultStat({ label, value, color }: ResultStatProps) {
  const classes = colorClasses[color];

  return (
    <div className={`text-center p-4 ${classes.bg} rounded-lg`}>
      <div className={`text-3xl font-bold ${classes.text} mb-1`}>{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}
