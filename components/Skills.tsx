import React from 'react';
import Section from './Section';
import { Skill } from '../types';

const skillsData: Skill[] = [
  { name: 'Python' },
  { name: 'LangChain' },
  { name: 'LlamaIndex' },
  { name: 'OpenAI API' },
  { name: 'FastAPI' },
  { name: 'RAG Pipelines' },
  { name: 'Vector Databases' },
  { name: 'Data Science' },
  { name: 'MLOps' },
  { name: 'Next.js' },
  { name: 'Tailwind CSS' },
  { name: 'Docker' },
];

const SkillBadge: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="px-6 py-3 rounded-lg font-medium text-gray-800 dark:text-gray-200 bg-light-bg dark:bg-dark-bg shadow-neumorphic-light dark:shadow-neumorphic-dark transition-all duration-300 hover:shadow-neumorphic-light-inset dark:hover:shadow-neumorphic-dark-inset transform hover:-translate-y-1 hover:scale-105">
    {skill.name}
  </div>
);

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Technical Skills">
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4 md:gap-6">
        {skillsData.map((skill) => (
          <SkillBadge key={skill.name} skill={skill} />
        ))}
      </div>
    </Section>
  );
};

export default Skills;