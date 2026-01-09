import React from 'react';

export const Sponsors: React.FC = () => {
  const sponsorsText = {
    prime: [
      'GOOGLE', 'MICROSOFT', 'OPENAI', 'VERCEL'
    ],
    core: [
      'AMAZON', 'APPLE', 'META', 'CLOUDFLARE', 'NETLIFY'
    ],
    signal: [
      'NETFLIX', 'ADOBE', 'SPOTIFY', 'AIRBNB',
      'FIGMA', 'LINEAR', 'NOTION', 'SUPABASE'
    ],
  };

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-3">
          Sponsors
        </h2>
        <p className="text-center text-neutral-500 text-sm mb-14">
          Backing the systems behind Krypton UI
        </p>

        {/* PRIME */}
        <div className="mb-12">
          <p className="text-xs tracking-widest text-center text-purple-400 mb-5">
            KRYPTON PRIME
          </p>

          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-[60%]">
              {sponsorsText.prime.map((s, i) => (
                <div
                  key={i}
                  className="h-20 rounded-xl
                  bg-neutral-900 border border-white/10
                  flex items-center justify-center
                  transition hover:border-purple-400/40 hover:scale-[1.02]"
                >
                  <span className="text-lg font-bold text-white tracking-tight">
                    {s}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CORE */}
        <div className="mb-12">
          <p className="text-xs tracking-widest text-center text-blue-400 mb-5">
            KRYPTON CORE
          </p>

          <div className="flex justify-center">
            <div className="grid grid-cols-3 md:grid-cols-5 gap-5 w-[60%]">
              {sponsorsText.core.map((s, i) => (
                <div
                  key={i}
                  className="h-16 rounded-lg
                  bg-neutral-900 border border-white/10
                  flex items-center justify-center
                  transition hover:border-blue-400/40"
                >
                  <span className="text-base font-semibold text-white">
                    {s}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SIGNAL */}
        <div>
          <p className="text-xs tracking-widest text-center text-cyan-400 mb-5">
            KRYPTON SIGNAL
          </p>

          <div className="flex justify-center">
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4 w-[60%] opacity-85">
              {sponsorsText.signal.map((s, i) => (
                <div
                  key={i}
                  className="h-14 rounded-md
                  bg-neutral-900 border border-white/5
                  flex items-center justify-center
                  transition hover:opacity-100"
                >
                  <span className="text-sm font-medium text-white">
                    {s}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
