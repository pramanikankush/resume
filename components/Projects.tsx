import React from 'react';
import Section from './Section';
import { Project } from '../types';
import { GitHubIcon, ExternalLinkIcon } from './icons';

const projectsData: Project[] = [
  {
    title: 'Plant Health Analyzer',
    description: 'Production-ready Flask application using Google Gemini AI for plant disease detection with enterprise-grade security.',
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    tags: ['Gemini', 'Flask', 'SQLite', 'LLMs', 'Supabase'],
    githubUrl: 'https://github.com/pramanikankush/Plant-Health-Analyzer.git',
    demoUrl: 'https://plant-health-analyzer-1.onrender.com',
  },
  {
    title: 'Personal Cloud Storage',
    description: 'A modern, AI-powered personal cloud storage solution built with Next.js, featuring intelligent file organization, secure authentication, and seamless payment integration.',
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    tags: ['Next.js ', 'Clerk', 'Generative AI', 'Supabase' , 'Stripe'],
    githubUrl: 'https://github.com/pramanikankush/personal-cloud.git',
    demoUrl: 'https://personal-cloud-two.vercel.app/',
  },
  {
    title: 'Smart Invoice Scanner',
    description: 'An intelligent invoice processing system that uses Google\'s Gemini AI to extract and manage invoice data automatically.',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    tags: ['Flask ', 'MLOps', 'SQLite ', 'Agentic AI', 'Supabase'],
    githubUrl: 'https://github.com/pramanikankush/your-invoice.git',
    demoUrl: 'https://your-invoice.onrender.com/',
  },
  {
    title: 'YouTube Stats Tracker Builder',
    description: 'A user-friendly web application to generate a personalized Chrome extension for tracking any YouTube channel\'s statistics, no coding required.',
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    tags: ['Flask ', 'MLOps', 'SQLite ', 'Agentic AI', 'JSZip'],
    githubUrl: 'https://github.com/pramanikankush/Youtube-stats-extension-builder.git',
    demoUrl: 'https://youtube-stats-extension-builder.vercel.app/',
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="rounded-2xl p-6 bg-light-bg dark:bg-dark-bg shadow-neumorphic-light dark:shadow-neumorphic-dark transition-all duration-300 hover:shadow-neumorphic-light-hover dark:hover:shadow-neumorphic-dark-hover flex flex-col transform hover:-translate-y-1 hover:scale-[1.02] h-full">
    <img src={project.imageUrl} alt={project.title} className="rounded-lg w-full h-48 object-cover mb-4" />
    <div className="flex-grow">
      <h3 className="text-xl font-bold font-display mb-2 text-gray-800 dark:text-white">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map(tag => (
          <span key={tag} className="px-2 py-1 text-xs font-semibold text-accent bg-blue-100 dark:bg-blue-900/50 rounded-full">{tag}</span>
        ))}
      </div>
    </div>
    <div className="mt-auto flex justify-end space-x-4 pt-4">
      {project.githubUrl && (
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors">
          <GitHubIcon className="h-6 w-6" />
        </a>
      )}
      {project.demoUrl && (
        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors">
          <ExternalLinkIcon className="h-6 w-6" />
        </a>
      )}
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Impactful Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
        {projectsData.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;