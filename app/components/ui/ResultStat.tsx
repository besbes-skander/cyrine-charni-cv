'use client';

import { ColorVariant } from '@/types';

interface ResultStatProps {
  label: string;
  value: string;
  color: ColorVariant;
}

const colorClasses: Record<ColorVariant, { bg: string; text: string }> = {
  pink: { bg: 'bg-pink-50', text: 'text-pink-600' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-600' },
  blue: { bg: 'bg-blue-50', text: 'text-blue-600' },
  green: { bg: 'bg-green-50', text: 'text-green-600' },
  yellow: { bg: 'bg-yellow-50', text: 'text-yellow-600' },
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
