'use client';

import { ColorVariant } from '@/types';

interface StatCardProps {
  value: string;
  label: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  color: ColorVariant;
}

const colorClasses: Record<ColorVariant, string> = {
  pink: 'text-burgundy-800',
  purple: 'text-purple-600',
  blue: 'text-blue-600',
  green: 'text-olive-600',
  yellow: 'text-olive-600',
};

const positionClasses = {
  'top-left': '-top-6 -left-6',
  'top-right': '-top-6 -right-6',
  'bottom-left': '-bottom-6 -left-6',
  'bottom-right': '-bottom-6 -right-6',
};

export default function StatCard({ value, label, position, color }: StatCardProps) {
  return (
    <div className={`absolute ${positionClasses[position]} bg-white p-4 rounded-xl shadow-xl`}>
      <div className={`text-3xl font-bold ${colorClasses[color]}`}>{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}
