"use client";

import { motion, type Variants } from "framer-motion";

const drawVariant: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (custom: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        delay: custom * 0.25,
        duration: 1.2,
        ease: "easeInOut",
      },
      opacity: {
        delay: custom * 0.25,
        duration: 0.1,
      },
    },
  }),
};

export const HelloSignature = () => {
  return (
    <div className="flex flex-col items-center justify-center py-4">
      <svg
        viewBox="0 0 460 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-64 md:w-80 stroke-white"
        strokeWidth="9"
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

        {/* 'o' with terminal tail */}
        <motion.path
          d="M 334 94 C 314 94 300 110 302 126 C 304 142 322 146 342 140 C 362 134 368 112 358 98 C 348 86 332 88 334 104 C 336 114 350 116 366 114 C 386 110 404 96 422 84"
          variants={drawVariant}
          initial="hidden"
          animate="visible"
          custom={4}
        />
      </svg>
    </div>
  );
};

export default HelloSignature;
