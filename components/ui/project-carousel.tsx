"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import {
  Shield,
  KeyRound,
  Terminal,
  Cpu,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Activity,
  Layers,
  Lock,
} from "lucide-react";

interface ProjectItem {
  title: string;
  category: string;
  tagline: string;
  highlights: string[];
  skills: string[];
  icon: React.ComponentType<{ className?: string; size?: number }>;
  gradient: string;
}

const projects: ProjectItem[] = [
  {
    title: "SureWill: Cryptographic Vault & Secure Workflow",
    category: "Applied Cryptography & Zero-Knowledge",
    tagline:
      "End-to-end encrypted vault with Shamir's Secret Sharing and distributed key management.",
    highlights: [
      "Zero-Knowledge Architecture implementing AES-256 and Ed25519 digital signatures.",
      "Shamir's Secret Sharing for secure multi-party threshold key reconstruction.",
      "SHA-256 verification pipelines and automated triggers ensuring full auditability and data integrity.",
      "Multi-stage identity verification mechanisms integrated with SMTP validation workflows.",
    ],
    skills: [
      "Zero-Knowledge",
      "AES-256",
      "Ed25519",
      "Shamir's Sharing",
      "SHA-256",
      "IAM",
    ],
    icon: Lock,
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
  },
  {
    title: "Distributed SOC Observability & SIEM Platform",
    category: "CloudHost Production Infrastructure",
    tagline:
      "Multi-tenant telemetry ingestion, Vector VRL pipelines, and automated threat notifications.",
    highlights: [
      "Architected and deployed distributed OpenObserve SIEM monitoring real-time telemetry across client clusters.",
      "Engineered high-throughput VRL (Vector Remap Language) pipelines for cross-source log normalization.",
      "Formulated localized threat detection triggers and automated incident alerts via ntfy push notifications.",
      "Implemented client-isolation IAM & RBAC policies for auditable security compliance.",
    ],
    skills: [
      "OpenObserve",
      "Vector (VRL)",
      "SOC Operations",
      "ntfy Automation",
      "RBAC",
      "AWS",
    ],
    icon: Activity,
    gradient: "from-sky-500/20 via-indigo-500/10 to-transparent",
  },
  {
    title: "Splunk SIEM & SOAR Automation Home Lab",
    category: "Threat Modeling & Response Automation",
    tagline:
      "Network attack simulation environment with Python-powered SOAR playbook triggers.",
    highlights: [
      "Built real-time Splunk SIEM pipeline to ingest network telemetry and model realistic cyber attack vectors.",
      "Authored custom Python SOAR automation scripts for event triage and automated alert routing.",
      "Engineered executive threat telemetry dashboards mapping actionable SOC risk metrics.",
      "Configured host-level defenses and automated mitigation response hooks.",
    ],
    skills: [
      "Splunk",
      "Python SOAR",
      "Threat Modeling",
      "SIEM Triage",
      "Linux RHEL",
      "TCP/IP",
    ],
    icon: Terminal,
    gradient: "from-emerald-500/20 via-cyan-500/10 to-transparent",
  },
];

export const ProjectCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative w-full">
      {/* Controls */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
          Technical Projects & Labs
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={scrollPrev}
            aria-label="Previous project"
            className="p-2 rounded-lg border border-zinc-800 bg-zinc-900/60 hover:border-zinc-700 hover:text-cyan-400 text-zinc-400 transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next project"
            className="p-2 rounded-lg border border-zinc-800 bg-zinc-900/60 hover:border-zinc-700 hover:text-cyan-400 text-zinc-400 transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Embla Viewport */}
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex gap-4">
          {projects.map((proj, idx) => {
            const Icon = proj.icon;
            return (
              <div
                key={idx}
                className="flex-[0_0_100%] min-w-0 md:flex-[0_0_95%]"
              >
                <div
                  className={`relative overflow-hidden rounded-2xl border border-zinc-800/90 bg-gradient-to-br ${proj.gradient} bg-zinc-900/60 p-6 md:p-8 backdrop-blur-md transition-all hover:border-cyan-500/40`}
                >
                  <div className="flex items-start justify-between">
                    <div className="p-2.5 rounded-xl border border-zinc-700/50 bg-zinc-800/60 text-cyan-400">
                      <Icon size={24} />
                    </div>
                    <span className="text-[11px] font-medium tracking-wide text-cyan-400/90 border border-cyan-500/20 bg-cyan-950/40 px-3 py-1 rounded-full">
                      {proj.category}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-zinc-100">
                    {proj.title}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-400 leading-relaxed">
                    {proj.tagline}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-zinc-800/80 pt-4">
                    {proj.highlights.map((h, hIdx) => (
                      <li
                        key={hIdx}
                        className="text-xs text-zinc-300/90 flex items-start gap-2"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-1.5 pt-2">
                    {proj.skills.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-medium text-zinc-400 bg-zinc-800/80 border border-zinc-700/40 px-2.5 py-0.5 rounded-md"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-1.5 mt-4">
        {projects.map((_, dotIdx) => (
          <button
            key={dotIdx}
            onClick={() => emblaApi && emblaApi.scrollTo(dotIdx)}
            aria-label={`Go to slide ${dotIdx + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              selectedIndex === dotIdx ? "w-6 bg-cyan-400" : "w-1.5 bg-zinc-700"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
