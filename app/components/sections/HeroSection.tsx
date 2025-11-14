'use client';

import { Mail, Linkedin, Phone, MapPin, Calendar, Download } from 'lucide-react';
import Image from 'next/image';
import { PersonalInfo } from '@/types';
import { SiteConfig } from '@/config/site.config';
import {
  getPrimaryTextColor,
  getPrimaryHoverTextColor,
  getPrimaryHoverBorderColor,
  getBrandGradient,
} from '@/utils/themeHelpers';

interface HeroSectionProps {
  personalInfo: PersonalInfo;
  siteConfig: SiteConfig;
  onNavigate: (id: string) => void;
}

export default function HeroSection({ personalInfo, siteConfig, onNavigate }: HeroSectionProps) {
  return (
    <div className="pt-32 pb-20 px-6 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        {/* Name and Photo - Asymmetric layout */}
        <div className="flex items-center gap-6 mb-8">
          <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
            <Image
              src="/profile.jpg"
              alt={personalInfo.name}
              fill
              className="object-cover rounded-full"
              priority
            />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-gray-800 mb-2">
              {personalInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-brand-gray-500">
              {personalInfo.subtitle}
            </p>
          </div>
        </div>

        {/* Title and Experience */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-coral-500 mb-4">
            {personalInfo.headline}
          </h2>
          <p className="text-lg text-brand-gray-500">
            {personalInfo.experience}
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8 text-brand-gray-500">
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-brand-coral-500" />
            <span>{personalInfo.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={18} className="text-brand-teal-500" />
            <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-brand-teal-500 transition-colors">
              {siteConfig.contact.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={18} className="text-brand-amber-500" />
            <span>{siteConfig.contact.phone}</span>
          </div>
        </div>

        {/* Buttons - No transform animations */}
        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-brand-coral-500 text-white rounded-lg font-medium hover:bg-brand-coral-600 transition-colors flex items-center gap-2"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 bg-brand-teal-500 text-white rounded-lg font-medium hover:bg-brand-teal-600 transition-colors flex items-center gap-2"
          >
            <Calendar size={20} />
            Prendre RDV
          </button>
          <a
            href="/cv.pdf"
            download
            className="px-6 py-3 border-2 border-brand-teal-500 text-brand-teal-600 rounded-lg font-medium hover:bg-brand-teal-50 transition-colors flex items-center gap-2"
          >
            <Download size={20} />
            Télécharger CV
          </a>
        </div>

        {/* Inline Metrics with separators */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-brand-gray-500 border-t border-brand-gray-200 pt-8">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-brand-coral-500">150+</span>
            <span>Contrats signés</span>
          </div>
          <span className="text-brand-gray-300 hidden sm:block">|</span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-brand-teal-500">80K€</span>
            <span>CA généré</span>
          </div>
          <span className="text-brand-gray-300 hidden sm:block">|</span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-brand-amber-500">92%</span>
            <span>Taux de rétention</span>
          </div>
        </div>
      </div>
    </div>
  );
}
