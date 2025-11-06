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
    <section id="competences" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          🛠️ Mes compétences & outils
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Compétences principales */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Compétences clés</h3>
            <div className="space-y-6">
              {coreSkills.map((category, idx) => (
                <SkillCategory key={idx} {...category} />
              ))}
            </div>
          </div>

          {/* Stack technique */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Stack d'outils</h3>
            <div className="space-y-6">
              {toolStack.map((stack, idx) => (
                <ToolStack key={idx} {...stack} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
