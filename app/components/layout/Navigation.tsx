'use client';

import { NavigationItem } from '@/types';
import { getTextGradient, getPrimaryHoverTextColor, getAccentGradient } from '@/utils/themeHelpers';
import { useLanguage } from '@/contexts/LanguageContext';
import { Languages } from 'lucide-react';

interface NavigationProps {
  items: NavigationItem[];
  isScrolled: boolean;
  onNavigate: (id: string) => void;
  name: string;
}

export default function Navigation({ items, isScrolled, onNavigate, name }: NavigationProps) {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className={`text-2xl font-bold ${getTextGradient()} transition-all duration-500`}>
            {name}
          </h1>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6">
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`text-gray-700 ${getPrimaryHoverTextColor()} transition-all duration-300 font-medium`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${getAccentGradient()} text-white font-semibold transition-all duration-300 hover:shadow-md hover:scale-105`}
              aria-label="Switch language"
            >
              <Languages size={18} />
              <span className="text-sm">{language.toUpperCase()}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
