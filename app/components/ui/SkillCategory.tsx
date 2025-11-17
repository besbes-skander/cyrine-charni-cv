'use client';

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

export default function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div>
      <h4 className="font-semibold text-brand-gray-800 mb-3">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span key={i} className="px-3 py-1 text-brand-gray-700 border border-brand-gray-200 rounded-full text-sm" style={{ backgroundColor: 'rgba(255, 206, 19, 0.15)' }}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
