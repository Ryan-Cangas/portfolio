import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  const experiences = [
    {
      role: "Infrastructure & Operations Engineer (Intern)",
      company: "CloudHost Technology",
      location: "Dubai, UAE",
      period: "May 2026 – Present",
      summary:
        "Overseeing private cloud virtualization clusters, multi-tenant network security boundaries, and high-throughput telemetry pipelines across bare-metal and virtualized infrastructure.",
      highlights: [
        "Private Cloud Virtualization: Provisioned and managed high-availability multi-tenant clusters across Proxmox VE (KVM/LXC), VMware ESXi/vSphere, and Apache CloudStack, fine-tuning memory ballooning, CPU pinning, and pool allocations.",
        "Observability & Telemetry Pipelines: Engineered high-volume log ingestion and normalization using OpenObserve and Wazuh SIEM across distributed Linux VMs, automating real-time fault alerts and compliance audit trails.",
        "Kernel & Systems Automation: Built custom Python maintenance scripts and Bash automation daemons registered via Linux systemd for continuous node health polling, automated provisioning tasks, and log parsing.",
        "Perimeter Defense & Network Isolation: Configured enterprise firewall rules, isolated multi-tenant 802.1Q VLANs, and enforced zero-trust access control boundaries across hosting tiers.",
        "Platform Engineering: Developed backend RESTful services for internal CRM systems, standardizing customer lifecycle workflows and resource provisioning handoffs.",
      ],
      stack: [
        "Proxmox VE",
        "VMware vSphere",
        "Apache CloudStack",
        "OpenObserve",
        "Wazuh SIEM",
        "Python / systemd",
        "VLANs / Zero-Trust",
        "RHEL / Ubuntu",
      ],
    },
  ];

  const skillGroups = [
    {
      title: "Cloud & Virtualization",
      items: [
        "Proxmox VE (KVM/LXC, PCIe Passthrough)",
        "VMware ESXi / vSphere",
        "Apache CloudStack",
        "AWS (EC2, VPC, S3, IAM)",
        "Docker & Container Orchestration",
      ],
    },
    {
      title: "AI Systems & Bare-Metal Infrastructure",
      items: [
        "Local LLM Orchestration (Ollama)",
        "PCIe GPU Passthrough & CUDA Acceleration",
        "Self-Hosted RESTful AI Model Gateways",
        "Zero-Egress Data Privacy Pipelines",
      ],
    },
    {
      title: "Operating Systems & Networking",
      items: [
        "Red Hat Enterprise Linux (RHEL)",
        "Ubuntu Server & Windows Server",
        "VLAN Trunks, TCP/IP, DNS, Routing",
        "Zero-Trust Network Policies & Firewalls",
      ],
    },
    {
      title: "Telemetry, SecOps & Automation",
      items: [
        "OpenObserve & Distributed Ingestion",
        "Wazuh SIEM & Log Normalization",
        "Splunk Indexers & Universal Forwarders",
        "Python (ETL, Ops Scripts) & Bash Daemons",
      ],
    },
  ];

  return (
    <main className="relative z-10 mx-auto min-h-screen w-full max-w-5xl px-4 py-28 space-y-16">
      {/* Header */}
      <section className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 font-mono text-xs text-sky-400">
          <span>●</span> Cloud & Systems Engineer
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
          Ryan Cangas
        </h1>
        <p className="max-w-3xl text-base sm:text-lg leading-relaxed text-zinc-400">
          Cloud & Systems Engineer specializing in bare-metal enterprise
          virtualization, hybrid cloud infrastructure, high-volume telemetry
          pipelines, and systems-level automation. Experienced in managing
          multi-tenant hypervisors, automating workflows with Python and systemd
          daemons, and orchestrating private AI systems with dedicated GPU
          acceleration.
        </p>
        <div className="flex flex-wrap gap-3 pt-2 font-mono text-xs text-zinc-400">
          <span>📍 Dubai, UAE</span>
          <span>•</span>
          <a
            href="mailto:cangasryanandre@gmail.com"
            className="text-sky-400 hover:underline"
          >
            cangasryanandre@gmail.com
          </a>
          <span>•</span>
          <a
            href="https://github.com/Ryan-Cangas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 hover:underline"
          >
            github.com/Ryan-Cangas
          </a>
        </div>
      </section>

      {/* Experience */}
      <section className="space-y-8">
        <div className="border-b border-zinc-800 pb-3">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-100">
            Work Experience
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-6 sm:p-8 backdrop-blur-md space-y-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-zinc-800/60 pb-4">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100">
                    {exp.role}
                  </h3>
                  <div className="font-mono text-sm text-sky-400">
                    {exp.company}
                  </div>
                </div>
                <div className="font-mono text-xs text-zinc-400 sm:text-right">
                  <div>{exp.period}</div>
                  <div>{exp.location}</div>
                </div>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">
                {exp.summary}
              </p>

              <ul className="space-y-2.5 text-sm text-zinc-400">
                {exp.highlights.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-2">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-zinc-800 bg-zinc-900/90 px-2.5 py-1 font-mono text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Skills Matrix */}
      <section className="space-y-6">
        <div className="border-b border-zinc-800 pb-3">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-100">
            Technical Competencies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-zinc-800/80 bg-zinc-950/50 p-5 space-y-3"
            >
              <h3 className="font-mono text-xs uppercase tracking-wider text-sky-400">
                {group.title}
              </h3>
              <ul className="space-y-2 text-xs text-zinc-300">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-zinc-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="space-y-6">
        <div className="border-b border-zinc-800 pb-3">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-100">
            Education & Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950/50 p-6 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-400">
              Education
            </h3>
            <div className="space-y-4 text-sm">
              <div>
                <div className="font-semibold text-zinc-100">
                  BSc (Hons) Software Engineering
                </div>
                <div className="text-xs text-zinc-400">
                  University of Stirling • Upper Second Class Honours (2:1)
                </div>
                <div className="font-mono text-[11px] text-zinc-500">
                  Graduated June 2026
                </div>
              </div>
              <div>
                <div className="font-semibold text-zinc-100">
                  Computer Science Diploma
                </div>
                <div className="text-xs text-zinc-400">
                  Scottish Qualifications Authority (SQA)
                </div>
                <div className="font-mono text-[11px] text-zinc-500">
                  2022 – 2024
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950/50 p-6 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-400">
              Industry Certifications
            </h3>
            <ul className="space-y-3 font-mono text-xs text-zinc-300">
              <li className="flex items-center justify-between border-b border-zinc-800/50 pb-2">
                <span>Red Hat Enterprise Linux (RHEL) Foundations</span>
                <span className="text-emerald-400">2026</span>
              </li>
              <li className="flex items-center justify-between border-b border-zinc-800/50 pb-2">
                <span>AWS Cloud Foundations & AWS Security Foundations</span>
                <span className="text-emerald-400">2026</span>
              </li>
              <li className="flex items-center justify-between border-b border-zinc-800/50 pb-2">
                <span>AWS Cloud Architecting Track</span>
                <span className="text-amber-400">Ongoing</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Cisco Networking Basics</span>
                <span className="text-emerald-400">2026</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
