import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border-glass pt-16 pb-8 mt-16">
      <div className="container">
        <div className="flex justify-between mb-12 max-md:flex-col max-md:gap-8">
          <div className="max-w-[300px]">
            <a href="#home" className="font-outfit text-2xl font-bold tracking-tight">
              Walelign<span className="text-gradient">.dev</span>
            </a>
            <p className="text-text-secondary mt-2">
              Building the future of the web, one line of code at a time.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg mb-5 font-bold font-outfit">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#about" className="text-text-secondary transition-colors duration-300 hover:text-text-primary">About</a></li>
              <li><a href="#skills" className="text-text-secondary transition-colors duration-300 hover:text-text-primary">Skills</a></li>
              <li><a href="#projects" className="text-text-secondary transition-colors duration-300 hover:text-text-primary">Projects</a></li>
              <li><a href="#contact" className="text-text-secondary transition-colors duration-300 hover:text-text-primary">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex justify-between items-center pt-8 border-t border-white/5 max-md:flex-col max-md:gap-4 max-md:text-center">
          <p className="text-sm text-text-secondary">
            &copy; {currentYear} Walelign Enemayehu. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-sm text-text-secondary">
            Made with <Heart size={16} className="text-red-500" /> and React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
