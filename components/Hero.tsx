import React from 'react';
import { GithubIcon } from './GithubIcon';
import { TwitterXIcon } from './TwitterXIcon';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100vh] bg-black overflow-hidden px-6">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,transparent_70%)] pointer-events-none" />

      {/* Top content */}
      <div className="pt-32 text-center flex flex-col items-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-1.5 mb-6 text-[10px] font-bold  tracking-[0.25em] border border-white/10 rounded-full bg-white/5 backdrop-blur-md">
          <span className="text-white">v2.4.0 Obsidian Architecture</span>
        </div>

        {/* Heading */}
        <h1 className="font-unique text-5xl md:text-[64px] font-bold tracking-normal leading-[1.1] capitalized mb-8">
          <span className="block">Build Better Interfaces</span>
          <span className="block mt-2">Get Inspired</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mb-12 leading-[1.6] font-medium">
            Carefully curated UI components and interactions<br />
            Drawn from the best creative ideas across the web.
        </p>

        {/* CTA */}
        <div className="flex gap-6 mb-12">
          <button className="group px-8 py-2.5 bg-white text-black font-unique text-sm font-bold uppercase tracking-widest rounded-lg hover:bg-neutral-200 transition-all shadow-[0_20px_50px_-15px_rgba(255,255,255,0.25)]">
            Explore Library
            <svg className="w-4 h-4 ml-2 inline-block group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

          <button className="px-8 py-2.5 bg-transparent border border-white/20 text-white font-unique text-sm font-bold uppercase tracking-widest rounded-lg hover:bg-white/10 transition-all">
            View Demo
          </button>
        </div>
      </div>

      {/* Hero Image (FULL WIDTH VISUAL) */}
      <div className="relative w-full max-w-[1200px] mx-auto px-4">

        <img
  src="/image.png"
  alt="Krypton UI showcase"
  className="w-full h-auto object-cover rounded-2xl shadow-2xl"
/>

      </div>

      
    </section>
  );
};
