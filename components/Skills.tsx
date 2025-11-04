import React from 'react';
import Section from './Section';
import { Skill } from '../types';

const skillsData: Skill[] = [
  // Core Programming
  { name: 'Python' },
  { name: 'JavaScript' },
  
  // LLM & Gen AI
  { name: 'OpenAI API' },
  { name: 'Anthropic Claude' },
  { name: 'Gemini API' },
  { name: 'Hugging Face' },
  { name: 'Transformers' },
  { name: 'Fine-tuning' },
  { name: 'Prompt Engineering' },
  
  // Agentic AI Frameworks
  { name: 'LangChain' },
  { name: 'LlamaIndex' },
  { name: 'AutoGen' },
  { name: 'CrewAI' },
  { name: 'LangGraph' },
  
  // RAG & Vector
  { name: 'RAG Pipelines' },
  { name: 'Vector Databases' },
  { name: 'Pinecone' },
  { name: 'Chroma' },
  { name: 'FAISS' },
  
  // Additional Frameworks
  { name: 'FastAPI' },
  { name: 'Streamlit' },
  { name: 'Gradio' },
  { name: 'Flask' },
  { name: 'Next.js' },
  
  // DevOps & Tools
  { name: 'Docker' },
  { name: 'MLOps' },
  { name: 'Data Science' },
  { name: 'Tailwind CSS' },
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