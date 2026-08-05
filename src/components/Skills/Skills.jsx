import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React / Vite", level: 90 },
        { name: "React Native", level: 90 },
        { name: "Next.js", level: 90 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "MongoDB", level: 90 },
        { name: "SQL", level: 90 },
        { name: "RESTful APIs", level: 90 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Figma", level: 90 },
        { name: "Vercel / Netlify", level: 90 },
        { name: "Postman", level: 90 },
        { name: "Adobe Photoshop", level: 95 }
      ]
    }
  ];

  return (
    <section id="skills" className="section relative">
      <div className="bg-glow-2"></div>

      <div className="container">
        <h2 className="section-title">Technical <span className="text-gradient">Skills</span></h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="p-6 md:p-10 glass-panel">
              <h3 className="text-2xl mb-8 text-center relative inline-block left-1/2 -translate-x-1/2 after:content-[''] after:absolute after:w-1/2 after:h-[2px] after:bg-gradient-primary after:-bottom-2 after:left-1/4">{category.title}</h3>
              <div className="flex flex-col gap-6">
                {category.skills.map((skill, index) => (
                  <div key={index} className="w-full">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-text-secondary">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="progress-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
