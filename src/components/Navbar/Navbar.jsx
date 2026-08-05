import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, Cpu, ChevronDown, Sparkles } from 'lucide-react';

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

  const stackItems = [
    { name: 'Frontend', href: '#skills', icon: Cpu },
    { name: 'Backend', href: '#skills', icon: Briefcase },
  ];

  // Dynamic scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside handler for desktop dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDesktopDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent body scroll while mobile menu is open and prevent horizontal scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    // Always prevent horizontal scroll
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.maxWidth = '100%';
    document.documentElement.style.maxWidth = '100%';
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.overflowX = '';
      document.documentElement.style.overflowX = '';
      document.body.style.maxWidth = '';
      document.documentElement.style.maxWidth = '';
    };
  }, [isOpen]);

  // Close mobile menu on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);
  // Prevent horizontal scroll on mount
  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.maxWidth = '100%';
    document.documentElement.style.maxWidth = '100%';
    
    return () => {
      document.body.style.overflowX = '';
      document.documentElement.style.overflowX = '';
      document.body.style.maxWidth = '';
      document.documentElement.style.maxWidth = '';
    };
  }, []);

  // Active Section Highlighting
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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 overflow-x-hidden ${
        !isScrolled
          ? 'bg-slate-900'
          : 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800'
      }`}
    >
      {/* Main Container with Mobile, Tablet & Desktop padding */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 overflow-x-hidden">
        
        {/* Brand Logo - LEFT */}
        <a href="#" className="flex items-center gap-2 group flex-shrink-0">
          <div className="h-8 w-8 sm:h-10 sm:w-10 md:h-11 md:w-11 rounded-xl bg-white p-1 shadow-sm border border-slate-700 flex items-center justify-center font-outfit text-base sm:text-xl md:text-2xl font-bold text-slate-900 group-hover:border-orange-400 transition-colors">
            W
          </div>
        </a>

        {/* Spacer to push navigation to right */}
        <div className="flex-1 min-w-[8px]"></div>

        {/* Tablet & Desktop Navigation (@media min-width: 768px) */}
        <nav className="hidden md:flex items-center gap-3 lg:gap-6 xl:gap-8 font-semibold">
          <a
            href="#about"
            className={`text-sm lg:text-base tracking-wide transition-colors whitespace-nowrap ${
              activeSection === 'about'
                ? 'text-orange-400'
                : 'text-slate-200 hover:text-orange-400'
            }`}
          >
            About
          </a>

         
          <a
            href="#skills"
            className={`text-sm lg:text-base tracking-wide transition-colors whitespace-nowrap ${
              activeSection === 'skills'
                ? 'text-orange-400'
                : 'text-slate-200 hover:text-orange-400'
            }`}
          >
            Tech Stack
          </a>
          <a
            href="#projects"
            className={`text-sm lg:text-base tracking-wide transition-colors whitespace-nowrap ${
              activeSection === 'projects'
                ? 'text-orange-400'
                : 'text-slate-200 hover:text-orange-400'
            }`}
          >
            Projects
          </a>

          <a
            href="#contact"
            className={`text-sm lg:text-base tracking-wide transition-colors whitespace-nowrap ${
              activeSection === 'contact'
                ? 'text-orange-400'
                : 'text-slate-200 hover:text-orange-400'
            }`}
          >
            Contact
          </a>

          {/* Availability Badge */}
          <div className="flex items-center gap-1.5 lg:gap-2 py-1 px-2.5 lg:px-4 bg-emerald-500/10 border border-emerald-500/20 rounded-full ml-1 lg:ml-2 flex-shrink-0">
            <span className="relative flex h-1.5 w-1.5 lg:h-2 lg:w-2 xl:h-2.5 xl:w-2.5 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 lg:h-2 lg:w-2 xl:h-2.5 xl:w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] lg:text-xs text-emerald-400 font-semibold tracking-wide whitespace-nowrap">
              Available for hire
            </span>
          </div>
        </nav>

        {/* Mobile Hamburger Button (@media max-width: 767px) */}
        <button
          className="md:hidden rounded-xl border border-slate-700 p-2 text-slate-200 hover:text-orange-400 hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400 flex-shrink-0"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          <span className="sr-only">Toggle mobile menu</span>
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${
                isOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            ></span>
            <span
              className={`block h-0.5 w-5 bg-current transition-opacity duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${
                isOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Drawer & Overlay */}
      {isOpen && (
        <>
          {/* Overlay */}
            <div
              className={`md:hidden fixed inset-0 top-[65px] bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
                isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            <div
              id="mobile-navigation"
              className={`md:hidden fixed left-0 right-0 top-[65px] bg-slate-900 border-t border-slate-800 shadow-2xl max-h-[calc(100dvh-70px)] overflow-y-auto overflow-x-hidden z-50 transform transition-transform duration-300 ${
                isOpen ? 'translate-y-0' : '-translate-y-full'
              }`}
            >
            <div className="px-4 sm:px-6 py-4 sm:py-6 space-y-3 sm:space-y-4">
              {/* About Link */}
              <a
                href="#about"
                className={`block text-base sm:text-lg font-medium transition-colors py-2 ${
                  activeSection === 'about'
                    ? 'text-orange-400 font-semibold'
                    : 'text-slate-100 hover:text-orange-400'
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </a>

        <a
                href="#skills"
                className={`block text-base sm:text-lg font-medium transition-colors py-2 ${
                  activeSection === 'skills'
                    ? 'text-orange-400 font-semibold'
                    : 'text-slate-100 hover:text-orange-400'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Tech Stack
              </a>

              {/* Projects Link */}
              <a
                href="#projects"
                className={`block text-base sm:text-lg font-medium transition-colors py-2 ${
                  activeSection === 'projects'
                    ? 'text-orange-400 font-semibold'
                    : 'text-slate-100 hover:text-orange-400'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>

              {/* Contact Link */}
              <a
                href="#contact"
                className={`block text-base sm:text-lg font-medium transition-colors py-2 ${
                  activeSection === 'contact'
                    ? 'text-orange-400 font-semibold'
                    : 'text-slate-100 hover:text-orange-400'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>

              {/* Availability Badge */}
              <div className="pt-2">
                <div className="flex items-center justify-center gap-2 w-full py-2.5 sm:py-3 px-3 sm:px-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                  <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 flex-shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs sm:text-sm text-emerald-400 font-semibold tracking-wide flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles size={12} className="sm:w-[14px] sm:h-[14px] flex-shrink-0" /> Available for hire
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;