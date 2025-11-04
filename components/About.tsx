import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center max-w-5xl mx-auto">
        <div className="md:col-span-1 flex justify-center">
          <div className="p-3 rounded-full bg-light-bg dark:bg-dark-bg shadow-neumorphic-light dark:shadow-neumorphic-dark">
            <img
              src="./Ankush Pramanik Passport Photo.png"
              alt="Ankush Pramanik"
              className="rounded-full w-64 h-64 object-cover object-center"
              style={{ objectPosition: 'center top' }}
            />
          </div>
        </div>
        <div className="md:col-span-2 text-center md:text-left">
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            I am an Agentic AI and Data Science Engineer passionate about building autonomous systems that solve complex problems. My mission is to design and implement scalable, RAG-powered agents that not only automate workflows but also provide deep, actionable insights from vast datasets.
          </p>
          <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            With a strong foundation in machine learning and software engineering, I focus on creating robust, data-driven solutions that bridge the gap between raw information and intelligent action.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;