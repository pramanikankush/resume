import React from 'react';

const Hero: React.FC = () => {
    const handleScrollTo = (selector: string) => {
        document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
    }

    const AnimatedButton = ({ text, className, onClick }: { text: string; className: string; onClick: () => void; }) => {
        return (
            <button onClick={onClick} className={`btn-53 ${className}`}>
                <div className="original">{text}</div>
                <div className="letters">
                    {text.split('').map((letter, i) => (
                        <span key={i}>{letter === ' ' ? '\u00A0' : letter}</span>
                    ))}
                </div>
            </button>
        );
    };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-gray-900 dark:text-white">
          Building Intelligent <span className="text-accent">Agentic AI</span> Systems that Think, Retrieve, and Automate
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Specializing in RAG-based automation, intelligent agents, and data-driven workflows to drive efficiency and unlock data intelligence at scale.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <AnimatedButton
                onClick={() => handleScrollTo('#projects')}
                className="btn-primary"
                text="View Projects"
            />
            <AnimatedButton
                onClick={() => window.open('/resume.pdf', '_blank')}
                className="btn-secondary"
                text="Download Resume"
            />
        </div>
      </div>
    </section>
  );
};

export default Hero;