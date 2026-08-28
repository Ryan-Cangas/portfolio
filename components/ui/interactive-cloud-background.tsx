"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { Cloud, Server, Gauge, ShieldCheck, Terminal, Cpu } from "lucide-react";

interface CloudParticle {
  id: number;
  Icon?: React.ComponentType<{ size?: number; className?: string }>;
  isCloudSvg?: boolean;
  x: number; // base percentage (0-100)
  y: number; // base percentage (0-100)
  size: number;
  depth: number; // parallax factor
  duration: number;
}

const particles: CloudParticle[] = [
  { id: 1, isCloudSvg: true, x: 12, y: 15, size: 140, depth: 35, duration: 9 },
  { id: 2, isCloudSvg: true, x: 75, y: 18, size: 180, depth: 50, duration: 11 },
  { id: 3, isCloudSvg: true, x: 50, y: 55, size: 220, depth: 25, duration: 13 },
  { id: 4, isCloudSvg: true, x: 18, y: 72, size: 160, depth: 40, duration: 10 },
  {
    id: 5,
    isCloudSvg: true,
    x: 82,
    y: 78,
    size: 150,
    depth: 45,
    duration: 8.5,
  },
  // Subtle engineering & telemetry accents
  { id: 6, Icon: Server, x: 88, y: 38, size: 24, depth: 20, duration: 7 },
  { id: 7, Icon: Gauge, x: 8, y: 48, size: 22, depth: 18, duration: 8 },
  { id: 8, Icon: ShieldCheck, x: 32, y: 28, size: 20, depth: 15, duration: 9 },
  { id: 9, Icon: Terminal, x: 68, y: 88, size: 22, depth: 22, duration: 7.5 },
];

export const InteractiveCloudBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 45, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 45, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Normalized between -1 and 1
      const normalizedX = (e.clientX / innerWidth) * 2 - 1;
      const normalizedY = (e.clientY / innerHeight) * 2 - 1;

      mouseX.set(normalizedX);
      mouseY.set(normalizedY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#07090E]">
      {/* Minimalist Ambient Deep Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-125 rounded-full bg-cyan-950/20 blur-[140px]" />
      <div className="absolute bottom-10 right-1/4 w-125 h-100 rounded-full bg-sky-950/15 blur-[120px]" />

      {/* Floating Interactive Clouds & Particles */}
      {particles.map((p) => {
        const Icon = p.Icon;
        return (
          <motion.div
            key={p.id}
            className="absolute select-none"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              x: springX
                ? useSpring(mouseX, { stiffness: 40 + p.depth, damping: 25 })
                : 0,
              y: springY
                ? useSpring(mouseY, { stiffness: 40 + p.depth, damping: 25 })
                : 0,
            }}
            animate={{
              y: [0, -18, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {p.isCloudSvg ? (
              <svg
                width={p.size}
                height={p.size * 0.6}
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-cyan-400/4 hover:text-cyan-400/8 transition-colors duration-500 blur-[0.5px]"
              >
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
              </svg>
            ) : Icon ? (
              <div className="text-cyan-400/20 p-2 rounded-full border border-cyan-500/10 bg-cyan-950/10 backdrop-blur-xs">
                <Icon size={p.size} />
              </div>
            ) : null}
          </motion.div>
        );
      })}
    </div>
  );
};

export default InteractiveCloudBackground;
