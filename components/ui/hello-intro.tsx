"use client";

import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useEffect, useState } from "react";

const drawVariant: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (custom: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        delay: 0.2 + custom * 0.22,
        duration: 1.1,
        ease: "easeInOut",
      },
      opacity: {
        delay: 0.2 + custom * 0.22,
        duration: 0.05,
      },
    },
  }),
};

interface HelloIntroProps {
  onAnimationComplete?: () => void;
}

export const HelloIntro = ({ onAnimationComplete }: HelloIntroProps) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Total animation time: ~1.8s drawing + 0.6s hold
    const timer = setTimeout(() => {
      setShow(false);
      onAnimationComplete?.();
    }, 2400);

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro-curtain"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#07090E]"
        >
          <div className="relative flex flex-col items-center justify-center p-6">
            <svg
              viewBox="0 0 460 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-72 sm:w-96 md:w-md stroke-white"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* 'h' */}
              <motion.path
                d="M 52 142 C 48 115 54 42 70 24 C 77 15 88 18 84 38 C 76 78 68 118 64 140 C 62 148 76 112 90 98 C 104 84 118 88 114 108 C 110 126 106 138 122 138"
                variants={drawVariant}
                initial="hidden"
                animate="visible"
                custom={0}
              />

              {/* 'e' */}
              <motion.path
                d="M 122 138 C 132 138 152 120 162 108 C 172 96 166 84 152 86 C 136 88 130 114 136 130 C 142 144 162 144 180 134"
                variants={drawVariant}
                initial="hidden"
                animate="visible"
                custom={1}
              />

              {/* First 'l' */}
              <motion.path
                d="M 180 134 C 196 122 220 54 228 28 C 234 10 244 14 240 32 C 230 76 218 118 214 138 C 212 146 226 142 238 132"
                variants={drawVariant}
                initial="hidden"
                animate="visible"
                custom={2}
              />

              {/* Second 'l' */}
              <motion.path
                d="M 238 132 C 256 118 280 54 288 28 C 294 10 304 14 300 32 C 290 76 278 118 274 138 C 272 146 286 142 298 130"
                variants={drawVariant}
                initial="hidden"
                animate="visible"
                custom={3}
              />

              {/* 'o' */}
              <motion.path
                d="M 334 94 C 314 94 300 110 302 126 C 304 142 322 146 342 140 C 362 134 368 112 358 98 C 348 86 332 88 334 104 C 336 114 350 116 366 114 C 386 110 404 96 422 84"
                variants={drawVariant}
                initial="hidden"
                animate="visible"
                custom={4}
              />
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HelloIntro;
