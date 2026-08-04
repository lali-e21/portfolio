import React from 'react';
import { ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Learning Mobile App",
      description: "A mobile application offering personalized English lessons powered by advanced AI algorithms, with features to connect with certified tutors for real-time intensive practice.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000",
      tags: ["React Native", "FastAPI", "AI", "Mobile"],
      githubUrl: "https://github.com/lali-e21",
      liveUrl: "#"
    },
    {
      title: "Pharmacy Inventory System",
      description: "A full-stack system helping pharmacies efficiently manage medicines, stock levels, suppliers, and sales, featuring a user-friendly dashboard for tracking medicine availability and expiration dates.",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=1000",
      tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
      githubUrl: "https://github.com/lali-e21",
      liveUrl: "#"
    },
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with a modern, responsive UI. It enables customers to browse, search, manage carts, and purchase securely, featuring user authentication and an admin dashboard.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
      tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
      githubUrl: "https://github.com/lali-e21",
      liveUrl: "#"
    },
    {
      title: "AI CV Maker & Editor",
      description: "An AI-powered resume builder that helps users create professional, ATS-friendly CVs in minutes with customizable templates, AI-assisted content generation, and one-click PDF export.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1000",
      tags: ["React", "AI", "Tailwind CSS", "PDF Export"],
      githubUrl: "https://github.com/lali-e21",
      liveUrl: "#"
    },
    {
      title: "Course Selling App",
      description: "A mobile application with an admin web dashboard allowing users to browse, purchase, and access online courses. Features include secure payments, video lessons, and efficient content management.",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=1000",
      tags: ["Mobile App", "React Native", "Web Dashboard"],
      githubUrl: "https://github.com/lali-e21",
      liveUrl: "#"
    },
    {
      title: "Modern Hotel Booking",
      description: "A responsive hotel booking website that allows users to explore rooms, check availability, and make reservations easily with a clean UI, fast performance, and mobile responsiveness.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000",
      tags: ["React", "Web Design", "UI/UX"],
      githubUrl: "https://github.com/lali-e21",
      liveUrl: "#"
    },
    {
      title: "Success Tutor",
      description: "A full-stack web and mobile application that seamlessly connects students with tutors for online learning, automated scheduling, and interactive sessions.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000",
      tags: ["Web", "Mobile App", "Full-Stack"],
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
              <div className="relative flex-1 min-h-[350px] overflow-hidden">
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
