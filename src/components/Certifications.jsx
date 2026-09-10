import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-24 bg-dark-bg relative border-t border-dark-border/40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-cyan font-heading font-semibold text-xs tracking-[0.2em] uppercase block mb-2">
            Qualifications & Learning
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white relative inline-block">
            Certifications
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-accent-violet to-accent-cyan rounded-full" />
          </h2>
        </div>

        {/* Timeline timeline or Grid cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-lg border border-dark-border/50 flex items-start gap-4 text-left hover:border-accent-violet/30 transition-all duration-300"
            >
              {/* Award Medal wrapper icon */}
              <div className="p-3 rounded-lg bg-dark-lighter border border-dark-border text-accent-violet shrink-0">
                <Award className="w-6 h-6" />
              </div>
              
              <div className="flex-1">
                <span className="inline-flex items-center gap-1 text-[10px] font-heading font-bold text-gray-500 mb-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{cert.year}</span>
                </span>
                
                <h3 className="font-heading font-bold text-base md:text-lg text-white mb-1">
                  {cert.name}
                </h3>
                
                <span className="text-xs text-gray-400 block mb-3">
                  Issued by: {cert.issuer}
                </span>

                {cert.link && cert.link !== '#' && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-heading text-xs font-semibold text-accent-cyan hover:text-white transition-colors"
                  >
                    <span>View Credential</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
