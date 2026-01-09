import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { GithubIcon } from './GithubIcon';
import { TwitterXIcon } from './TwitterXIcon';
import { useTheme } from '../contexts/ThemeContext';

interface NavbarProps {
  onOpenCommandPalette?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-center pointer-events-none transition-all duration-500 pt-0 sm:pt-4">
      <div 
        className={`
          pointer-events-auto flex items-center justify-between transition-all duration-700 ease-in-out
          ${isScrolled 
            ? 'w-[95%] max-w-5xl rounded-full border border-white/10 bg-black/40 backdrop-blur-2xl px-6 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.5)]' 
            : 'w-full max-w-7xl rounded-none border-b border-white/5 bg-black/0 backdrop-blur-0 px-6 lg:px-12 py-3'
          }
        `}
      >
        {/* Left Side */}
        <div className="flex items-center space-x-4 md:space-x-10">
          <a href="#" className="flex items-center space-x-3 group relative">
            <Logo className={`transition-all duration-500 ${isScrolled ? 'w-5 h-5' : 'w-6 h-6'} text-white group-hover:scale-110 -translate-y-0.5`} />
           <span
  className={`relative font-unique font-extrabold text-white text-2xl capitalize tracking-wide transition-all duration-500 transform ${
    isScrolled ? '-translate-y-1' : '-translate-y-1'
  }`}
>
  Krypton UI
</span>


          </a>
          
          <Link to="/components" className={`hidden lg:block px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 rounded-full transition-all ${isScrolled ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'}`}>
            Components
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search..."
              className="bg-white/5 border border-white/10 rounded-full py-2 px-4 text-sm text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-white/20 w-32 md:w-40"
            />
            <button className="absolute right-2 top-1/2 transform -translate-x-2 -translate-y-2 text-neutral-400 hover:text-white">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Dark/Light Mode Toggle */}
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
            className="p-2 text-neutral-400 hover:text-white transition-colors rounded-lg border border-white/10 hover:border-white/20"
          >
            {theme === 'dark' ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Twitter/X Icon */}
          <a href="https://x.com/SubhanHQ" className="p-2 text-neutral-400 hover:text-white transition-colors rounded-lg border border-white/10 hover:border-white/20">
            <TwitterXIcon className="w-4 h-4" />
          </a>

          {/* GitHub Star Button */}
          <a href="https://github.com/Subhan-code/Krypton-UI" className="flex items-center bg-white text-black px-3 py-1.5 rounded-full">
            <GithubIcon className="w-3.5 h-3.5 mr-2" />
            <span className="text-[10px] font-bold font-mono">14.2k</span>
          </a>
        </div>
      </div>
    </nav>
  );
};