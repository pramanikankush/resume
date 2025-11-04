import React from 'react';

const SectionDivider: React.FC = () => {
  return (
    <div className="text-center" aria-hidden="true">
      <span className="text-2xl text-gray-400 dark:text-gray-600 font-display tracking-widest">
        * * *
      </span>
    </div>
  );
};

export default SectionDivider;
