'use client';

interface ValueCardProps {
  title: string;
  description: string;
}

export default function ValueCard({ title, description }: ValueCardProps) {
  return (
    <div className="text-center">
      <div className="text-xl font-bold mb-2">{title}</div>
      <div className="text-sm opacity-90">{description}</div>
    </div>
  );
}
