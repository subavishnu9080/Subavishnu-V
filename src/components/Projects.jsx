import React, { useState } from 'react';
import { ExternalLink, Maximize2 } from 'lucide-react';
import { Github } from './BrandIcons';
import { portfolioData } from '../portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterButtons = [
    { label: 'All Projects', value: 'all' },
    { label: 'Machine Learning / Data', value: 'machine-learning' },
    { label: 'Web Applications', value: 'web-dev' }
  ];

  const filteredProjects = portfolioData.projects.filter(project => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  return (
    <section id="projects" className="py-24 bg-dark-bg relative border-t border-dark-border/40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-cyan font-heading font-semibold text-xs tracking-[0.2em] uppercase block mb-2">
            My Portfolio
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white relative inline-block">
            Featured Projects
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-accent-violet to-accent-cyan rounded-full" />
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filterButtons.map((btn, idx) => (
            <button
              key={idx}
              onClick={() => setFilter(btn.value)}
              className={`px-5 py-2 rounded-full font-heading font-medium text-xs md:text-sm border transition-all duration-200 ${
                filter === btn.value
                  ? 'bg-gradient-to-r from-accent-violet to-accent-cyan text-white border-transparent shadow-glow'
                  : 'bg-dark-card border-dark-border text-gray-400 hover:text-white hover:border-gray-500'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="glass-card flex flex-col rounded-lg border border-dark-border/60 overflow-hidden text-left group"
            >
              {/* Cover Image & Overlay */}
              <div
                onClick={() => setSelectedProject(project)}
                className="relative aspect-[16/10] overflow-hidden bg-dark-lighter cursor-pointer"
              >
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Visual Glass Overlay */}
                <div className="absolute inset-0 bg-black/75 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 backdrop-blur-xs transition-opacity duration-300">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="p-3 rounded-full bg-accent-violet text-white hover:scale-105 active:scale-95 transition-all shadow-glow"
                    title="View Details"
                  >
                    <Maximize2 className="w-5 h-5" />
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-3 rounded-full bg-dark-card border border-dark-border text-gray-200 hover:text-white hover:scale-105 active:scale-95 transition-all"
                    title="View Code"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Card info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-heading font-extrabold text-accent-cyan tracking-wider uppercase block mb-2">
                    {project.category === 'machine-learning' ? 'Machine Learning' : 'Web Dev'}
                  </span>
                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="font-heading font-bold text-lg text-white mb-2 leading-snug cursor-pointer hover:text-accent-violet transition-colors"
                  >
                    {project.name}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-semibold bg-dark-lighter border border-dark-border text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Modal display portal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}
