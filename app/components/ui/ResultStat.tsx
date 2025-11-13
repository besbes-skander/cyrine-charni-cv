'use client';

import { ColorVariant } from '@/types';

interface ResultStatProps {
  label: string;
  value: string;
  color: ColorVariant;
}

export default function ResultStat({ label, value, color }: ResultStatProps) {
  return (
    <div className="text-center p-4">
      <div className="text-2xl font-bold text-brand-coral-300 mb-1">{value}</div>
      <div className="text-xs text-brand-gray-500">{label}</div>
    </div>
  );
}
