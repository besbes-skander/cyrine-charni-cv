'use client';

import { Mail, Linkedin, Phone, Calendar } from 'lucide-react';
import { PersonalInfo, ContactData } from '@/types';
import ContactButton from '../ui/ContactButton';

interface ContactSectionProps {
  personalInfo: PersonalInfo;
  contactData: ContactData;
}

export default function ContactSection({ personalInfo, contactData }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          {contactData.title}
        </h2>
        <p className="text-xl text-gray-600 mb-12 whitespace-pre-line">
          {contactData.subtitle}
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <ContactButton
            href={`mailto:${personalInfo.email}`}
            icon={<Mail size={24} />}
            variant="primary"
          >
            M'envoyer un email
          </ContactButton>
          <ContactButton
            href={personalInfo.calendly}
            icon={<Calendar size={24} />}
            variant="secondary"
            external
          >
            Prendre RDV (Calendly)
          </ContactButton>
        </div>

        <div className="flex justify-center gap-6 mb-12">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-pink-500 transition-colors"
          >
            <Linkedin size={24} />
            <span className="font-semibold">LinkedIn</span>
          </a>
          <a
            href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-2 text-gray-700 hover:text-pink-500 transition-colors"
          >
            <Phone size={24} />
            <span className="font-semibold">{personalInfo.phone}</span>
          </a>
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl">
          <h3 className="font-bold text-gray-900 mb-4">Dispo pour :</h3>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            {contactData.availability.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-pink-500">✓</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
