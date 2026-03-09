"use client";

import { WaveformIcon } from "./icons";

type PodcastEpisode = {
  title: string;
  episode: string;
  duration: string;
  date: string;
  description: string;
};

type LatestPodcastRowProps = {
  episode: PodcastEpisode;
};

export function LatestPodcastRow({ episode }: LatestPodcastRowProps) {
  return (
    <div className="rounded-2xl border border-[#8b2e2e]/15 bg-white p-6 shadow-[0_4px_20px_rgba(139,46,46,0.06)] transition-shadow hover:shadow-[0_8px_30px_rgba(139,46,46,0.1)] md:flex md:items-center md:gap-8 md:p-8">
      <button
        type="button"
        className="group flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#8b2e2e] text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
        aria-label="Play podcast"
      >
        <svg
          className="ml-1 h-7 w-7"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>
      <div className="mt-4 flex-1 md:mt-0">
        <h3 className="font-(family-name:--font-playfair) mb-1 text-xl font-semibold text-[#2C2420] md:text-2xl">
          {episode.title}
        </h3>
        <p className="mb-3 text-sm text-[#4A3F35]">
          {episode.date} · {episode.duration}
        </p>
        <p className="text-[#4A3F35] leading-relaxed">{episode.description}</p>
      </div>
      <div className="mt-4 hidden md:block">
        <WaveformIcon />
      </div>
    </div>
  );
}
