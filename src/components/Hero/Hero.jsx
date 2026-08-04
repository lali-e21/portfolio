import React from 'react';
import { ArrowRight } from 'lucide-react';
import logo from '../../assets/logo.JPG';
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-[200px] pb-[80px] max-md:pt-[140px] max-[480px]:pt-[100px] max-[480px]:pb-[60px]">
      <div className="bg-glow-1"></div>

      <div className="max-w-[1200px] mx-auto px-8 max-md:px-4 grid grid-cols-2 max-md:grid-cols-1 gap-16 max-md:gap-12 items-center w-full max-md:text-center max-md:pt-8">
        <div className="max-w-[600px] max-md:mx-auto animate-fade-in flex flex-col max-md:items-center">
          <h3 className="text-lg font-semibold mb-4 tracking-[1px] uppercase text-gradient max-[480px]:text-sm">Full-Stack Developer & Visual Designer</h3>
          <h1 className="text-[clamp(2.5rem,4vw,3.5rem)] max-[480px]:text-[2.2rem] tracking-[-1.5px] mb-6 leading-[1.1] text-white">
            Full Stack Developer and Graphics Designer
          </h1>

          <div className="flex gap-4 max-md:flex-col max-md:w-full max-md:max-w-[300px] delay-200">
            <a href="#projects" className="btn-primary max-md:w-full max-md:justify-center">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-secondary max-md:w-full max-md:justify-center">
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative flex justify-center items-center max-md:mt-8 animate-float delay-300">
          <div className="w-[320px] h-[400px] max-[480px]:w-[260px] max-[480px]:h-[320px] p-4 rounded-[24px] relative bg-gradient-to-br from-white/5 to-white/[0.01]">
            <div className="w-full h-full rounded-[16px] bg-bg-secondary flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 opacity-20"></div>
              <img src={logo} alt="profile" className="w-full h-full object-cover" />
            </div>

            <div className="absolute py-3 px-4 flex flex-col items-center justify-center rounded-xl animate-[float_5s_ease-in-out_infinite] top-[10%] -left-5 max-[480px]:-left-2 max-[480px]:py-2 max-[480px]:px-3 delay-[0.5s] glass-panel z-10">
              <span className="text-xl max-[480px]:text-lg font-bold text-white">2+</span>
              <span className="text-xs max-[480px]:text-[10px] uppercase tracking-[1px] text-text-secondary">Years Exp.</span>
            </div>

            <div className="absolute py-3 px-4 flex flex-col items-center justify-center rounded-xl animate-[float_5s_ease-in-out_infinite] bottom-[20%] -right-[30px] max-[480px]:-right-4 max-[480px]:py-2 max-[480px]:px-3 delay-[1.5s] glass-panel z-10">
              <span className="text-xl max-[480px]:text-lg font-bold text-white">20+</span>
              <span className="text-xs max-[480px]:text-[10px] uppercase tracking-[1px] text-text-secondary">Projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
