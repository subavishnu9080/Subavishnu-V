import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import GitHubStats from './components/GitHubStats';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  React.useEffect(() => {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -60px 0px'
    });

    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-dark-bg text-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen relative font-body selection:bg-accent-violet/30 selection:text-white">
      {/* Background glow meshes */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-accent-violet/10 blur-[150px] animate-glow-1" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-accent-cyan/10 blur-[150px] animate-glow-2" />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] rounded-full bg-accent-rose/5 blur-[120px]" />
      </div>

      {/* Main layout */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <div className="scroll-reveal">
            <About />
          </div>
          <div className="scroll-reveal">
            <Skills />
          </div>
          <div className="scroll-reveal">
            <Projects />
          </div>
          <div className="scroll-reveal">
            <Education />
          </div>
          <div className="scroll-reveal">
            <Certifications />
          </div>
          <div className="scroll-reveal">
            <GitHubStats />
          </div>
          <div className="scroll-reveal">
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
