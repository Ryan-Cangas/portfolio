"use client";

import { motion } from "framer-motion";
import { Cloud, ShieldCheck, Terminal, Cpu } from "lucide-react";

interface FloatingItem {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  top: string;
  left: string;
  delay: number;
  duration: number;
  size: number;
}

const particles: FloatingItem[] = [
  { Icon: Cloud, top: "12%", left: "10%", delay: 0, duration: 8, size: 48 },
  {
    Icon: ShieldCheck,
    top: "22%",
    left: "82%",
    delay: 1,
    duration: 10,
    size: 40,
  },
  { Icon: Cloud, top: "55%", left: "78%", delay: 2, duration: 9, size: 56 },
  {
    Icon: Terminal,
    top: "68%",
    left: "12%",
    delay: 0.5,
    duration: 11,
    size: 36,
  },
  { Icon: Cloud, top: "85%", left: "60%", delay: 1.5, duration: 8.5, size: 44 },
  { Icon: Cpu, top: "40%", left: "8%", delay: 2.5, duration: 9.5, size: 32 },
];

export const CloudBackgroundEffect = () => {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden opacity-25 z-0">
      {particles.map(({ Icon, top, left, delay, duration, size }, index) => (
        <motion.div
          key={index}
          className="absolute text-cyan-400/70 drop-shadow-[0_0_12px_rgba(6,182,212,0.4)]"
          style={{ top, left }}
          animate={{
            y: [0, -22, 0],
            x: [0, 14, 0],
            opacity: [0.35, 0.75, 0.35],
          }}
          transition={{
            duration,
            repeat: Infinity,
            delay,
            ease: "easeInOut",
          }}
        >
          <Icon size={size} />
        </motion.div>
      ))}
    </div>
  );
};

export default CloudBackgroundEffect;
