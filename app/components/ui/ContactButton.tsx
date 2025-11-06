'use client';

import React from 'react';

interface ContactButtonProps {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  external?: boolean;
}

export default function ContactButton({ href, icon, children, variant, external = false }: ContactButtonProps) {
  const baseClasses = "flex items-center justify-center gap-3 p-6 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all";

  const variantClasses = variant === 'primary'
    ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
    : "bg-white text-gray-900 border-2 border-gray-300 hover:border-pink-500";

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
