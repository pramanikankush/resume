import React from 'react';
import Section from './Section';
import { Project } from '../types';
import { GitHubIcon, ExternalLinkIcon } from './icons';

const projectsData: Project[] = [
  {
    title: 'Agentic Workflow Orchestrator',
    description: 'An autonomous system that intelligently manages and executes complex data processing workflows using a multi-agent architecture.',
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    tags: ['LangChain', 'FastAPI', 'RAG', 'LLMs'],
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    title: 'RAG-powered Knowledge Engine',
    description: 'A powerful Q&A engine that retrieves and synthesizes information from a massive private knowledge base to provide accurate, context-aware answers.',
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    tags: ['LlamaIndex', 'VectorDBs', 'OpenAI API', 'Python'],
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    title: 'Autonomous Report Generator',
    description: 'An AI agent that automatically queries data sources, performs analysis, and generates comprehensive, well-structured reports.',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    tags: ['Data Science', 'MLOps', 'Python', 'Agentic AI'],
    githubUrl: '#',
    demoUrl: '#',
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="rounded-2xl p-6 bg-light-bg dark:bg-dark-bg shadow-neumorphic-light dark:shadow-neumorphic-dark transition-all duration-300 hover:shadow-neumorphic-light-hover dark:hover:shadow-neumorphic-dark-hover flex flex-col transform hover:-translate-y-1 hover:scale-[1.03]">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;