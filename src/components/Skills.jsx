import React from 'react';
import { Terminal, Layout, ShieldCheck, Database, BarChart3, Wrench } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export default function Skills() {
  const { skills } = portfolioData;

  const categories = [
    {
      title: 'Programming Languages',
      icon: <Terminal className="w-5 h-5 text-accent-violet" />,
      items: skills.programming,
      bgGlow: 'hover:border-accent-violet/30'
    },
    {
      title: 'Web Technologies',
      icon: <Layout className="w-5 h-5 text-accent-cyan" />,
      items: skills.frontend,
      bgGlow: 'hover:border-accent-cyan/30'
    },
    {
      title: 'Software Testing',
      icon: <ShieldCheck className="w-5 h-5 text-accent-rose" />,
      items: skills.testing,
      bgGlow: 'hover:border-accent-rose/30'
    },
    {
      title: 'Data Analysis & ML',
      icon: <BarChart3 className="w-5 h-5 text-emerald-400" />,
      items: skills.dataAndML,
      bgGlow: 'hover:border-emerald-500/30'
    },
    {
      title: 'Database Technologies',
      icon: <Database className="w-5 h-5 text-blue-400" />,
      items: skills.databases,
      bgGlow: 'hover:border-blue-500/30'
    },
    {
      title: 'Tools & Workspaces',
      icon: <Wrench className="w-5 h-5 text-yellow-400" />,
      items: skills.tools,
      bgGlow: 'hover:border-yellow-500/30'
    }
  ];

  return (
    <section id="skills" className="py-24 bg-dark-bg relative border-t border-dark-border/40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-cyan font-heading font-semibold text-xs tracking-[0.2em] uppercase block mb-2">
            Technical Stack
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white relative inline-block">
            What I Know
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-accent-violet to-accent-cyan rounded-full" />
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <div
              key={i}
              className={`glass-card p-6 rounded-lg border border-dark-border/60 transition-all duration-300 ${cat.bgGlow} text-left flex flex-col`}
            >
              {/* Category Title */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded bg-dark-lighter shrink-0">
                  {cat.icon}
                </div>
                <h3 className="font-heading font-bold text-lg text-white">
                  {cat.title}
                </h3>
              </div>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-2.5 mt-auto">
                {cat.items.map((item, j) => (
                  <span
                    key={j}
                    className="px-3.5 py-1.5 rounded-full font-heading font-bold text-xs bg-dark-lighter hover:bg-dark-card border border-dark-border hover:border-gray-500 text-gray-300 hover:text-white transition-all cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Current Learning Indicator */}
        <div className="mt-16 text-center max-w-xl mx-auto p-6 rounded-lg bg-dark-card border border-dark-border">
          <h4 className="font-heading font-bold text-sm text-white mb-2 uppercase tracking-wide">
            Currently Diving Deeper Into:
          </h4>
          <div className="flex justify-center gap-4 flex-wrap">
            {portfolioData.personalInfo.currently_learning.map((item, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                <span className="text-xs font-semibold text-gray-400">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
