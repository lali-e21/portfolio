import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Stack', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 flex items-center ${isScrolled ? 'h-[70px] rounded-none border-x-0 border-t-0 glass-panel' : 'h-[80px]'}`}>
      <div className="container flex justify-between items-center w-full">
        <a href="#" className="font-outfit text-2xl font-bold tracking-tight max-[480px]:text-xl">
          W<span className="text-gradient">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="flex items-center gap-8 max-md:hidden">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="font-medium text-text-secondary relative hover:text-text-primary after:content-[''] after:absolute after:w-0 after:h-[2px] after:-bottom-1 after:left-0 after:bg-gradient-primary after:transition-[width] after:duration-300 hover:after:w-full">{link.name}</a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 py-2 px-4 bg-emerald-500/10 border border-emerald-500/20 rounded-full ml-4 max-[480px]:hidden">
            <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_#10B981] animate-[pulse-glow_2s_infinite]"></span>
            <span className="text-sm text-emerald-500 font-medium">Available for hire</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="hidden bg-transparent border-none text-text-primary cursor-pointer max-md:block" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-[80px] left-1/2 -translate-x-1/2 w-[90%] max-[480px]:w-[95%] p-8 max-[480px]:p-6 flex flex-col items-center opacity-0 invisible transition-all duration-400 ease-out glass-panel shadow-2xl shadow-black/50 ${isMobileMenuOpen ? '!translate-y-0 !opacity-100 !visible' : '-translate-y-[150%]'}`}>
        <ul className="flex flex-col items-center gap-6 text-xl max-[480px]:text-lg font-medium w-full">
          {navLinks.map((link) => (
            <li key={link.name} className="w-full text-center">
              <a href={link.href} className="block w-full py-2 hover:text-emerald-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{link.name}</a>
            </li>
          ))}
        </ul>
        
        <div className="flex items-center gap-2 mt-8 py-2 px-6 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
          <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_#10B981] animate-[pulse-glow_2s_infinite]"></span>
          <span className="text-sm text-emerald-500 font-medium">Available for hire</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
