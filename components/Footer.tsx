import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 py-6">
      <div className="container mx-auto px-4 md:px-8 text-center text-gray-600 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Ankush. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
