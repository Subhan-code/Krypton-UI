import React from 'react';
import { Logo } from './Logo';

export const Marquee: React.FC = () => {
  const brands = ["LINEAR", "VERCEL", "GITHUB", "STRIKE", "AIRBNB", "REPLICATE", "SCALE", "NOTION"];
  
  return (
    <div className="py-24 bg-black border-y border-white/5 relative overflow-hidden mask-edge">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center space-x-32 px-16">
            {brands.map((brand) => (
              <div key={brand} className="flex items-center space-x-6 opacity-20 hover:opacity-100 transition-all duration-500 cursor-default group">
                <Logo className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                <span className="font-unique text-3xl font-bold tracking-tighter uppercase">{brand}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};