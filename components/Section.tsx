import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-12 text-gray-800 dark:text-white">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
