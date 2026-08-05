import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, User, Cpu, Mail, Sparkles, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('projects');

  const dropdownRef = useRef(null);

  const mainNavLinks = [
  
    { name: 'About', href: '#about' },
    { name: 'Stack', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];


  // 1. Permanently Fixed Position with dynamic scroll background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Click outside handler for desktop dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDesktopDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 3. Active Section Highlighting via IntersectionObserver
  useEffect(() => {
    const sections = mainNavLinks.map((link) =>
      document.querySelector(link.href)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 shadow-soft ${!isScrolled ? 'bg-slate-900' : 'bg-slate-900/80 backdrop-blur-md'}`}>
      {/* Main Navigation Bar */}
      <div className="transition-all duration-500">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          
          {/* Brand Logo & Title */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="h-12 w-12 rounded-xl bg-white p-1 shadow-sm border border-slate-200 flex items-center justify-center font-outfit text-2xl font-bold text-slate-900 group-hover:border-orange-400 transition-colors">
              W<span className="text-orange-400"></span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 font-extrabold text-slate-900 ml-auto">
           
            <a
              href="#about"
              className={`text-base font-semibold tracking-wide transition-colors ${
                activeSection === 'about' ? 'text-orange-400' : 'text-slate-600 hover:text-orange-400'
              }`}
              onClick={() => setIsOpen(false)}
            >
              About
            </a>

            {/* Stack Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                className={`text-base font-semibold tracking-wide transition-colors flex items-center gap-1.5 ${
                  isDesktopDropdownOpen || activeSection === 'skills' ? 'text-orange-400' : 'text-slate-600 hover:text-orange-400'
                }`}
                onClick={() => setIsDesktopDropdownOpen(!isDesktopDropdownOpen)}
                onMouseEnter={() => setIsDesktopDropdownOpen(true)}
              >
                Tech Stack
              </button>
            </div>
            <a
              href="#projects"
              className={`text-base font-semibold tracking-wide transition-colors ${
                activeSection === 'projects' ? 'text-orange-400' : 'text-slate-600 hover:text-orange-400'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>

            <a
              href="#contact"
              className={`text-base font-semibold tracking-wide transition-colors ${
                activeSection === 'contact' ? 'text-orange-400' : 'text-slate-600 hover:text-orange-400'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>

            {/* Availability Badge */}
            <div className="flex items-center gap-2 py-1.5 px-4 bg-emerald-500/10 border border-emerald-500/20 rounded-full ml-4">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs text-emerald-600 font-semibold tracking-wide">
                Available for hire
              </span>
            </div>
          </nav>

          {/* Mobile Animated Hamburger Button */}
          <button
            className="lg:hidden rounded-full border border-slate-200 p-3 text-slate-700 hover:bg-slate-200/50 transition-colors ml-auto"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            <span className="sr-only">Toggle mobile menu</span>
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${isOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-current transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${isOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-lg max-h-[calc(100vh-70px)] overflow-y-auto">
            <div className="px-6 py-4 space-y-4">
              <a
                href="#projects"
                className={`block text-lg font-semibold ${activeSection === 'projects' ? 'text-orange-400' : 'text-slate-800 hover:text-orange-400'}`}
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>

              <a
                href="#about"
                className={`block text-lg font-semibold ${activeSection === 'about' ? 'text-orange-400' : 'text-slate-800 hover:text-orange-400'}`}
                onClick={() => setIsOpen(false)}
              >
                About
              </a>

              {/* Mobile Stack Accordion Dropdown */}
              <div className="pb-2">
                <button
                  className={`flex items-center justify-between w-full text-lg font-semibold ${activeSection === 'skills' ? 'text-orange-400' : 'text-slate-800 hover:text-orange-400'}`}
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                >
                  Tech Stack
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${isMobileDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isMobileDropdownOpen && (
                  <div className="mt-2 pl-4 space-y-3">
                    {stackMenuItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="block text-base text-slate-600 hover:text-orange-400 transition-colors"
                        onClick={() => {
                          setIsOpen(false);
                          setIsMobileDropdownOpen(false);
                        }}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="#contact"
                className={`block text-lg font-semibold ${activeSection === 'contact' ? 'text-orange-400' : 'text-slate-800 hover:text-orange-400'}`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>

              {/* Mobile Availability Badge */}
              <div className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl mt-4">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-sm text-emerald-600 font-semibold tracking-wide flex items-center gap-1.5">
                  <Sparkles size={14} /> Available for hire
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;