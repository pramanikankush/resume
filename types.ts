// Fix: Import React to resolve the 'Cannot find namespace React' error.
import React from 'react';

export interface Skill {
  name: string;
  icon?: React.ReactNode;
}

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
}

// Fix: Added Experience interface to be used in Experience.tsx. This resolves the module export error.
export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}
