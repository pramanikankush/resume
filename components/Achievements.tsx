import React from 'react';
import Section from './Section';

interface Achievement {
  title: string;
  description: string;
  icon: string;
  category: string;
  highlight?: string;
}

const achievementsData: Achievement[] = [
  {
    title: 'AI Agent Development',
    description: 'Built multiple AI agents for various tasks including text classification and sentiment analysis',
    icon: '🤖',
    category: 'AI/ML',
    highlight: 'Multiple Agents'
  },
  {
    title: 'Hackathon Finalist',
    description: 'Developed AI-powered healthcare management system using Deep Learning and LLMs, reducing diagnostic time by 50%',
    icon: '🏆',
    category: 'Competition',
    highlight: '50% Faster'
  },
  {
    title: 'Kaggle Competitions',
    description: 'Participated in multiple Kaggle competitions focusing on NLP and computer vision',
    icon: '📊',
    category: 'Data Science',
    highlight: 'NLP & CV'
  },
  {
    title: 'RAG Pipeline Architecture',
    description: 'Designed and implemented advanced RAG systems for enterprise-level information retrieval',
    icon: '🔍',
    category: 'Architecture',
    highlight: 'Enterprise Scale'
  },
  {
    title: 'MLOps Infrastructure',
    description: 'Built scalable MLOps pipelines for continuous model training and deployment automation',
    icon: '⚙️',
    category: 'DevOps',
    highlight: 'Automated CI/CD'
  }
];

const AchievementCard: React.FC<{ achievement: Achievement; index: number }> = ({ achievement, index }) => (
  <div 
    className="achievement-card group relative p-6 rounded-2xl bg-light-bg dark:bg-dark-bg shadow-neumorphic-light dark:shadow-neumorphic-dark hover:shadow-neumorphic-light-hover dark:hover:shadow-neumorphic-dark-hover transition-all duration-300 transform hover:-translate-y-2"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    {/* Floating Icon */}
    <div className="achievement-icon absolute -top-4 left-6 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
      {achievement.icon}
    </div>
    
    {/* Category Badge */}
    <div className="absolute top-4 right-4 px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full border border-accent/20">
      {achievement.category}
    </div>
    
    {/* Content */}
    <div className="mt-8">
      <h3 className="text-xl font-bold font-display text-gray-800 dark:text-white mb-3 group-hover:text-accent transition-colors duration-300">
        {achievement.title}
      </h3>
      
      {achievement.highlight && (
        <div className="inline-block px-3 py-1 mb-3 bg-gradient-to-r from-accent/20 to-accent/10 text-accent text-sm font-medium rounded-lg border border-accent/30">
          {achievement.highlight}
        </div>
      )}
      
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {achievement.description}
      </p>
    </div>
    
    {/* Hover Effect Overlay */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    
    {/* Bottom Accent Line */}
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/50 via-accent to-accent/50 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
  </div>
);

const Achievements: React.FC = () => {
  return (
    <Section id="achievements" title="Key Achievements">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementsData.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} index={index} />
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-xl bg-light-bg dark:bg-dark-bg shadow-neumorphic-light-inset dark:shadow-neumorphic-dark-inset">
            <div className="text-3xl font-bold text-accent mb-2">5+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">AI Agents Built</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-light-bg dark:bg-dark-bg shadow-neumorphic-light-inset dark:shadow-neumorphic-dark-inset">
            <div className="text-3xl font-bold text-accent mb-2">50%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Time Reduction</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-light-bg dark:bg-dark-bg shadow-neumorphic-light-inset dark:shadow-neumorphic-dark-inset">
            <div className="text-3xl font-bold text-accent mb-2">10+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Competitions</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-light-bg dark:bg-dark-bg shadow-neumorphic-light-inset dark:shadow-neumorphic-dark-inset">
            <div className="text-3xl font-bold text-accent mb-2">3</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Tech Stacks</div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Achievements;