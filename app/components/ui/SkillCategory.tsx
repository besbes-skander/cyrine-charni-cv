'use client';

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

export default function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div>
      <h4 className="font-bold text-gray-900 mb-3">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span key={i} className="px-3 py-1 bg-burgundy-100 text-burgundy-800 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
