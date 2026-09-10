import React, { useState, useEffect } from 'react';
import { Mail, ArrowRight, FileText, Cpu, Sparkles, Code2, Database, Brain, Activity } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { portfolioData } from '../portfolioData';

export default function Hero() {
  const { name, title, bio, github, linkedin, email, funFact } = portfolioData.personalInfo;

  // Rotating headline strings
  const professions = [
    'Software Developer',
    'Data Analyst',
    'Machine Learning Enthusiast',
    'Full-Stack builder'
  ];
  const [currentText, setCurrentText] = useState('');
  const [profIndex, setProfIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // 3D Mouse Parallax Optical Illusion State
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const currentWord = professions[profIndex];
    let timer;

    if (isDeleting) {
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setCurrentText(currentWord.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 50);
      } else {
        setIsDeleting(false);
        setProfIndex((prev) => (prev + 1) % professions.length);
      }
    } else {
      if (charIndex < currentWord.length) {
        timer = setTimeout(() => {
          setCurrentText(currentWord.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 100);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, profIndex]);

  const scrollToSection = (e, selector) => {
    e.preventDefault();
    const target = document.querySelector(selector);
    if (target) {
      const rect = target.getBoundingClientRect();
      const top = rect.top + window.scrollY - 80;
      window.scrollTo({
        top: top,
        behavior: 'smooth',
      });
    }
  };

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Smooth 3D rotational tilt angle math (max 14deg)
    const rotateX = (-y / (rect.height / 2)) * 14;
    const rotateY = (x / (rect.width / 2)) * 14;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background glow meshes */}
      <div className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vw] bg-accent-violet/10 rounded-full blur-[100px] pointer-events-none animate-glow-1" />
      <div className="absolute bottom-[10%] right-[-10%] w-[35vw] h-[35vw] bg-accent-cyan/10 rounded-full blur-[120px] pointer-events-none animate-glow-2" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Side text */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <span className="text-accent-cyan font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Hello, Welcome to my space
          </span>
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl text-white tracking-tight leading-none mb-4">
            Hi, I'm <span className="text-gradient">Subavishnu V</span>
          </h1>
          <h2 className="font-heading font-semibold text-2xl md:text-3xl text-gray-300 mb-6 h-10">
            I am a <span className="text-accent-cyan">{currentText}</span>
            <span className="typing-cursor text-accent-violet">|</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-8" style={{ textAlign: 'justify' }}>
            {bio} Currently pursuing my Master's in Computer Technology, bridging the gap between elegant frontend interfaces, performant APIs, and intelligent data systems.
          </p>

          {/* Call to Action buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, '#projects')}
              className="flex items-center gap-2 px-6 py-3.5 rounded-md font-heading font-bold text-sm bg-gradient-to-r from-accent-violet to-accent-cyan text-white shadow-glow hover:opacity-95 transition-all"
            >
              <span>View My Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 rounded-md font-heading font-bold text-sm border border-dark-border bg-dark-card hover:bg-dark-lighter text-white hover:border-gray-500 transition-all"
            >
              <FileText className="w-4 h-4 text-accent-cyan" />
              <span>View Resume</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="px-6 py-3.5 rounded-md font-heading font-bold text-sm border border-dark-border bg-dark-card hover:bg-dark-lighter text-white hover:border-gray-500 transition-all"
            >
              <span>Let's Connect</span>
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-6">
            <span className="text-gray-500 font-heading font-bold text-xs uppercase tracking-wider">
              Find Me On
            </span>
            <div className="flex gap-4">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-dark-border bg-dark-card hover:bg-dark-lighter hover:text-white transition-all"
                title="GitHub"
              >
                <Github className="w-[18px] h-[18px] text-gray-400 hover:text-white" />
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-dark-border bg-dark-card hover:bg-dark-lighter hover:text-white transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-[18px] h-[18px] text-gray-400 hover:text-white" />
              </a>
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-dark-border bg-dark-card hover:bg-dark-lighter hover:text-white transition-all text-xs font-mono text-gray-300"
                title="Email: subavishnu9080@gmail.com"
              >
                <Mail className="w-[16px] h-[16px] text-accent-cyan" />
                <span>subavishnu9080@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side Animated Profile Picture Card */}
        <div className="lg:col-span-5 w-full flex justify-center perspective-[1000px]">
          <div
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(${isHovered ? 1.02 : 1})`,
              transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
            }}
            className="w-full max-w-lg glass-card border border-dark-border/80 rounded-2xl shadow-2xl overflow-hidden text-left relative group cursor-pointer"
          >
            {/* Profile Header Bar */}
            <div className="bg-dark-card/90 border-b border-dark-border/60 px-4 py-3 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent-violet animate-pulse" />
                <span className="font-mono text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  PROFILE // SUBAVISHNU V
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-mono text-[10px] text-emerald-400 font-bold uppercase tracking-widest">
                  ONLINE
                </span>
              </div>
            </div>

            {/* Core Image Display Area with Neon Halo & Parallax floating chips */}
            <div className="relative h-[380px] md:h-[420px] flex items-center justify-center overflow-hidden illusion-grid">

              {/* Laser Scan Line */}
              <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-accent-cyan to-transparent animate-laser-sweep pointer-events-none z-10" />

              {/* Background Pulsing Neon Aura */}
              <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-accent-violet/30 via-accent-cyan/20 to-accent-rose/20 blur-2xl animate-pulse pointer-events-none" />

              {/* Animated Rotating Gradient Halo Ring */}
              <div className="absolute w-60 h-60 md:w-64 md:h-64 rounded-full p-[3px] bg-gradient-to-tr from-accent-violet via-accent-cyan to-accent-rose animate-spin-slow shadow-glow" />

              {/* Counter-Rotating Dashed Outer Orbit */}
              <div className="absolute w-72 h-72 rounded-full border-2 border-dashed border-accent-cyan/30 animate-spin-reverse pointer-events-none" />

              {/* Profile Image Container */}
              <div className="relative z-20 w-56 h-56 md:w-60 md:h-60 rounded-full p-1 bg-dark-card border-2 border-dark-border shadow-2xl overflow-hidden transform transition-transform duration-500 group-hover:scale-105">
                <img
                  src="/profile.jpg"
                  alt="Subavishnu V"
                  className="w-full h-full object-cover rounded-full filter contrast-[1.03] brightness-[1.02]"
                />
              </div>

              {/* Floating Animated Tech Badges Overlaid around Profile Picture */}
              {/* Badge 1: Top Left */}
              <div className="absolute top-5 left-4 z-30 animate-float-slow">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-card/90 backdrop-blur-md border border-accent-violet/50 shadow-lg text-xs font-semibold text-gray-200">
                  <Brain className="w-3.5 h-3.5 text-accent-violet" />
                  <span>Machine Learning</span>
                </div>
              </div>

              {/* Badge 2: Top Right */}
              <div className="absolute top-7 right-4 z-30 animate-float-delayed">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-card/90 backdrop-blur-md border border-accent-cyan/50 shadow-lg text-xs font-semibold text-gray-200">
                  <Code2 className="w-3.5 h-3.5 text-accent-cyan" />
                  <span>Python & React</span>
                </div>
              </div>

              {/* Badge 3: Bottom Left */}
              <div className="absolute bottom-7 left-4 z-30 animate-float-delayed">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-card/90 backdrop-blur-md border border-accent-rose/50 shadow-lg text-xs font-semibold text-gray-200">
                  <Database className="w-3.5 h-3.5 text-accent-rose" />
                  <span>Data Analytics</span>
                </div>
              </div>

              {/* Badge 4: Bottom Right */}
              <div className="absolute bottom-5 right-4 z-30 animate-float-slow">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-card/90 backdrop-blur-md border border-emerald-400/50 shadow-lg text-xs font-semibold text-gray-200">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Software Engineer</span>
                </div>
              </div>
            </div>

            {/* Profile Footer instruction */}
            <div className="bg-dark-card/90 border-t border-dark-border/60 px-4 py-2.5 flex justify-between items-center text-[11px] font-mono text-gray-400">
              <span className="font-semibold text-gray-300">SUBAVISHNU V</span>
              <span className="text-accent-cyan flex items-center gap-1 font-semibold">
                <span>Move cursor to tilt</span>
              </span>
            </div>
          </div>
        </div>

        {/* 
          ====================================================================
          PREVIOUS OPTICAL ILLUSION ANIMATION CODE (COMMENTED OUT AS REQUESTED)
          ====================================================================
          <div className="lg:col-span-5 w-full flex justify-center perspective-[1000px]">
            <div className="w-full max-w-lg glass-card border border-dark-border/80 rounded-2xl shadow-2xl overflow-hidden text-left relative group cursor-pointer">
              <div className="bg-dark-card/90 border-b border-dark-border/60 px-4 py-3 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-accent-cyan animate-pulse" />
                  <span className="font-mono text-xs font-semibold text-gray-300 uppercase tracking-wider">
                    OPTICAL MATRIX // SUBAVISHNU V
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="font-mono text-[10px] text-emerald-400 font-bold uppercase tracking-widest">
                    ONLINE
                  </span>
                </div>
              </div>

              <div className="relative h-[360px] md:h-[400px] flex items-center justify-center overflow-hidden illusion-grid">
                <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-accent-cyan to-transparent animate-laser-sweep pointer-events-none z-10" />
                <div className="absolute w-72 h-72 rounded-full border-2 border-dashed border-accent-violet/40 animate-spin-slow pointer-events-none" />
                <div className="absolute w-56 h-56 rounded-[35%] border border-accent-cyan/50 animate-spin-reverse pointer-events-none" />
                <div className="absolute w-44 h-44 rounded-full border-2 border-accent-violet/30 animate-illusion-pulse pointer-events-none" />
                <div className="absolute w-32 h-32 rounded-full bg-gradient-to-tr from-accent-violet/20 via-accent-cyan/20 to-transparent blur-xl animate-pulse pointer-events-none" />

                <div className="relative z-20 flex flex-col items-center justify-center p-6 rounded-2xl bg-dark-card/85 backdrop-blur-md border border-dark-border/80 shadow-2xl max-w-[220px] text-center transform transition-transform duration-300 group-hover:scale-105">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-accent-violet to-accent-cyan p-0.5 mb-3 shadow-glow">
                    <div className="w-full h-full bg-dark-card rounded-[10px] flex items-center justify-center">
                      <Cpu className="w-7 h-7 text-accent-cyan animate-pulse" />
                    </div>
                  </div>
                  <h3 className="font-heading font-extrabold text-white text-base tracking-tight mb-1">
                    Subavishnu V
                  </h3>
                  <span className="text-[11px] font-mono text-accent-cyan font-semibold block uppercase tracking-wider mb-2">
                    Software & Data Specialist
                  </span>
                </div>
              </div>
            </div>
          </div>
        */}
      </div>
    </section>
  );
}

