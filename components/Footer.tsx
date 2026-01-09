import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black text-white w-full min-h-[600px] overflow-hidden">

      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-20">

        {/* TOP GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-16 mb-32">

          {/* BRAND */}
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <Logo className="w-8 h-8 text-white" />
              <span className="font-unique text-2xl font-bold tracking-tighter uppercase">
                Krypton UI
              </span>
            </div>

            <p className="text-neutral-500 font-medium max-w-sm leading-relaxed mb-10">
              Engineering the foundation for the next generation of digital excellence.
              Built in the dark, optimized for the light.
            </p>

            <div className="flex space-x-8">
              {['X', 'GITHUB', 'DISCORD', 'LINKEDIN'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-600 hover:text-white transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
<div className="lg:col-start-4">
  <h5 className="footer-heading">Quick Links</h5>
  <ul className="footer-links text-white/50">
    <li><a href="#" className="footer-link">Home</a></li>
    <li><a href="#" className="footer-link">Components</a></li>
    <li><a href="#" className="footer-link">Sponsors</a></li>
    <li>
      <a
        href="https://github.com/subhan-code/krypton"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
        GitHub
      </a>
    </li>
  </ul>
</div>

{/* RESOURCES */}
<div>
  <h5 className="footer-heading">Resources</h5>
  <ul className="footer-links text-white/50">
    <li><a href="#" className="hover:text-white">Guides</a></li>
    <li><a href="#" className="hover:text-white">Resources</a></li>
    <li><a href="#" className="hover:text-white">Inspirations</a></li>
    <li><a href="#" className="hover:text-white">Tutorials</a></li>
  </ul>
</div>

{/* ECOSYSTEM */}
<div>
  <h5 className="footer-heading">Ecosystem</h5>
  <ul className="footer-links text-white/50">
    <li><a href="#" className="hover:text-white">Blog</a></li>
    <li><a href="#" className="hover:text-white">Showcase</a></li>
    <li><a href="#" className="hover:text-white">Changelog</a></li>
    <li><a href="#" className="hover:text-white">Contact</a></li>
  </ul>
</div>

        </div>

        {/* BOTTOM META */}
        <div className="border-t border-white/5 pt-16 pb-32">
          <div className="flex flex-col space-y-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
            <p>
              Built with ❤️ by{' '}
              <a
                href="https://x.com/subhanhq"
                target="_blank"
                className="hover:text-white transition-colors underline hover:text-white font-bolder"
              >
                Syed Subhan
              </a>
            </p>

            

            <p>
              The source code is available on{' '}
              <a
                href="https://github.com/subhan-code/krypton"
                target="_blank"
                className="underline hover:text-white"
              >
                GitHub
              </a>.
            </p>
            <p>© {new Date().getFullYear()} KRYPTON UI.</p>
          </div>
        </div>
      </div>

      {/* WATERMARK */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none select-none">
        <h1 className="text-[18vw] font-serif-elegant font-extrabold leading-none tracking-tighter text-white/5 whitespace-nowrap">
          Krypton UI
        </h1>
      </div>
    </footer>
  );
};
