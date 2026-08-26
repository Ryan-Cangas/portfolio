"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";
import CloudBackgroundEffect from "@/components/ui/cloud-particles";
import HelloIntro from "@/components/ui/hello-intro";
import { ArrowUpRight } from "lucide-react";

export default function PortfolioPage() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      <HelloIntro onAnimationComplete={() => setIntroDone(true)} />

      <main className="relative min-h-screen bg-[#07090E] text-zinc-100 selection:bg-cyan-500 selection:text-black">
        {/* Animated Background Layers */}
        <AnimatedGradientBackground
          Breathing={true}
          startingGap={100}
          gradientColors={[
            "#07090E",
            "#082f49",
            "#0c4a6e",
            "#0369a1",
            "#0284c7",
            "#0ea5e9",
            "#38bdf8",
          ]}
          gradientStops={[30, 45, 60, 75, 85, 92, 100]}
        />
        <CloudBackgroundEffect />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: introDone ? 1 : 0, y: introDone ? 0 : 18 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 mx-auto max-w-3xl px-6 py-24"
        >
          {/* Header */}
          <section className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available For Work[cite: 1]
            </span>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Cloud DevSecOps Engineer
            </h1>
            <p className="mt-3 text-base text-zinc-400 max-w-lg">
              Automating secure infrastructure, zero-trust cloud architectures,
              and scalable CI/CD pipelines.
            </p>
          </section>

          {/* Experience */}
          <section className="mt-20">
            <h2 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
              Experience[cite: 1]
            </h2>
            <div className="mt-6 space-y-8 border-l border-zinc-800 pl-6">
              <div className="relative">
                <span className="text-xs text-zinc-500">2023 - Present</span>
                <h3 className="text-base font-medium text-zinc-200">
                  Senior Cloud Security Engineer
                </h3>
                <p className="text-sm text-zinc-400 mt-1">
                  Engineered automated policy-as-code guards, container
                  vulnerability pipelines, and AWS multi-account landing zones.
                </p>
              </div>
              <div className="relative">
                <span className="text-xs text-zinc-500">2021 - 2023</span>
                <h3 className="text-base font-medium text-zinc-200">
                  DevOps & Infrastructure Engineer[cite: 1]
                </h3>
                <p className="text-sm text-zinc-400 mt-1">
                  Automated deployments across Kubernetes environments and built
                  security-audited CI/CD pipelines.
                </p>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="mt-16">
            <h2 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
              Side Hustles & Tools[cite: 1]
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5 backdrop-blur-sm transition-colors hover:border-zinc-700">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-zinc-200">KumoShield</span>
                  <ArrowUpRight className="h-4 w-4 text-zinc-500" />
                </div>
                <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                  Automated drift detection and continuous security baseline
                  scanner for cloud workloads.
                </p>
              </div>

              <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5 backdrop-blur-sm transition-colors hover:border-zinc-700">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-zinc-200">
                    Hardened Base Images[cite: 1]
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-zinc-500" />
                </div>
                <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                  Distroless, non-root minimal images published on Docker Hub
                  for low-attack-surface containers[cite: 1].
                </p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-24 border-t border-zinc-800/60 pt-8 text-center text-xs text-zinc-500">
            <p>
              © 2026 Cloud DevSecOps Portfolio. Built with Next.js, Framer
              Motion & Tailwind CSS[cite: 1].
            </p>
          </footer>
        </motion.div>
      </main>
    </>
  );
}
