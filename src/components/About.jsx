import React from 'react';
import { MapPin, GraduationCap, Award } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export default function About() {
  const { name, location, motto, funFact } = portfolioData.personalInfo;

  return (
    <section id="about" className="py-24 bg-dark-bg relative border-t border-dark-border/40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-cyan font-heading font-semibold text-xs tracking-[0.2em] uppercase block mb-2">
            My Biography
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white relative inline-block">
            About Me
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-accent-violet to-accent-cyan rounded-full" />
          </h2>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left illustration / Fun fact card */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="w-full max-w-sm glass-card border border-dark-border p-8 rounded-xl text-center relative group">
              {/* Profile icon glow */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-accent-violet to-accent-cyan mx-auto flex items-center justify-center mb-6 shadow-glow">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>

              <h3 className="font-heading font-bold text-xl text-white mb-2">
                Subavishnu V
              </h3>
              <p className="text-xs font-semibold text-accent-cyan uppercase tracking-wider mb-6">
                Aspiring Software Engineer & Data Analyst
              </p>

              <div className="p-4 rounded-lg bg-dark-lighter border border-dark-border text-left">
                <span className="text-[10px] font-heading font-black text-accent-violet uppercase tracking-wide block mb-1">
                  Fun Fact
                </span>
                <p className="text-xs text-gray-300 italic">
                  "{funFact}"
                </p>
              </div>

              {/* Motto card */}
              <div className="mt-6 pt-6 border-t border-dark-border/40 text-left">
                <span className="text-[10px] font-heading font-black text-gray-500 uppercase tracking-wide block mb-1">
                  Life Motto
                </span>
                <p className="font-heading font-bold text-sm text-gray-300">
                  "{motto}"
                </p>
              </div>
            </div>
          </div>

          {/* Right Biography Details */}
          <div className="lg:col-span-7 text-left">
            <h3 className="font-heading font-bold text-2xl text-white mb-6">
              My Mission & Motivation
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6 text-sm md:text-base" style={{ textAlign: 'justify' }}>
              I recently completed my <strong>Master of Science (M.Sc.) in Computer Technology</strong>, where I developed a strong foundation in software development, databases, networking, data analytics, and emerging technologies.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6 text-sm md:text-base" style={{ textAlign: 'justify' }}>
              With a primary focus on <strong>Python, JavaScript, Data Analytics, and Machine Learning</strong>, I enjoy turning ideas and data into practical, technology-driven solutions. I approach development with a problem-solving mindset, building projects that address real-world challenges and improve efficiency through automation and intelligent systems.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8 text-sm md:text-base" style={{ textAlign: 'justify' }}>
              I’m passionate about learning new technologies, exploring how systems work, and continuously improving my technical skills. Whether working with data using Pandas and Python or developing web applications and backend systems, I strive to write clean, scalable, and maintainable code.
            </p>

            {/* Quick stats and location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-dark-card border border-dark-border">
                <MapPin className="w-5 h-5 text-accent-cyan shrink-0" />
                <div className="text-left">
                  <span className="text-[10px] text-gray-500 block uppercase font-semibold">Location</span>
                  <span className="text-sm font-semibold text-white">{location}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-lg bg-dark-card border border-dark-border">
                <Award className="w-5 h-5 text-accent-violet shrink-0" />
                <div className="text-left">
                  <span className="text-[10px] text-gray-500 block uppercase font-semibold">Status</span>
                  <span className="text-sm font-semibold text-white">Open to Work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
