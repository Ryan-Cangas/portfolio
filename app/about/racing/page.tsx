import { Gauge, Disc, Video } from "lucide-react";

export default function RacingPage() {
  return (
    <main className="relative z-10 min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-32 pb-20 space-y-10">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
            Off-Duty Engineering
          </span>
          <h1 className="text-3xl font-bold mt-1 text-zinc-100">
            Karting & Sim Telemetry
          </h1>
          <p className="mt-2 text-sm text-zinc-400">
            Applying low-latency systems engineering to outdoor karting, sim
            racing setups, and high-frame-rate onboard cinematography.
          </p>
        </div>

        {/* Video Player Card */}
        <div className="overflow-hidden rounded-2xl border border-cyan-500/30 bg-zinc-950/70 backdrop-blur-md shadow-2xl">
          <div className="relative aspect-video w-full bg-zinc-900 flex items-center justify-center">
            <video
              className="w-full h-full object-cover"
              controls
              poster="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80"
            >
              <source src="/videos/karting-onboard.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="p-4 border-t border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
              <span className="text-xs font-medium text-zinc-200 font-mono">
                Dubai Autodrome Kartdrome — Onboard 4K 60FPS
              </span>
            </div>
            <span className="text-[11px] text-cyan-400 font-mono bg-cyan-950/50 px-2.5 py-0.5 rounded border border-cyan-500/20">
              D-Log M • ND16 Filter
            </span>
          </div>
        </div>

        {/* Technical Specs & Hardware Graphics */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4">
            <div className="flex items-center gap-2 text-cyan-400 mb-2">
              <Gauge size={16} />
              <h2 className="text-xs font-semibold text-zinc-200">
                Karting Performance
              </h2>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Outdoor sprint sessions, apex telemetry analysis, and optimizing
              braking zones across Dubai Kartdrome circuits.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4">
            <div className="flex items-center gap-2 text-cyan-400 mb-2">
              <Disc size={16} />
              <h2 className="text-xs font-semibold text-zinc-200">
                Direct-Drive Sim Rig
              </h2>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Rigid aluminum profile cockpit, high-torque direct-drive wheelbase
              calibration, and low-latency pedal telemetry.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4">
            <div className="flex items-center gap-2 text-cyan-400 mb-2">
              <Video size={16} />
              <h2 className="text-xs font-semibold text-zinc-200">
                Action Cinematography
              </h2>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Custom helmet-chin mount stabilization, neutral density exposure
              control, and DaVinci Resolve color grading.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
