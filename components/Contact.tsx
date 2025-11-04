import React, { useState } from 'react';
import Section from './Section';
import { GitHubIcon, LinkedInIcon, TwitterIcon } from './icons';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Create mailto link to send email directly
    const subject = encodeURIComponent(`Portfolio Contact: Message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n\n` +
      `Message:\n${message}`
    );
    
    const mailtoLink = `mailto:ankushpramanik@gmail.com?subject=${subject}&body=${body}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Clear form
    setName('');
    setEmail('');
    setMessage('');
    
    // Show success message
    alert('Opening your email client to send the message!');
  };

  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Feel free to reach out.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 text-left mb-12">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 sr-only">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text shadow-neumorphic-light-inset dark:shadow-neumorphic-dark-inset focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 sr-only">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text shadow-neumorphic-light-inset dark:shadow-neumorphic-dark-inset focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 sr-only">Message</label>
            <textarea
              name="message"
              id="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text shadow-neumorphic-light-inset dark:shadow-neumorphic-dark-inset focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
            ></textarea>
          </div>
          <div className="text-center pt-4">
            <button
              type="submit"
              className="btn-animated-send"
            >
              <span className="relative z-10">Send Message</span>
              <span className="ripple-pulse" aria-hidden="true"></span>
            </button>
          </div>
        </form>

        <div className="flex justify-center space-x-6">
          <a href="https://github.com/pramanikankush" className="text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-all duration-300 transform hover:scale-110">
            <GitHubIcon className="h-8 w-8" />
          </a>
          <a href="https://www.linkedin.com/in/ankush-pramanik-853565259/" className="text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-all duration-300 transform hover:scale-110">
            <LinkedInIcon className="h-8 w-8" />
          </a>
          <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-all duration-300 transform hover:scale-110">
            <TwitterIcon className="h-8 w-8" />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;