import React from 'react';

const Experience = () => {
  const experiences = [
    {
      year: "2026",
      title: "Senior Full Stack Developer",
      description: "Leading web and mobile application development using MERN Stack and React Native.",
      align: "right"
    },
    {
      year: "2025",
      title: "React Native Developer",
      description: "Developed cross-platform mobile applications using Expo and React Native.",
      align: "left"
    },
    {
      year: "2024",
      title: "Frontend Developer",
      description: "Built responsive React applications and modern UI components.",
      align: "right"
    }
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
                  <h3 className="text-xl mb-2 text-text-primary">{exp.title}</h3>
                  <p className="text-[0.95rem] leading-[1.6] text-text-secondary">{exp.description}</p>
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
