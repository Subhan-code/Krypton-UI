import React from 'react';
import { Logo } from './Logo';

export const SocialProof: React.FC = () => {
  return (
    <div className="py-32">
      {/* Sponsors */}
      <div className="max-w-7xl mx-auto px-4 mb-40">
        <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-neutral-700 text-center mb-20">Backed by Industry Leaders</h4>
        <div className="flex flex-wrap justify-center gap-16 md:gap-32 opacity-30 grayscale hover:opacity-100 transition-all duration-700">
           {['SEQUOIA', 'INDEX', 'BENCHMARK', 'STRIKE', 'ACEL'].map(name => (
             <span key={name} className="font-unique text-2xl font-bold tracking-tighter hover:scale-110 transition-transform cursor-default uppercase">{name}</span>
           ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-12 border border-white/10 bg-white/[0.02] rounded-[3rem] relative hover:bg-white/[0.04] transition-all group">
             <span className="absolute -top-6 -left-2 text-6xl text-white/5 font-unique leading-none group-hover:text-white/10 transition-colors">“</span>
             <p className="text-xl font-medium leading-relaxed mb-10 relative z-10 text-neutral-300">
               Krypton UI is the core of our tech stack. The consistency and speed we've gained is unparalleled.
             </p>
             <div className="flex items-center space-x-4">
               <div className="w-12 h-12 rounded-full bg-neutral-800 border border-white/10" />
               <div>
                 <p className="text-[10px] font-bold uppercase tracking-widest text-white">Sarah Chen</p>
                 <p className="text-[9px] text-neutral-600 uppercase tracking-widest font-bold">VP Engineering, Linear</p>
               </div>
             </div>
          </div>
          <div className="p-12 border border-white/10 bg-white/[0.02] rounded-[3rem] relative hover:bg-white/[0.04] transition-all group">
             <span className="absolute -top-6 -left-2 text-6xl text-white/5 font-unique leading-none group-hover:text-white/10 transition-colors">“</span>
             <p className="text-xl font-medium leading-relaxed mb-10 relative z-10 text-neutral-300">
               We switched our entire design system to Krypton in under a week. It just works seamlessly across all our microservices.
             </p>
             <div className="flex items-center space-x-4">
               <div className="w-12 h-12 rounded-full bg-neutral-800 border border-white/10" />
               <div>
                 <p className="text-[10px] font-bold uppercase tracking-widest text-white">Marcus Aurelius</p>
                 <p className="text-[9px] text-neutral-600 uppercase tracking-widest font-bold">Design Lead, Vercel</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};