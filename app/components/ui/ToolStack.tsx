'use client';

interface ToolStackProps {
  category: string;
  tools: string[];
}

export default function ToolStack({ category, tools }: ToolStackProps) {
  return (
    <div>
      <h4 className="font-semibold text-brand-gray-800 mb-3">{category}</h4>
      <div className="flex flex-wrap gap-2">
        {tools.map((tool, i) => (
          <span key={i} className="px-3 py-1 text-brand-gray-700 border border-brand-gray-200 rounded-full text-sm" style={{ backgroundColor: 'rgba(255, 206, 19, 0.15)' }}>
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}
