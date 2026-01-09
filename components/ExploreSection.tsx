"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import ReactLenis from "lenis/react";
import { useRef } from "react";

const projects = [
  { title: "Project 1", src: "/Animecons - Made with Clipchamp.mp4" },
  { title: "Project 2", src: "/Screenshot (479).png" },
  { title: "Project 3", src: "/Screenshot (482).png" },
  { title: "Project 4", src: "/Screenshot (480).jpg" },
  { title: "Project 5", src: "/Screenshot 2025-12-09 163200.png" },
];

const StickyCard_001 = ({
  i,
  title,
  src,
  progress,
  range,
  targetScale,
}: {
  i: number;
  title: string;
  src: string;
  progress: any;
  range: [number, number];
  targetScale: number;
}) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky top-0 flex items-center justify-center h-screen">
      <motion.div
        style={{
          scale,
          top: `${i * 36}px`,
        }}
        className="relative flex h-[720px] w-[1280px] overflow-hidden rounded-3xl bg-black"
      >
        {src.endsWith(".mp4") ? (
          <video
            src={src}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
        ) : (
          <img
            src={src}
            alt={title}
            className="h-full w-full object-cover"
          />
        )}
      </motion.div>
    </div>
  );
};

const ExploreSection = () => {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <main
        ref={container}
        className="relative w-full flex flex-col items-center pt-[12vh] pb-[24vh]"
      >
        {projects.map((project, i) => {
          const targetScale = Math.max(
            0.6,
            1 - (projects.length - i - 1) * 0.08
          );

          return (
            <StickyCard_001
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.18, 1]}
              targetScale={targetScale}
            />
          );
        })}

        <div className="mt-24 flex justify-center">
          <button className="bg-white text-black px-10 py-4 rounded-full font-medium transition-transform duration-300 hover:scale-105">
            See More Components
          </button>
        </div>
      </main>
    </ReactLenis>
  );
};

export { ExploreSection };
