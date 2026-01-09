import React, { useRef, useEffect } from 'react';

export const GridSection: React.FC = () => {
  const features = [
    { title: "Authentication", desc: "Passkeys and OAuth ready. Secure by default." },
    { title: "Collaboration", desc: "Live cursors, real-time presence and presence layers." },
    { title: "Infrastructure", desc: "Global edge network with multi-region replication." },
    { title: "Performance", desc: "Optimized for sub-100ms interaction latency." },
    { title: "Analytics", desc: "Visualize every interaction in high fidelity." },
    { title: "Compliance", desc: "SOC2 Type II, GDPR and HIPAA ready out of box." }
  ];

  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!gridRef.current) return;
      const cards = gridRef.current.getElementsByClassName('spotlight-card');
      for (const card of cards as HTMLCollectionOf<HTMLElement>) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="components" className="py-32 max-w-7xl mx-auto px-6">
      <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
        <h2 className="font-unique text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-none">
          Modular by design.<br />Atomic in power.
        </h2>
        <p className="text-neutral-500 max-w-sm font-medium">
          Six core systems that handle the heavy lifting of modern product development.
        </p>
      </div>
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f, i) => (
          <div key={i} className="bg-white/[0.03] p-16 spotlight-card group border border-white/5 rounded-[2.5rem] transition-all duration-700 hover:bg-white/[0.05] hover:border-white/10">
            <span className="text-neutral-700 text-[10px] font-black uppercase tracking-[0.4em] mb-12 block group-hover:text-white transition-colors">
              SYSTEM 0{i+1}
            </span>
            <h3 className="font-unique text-4xl font-bold mb-6 uppercase tracking-tighter group-hover:translate-x-2 transition-transform duration-500">
              {f.title}
            </h3>
            <p className="text-neutral-500 font-medium leading-relaxed group-hover:text-neutral-300 transition-colors">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};