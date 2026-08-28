"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import HelloIntro from "@/components/ui/hello-intro";
import {
  Shield,
  Lock,
  Flag,
  ArrowUpRight,
  Server,
  Terminal,
  Activity,
  Cpu,
  MapPin,
  Mail,
  Zap,
} from "lucide-react";

const GithubIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

export default function OverviewPage() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      <HelloIntro onAnimationComplete={() => setIntroDone(true)} />

      <main className="relative z-10 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: introDone ? 1 : 0, y: introDone ? 0 : 20 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-4xl px-6 pt-32 pb-24 space-y-12"
        >
          {/* Executive Hero Banner */}
          <section className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-medium text-cyan-300 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              SOC Analyst & Platform Engineer
            </div>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl text-zinc-100">
              Ryan Cangas
            </h1>

            <p className="mt-4 text-base md:text-lg text-zinc-300/90 max-w-2xl font-light leading-relaxed">
              Architecting resilient SOC observability, Zero-Knowledge
              cryptographic vaults, and automated infrastructure pipelines from
              Dubai.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-xs text-zinc-400">
              <div className="flex items-center gap-1.5 bg-zinc-900/60 border border-zinc-800 px-3 py-1.5 rounded-lg">
                <MapPin size={13} className="text-cyan-400" />
                <span>Dubai, UAE</span>
              </div>
              <a
                href="https://github.com/Ryan-Cangas"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 bg-zinc-900/60 border border-zinc-800 px-3 py-1.5 rounded-lg hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
              >
                <GithubIcon />
                <span>github.com/Ryan-Cangas</span>
              </a>
              <a
                href="mailto:cangasryanandre@gmail.com"
                className="flex items-center gap-1.5 bg-zinc-900/60 border border-zinc-800 px-3 py-1.5 rounded-lg hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
              >
                <Mail size={13} className="text-cyan-400" />
                <span>Get in Touch</span>
              </a>
            </div>
          </section>

          {/* Quick Metrics Bar */}
          <section className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-3.5 text-center">
              <span className="text-xl font-bold text-cyan-400 font-mono">
                100%
              </span>
              <p className="text-[11px] text-zinc-400 mt-0.5">
                Audit Integrity Verified
              </p>
            </div>
            <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-3.5 text-center">
              <span className="text-xl font-bold text-cyan-400 font-mono">
                AES-256
              </span>
              <p className="text-[11px] text-zinc-400 mt-0.5">
                Applied Cryptography
              </p>
            </div>
            <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-3.5 text-center">
              <span className="text-xl font-bold text-cyan-400 font-mono">
                VRL & SOAR
              </span>
              <p className="text-[11px] text-zinc-400 mt-0.5">
                Pipeline Automation
              </p>
            </div>
            <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-3.5 text-center">
              <span className="text-xl font-bold text-cyan-400 font-mono">
                Proxmox
              </span>
              <p className="text-[11px] text-zinc-400 mt-0.5">
                Bare-Metal Hypervisor
              </p>
            </div>
          </section>

          {/* Core Gateway Navigation Cards */}
          <section className="space-y-3">
            <h2 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
              Explore Portfolio Sections
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link
                href="/about"
                className="group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/50 hover:bg-zinc-900/70"
              >
                <div className="flex items-center justify-between text-cyan-400 mb-4">
                  <div className="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-500/20">
                    <Shield size={20} />
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-zinc-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>
                <h3 className="text-lg font-semibold text-zinc-100">
                  About & Background
                </h3>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  Career trajectory, production role at CloudHost, software
                  engineering honors degree, and RHEL / AWS credentials.
                </p>
              </Link>

              <Link
                href="/projects"
                className="group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/50 hover:bg-zinc-900/70"
              >
                <div className="flex items-center justify-between text-cyan-400 mb-4">
                  <div className="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-500/20">
                    <Lock size={20} />
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-zinc-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>
                <h3 className="text-lg font-semibold text-zinc-100">
                  Engineering Projects
                </h3>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  Interactive carousel with SureWill Zero-Knowledge Vault,
                  OpenObserve log engines, and Splunk SOAR threat simulations.
                </p>
              </Link>

              <Link
                href="/racing"
                className="group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/50 hover:bg-zinc-900/70"
              >
                <div className="flex items-center justify-between text-cyan-400 mb-4">
                  <div className="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-500/20">
                    <Flag size={20} />
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-zinc-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>
                <h3 className="text-lg font-semibold text-zinc-100">
                  Racing & Telemetry
                </h3>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  Dubai Kartdrome outdoor onboard 4K runs, direct-drive sim rig
                  hardware modding, and D-Log M color mastering.
                </p>
              </Link>
            </div>
          </section>

          {/* Infrastructure & Lab Pulse */}
          <section className="rounded-2xl border border-cyan-500/20 bg-zinc-900/30 p-5 backdrop-blur-md">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <Server className="text-cyan-400" size={17} />
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
                  Infrastructure Stack & Hypervisor Nodes
                </span>
              </div>
              <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                Tailscale Mesh Active
              </span>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl border border-zinc-800/70 bg-zinc-950/40">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-zinc-200 font-semibold">
                    Proxmox VE
                  </span>
                  <Activity size={13} className="text-cyan-400" />
                </div>
                <p className="text-[11px] text-zinc-400 mt-1 font-mono">
                  Bare-Metal Core Node
                </p>
              </div>

              <div className="p-3 rounded-xl border border-zinc-800/70 bg-zinc-950/40">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-zinc-200 font-semibold">
                    OpenObserve & Splunk
                  </span>
                  <Terminal size={13} className="text-emerald-400" />
                </div>
                <p className="text-[11px] text-zinc-400 mt-1 font-mono">
                  SIEM Telemetry & VRL
                </p>
              </div>

              <div className="p-3 rounded-xl border border-zinc-800/70 bg-zinc-950/40">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-zinc-200 font-semibold">
                    Zero-Trust & Vaults
                  </span>
                  <Lock size={13} className="text-purple-400" />
                </div>
                <p className="text-[11px] text-zinc-400 mt-1 font-mono">
                  Shamir & Ed25519
                </p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-zinc-800/60 pt-6 text-center text-xs text-zinc-500">
            <p>
              © 2026 Ryan Cangas. Built with Next.js, Framer Motion & Tailwind
              CSS.
            </p>
          </footer>
        </motion.div>
      </main>
    </>
  );
}
