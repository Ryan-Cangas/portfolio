"use client";

import { AnimatedGradientBackground } from "@/components/ui/animated-gradient-background";
import { HelloSignature } from "@/components/ui/hello-signature";
import { CloudBackgroundEffect } from "@/components/ui/cloud-particles";
import {
  Shield,
  Cloud,
  Terminal,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen bg-[#07090E] text-zinc-100 selection:bg-cyan-500 selection:text-black">
      {/* Dynamic Backgrounds */}
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

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-20">
        {/* Intro */}
        <section className="flex flex-col items-center text-center">
          <HelloSignature />

          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available For DevSecOps Roles
          </span>

          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Cloud DevSecOps Engineer
          </h1>
          <p className="mt-2 text-zinc-400 max-w-md">
            Automating secure infrastructure, zero-trust cloud architectures,
            and scalable CI/CD pipelines.
          </p>
        </section>

        {/* Experience Section */}
        <section className="mt-20">
          <h2 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
            Experience
          </h2>
          <div className="mt-6 space-y-8 border-l border-zinc-800 pl-6">
            <div className="relative">
              <span className="text-xs text-zinc-500">2023 - Present</span>
              <h3 className="text-base font-medium text-zinc-200">
                Senior Cloud Security Engineer — FinTech Corp
              </h3>
              <p className="text-sm text-zinc-400 mt-1">
                Engineered automated policy-as-code guards, container scanning
                with Trivy, and multi-region AWS landing zones.
              </p>
            </div>
            <div className="relative">
              <span className="text-xs text-zinc-500">2021 - 2023</span>
              <h3 className="text-base font-medium text-zinc-200">
                DevOps & Infrastructure Engineer — Medium Inc.
              </h3>
              <p className="text-sm text-zinc-400 mt-1">
                Maintained Kubernetes clusters, automated zero-downtime
                releases, and hardened IAM boundaries.
              </p>
            </div>
          </div>
        </section>

        {/* Projects / Side Hustles */}
        <section className="mt-16">
          <h2 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
            Featured Projects & Tools
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4 backdrop-blur-sm transition-colors hover:border-zinc-700">
              <div className="flex items-center justify-between">
                <span className="font-medium text-zinc-200">KumoShield</span>
                <ArrowUpRight className="h-4 w-4 text-zinc-500" />
              </div>
              <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                Automated Terraform drift detection and security baseline
                auditor for AWS environments.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4 backdrop-blur-sm transition-colors hover:border-zinc-700">
              <div className="flex items-center justify-between">
                <span className="font-medium text-zinc-200">
                  KumoNext Docker Images
                </span>
                <ArrowUpRight className="h-4 w-4 text-zinc-500" />
              </div>
              <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                Distroless, non-root hardened base images for microservices on
                Docker Hub.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 border-t border-zinc-800/60 pt-8 text-center text-xs text-zinc-500">
          <p>
            © 2026 DevSecOps Portfolio. Built with Next.js, Framer Motion &
            Tailwind CSS.
          </p>
        </footer>
      </div>
    </main>
  );
}
