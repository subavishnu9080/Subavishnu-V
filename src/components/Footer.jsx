import React from 'react';
import { portfolioData } from '../portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const rect = target.getBoundingClientRect();
      const top = rect.top + window.scrollY - 80;
      window.scrollTo({
        top: top,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-dark-card border-t border-dark-border/40 py-8 relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left Side: copyright */}
        <p className="text-xs md:text-sm text-gray-500 font-heading">
          &copy; {currentYear} {portfolioData.personalInfo.name}. All Rights Reserved.
        </p>

        {/* Right Side: quick links */}
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="text-xs md:text-sm text-gray-500 hover:text-accent-violet transition-colors font-heading"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => handleLinkClick(e, '#about')}
            className="text-xs md:text-sm text-gray-500 hover:text-accent-violet transition-colors font-heading"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={(e) => handleLinkClick(e, '#skills')}
            className="text-xs md:text-sm text-gray-500 hover:text-accent-violet transition-colors font-heading"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={(e) => handleLinkClick(e, '#projects')}
            className="text-xs md:text-sm text-gray-500 hover:text-accent-violet transition-colors font-heading"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="text-xs md:text-sm text-gray-500 hover:text-accent-violet transition-colors font-heading"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
