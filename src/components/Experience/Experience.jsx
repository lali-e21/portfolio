import React from 'react';

const Experience = () => {
  const experiences = [
  {
    year: "2026",
    title: "Janka Express Travel & Tour Platform",
    role: "Full Stack Developer",
    description:
      "Designed and developed a complete travel and tourism management platform with a modern landing page and admin dashboard for managing tour packages, bookings, visa services, flight tickets, hotel reservations, and promotional content.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Tailwind CSS",
    ],
    url: "https://jankaexpress.com",
  },
   {
    year: "2026",
    title: "Final Year Project",
    role: "Full Stack Developer",
    description:
      "Completed a full-stack university capstone project by designing and implementing a responsive web application with authentication, database integration, REST APIs, and modern software engineering practices.",
    technologies: [
      "React.js",
      "React Native",
      "FastAPI",
      "MySQL",
      "Tailwind CSS",
    ],
  },
  {
    year: "2025",
    title: "Graphic Design & Branding",
    role: "Graphic Designer",
    description:
      "Created logos, brand identities, business cards, social media graphics, banners, posters, and marketing materials for businesses and personal brands.",
    technologies: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Figma",
    ],
  },
  {
    year: "2025",
    title: "Internship Program at Alyah Software",
    role: "Full Stack Developer Intern",
    description:
      "Completed a professional internship by contributing to real-world web application development. Projectsed with modern frontend technologies, RESTful APIs, responsive UI development, Git version control, debugging, and collaborative software development practices.",
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Git",
    ],
  },
  {
    year: "2025",
    title: "Success Tutor Platform",
    role: "Full Stack Developer",
    description:
      "Developed an online tutoring platform with tutor booking, parent and student dashboards, progress tracking, authentication, payment integration, and learning resource management.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    url: "https://success-front.vercel.app/",
  },
 
  {
    year: "2024",
    title: "Modern React Dashboard Projects",
    role: "Frontend Developer",
    description:
      "Built modern admin dashboards with responsive layouts, charts, authentication, reusable components, API integration, and professional UI/UX using React.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      "REST API",
    ],
  },
  {
    year: "2024",
    title: "E-commerce Web Projects",
    role: "Frontend Developer",
    description:
      "Developed responsive e-commerce websites featuring product listings, shopping cart, authentication, checkout flow, and mobile-first user interfaces.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      
    ],
  },
 
];


  return (
    <section id="experience" className="section bg-bg-primary">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-[2px] uppercase mb-2 block text-color-primary">MY JOURNEY</span>
          <h2 className="section-title !mb-0">Experience Timeline</h2>
        </div>
        
        <div className="relative max-w-[800px] mx-auto">
          <div className="absolute left-[200px] top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 max-md:left-[20px] max-[480px]:left-[10px]"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-center mb-12 last:mb-0 max-md:mt-16">
              <div className="w-[200px] pr-12 flex justify-end max-md:w-auto max-md:absolute max-md:-top-[40px] max-md:left-[40px] max-md:pr-0 max-md:justify-start max-[480px]:left-[10px] max-[480px]:-top-[35px]">
                <span className="bg-cyan-500/10 text-color-primary px-4 py-2 rounded-lg font-bold text-sm">{exp.year}</span>
              </div>
              
              <div className="absolute left-[200px] w-4 h-4 bg-color-primary rounded-full -translate-x-1/2 shadow-[0_0_10px_var(--color-primary)] z-10 max-md:left-[20px] max-[480px]:left-[10px]"></div>
              
              <div className="flex-1 pl-12 max-md:pl-12 max-md:w-full max-[480px]:pl-8">
                <div className={`p-8 w-full card max-[480px]:py-6 max-[480px]:px-4 text-${exp.align} max-md:text-left`}>
                  <h3 className="text-xl mb-2 text-orange-300">{exp.title}</h3>
                  <p className="text-[0.95rem] leading-[1.6] text-text-secondary">{exp.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {exp.url && (
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-500 hover:text-cyan-400 transition-colors duration-300"
                      >
                        View Project
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
