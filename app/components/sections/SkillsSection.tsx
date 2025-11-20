'use client';

import { SkillsData } from '@/types';
import SkillCategory from '../ui/SkillCategory';
import ToolStack from '../ui/ToolStack';

interface SkillsSectionProps {
  coreSkills: SkillsData['coreSkills'];
  toolStack: SkillsData['toolStack'];
}

export default function SkillsSection({ coreSkills, toolStack }: SkillsSectionProps) {
  return (
    <div className="py-16 px-6 min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-coral-500 mb-10 text-center">
          Mes compétences & outils
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Compétences principales */}
          <div className="bg-brand-gray-50 p-10 rounded-[30px] border border-brand-gray-200">
            <h3 className="text-2xl font-semibold mb-8 text-brand-teal-500">Compétences clés</h3>
            <div className="space-y-6">
              {coreSkills.map((category, idx) => (
                <SkillCategory key={idx} {...category} />
              ))}
            </div>
          </div>

          {/* Stack technique */}
          <div className="bg-brand-gray-50 p-10 rounded-[30px] border border-brand-gray-200">
            <h3 className="text-2xl font-semibold mb-8 text-brand-teal-500">Stack d'outils</h3>
            <div className="space-y-6">
              {toolStack.map((stack, idx) => (
                <ToolStack key={idx} {...stack} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
