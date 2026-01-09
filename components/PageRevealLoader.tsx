"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type TypewriterSequence = {
  text: string;
  deleteAfter?: boolean;
  pauseAfter?: number;
};

type TypewriterTitleProps = {
  sequences?: TypewriterSequence[];
  typingSpeed?: number;
  startDelay?: number;
  autoLoop?: boolean;
  loopDelay?: number;
  deleteSpeed?: number;
  pauseBeforeDelete?: number;
  naturalVariance?: boolean;
};

const DEFAULT_SEQUENCES: TypewriterSequence[] = [
  { text: "Krypton UI", deleteAfter: false }, // Just type Krypton UI and stay
];

const container: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0.5 } }
};

export const PageRevealLoader = ({ onComplete }: { onComplete?: () => void }) => {
  const [done, setDone] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const sequenceIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize with the sequences provided
  const sequencesRef = useRef(DEFAULT_SEQUENCES);

  useEffect(() => {
    const getTypingDelay = () => {
      const typingSpeed = 50; // Set a faster typing speed for the loader
      const naturalVariance = true;
      
      if (!naturalVariance) {
        return typingSpeed;
      }

      // More natural human typing pattern
      const random = Math.random();

      // 10% chance of a longer pause (thinking/hesitation)
      if (random < 0.1) {
        return typingSpeed * 2;
      }

      // 10% chance of a burst (fast typing)
      if (random > 0.9) {
        return typingSpeed * 0.5;
      }

      // Standard variance (+/- 40%)
      const variance = 0.4;
      const min = typingSpeed * (1 - variance);
      const max = typingSpeed * (1 + variance);
      return Math.random() * (max - min) + min;
    };

    const runTypewriter = () => {
      const currentSequence = sequencesRef.current[sequenceIndexRef.current];
      if (!currentSequence) {
        return;
      }

      if (isDeletingRef.current) {
        if (charIndexRef.current > 0) {
          charIndexRef.current -= 1;
          setDisplayText(currentSequence.text.slice(0, charIndexRef.current));
          timeoutRef.current = setTimeout(runTypewriter, 30); // deleteSpeed
        } else {
          isDeletingRef.current = false;
          // Since deleteAfter is false, we complete the animation
          setDone(true);
          if (onComplete) onComplete();
        }
      } else if (charIndexRef.current < currentSequence.text.length) {
        charIndexRef.current += 1;
        setDisplayText(currentSequence.text.slice(0, charIndexRef.current));
        timeoutRef.current = setTimeout(runTypewriter, getTypingDelay());
      } else {
        // Text is fully typed, since deleteAfter is false, we complete
        setTimeout(() => {
          setDone(true);
          if (onComplete) onComplete();
        }, 500); // Small delay after typing completes
      }
    };

    // Start the typewriter
    timeoutRef.current = setTimeout(runTypewriter, 200); // startDelay

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={container}
          style={{ pointerEvents: 'all' }}
        >
          <div className="relative w-full max-w-4xl py-24">
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
              <motion.div
                animate={{ opacity: 1 }}
                className="flex items-center gap-1 font-mono text-7xl md:text-9xl font-bold text-white tracking-tight"
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block min-h-[1.2em] min-w-[0.5em]">
                  {displayText}
                </span>
                <motion.span
                  animate={{
                    opacity: [1, 1, 0, 0],
                  }}
                  className="inline-block h-[1em] w-[3px] bg-white"
                  transition={{
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    ease: "linear",
                  }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};