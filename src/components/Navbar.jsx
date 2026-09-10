import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, FileText } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { portfolioData } from '../portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    // Theme initialization
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Scroll listeners
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Section tracker
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  const handleLinkClick = (e, href, id) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const rect = target.getBoundingClientRect();
      const top = rect.top + window.scrollY - 80;
      window.scrollTo({
        top: top,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-dark-bg/80 dark:bg-dark-bg/85 backdrop-blur-md border-b border-dark-border py-4 shadow-lg'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home', 'home')}
          className="font-heading font-bold text-xl tracking-tight text-white flex items-center gap-1 hover:opacity-90"
        >
          {/* <span className="text-accent-violet">&lt;</span> */}
          <span><strong>Subavishnu V</strong></span>
          {/* <span className="text-accent-cyan"> V /&gt;</span> */}
        </a>

        {/* Desktop Navbar Menu Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href, item.id)}
              className={`font-heading font-medium text-[14px] transition-colors relative py-1 hover:text-white ${activeSection === item.id ? 'text-white' : 'text-gray-400'
                }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-accent-violet to-accent-cyan" />
              )}
            </a>
          ))}
        </nav>

        {/* Desktop Action Handles */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-dark-border bg-dark-card hover:bg-dark-lighter hover:text-white transition-all duration-200"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-[18px] h-[18px] text-yellow-400" /> : <Moon className="w-[18px] h-[18px] text-accent-violet" />}
          </button>

          <a
            href={portfolioData.personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-dark-border bg-dark-card hover:bg-dark-lighter hover:text-white transition-all duration-200"
            aria-label="GitHub Profile"
          >
            <Github className="w-[18px] h-[18px]" />
          </a>

          <a
            href={portfolioData.personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-dark-border bg-dark-card hover:bg-dark-lighter hover:text-white transition-all duration-200"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-[18px] h-[18px]" />
          </a>

          <a
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-md font-heading font-bold text-xs bg-gradient-to-r from-accent-violet to-accent-cyan text-white shadow-glow hover:opacity-95 active:scale-95 transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Navbar Actions */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-dark-border bg-dark-card text-gray-400 hover:text-white"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-[16px] h-[16px] text-yellow-400" /> : <Moon className="w-[16px] h-[16px]" />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md border border-dark-border bg-dark-card text-gray-400 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-[72px] right-0 w-[80%] max-w-[320px] h-screen bg-dark-card border-l border-dark-border px-6 py-8 flex flex-col justify-between shadow-2xl z-40 transition-transform duration-300">
          <nav className="flex flex-col gap-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href, item.id)}
                className={`font-heading font-medium text-lg tracking-wide py-1 hover:text-white transition-colors ${activeSection === item.id ? 'text-white border-l-2 border-accent-violet pl-3' : 'text-gray-400 pl-0'
                  }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-4 pb-20">
            <div className="flex gap-4">
              <a
                href={portfolioData.personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex justify-center py-2.5 rounded-md border border-dark-border bg-dark-lighter hover:text-white hover:border-gray-500 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={portfolioData.personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex justify-center py-2.5 rounded-md border border-dark-border bg-dark-lighter hover:text-white hover:border-gray-500 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-md font-heading font-bold text-sm bg-gradient-to-r from-accent-violet to-accent-cyan text-white shadow-glow active:scale-98 transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
