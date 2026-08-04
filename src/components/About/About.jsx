import React from 'react';
import { Code, Layout, Database, Palette } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code size={32} className="feature-icon" />,
      title: "Clean Code",
      description: "Writing elegant, maintainable, and highly efficient code."
    },
    {
      icon: <Layout size={32} className="feature-icon" />,
      title: "UI/UX Design",
      description: "Creating intuitive and responsive user interfaces."
    },
    {
      icon: <Database size={32} className="feature-icon" />,
      title: "Backend Dev",
      description: "Building robust architectures and scalable APIs."
    },
    {
      icon: <Palette size={32} className="feature-icon" />,
      title: " Graphics Design",
      description: "Creating stunning visual content that communicates your message."
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container mx-auto px-8 max-md:px-4 max-w-[1200px]">
        <h2 className="section-title">About <span className="text-gradient">Me</span></h2>

        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-12 items-center">
          <div className="p-12 max-[480px]:py-8 max-[480px]:px-6 card">
            <h3 className="text-3xl mb-6">About Walelign Enemayehu</h3>

            <div className="flex items-center mb-6 gap-4">
              <span className="text-gradient text-5xl font-extrabold leading-none">2+</span>
              <span className="text-text-secondary uppercase tracking-[1px] text-sm font-semibold leading-tight">Years of<br />Experience</span>
            </div>

            <p className="text-text-secondary mb-6 leading-relaxed">
              I’m a full-stack developer and graphic designer with extensive experience in building web and mobile applications. I have developed tutoring platforms, subscription and payment systems, live class integrations, e-commerce sites, dashboards, marketing posters, mobile UI/UX designs, and interactive user interfaces.
            </p>
            <p className="text-text-secondary mb-6 leading-relaxed">
              I am proficient in React, React Native, Node.js, Express, MongoDB, GraphQL, as well as UI/UX design using Figma and Adobe Photoshop, with a strong focus on responsive and user-friendly designs.
            </p>
            <a href="#contact" className="btn-primary mt-6">Let's Connect</a>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] max-[480px]:grid-cols-1 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-indigo-500/30 card">
                <div className="w-16 h-16 mx-auto mb-6 bg-indigo-500/10 rounded-full flex items-center justify-center text-[#0ea5e9]">
                  {feature.icon}
                </div>
                <h4 className="text-xl mb-3">{feature.title}</h4>
                <p className="text-text-secondary text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
