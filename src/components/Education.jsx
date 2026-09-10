import React from 'react';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 bg-dark-bg relative border-t border-dark-border/40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-cyan font-heading font-semibold text-xs tracking-[0.2em] uppercase block mb-2">
            Academic Background
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white relative inline-block">
            Education
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-accent-violet to-accent-cyan rounded-full" />
          </h2>
        </div>

        {/* Timeline container */}
        <div className="max-w-3xl mx-auto relative border-l border-dark-border/80 pl-6 md:pl-8 space-y-12 text-left">
          {education.map((edu, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Indicator Node */}
              <div className="absolute left-[-31px] md:left-[-35px] top-1.5 w-4 h-4 rounded-full bg-dark-card border-2 border-accent-violet flex items-center justify-center group-hover:border-accent-cyan transition-colors z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-violet group-hover:bg-accent-cyan transition-colors" />
              </div>

              {/* Card Container */}
              <div className="glass-card p-6 md:p-8 rounded-lg border border-dark-border/50 group-hover:border-accent-violet/30 transition-all duration-300 relative">
                {/* Year Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-accent-violet/10 border border-accent-violet/20 text-accent-violet font-heading font-bold text-xs mb-4">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{edu.duration}</span>
                </div>

                {/* Degree Name */}
                <h3 className="font-heading font-extrabold text-lg md:text-xl text-white mb-1 group-hover:text-accent-cyan transition-colors">
                  {edu.degree}
                </h3>

                {/* Institution */}
                <span className="text-xs md:text-sm font-semibold text-gray-400 block mb-4">
                  {edu.institution}
                </span>

                {/* Detailed academic summary */}
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                  {edu.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
