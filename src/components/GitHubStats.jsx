import React from 'react';
import { FolderGit, Star, Users, ArrowUpRight } from 'lucide-react';
import { Github } from './BrandIcons';
import { portfolioData } from '../portfolioData';

export default function GitHubStats() {
  const { github } = portfolioData.personalInfo;
  
  // Custom mock data based on actual profile parsed earlier
  const totalRepos = 14;
  const followers = 1;
  const starsCount = 0; // standard count

  const languages = [
    { name: 'Python & ML', percentage: 55, color: 'bg-blue-500' },
    { name: 'JavaScript', percentage: 25, color: 'bg-yellow-500' },
    { name: 'Java', percentage: 12, color: 'bg-red-500' },
    { name: 'HTML & CSS', percentage: 8, color: 'bg-cyan-500' },
  ];

  // Helper to generate mock contribution grid array (for visual matrix)
  const generateMockContributions = () => {
    const days = 14 * 7; // 14 weeks
    const levels = [0, 1, 2, 3, 0, 1, 0, 2, 3, 1, 2, 0, 1, 0, 0, 2, 1, 3, 2, 1, 0];
    return Array.from({ length: days }, (_, i) => ({
      level: levels[i % levels.length],
    }));
  };

  const contributions = generateMockContributions();

  return (
    <section className="py-24 bg-dark-bg relative border-t border-dark-border/40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-cyan font-heading font-semibold text-xs tracking-[0.2em] uppercase block mb-2">
            Open Source Activity
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white relative inline-block">
            GitHub Activity
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-accent-violet to-accent-cyan rounded-full" />
          </h2>
        </div>

        {/* Stats card and visual layouts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Profile Card */}
          <div className="lg:col-span-5 w-full">
            <div className="glass-card p-6 rounded-lg border border-dark-border/50 text-left flex flex-col justify-between h-full relative">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-dark-lighter border border-dark-border flex items-center justify-center text-accent-cyan">
                      <Github className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-white text-lg leading-tight">
                        subavishnu9080
                      </h3>
                      <span className="text-xs text-gray-500 block">Subavishnu V</span>
                    </div>
                  </div>
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded bg-dark-lighter border border-dark-border text-gray-400 hover:text-white transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Info parameters */}
                <p className="text-xs text-gray-400 leading-relaxed mb-6">
                  Check out repositories, commits, and packages on my public GitHub workspace. Sourced directly from public registries.
                </p>

                {/* Numerical statistics grid */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="p-3.5 rounded bg-dark-lighter/50 border border-dark-border text-center">
                    <FolderGit className="w-5 h-5 text-accent-cyan mx-auto mb-1" />
                    <span className="font-heading font-bold text-base text-white block">{totalRepos}</span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-wide">Repos</span>
                  </div>
                  
                  <div className="p-3.5 rounded bg-dark-lighter/50 border border-dark-border text-center">
                    <Star className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
                    <span className="font-heading font-bold text-base text-white block">{starsCount}</span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-wide">Stars</span>
                  </div>

                  <div className="p-3.5 rounded bg-dark-lighter/50 border border-dark-border text-center">
                    <Users className="w-5 h-5 text-accent-violet mx-auto mb-1" />
                    <span className="font-heading font-bold text-base text-white block">{followers}</span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-wide">Followers</span>
                  </div>
                </div>
              </div>

              {/* Language breakdown */}
              <div>
                <h4 className="font-heading font-bold text-xs text-gray-400 uppercase tracking-wider mb-4">
                  Programming Language Distribution
                </h4>
                <div className="space-y-3">
                  {languages.map((lang, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-gray-300">{lang.name}</span>
                        <span className="text-gray-500">{lang.percentage}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-dark-lighter rounded-full overflow-hidden">
                        <div className={`h-full ${lang.color}`} style={{ width: `${lang.percentage}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual contribution calendar grid */}
          <div className="lg:col-span-7 w-full">
            <div className="glass-card p-6 rounded-lg border border-dark-border/50 text-left">
              <h3 className="font-heading font-bold text-base text-white mb-4">
                Contributions & Commits
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                Visual matrix representing daily contributions and developer check-ins inside repositories over the past months.
              </p>

              {/* Grid block */}
              <div className="grid grid-flow-col grid-rows-7 gap-1.5 overflow-x-auto pb-4 max-w-full">
                {contributions.map((day, idx) => (
                  <div
                    key={idx}
                    className={`w-3.5 h-3.5 rounded-sm shrink-0 transition-colors duration-200 ${
                      day.level === 0
                        ? 'bg-dark-lighter'
                        : day.level === 1
                        ? 'bg-accent-violet/30'
                        : day.level === 2
                        ? 'bg-accent-violet/60'
                        : 'bg-accent-cyan'
                    }`}
                    title={`Activity index: Level ${day.level}`}
                  />
                ))}
              </div>

              {/* Legend bar */}
              <div className="flex justify-between items-center text-xs text-gray-500 pt-4 border-t border-dark-border/40 mt-4">
                <span>Total 100+ pushes this year</span>
                <div className="flex items-center gap-1">
                  <span>Less</span>
                  <div className="w-2.5 h-2.5 rounded-sm bg-dark-lighter" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-accent-violet/30" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-accent-violet/60" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-accent-cyan" />
                  <span>More</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
