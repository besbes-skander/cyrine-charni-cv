'use client';

import { Mail, Linkedin, Phone, MapPin, Calendar } from 'lucide-react';
import { PersonalInfo, HeroStat } from '@/types';
import StatCard from '../ui/StatCard';

interface HeroSectionProps {
  personalInfo: PersonalInfo;
  stats: HeroStat[];
  onNavigate: (id: string) => void;
}

export default function HeroSection({ personalInfo, stats, onNavigate }: HeroSectionProps) {
  return (
    <section id="hero" className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold mb-4">
              {personalInfo.tagline}
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              {personalInfo.headline}
            </h2>
            <h3 className="text-3xl font-semibold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-6">
              {personalInfo.title}
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              {personalInfo.subtitle}<br />
              <span className="font-semibold">{personalInfo.experience}</span>
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin size={20} className="text-pink-500" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Mail size={20} className="text-pink-500" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-pink-500">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Phone size={20} className="text-pink-500" />
                <span>{personalInfo.phone}</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all flex items-center gap-2"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold border-2 border-gray-300 hover:border-pink-500 hover:shadow-lg transform hover:-translate-y-1 transition-all flex items-center gap-2"
              >
                <Calendar size={20} />
                Prendre RDV
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center text-white text-6xl shadow-2xl">
              👩‍💼
            </div>
            {/* Stats floating cards */}
            {stats.map((stat, idx) => (
              <StatCard key={idx} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
