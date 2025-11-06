'use client';

import React from 'react';
import { getAccentGradient, getPrimaryHoverBorderColor } from '@/utils/themeHelpers';

interface ContactButtonProps {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  external?: boolean;
}

export default function ContactButton({ href, icon, children, variant, external = false }: ContactButtonProps) {
  const baseClasses = "flex items-center justify-center gap-3 p-6 rounded-2xl font-bold text-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300";

  const variantClasses = variant === 'primary'
    ? `${getAccentGradient()} text-white`
    : `bg-white text-gray-900 border-2 border-gray-300 ${getPrimaryHoverBorderColor()}`;

  const externalProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <a
      href={href}
      className={`${baseClasses} ${variantClasses}`}
      {...externalProps}
    >
      {icon}
      {children}
    </a>
  );
}
