import React from 'react';
import Section from './Section';
import { Experience as ExperienceType } from '../types';

const experienceData: ExperienceType[] = [
  {
    role: 'Lead Agentic AI Engineer',
    company: 'Innovate AI Corp',
    period: '2022 - Present',
    description: 'Leading the development of autonomous agentic systems for enterprise-level data automation and intelligent workflow management.',
    achievements: [
      'Architected a RAG pipeline that improved information retrieval accuracy by 45%.',
      'Reduced manual data operations by 60% via deployment of autonomous agents.',
      'Designed and deployed scalable MLOps infrastructure for continuous model training.',
    ]
  },
  {
    role: 'Data Scientist',
    company: 'Data Insights LLC',
    period: '2020 - 2022',
    description: 'Developed predictive models and data visualization tools to help clients make data-driven business decisions.',
    achievements: [
      'Built a customer churn prediction model with 92% accuracy.',
      'Created interactive dashboards that increased client engagement by 30%.',
    ]
  }
];

const ExperienceItem: React.FC<{ experience: ExperienceType }> = ({ experience }) => (
  <div className="relative pl-8 sm:pl-12 py-6 group">
    <div className="flex items-center mb-1 sm:mb-0">
      <div className="absolute left-0 sm:left-4 h-full w-px bg-gray-300 dark:bg-gray-600"></div>
      <div className="absolute left-[-5px] sm:left-[11px] h-4 w-4 rounded-full bg-accent z-10 group-hover:scale-125 transition-transform"></div>
      <h3 className="text-lg font-bold font-display text-gray-800 dark:text-white">{experience.role}</h3>
      <span className="ml-auto text-sm font-medium text-gray-500 dark:text-gray-400">{experience.period}</span>
    </div>
    <p className="text-md text-accent font-semibold mb-2">{experience.company}</p>
    <p className="text-gray-600 dark:text-gray-300 mb-3">{experience.description}</p>
    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
      {experience.achievements.map((ach, index) => <li key={index}>{ach}</li>)}
    </ul>
  </div>
);

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experience & Achievements">
      <div className="max-w-3xl mx-auto">
        {experienceData.map((exp, index) => (
          <ExperienceItem key={index} experience={exp} />
        ))}
      </div>
    </Section>
  );
};

export default Experience;
