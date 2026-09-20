import React from "react";

interface YouTubePlayerProps {
  videoId: string;
  title?: string;
  className?: string;
}

export function YouTubePlayer({
  videoId,
  title = "Dubai Kartdrome Hot Lap",
  className = "",
}: YouTubePlayerProps) {
  return (
    <div
      className={`relative w-full aspect-video overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-xl ${className}`}
    >
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&color=white`}
        title={title}
        className="absolute top-0 left-0 h-full w-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
