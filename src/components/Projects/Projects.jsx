import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
import l3 from '../../assets/l3.jpg';
import l4 from '../../assets/l4.jpg';
import l5 from '../../assets/l5.jpg';
import p1 from '../../assets/p1.jpg';
import p2 from '../../assets/p2.jpg';
import e2 from '../../assets/e2.jpg';
import e1 from '../../assets/e1.jpg';
import e3 from '../../assets/e3.jpg';
import cv1 from '../../assets/cv1.jpg';
import cv2 from '../../assets/cv2.jpg';
import c1 from '../../assets/c1.jpg';
import c2 from '../../assets/c2.jpg';
import h1 from '../../assets/h1.jpg';
import h2 from '../../assets/h2.jpg';
import s1 from '../../assets/s1.jpg';
import s3 from '../../assets/s3.jpg';
import b from '../../assets/21.jpg';
import j1 from '../../assets/j1.png';
import j2 from '../../assets/j2.png';
import j3 from '../../assets/j3.png';
const ImageSlider = ({ images, title }) => {
  const scrollRef = React.useRef(null);

  React.useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        if (scrollLeft >= maxScroll - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
        }
      }
    }, 3500);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div
      ref={scrollRef}
      className="w-full h-full flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {images.map((img, index) => (
        <div key={index} className="w-full h-[400px] flex-shrink-0 snap-center relative overflow-hidden">
          <img
            src={img}
            alt={`${title} - image ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Learning Mobile App",
      description: "A mobile application offering personalized English lessons powered by advanced AI algorithms, with features to connect with certified tutors for real-time intensive practice.",
      images: [
        l3,
        l4,
        l5
      ],
      tags: ["React Native", "FastAPI", "AI", "Mobile"],
      githubUrl: "https://github.com/lali-e21",
      liveUrl: "#"
    },
    {
      title: "Pharmacy Inventory System",
      description: "A full-stack system helping pharmacies efficiently manage medicines, stock levels, suppliers, and sales, featuring a user-friendly dashboard for tracking medicine availability and expiration dates.",
      images: [
        p1,
        p2
      ],
      tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
      githubUrl: "https://github.com/lali-e21",
      liveUrl: "#"
    },
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with a modern, responsive UI. It enables customers to browse, search, manage carts, and purchase securely, featuring user authentication and an admin dashboard.",
      images: [
         e2,
         e1,
         e3
      ],
      tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
      githubUrl: "https://github.com/lali-e21",
      liveUrl: "#"
    },
    {
      title: "AI CV Maker & Editor",
      description: "An AI-powered resume builder that helps users create professional, ATS-friendly CVs in minutes with customizable templates, AI-assisted content generation, and one-click PDF export.",
      images: [
        cv1,
        cv2
      ],
      tags: ["React", "AI", "Tailwind CSS", "PDF Export"],
      githubUrl: "https://github.com/lali-e21",
      liveUrl: "#"
    },
    {
      title: "Course Selling App",
      description: "A mobile application with an admin web dashboard allowing users to browse, purchase, and access online courses. Features include secure payments, video lessons, and efficient content management.",
      images: [
        c1,
        c2
      ],
      tags: ["Mobile App", "React Native", "Web Dashboard"],
      githubUrl: "https://github.com/lali-e21",
      liveUrl: "#"
    },
    {
      title: "Modern Hotel Booking",
      description: "A responsive hotel booking website that allows users to explore rooms, check availability, and make reservations easily with a clean UI, fast performance, and mobile responsiveness.",
      images: [
        h1,
        h2
      ],
      tags: ["React", "Web Design", "UI/UX"],
      githubUrl: "https://github.com/lali-e21",
      liveUrl: "#"
    },
    {
      title: "Success Tutor",
      description: "A full-stack web and mobile application that seamlessly connects students with tutors for online learning, automated scheduling, and interactive sessions.",
      images: [
        s1,
        s3
      ],
      tags: ["Web", "Mobile App", "Full-Stack"],
      githubUrl: "https://github.com/lali-e21",
      liveUrl: "#"
    },
    {
      title: "Book Cover Design",
      description: "A visually striking book cover design that captures the essence of the story, using a blend of typography, imagery, and color to create an eye-catching and memorable cover.",
      images: [
        b
      ],
      tags: ["Graphic Design", "Book Cover", "Adobe Photoshop"],
     
    },
    {
      title: "Janka Express Travel",
      description: "A modern travel booking platform that offers seamless trip planning, real-time availability updates, and a user-friendly interface for exploring destinations and managing reservations. deployed on hahu cloud",
      images: [
        j1,
        j2,
        j3
      ],
      tags: ["Web App", "Travel", "React"],
      githubUrl: "https://github.com/lali-e21",
      liveUrl: "https://jankaexpress.com"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] max-[480px]:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card overflow-hidden flex flex-col group hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(0,0,0,0.4)]">
              <div className="relative flex-1 min-h-[100px] overflow-hidden">
                <ImageSlider images={project.images} title={project.title} />
                <div className="absolute inset-0 bg-[#0a0a0b]/70 backdrop-blur-[4px] flex items-center justify-center gap-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white translate-y-5 transition-all duration-300 group-hover:translate-y-0 hover:!scale-105 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] delay-100">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6 flex flex-col">
                <h3 className="text-xl mb-3 text-orange-400">{project.title}</h3>
                <p className="text-[0.95rem] leading-[1.6] text-text-secondary">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-3">
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
