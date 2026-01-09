import React from "react";

export const FinalCTA: React.FC = () => {
  return (
    <section className="bg-black relative overflow-hidden">
      <div className="max-w-6xl max-h-[55dvh] mx-auto">
        <div className="relative overflow-hidden rounded-[2.5rem] px-8 py-14 md:px-16 md:py-16 text-center">

          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-700 via-purple-600 to-violet-500" />

          {/* Noise overlay */}
          <div
            className="absolute inset-0 opacity-[0.12] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: `
                url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.45'/%3E%3C/svg%3E")
              `,
            }}
          />

          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Got a dream project?
            </h2>

            <p className="text-white/85 text-lg md:text-xl font-medium mb-8">
              Let&apos;s turn it into reality and build a standout brand.
            </p>

            <button className="bg-white text-black px-10 py-4 rounded-full text-base font-bold hover:scale-[1.03] active:scale-95 transition-all shadow-xl">
              Let&apos;s talk
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};
