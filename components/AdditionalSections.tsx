import React from 'react';

export const AdditionalSections: React.FC = () => {
  return (
    <>
      <section className="py-44 border-b border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div>
            <div className="w-12 h-1 bg-white mb-10" />
            <h2 className="font-unique text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.85] mb-10">
              A New Era of<br /><span className="text-neutral-600 italic">Engineering.</span>
            </h2>
            <p className="text-neutral-500 text-xl font-medium mb-12 max-w-lg leading-relaxed">
              We've abstracted the complexity of the modern stack into a set of primitives that feel like magic. Typed, tested, and high-performance.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {['Auto-generated Docs', 'Global Edge', 'Strictly Typed', 'Sub-ms Sync'].map(item => (
                <div key={item} className="flex items-center space-x-4 border-l-2 border-white/5 pl-4 py-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-white/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative aspect-[4/3] bg-black border border-white/10 shadow-2xl flex flex-col">
               <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02]">
                  <div className="flex space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
                    <div className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
                    <div className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
                  </div>
                  <span className="text-[9px] font-mono text-neutral-600 uppercase tracking-widest">Krypton_Engine.ts</span>
               </div>
               <div className="flex-1 p-10 font-mono text-xs leading-relaxed overflow-hidden">
                  <p className="text-neutral-600 italic mb-4">// System Initialization</p>
                  <p><span className="text-white">import</span> &#123; <span className="text-neutral-400">Collaborative</span>, <span className="text-neutral-400">Scale</span> &#125; <span className="text-white">from</span> <span className="text-white">'@krypton/core'</span>;</p>
                  <p className="mt-6"><span className="text-white">const</span> <span className="text-neutral-400">system</span> = <span className="text-white">new</span> <span className="text-neutral-400">Krypton</span>(&#123;</p>
                  <p className="pl-6 text-neutral-500">layer: <span className="text-white">'obsidian'</span>,</p>
                  <p className="pl-6 text-neutral-500">latency: <span className="text-white">0.05ms</span>,</p>
                  <p className="pl-6 text-neutral-500">autoSync: <span className="text-white">true</span></p>
                  <p>&#125;);</p>
                  <p className="mt-8"><span className="text-neutral-400">system</span>.deploy();</p>
                  <div className="mt-12 p-4 bg-white/5 border-l-2 border-white text-[10px] text-white animate-pulse">
                     DEPLOYMENT_READY: Cluster Active
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-44 border-b border-white/10 bg-black relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-unique text-7xl md:text-9xl font-bold uppercase tracking-tighter leading-none mb-32 opacity-20">
            Performance.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
             {[
               { label: 'Latency', val: '12ms', desc: 'Avg Global' },
               { label: 'Uptime', val: '99.9', desc: 'SLA Guaranteed' },
               { label: 'Bundle', val: '1.4k', desc: 'Gzipped Size' },
               { label: 'Audit', val: '100', desc: 'Accessibility' }
             ].map(stat => (
               <div key={stat.label} className="flex flex-col items-center group">
                 <div className="w-px h-16 bg-white/10 mb-8 group-hover:h-24 transition-all duration-700" />
                 <span className="font-unique text-7xl font-bold mb-4 tracking-tighter">{stat.val}</span>
                 <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-500 mb-2">{stat.label}</span>
                 <span className="text-[9px] font-medium text-neutral-800 uppercase tracking-widest">{stat.desc}</span>
               </div>
             ))}
          </div>
        </div>
      </section>
    </>
  );
};