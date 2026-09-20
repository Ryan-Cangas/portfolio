import React from "react";

interface KartdromeTrackMapProps {
  className?: string;
}

export function KartdromeTrackMap({ className = "" }: KartdromeTrackMapProps) {
  // Turn marker coordinates mapped to the outdoor international layout
  const turns = [
    { label: "T1", x: 235, y: 395 },
    { label: "T2", x: 220, y: 285 },
    { label: "T3", x: 300, y: 380 },
    { label: "T4", x: 420, y: 220 },
    { label: "T5", x: 350, y: 195 },
    { label: "T6", x: 495, y: 135 },
    { label: "T7", x: 360, y: 105 },
    { label: "T8", x: 255, y: 215 },
    { label: "T9", x: 505, y: 340 },
    { label: "T10", x: 535, y: 295 },
    { label: "T11", x: 655, y: 270 },
    { label: "T12", x: 565, y: 175 },
    { label: "T13", x: 885, y: 270 },
    { label: "T14", x: 740, y: 295 },
    { label: "T15", x: 775, y: 335 },
    { label: "T16", x: 730, y: 375 },
    { label: "T17", x: 745, y: 415 },
  ];

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/70 p-6 backdrop-blur-md ${className}`}
    >
      {/* Header Info */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800/60 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <h3 className="font-mono text-sm uppercase tracking-wider text-zinc-100">
              Dubai Kartdrome — Outdoor International Circuit
            </h3>
          </div>
          <p className="mt-0.5 text-xs text-zinc-400">
            1.204 km • 17 Turns • Anti-Clockwise / Technical Bridge & Hairpin
            Complex
          </p>
        </div>

        <div className="flex items-center gap-3 font-mono text-xs">
          <span className="rounded-md border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 text-zinc-300">
            17 Corners
          </span>
          <span className="rounded-md border border-red-500/20 bg-red-500/10 px-2.5 py-1 text-red-400">
            Main Layout
          </span>
        </div>
      </div>

      {/* Circuit SVG */}
      <div className="relative my-4 flex w-full items-center justify-center">
        <svg
          viewBox="180 80 740 370"
          className="h-auto max-h-[380px] w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Underlay / Track Bed */}
          <path
            d="M 740 425 
               L 260 425 
               C 210 425, 200 395, 205 340 
               L 215 285 
               C 220 265, 240 265, 255 285 
               L 300 370 
               C 310 390, 335 385, 355 350 
               L 445 220 
               C 455 200, 440 185, 410 185 
               L 360 185 
               C 325 185, 320 145, 345 125 
               L 480 120 
               C 515 120, 520 150, 490 170 
               L 375 235 
               C 340 255, 310 230, 275 220 
               C 235 210, 230 270, 260 300 
               L 415 395 
               C 450 415, 485 390, 505 350 
               L 525 305 
               C 535 285, 560 280, 580 300 
               L 665 375 
               C 690 400, 715 385, 715 350 
               L 600 215 
               C 575 185, 600 150, 645 150 
               L 845 230 
               C 890 250, 890 285, 860 305 
               L 755 320 
               C 730 325, 725 350, 750 365 
               L 770 380 
               C 785 395, 775 425, 740 425 Z"
            fill="none"
            stroke="#27272a"
            strokeWidth="20"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Active Racing Surface */}
          <path
            d="M 740 425 
               L 260 425 
               C 210 425, 200 395, 205 340 
               L 215 285 
               C 220 265, 240 265, 255 285 
               L 300 370 
               C 310 390, 335 385, 355 350 
               L 445 220 
               C 455 200, 440 185, 410 185 
               L 360 185 
               C 325 185, 320 145, 345 125 
               L 480 120 
               C 515 120, 520 150, 490 170 
               L 375 235 
               C 340 255, 310 230, 275 220 
               C 235 210, 230 270, 260 300 
               L 415 395 
               C 450 415, 485 390, 505 350 
               L 525 305 
               C 535 285, 560 280, 580 300 
               L 665 375 
               C 690 400, 715 385, 715 350 
               L 600 215 
               C 575 185, 600 150, 645 150 
               L 845 230 
               C 890 250, 890 285, 860 305 
               L 755 320 
               C 730 325, 725 350, 750 365 
               L 770 380 
               C 785 395, 775 425, 740 425 Z"
            fill="none"
            stroke="#ef4444"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#glow)"
          />

          {/* Start / Finish Line */}
          <line
            x1="450"
            y1="412"
            x2="450"
            y2="438"
            stroke="#ffffff"
            strokeWidth="4"
            strokeDasharray="4 3"
          />

          {/* Direction Indicator */}
          <path
            d="M 430 425 L 390 425 M 405 420 L 390 425 L 405 430"
            stroke="#ffffff"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />

          {/* Corner Markers */}
          {turns.map((t) => (
            <g key={t.label}>
              <circle
                cx={t.x}
                cy={t.y}
                r="8"
                className="fill-zinc-950 stroke-zinc-700"
                strokeWidth="1.5"
              />
              <text
                x={t.x}
                y={t.y + 3.5}
                textAnchor="middle"
                className="fill-zinc-300 font-mono text-[8px] font-bold select-none"
              >
                {t.label}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* Footer Legend */}
      <div className="flex flex-wrap items-center justify-between border-t border-zinc-800/60 pt-3 font-mono text-xs text-zinc-500">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-4 bg-white/80 rounded-sm" /> Start / Finish
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-0.5 w-4 bg-red-500 rounded-sm" /> Racing Line
          </span>
        </div>
        <span>Dubai Autodrome Complex, UAE</span>
      </div>
    </div>
  );
}
