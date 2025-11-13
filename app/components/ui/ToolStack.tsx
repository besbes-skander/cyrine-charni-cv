'use client';

interface ToolStackProps {
  category: string;
  tools: string[];
}

export default function ToolStack({ category, tools }: ToolStackProps) {
  return (
    <div>
      <h4 className="font-bold text-gray-900 mb-3">{category}</h4>
      <div className="flex flex-wrap gap-2">
        {tools.map((tool, i) => (
          <span key={i} className="px-3 py-1 bg-brand-gray-50 text-brand-gray-800 rounded-full text-sm">
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}
