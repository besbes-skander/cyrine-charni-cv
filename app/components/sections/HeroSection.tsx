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
    <section id="hero" className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main title centered at top */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-burgundy-800 mb-12 animate-fade-in">
          {personalInfo.headline}
        </h1>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xl text-gray-700 font-medium mb-2">
              {personalInfo.subtitle}
            </p>
            <p className="text-base text-gray-600 mb-8">
              {personalInfo.experience}
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin size={20} className={getPrimaryTextColor()} />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Mail size={20} className={getPrimaryTextColor()} />
                <a href={`mailto:${siteConfig.contact.email}`} className={getPrimaryHoverTextColor()}>
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Phone size={20} className={getPrimaryTextColor()} />
                <span>{siteConfig.contact.phone}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-burgundy-800 text-white rounded-lg font-semibold hover:bg-burgundy-900 hover:shadow-lg transform hover:-translate-y-1 transition-all flex items-center gap-2"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 bg-burgundy-800 text-white rounded-lg font-semibold hover:bg-burgundy-900 hover:shadow-lg transform hover:-translate-y-1 transition-all flex items-center gap-2"
              >
                <Calendar size={20} />
                Prendre RDV
              </button>
              <a
                href="/cv.pdf"
                download
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1 transition-all flex items-center gap-2"
              >
                <Download size={20} />
                Télécharger CV
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/profile.jpg"
                alt={personalInfo.name}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-xl shadow-md border-2 border-olive-600">
            <div className="text-4xl md:text-5xl font-bold text-olive-700 mb-2">150+</div>
            <div className="text-sm text-gray-600">Contrats signés</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border-2 border-olive-600">
            <div className="text-4xl md:text-5xl font-bold text-olive-700 mb-2">80K€</div>
            <div className="text-sm text-gray-600">CA généré</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border-2 border-olive-600">
            <div className="text-4xl md:text-5xl font-bold text-olive-700 mb-2">92%</div>
            <div className="text-sm text-gray-600">Taux de rétention</div>
          </div>
        </div>
      </div>
    </section>
  );
}
