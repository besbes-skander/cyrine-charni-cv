'use client';

import { Mail, Linkedin, Phone, Calendar } from 'lucide-react';
import { ContactData } from '@/types';
import { SiteConfig } from '@/config/site.config';
import ContactButton from '../ui/ContactButton';
import { getPrimaryHoverTextColor, getPrimaryTextColor } from '@/utils/themeHelpers';

interface ContactSectionProps {
  siteConfig: SiteConfig;
  contactData: ContactData;
}

export default function ContactSection({ siteConfig, contactData }: ContactSectionProps) {
  return (
    <div className="py-24 px-6 bg-brand-gray-50 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto text-center w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-800 mb-6">
          {contactData.title}
        </h2>
        <p className="text-lg text-brand-gray-500 mb-12 whitespace-pre-line">
          {contactData.subtitle}
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <ContactButton
            href={`mailto:${siteConfig.contact.email}`}
            icon={<Mail size={24} />}
            variant="primary"
          >
            M'envoyer un email
          </ContactButton>
          <ContactButton
            href={siteConfig.links.calendly}
            icon={<Calendar size={24} />}
            variant="secondary"
            external
          >
            Prendre RDV (Calendly)
          </ContactButton>
        </div>

        <div className="flex justify-center gap-8 mb-12 text-brand-gray-500">
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-brand-coral-500 transition-colors"
          >
            <Linkedin size={24} />
            <span className="font-medium">LinkedIn</span>
          </a>
          <a
            href={`tel:${siteConfig.contact.phoneRaw}`}
            className="flex items-center gap-2 hover:text-brand-teal-500 transition-colors"
          >
            <Phone size={24} />
            <span className="font-medium">{siteConfig.contact.phone}</span>
          </a>
        </div>

        <div className="bg-white p-10 rounded-lg border border-brand-gray-200">
          <h3 className="font-semibold text-brand-gray-800 mb-6">Dispo pour :</h3>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            {contactData.availability.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="text-brand-amber-500">✓</span>
                <span className="text-brand-gray-500">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
