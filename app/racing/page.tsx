import React from "react";
import { YouTubePlayer } from "@/components/ui/youtube-player";
import { KartdromeTrackMap } from "@/components/ui/kartdrome-track-map";

export default function RacingPage() {
  const KARTDROME_VIDEO_ID = "9uvEAfJ0LnY";

  return (
    <main className="relative z-10 mx-auto min-h-screen w-full max-w-5xl px-4 py-28 space-y-12">
      {/* Title & Header */}
      <header className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 font-mono text-xs text-red-400">
          <span>●</span> Dubai Autodrome Kartdrome
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
          Sim Racing & Track Seat Time
        </h1>
        <p className="mx-auto max-w-2xl text-sm sm:text-base text-zinc-400">
          Outdoor karting hot laps, telemetry data, and direct-drive sim setup
          configuration.
        </p>
      </header>

      {/* Centerpiece Hero Video */}
      <section className="mx-auto w-full max-w-4xl space-y-3">
        <YouTubePlayer
          videoId={KARTDROME_VIDEO_ID}
          title="Dubai Kartdrome Hot Lap - Ryan Cangas"
        />
        <div className="flex items-center justify-between px-1 font-mono text-xs text-zinc-500">
          <span>Helmet Cam • Outdoor Track</span>
          <span>Outdoor / Sodi RT8</span>
        </div>
      </section>

      {/* Track Circuit Layout */}
      <section className="mx-auto w-full max-w-4xl space-y-4">
        <KartdromeTrackMap />
      </section>
    </main>
  );
}
