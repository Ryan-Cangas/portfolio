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
        delay: 0.15 + custom * 0.18,
        duration: 0.85,
        ease: "easeInOut",
      },
      opacity: {
        delay: 0.15 + custom * 0.18,
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
    const timer = setTimeout(() => {
      setShow(false);
      onAnimationComplete?.();
    }, 2800);

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro-curtain"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#07090E]"
        >
          <div className="relative flex flex-col items-center justify-center p-6 w-full max-w-6xl">
            <svg
              viewBox="0 0 1140 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-5xl stroke-white drop-shadow-[0_0_18px_rgba(255,255,255,0.2)]"
              strokeWidth="11"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* --- HELLO --- */}
              {/* 'h' */}
              <motion.path
                d="M 50 162 C 78 144 116 100 120 48 C 122 28 108 24 96 44 C 80 72 68 124 64 172 C 60 178 72 142 88 120 C 104 98 124 96 130 114 C 136 134 126 168 142 168"
                variants={drawVariant}
                initial="hidden"
                animate="visible"
                custom={0}
              />

              {/* 'e' */}
              <motion.path
                d="M 142 168 C 158 168 184 148 196 128 C 206 112 198 94 182 96 C 160 98 148 132 156 156 C 164 174 188 174 210 160"
                variants={drawVariant}
                initial="hidden"
                animate="visible"
                custom={1}
              />

              {/* First 'l' */}
              <motion.path
                d="M 210 160 C 232 144 266 54 274 28 C 280 10 268 14 256 38 C 240 70 228 130 224 168 C 222 178 236 172 254 156"
                variants={drawVariant}
                initial="hidden"
                animate="visible"
                custom={2}
              />

              {/* Second 'l' */}
              <motion.path
                d="M 254 156 C 276 140 310 54 318 28 C 324 10 312 14 300 38 C 284 70 272 130 268 168 C 266 178 280 174 298 156"
                variants={drawVariant}
                initial="hidden"
                animate="visible"
                custom={3}
              />

              {/* 'o' */}
              <motion.path
                d="M 344 108 C 320 108 302 128 304 150 C 306 172 328 176 352 168 C 376 160 384 130 368 112 C 352 94 332 98 336 120 C 340 134 360 132 382 122"
                variants={drawVariant}
                initial="hidden"
                animate="visible"
                custom={4}
              />

              {/* --- WORLD (Widened & Spaced) --- */}
              {/* 'w' */}
              <motion.path
                d="M 450 110 C 454 142 468 172 486 170 C 504 168 520 136 528 110 C 532 138 546 172 564 170 C 582 168 596 132 602 108 C 602 126 618 126 632 120"
                variants={drawVariant}
                initial="hidden"
                animate="visible"
                custom={5}
              />

              {/* 'o' */}
              <motion.path
                d="M 680 108 C 656 108 638 128 640 150 C 642 172 664 176 688 168 C 712 160 720 130 704 112 C 688 94 668 98 672 120 C 676 134 696 132 724 122"
                variants={drawVariant}
                initial="hidden"
                animate="visible"
                custom={6}
              />

              {/* 'r' (Moved to 736) */}
              <motion.path
                d="M 736 168 L 744 108 C 758 104 778 100 790 108 C 798 114 792 126 778 130 C 766 134 758 146 760 168"
                variants={drawVariant}
                initial="hidden"
                animate="visible"
                custom={7}
              />

              {/* 'l' (Shifted to 810 with clear gap from 'r') */}
              <motion.path
                d="M 788 152 C 812 136 846 54 854 28 C 860 10 848 14 836 38 C 820 70 808 130 804 168 C 802 178 816 174 836 154"
                variants={drawVariant}
                initial="hidden"
                animate="visible"
                custom={8}
              />

              {/* 'd' (Shifted to 890 with terminal tail) */}
              <motion.path
                d="M 890 108 C 866 108 848 128 850 150 C 852 172 874 176 898 168 C 906 164 912 154 916 140 L 934 28 C 940 10 928 14 916 38 L 904 168 C 908 178 928 170 950 148"
                variants={drawVariant}
                initial="hidden"
                animate="visible"
                custom={9}
              />
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HelloIntro;
