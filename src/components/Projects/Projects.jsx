import React from 'react';
import { ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Success Tutor",
      description: "A seamless ed-tech ecosystem designed to streamline tutor-student matching, automated scheduling, and integrated payment workflows.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000",
      tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      githubUrl: "https://github.com/lali-e21",
      liveUrl: "#"
    },
    {
      title: "Pharmacy Inventory System",
      description: "An enterprise-grade stock management solution that minimizes discrepancies, automates reordering, and delivers actionable sales insights.",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=1000",
      tags: ["MERN Stack", "REST API", "Tailwind CSS"],
      githubUrl: "https://github.com/lali-e21",
      liveUrl: "#"
    },
    {
      title: "AI CV Maker",
      description: "An intelligent resume builder that transforms raw user input into polished, ATS-friendly professional resumes with instant PDF exports.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1000",
      tags: ["React", "Tailwind CSS", "AI/LLM Integration", "PDF Engine"],
      githubUrl: "https://github.com/lali-e21",
      liveUrl: "#"
    },
    {
      title: "E-Commerce Platform",
      description: "A scalable, full-stack shopping platform engineered for fast checkouts, secure payments, and effortless inventory management.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
      tags: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      githubUrl: "https://github.com/lali-e21",
      liveUrl: "#"
    },
    {
      title: "React Native Mobile App",
      description: "A lightweight, cross-platform mobile app offering fluid offline capabilities, real-time push notifications, and adaptive UI layouts.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000",
      tags: ["React Native", "Expo", "Mobile UI", "AsyncStorage"],
      githubUrl: "https://github.com/lali-e21",
      liveUrl: "#"
    },
    {
      title: "Luxury Hotel Booking Website",
      description: "A visually captivating hospitality platform engineered for seamless room discovery, high-conversion reservations, and fluid interactive tours.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/lali-e21",
      liveUrl: "#"
    },
    {
      title: "Janka Tour & Travel",
      description: "A high-conversion landing page and booking showcase designed to elevate brand authority, highlight curated travel packages, and simplify customer reservations.",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1000",
      tags: ["React", "Tailwind CSS", "Node.js", "Express.js"],
      githubUrl: "https://github.com/lali-e21",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
        
        <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] max-[480px]:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card overflow-hidden flex flex-col group hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(0,0,0,0.4)]">
              <div className="relative flex-1 min-h-[200px] overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[#0a0a0b]/70 backdrop-blur-[4px] flex items-center justify-center gap-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white translate-y-5 transition-all duration-300 group-hover:translate-y-0 hover:!scale-105 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] delay-100">
                    <ExternalLink size={20} />
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white translate-y-5 transition-all duration-300 group-hover:translate-y-0 hover:!scale-105 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] delay-200">
                    <Code size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl mb-3">{project.title}</h3>
                <p className="text-[0.95rem] leading-[1.6] mb-6 flex-grow text-text-secondary">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs py-1 px-3 bg-white/5 border border-border-glass rounded-full text-text-secondary">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
