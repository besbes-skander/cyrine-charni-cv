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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-6'}`}>
      {/* 2. Conteneur de largeur */}
      <div className="max-w-7xl mx-auto px-6">
        {/* 3. Conteneur visuel (pilule flottante) */}
        <div className={`mx-auto transition-all duration-500 rounded-2xl px-6 py-3 flex justify-between items-center ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-md shadow-lg border border-white/40'
            : 'bg-transparent'
        }`}>
          <h1 className={`text-2xl font-bold ${getTextGradient()}`}>
            {name}
          </h1>
          <div className="hidden md:flex gap-2">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="text-brand-gray-600 hover:text-brand-coral-500 hover:bg-white/50 rounded-full px-4 py-2 transition-all font-medium"
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
