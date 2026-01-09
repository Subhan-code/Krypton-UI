
import React, { useState } from 'react';

const avatars = [
  'https://picsum.photos/seed/krypton1/40/40?grayscale',
  'https://picsum.photos/seed/krypton2/40/40?grayscale',
  'https://picsum.photos/seed/krypton3/40/40?grayscale',
  'https://picsum.photos/seed/krypton4/40/40?grayscale',
];

export const AppPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Workspace');
  const tabs = ['Workspace', 'Analytics', 'Settings', 'Library'];

  return (
    <div className="relative rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden shadow-[0_20px_100px_rgba(0,0,0,1)]">
      {/* Background Glow Effect - Neutral */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/5 blur-[100px] rounded-full"></div>
      </div>

      {/* Header UI */}
      <div className="relative z-10 flex flex-col md:flex-row border-b border-white/5">
        {/* Fake Window Controls */}
        <div className="flex items-center px-6 space-x-2 py-4 border-r border-white/5">
          <div className="w-3 h-3 rounded-full bg-neutral-800"></div>
          <div className="w-3 h-3 rounded-full bg-neutral-800"></div>
          <div className="w-3 h-3 rounded-full bg-neutral-800"></div>
        </div>

        {/* Tab Selection */}
        <div className="flex-1 flex overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center px-8 py-4 text-sm font-medium transition-all border-r border-white/5 whitespace-nowrap ${
                activeTab === tab 
                ? 'bg-[#141414] text-white' 
                : 'text-neutral-500 hover:text-neutral-300 hover:bg-white/5'
              }`}
            >
              <div className={`w-2 h-2 rounded-full mr-3 ${activeTab === tab ? 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]' : 'bg-transparent border border-neutral-700'}`}></div>
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content UI */}
      <div className="relative z-10 flex min-h-[500px]">
        {/* Sidebar */}
        <div className="w-64 border-r border-white/5 p-6 flex flex-col bg-[#050505]">
          <div className="flex items-center space-x-3 mb-10">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                <div className="w-4 h-4 rounded-sm bg-black rotate-45"></div>
            </div>
            <span className="font-semibold text-white tracking-tight">Krypton Admin</span>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="h-1.5 w-12 bg-neutral-800 rounded opacity-50"></div>
              <div className="h-2.5 w-full bg-neutral-900 rounded"></div>
              <div className="h-2.5 w-4/5 bg-neutral-900 rounded"></div>
              <div className="h-2.5 w-3/4 bg-neutral-900 rounded"></div>
            </div>
            
            <div className="space-y-3 pt-4 border-t border-white/5">
              <div className="h-1.5 w-16 bg-neutral-800 rounded opacity-50"></div>
              <div className="h-2.5 w-full bg-neutral-900 rounded"></div>
            </div>
          </div>

          <div className="mt-auto space-y-4">
             <div className="h-10 w-full bg-white/5 border border-white/10 rounded-lg flex items-center px-3">
                <div className="w-4 h-4 rounded-full bg-white/20 animate-pulse"></div>
                <div className="ml-2 h-2 w-16 bg-white/10 rounded"></div>
             </div>
          </div>
        </div>

        {/* Main Editor Space */}
        <div className="flex-1 p-10 relative bg-[#080808]">
          <div className="max-w-3xl">
            <div className="h-6 w-64 bg-neutral-800 rounded-lg mb-10"></div>
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="h-32 bg-neutral-900/50 border border-white/5 rounded-xl"></div>
              <div className="h-32 bg-neutral-900/50 border border-white/5 rounded-xl"></div>
            </div>
            <div className="space-y-4">
              <div className="h-2.5 w-full bg-neutral-900/80 rounded"></div>
              <div className="h-2.5 w-full bg-neutral-900/80 rounded"></div>
              <div className="h-2.5 w-2/3 bg-neutral-900/80 rounded"></div>
            </div>
          </div>

          {/* Avatars Stack Decoration */}
          <div className="absolute bottom-12 right-12 flex items-center">
             <div className="flex flex-col items-end mr-6 opacity-80">
                <span className="handwritten text-lg text-white mb-1">Presence layer</span>
                <svg width="60" height="20" viewBox="0 0 60 20" fill="none" className="text-white/10">
                  <path d="M5 15C20 15 40 10 55 5M55 5L45 5M55 5L55 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
             </div>
             <div className="flex -space-x-3">
               <div className="w-10 h-10 rounded-full border-2 border-[#0A0A0A] bg-white flex items-center justify-center z-40 shadow-lg">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
               </div>
               {avatars.map((url, i) => (
                 <img 
                   key={i} 
                   src={url} 
                   className="w-10 h-10 rounded-full border-2 border-[#0A0A0A] object-cover hover:translate-y-[-4px] transition-transform cursor-pointer grayscale" 
                   style={{ zIndex: 30 - i }}
                   alt="Team Member"
                 />
               ))}
             </div>
          </div>

          {/* Cursor UI Element */}
          <div className="absolute top-[45%] left-[40%] z-20 hover:scale-110 transition-transform cursor-default">
             <div className="flex items-center">
                <svg className="w-5 h-5 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2l12 11.2l-5.8 0.8l4 6.6l-2.8 1.6l-4.2-6.8L7 19.4V2z" />
                </svg>
                <div className="ml-1 bg-white px-2.5 py-1 rounded-full text-[10px] font-bold text-black shadow-[0_4px_12px_rgba(0,0,0,0.5)] whitespace-nowrap">
                  Alex (Lead)
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
