'use client';

import { FooterData } from '@/types';

interface FooterProps {
  text: FooterData['text'];
  lastUpdate: FooterData['lastUpdate'];
}

export default function Footer({ text, lastUpdate }: FooterProps) {
  return (
    <footer className="py-8 px-6 bg-gray-900 text-white text-center">
      <p className="mb-2">{text}</p>
      <p className="text-sm text-gray-400">Dernière mise à jour : {lastUpdate}</p>
    </footer>
  );
}
