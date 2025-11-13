'use client';

import React from 'react';
import { getBrandGradient, getPrimaryHoverBorderColor } from '@/utils/themeHelpers';

interface ContactButtonProps {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  external?: boolean;
}

export default function ContactButton({ href, icon, children, variant, external = false }: ContactButtonProps) {
  const baseClasses = "flex items-center justify-center gap-3 p-6 rounded-lg font-medium text-lg transition-colors";

  const variantClasses = variant === 'primary'
    ? "bg-brand-coral-300 text-white hover:bg-brand-coral-400"
    : "bg-white text-brand-gray-800 border-2 border-brand-gray-200 hover:border-brand-gray-300 hover:bg-brand-gray-50";

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
