import React from 'react';
import { X, ExternalLink, ShieldCheck, Cpu, Lightbulb } from 'lucide-react';
import { Github } from './BrandIcons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  // Handles closing on backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
    >
      <div className="bg-dark-card border border-dark-border w-full max-w-3xl rounded-xl overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col animate-in fade-in zoom-in duration-300 text-left">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-dark-lighter border border-dark-border text-gray-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Scrollable Container */}
        <div className="overflow-y-auto flex-1">
          {/* Project Cover Image */}
          <div className="relative aspect-[16/7] bg-dark-lighter">
            <img
              src={project.imageUrl}
              alt={project.name}
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/40 to-transparent" />
            <div className="absolute bottom-4 left-6">
              <span className="text-[10px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded bg-accent-cyan/20 border border-accent-cyan/40 text-accent-cyan">
                {project.category === 'machine-learning' ? 'Machine Learning' : 'Web Development'}
              </span>
              <h3 className="font-heading font-black text-2xl md:text-3xl text-white mt-1.5">
                {project.name}
              </h3>
            </div>
          </div>

          {/* Modal details body */}
          <div className="p-6 md:p-8 space-y-6">
            {/* Overview description */}
            <div>
              <h4 className="font-heading font-bold text-gray-400 text-sm uppercase tracking-wider mb-2">Overview</h4>
              <p className="text-gray-300 leading-relaxed text-sm md:text-[15px]">
                {project.longDescription}
              </p>
            </div>

            {/* Problem & Approach */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-dark-border/40">
              <div className="space-y-2">
                <h4 className="font-heading font-bold text-gray-400 text-sm uppercase tracking-wider flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4 text-yellow-400" />
                  <span>Problem Solved</span>
                </h4>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                  {project.problemSolved}
                </p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-heading font-bold text-gray-400 text-sm uppercase tracking-wider flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-accent-violet" />
                  <span>My Approach</span>
                </h4>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                  {project.approach}
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="pt-4 border-t border-dark-border/40 text-left">
              <h4 className="font-heading font-bold text-gray-400 text-sm uppercase tracking-wider mb-3">Key Features</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm text-gray-400">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Grid */}
            <div className="pt-4 border-t border-dark-border/40 text-left">
              <h4 className="font-heading font-bold text-gray-400 text-sm uppercase tracking-wider mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded bg-dark-lighter border border-dark-border/60 text-xs text-gray-300 font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="bg-dark-card/95 border-t border-dark-border px-6 py-4 flex gap-4 justify-end">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 border border-dark-border hover:border-gray-500 rounded bg-dark-lighter hover:bg-dark-card text-xs md:text-sm font-heading font-bold text-white transition-all"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Repository</span>
          </a>
          
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded bg-gradient-to-r from-accent-violet to-accent-cyan text-xs md:text-sm font-heading font-bold text-white shadow-glow hover:opacity-95 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demonstration</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
