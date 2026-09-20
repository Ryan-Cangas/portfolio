import React from "react";

export default function ProjectsPage() {
  const projects = [
    {
      title: "GPU-Accelerated Local AI/LLM Platform",
      badge: "Infrastructure & AI Systems",
      overview:
        "Engineered bare-metal PCIe GPU passthrough on a Proxmox VE hypervisor to provision dedicated hardware compute directly to virtualized runtimes with minimal virtualization penalty.",
      points: [
        "Configured IOMMU grouping and low-level VFIO kernel drivers to pass physical GPU resources directly into containerized runtimes.",
        "Deployed containerized Ollama services hosting high-throughput, low-latency open-source models with zero external network data egress.",
        "Exposed localized RESTful API gateways to integrate LLM-driven log analysis pipelines into Wazuh SIEM alerts and homelab operations.",
      ],
      tech: [
        "Proxmox VE",
        "VFIO / IOMMU",
        "Ollama",
        "CUDA",
        "FastAPI",
        "Docker",
        "Linux",
      ],
      github: "https://github.com/Ryan-Cangas",
    },
    {
      title: "OmniCloud — Cloud Operations & Telemetry Platform",
      badge: "Cloud Engineering & Observability",
      overview:
        "A full-stack infrastructure telemetry dashboard interfacing directly with hypervisor REST APIs to deliver unified node resource metrics, storage health, and automated alerting.",
      points: [
        "Constructed an asynchronous FastAPI backend service polling Proxmox REST APIs for CPU load, RAM allocation, and ZFS pool health across nodes.",
        "Implemented asynchronous webhooks and Linux systemd background workers to continuously monitor operational state changes and dispatch instant alerts.",
        "Built a high-performance, dark-mode reactive frontend with React and Vite for centralized cluster administration.",
      ],
      tech: [
        "FastAPI",
        "React",
        "Vite",
        "systemd",
        "Proxmox REST API",
        "Tailwind CSS",
        "Python",
      ],
      github: "https://github.com/Ryan-Cangas",
    },
    {
      title: "Splunk SIEM & SOAR Threat Remediation Pipeline",
      badge: "SecOps & Automation",
      overview:
        "A multi-node security telemetry and automated threat containment pipeline designed to normalize distributed log streams and automate remediation workflows.",
      points: [
        "Deployed Splunk Indexers alongside Universal Forwarders across Linux nodes to capture live network traffic and host audit trails.",
        "Engineered Python automation scripts to standardize heterogeneous logs, correlate anomaly thresholds, and calculate security KPIs.",
        "Configured automated SOAR triggers to flag suspicious brute-force attempts and anomalous privilege escalations.",
      ],
      tech: [
        "Splunk SIEM",
        "Python",
        "Linux (RHEL/Ubuntu)",
        "Bash",
        "TCP/IP",
        "SOAR",
      ],
      github: "https://github.com/Ryan-Cangas",
    },
  ];

  return (
    <main className="relative z-10 mx-auto min-h-screen w-full max-w-5xl px-4 py-28 space-y-12">
      {/* Header */}
      <header className="space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 font-mono text-xs text-sky-400">
          <span>●</span> Production Systems & Research
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
          Technical Projects
        </h1>
        <p className="max-w-2xl text-zinc-400">
          Bare-metal virtualization architectures, private cloud dashboards, and
          automated telemetry and threat remediation pipelines.
        </p>
      </header>

      {/* Projects Grid */}
      <div className="space-y-8">
        {projects.map((proj, idx) => (
          <article
            key={idx}
            className="rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-6 sm:p-8 backdrop-blur-md space-y-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-zinc-800/60 pb-4">
              <div>
                <span className="font-mono text-xs text-sky-400 uppercase tracking-wider">
                  {proj.badge}
                </span>
                <h2 className="text-xl font-bold text-zinc-100 mt-1">
                  {proj.title}
                </h2>
              </div>

              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-300 hover:text-white rounded-lg border border-zinc-800 bg-zinc-900/80 px-3 py-1.5 transition-colors w-fit"
                >
                  <span>Source Code</span>
                  <span>→</span>
                </a>
              )}
            </div>

            <p className="text-sm leading-relaxed text-zinc-300">
              {proj.overview}
            </p>

            <div className="space-y-2">
              <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                Technical Highlights & Architecture
              </h3>
              <ul className="space-y-2 text-sm text-zinc-400">
                {proj.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {proj.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-zinc-800 bg-zinc-900/90 px-2.5 py-1 font-mono text-xs text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
