"use client";

import { Server, Activity, ShieldCheck, HardDrive, Wifi } from "lucide-react";

export const HomelabStatus = () => {
  const nodes = [
    {
      name: "pve-core-01",
      type: "Proxmox VE 8.x",
      ip: "100.x.x.1 (Tailscale)",
      status: "Online",
      uptime: "99.9%",
    },
    {
      name: "wazuh-indexer",
      type: "LXC Container",
      load: "0.42",
      status: "Active",
      metric: "SIEM & SOAR",
    },
    {
      name: "ollama-inference",
      type: "QEMU VM (vGPU)",
      status: "Active",
      metric: "Open-WebUI LLM",
    },
  ];

  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-zinc-900/50 p-5 backdrop-blur-md">
      <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <Server className="text-cyan-400" size={18} />
          <span className="text-sm font-semibold text-zinc-200">
            Personal Proxmox Lab & Telemetry
          </span>
        </div>
        <span className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
          Cluster Healthy
        </span>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
        {nodes.map((node, i) => (
          <div
            key={i}
            className="rounded-xl border border-zinc-800/80 bg-zinc-950/50 p-3"
          >
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono text-zinc-300 font-semibold">
                {node.name}
              </span>
              <span className="text-[10px] text-cyan-400">{node.type}</span>
            </div>
            <p className="text-[11px] text-zinc-500 mt-1 font-mono">
              {node.metric || node.ip}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
