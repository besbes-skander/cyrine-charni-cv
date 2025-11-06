import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cyrine Charni - Customer Success & Business Development',
  description: 'Portfolio professionnel de Cyrine Charni - Expert en Customer Success, Business Development et Gestion de Projets Tech',
  keywords: 'Customer Success, Business Development, Gestion de Projet, SaaS, Tech',
  authors: [{ name: 'Cyrine Charni' }],
  openGraph: {
    title: 'Cyrine Charni - Customer Success & Business Development',
    description: 'Portfolio professionnel - Expert en Customer Success, Business Development et Gestion de Projets Tech',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
