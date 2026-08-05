import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 py-12 text-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex justify-between mb-12 max-md:flex-col max-md:gap-8">
          <div className="max-w-[300px]">
            <a href="#home" className="font-outfit text-2xl font-bold tracking-tight text-white transition-colors hover:text-orange-400">
              Walelign<span className="text-orange-400">.dev</span>
            </a>
            <p className="text-slate-600 mt-2 text-sm font-medium">
              Building the future of the web, one line of code at a time.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg mb-5 font-bold font-outfit text-slate-900">Quick Links</h4>
            <ul className="flex flex-col gap-3 font-semibold text-slate-600">
              <li>
                <a href="#about" className="transition-colors duration-300 hover:text-orange-400">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="transition-colors duration-300 hover:text-orange-400">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="transition-colors duration-300 hover:text-orange-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors duration-300 hover:text-orange-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center pt-8 border-t border-slate-400/20 gap-2 text-center">
          <p className="text-sm font-semibold text-slate-600">
            &copy; {currentYear} Walelign Enemayehu. All rights reserved.
          </p>
          <p className="text-sm font-semibold text-slate-600">
            Crafted with care and modern web tools.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;