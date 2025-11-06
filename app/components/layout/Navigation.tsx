'use client';

import { NavigationItem } from '@/types';
import { getTextGradient, getPrimaryHoverTextColor } from '@/utils/themeHelpers';

interface NavigationProps {
  items: NavigationItem[];
  isScrolled: boolean;
  onNavigate: (id: string) => void;
  name: string;
}

export default function Navigation({ items, isScrolled, onNavigate, name }: NavigationProps) {
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className={`text-2xl font-bold ${getTextGradient()}`}>
            {name}
          </h1>
          <div className="hidden md:flex gap-6">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-gray-700 ${getPrimaryHoverTextColor()} transition-colors font-medium`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
