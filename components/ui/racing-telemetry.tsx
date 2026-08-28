"use client";

import { Gauge, Flag, Video, Zap } from "lucide-react";

export const RacingTelemetry = () => {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 backdrop-blur-sm">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">
        <Flag className="text-cyan-400" size={15} />
        <span>Off-Duty: Racing & Telemetry Analysis</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-3.5 rounded-xl border border-zinc-800/70 bg-zinc-950/40">
          <div className="flex items-center gap-2 text-cyan-400 mb-1">
            <Gauge size={16} />
            <span className="text-xs font-medium text-zinc-200">
              Karting & Sim Racing
            </span>
          </div>
          <p className="text-[11px] text-zinc-400 leading-relaxed mt-1">
            Rotax/Sodi karting at Dubai Kartdrome and direct-drive sim racing
            telemetry optimization.
          </p>
        </div>

        <div className="p-3.5 rounded-xl border border-zinc-800/70 bg-zinc-950/40">
          <div className="flex items-center gap-2 text-cyan-400 mb-1">
            <Video size={16} />
            <span className="text-xs font-medium text-zinc-200">
              Action Cam Cinematography
            </span>
          </div>
          <p className="text-[11px] text-zinc-400 leading-relaxed mt-1">
            Onboard high-speed 4K capture, ND filter staging, and D-Log M color
            mastering.
          </p>
        </div>

        <div className="p-3.5 rounded-xl border border-zinc-800/70 bg-zinc-950/40">
          <div className="flex items-center gap-2 text-cyan-400 mb-1">
            <Zap size={16} />
            <span className="text-xs font-medium text-zinc-200">
              Hardware Modding
            </span>
          </div>
          <p className="text-[11px] text-zinc-400 leading-relaxed mt-1">
            Rig rigidity tuning, custom USB controller interfaces, and
            sub-millisecond input pipelines.
          </p>
        </div>
      </div>
    </div>
  );
};
