'use client';

import { FooterData } from '@/types';

interface FooterProps {
  text: FooterData['text'];
}

export default function Footer({ text }: FooterProps) {
  return (
    <footer className="py-8 px-6 bg-gray-900 text-white text-center">
      <p className="mb-2">{text}</p>
    </footer>
  );
}
