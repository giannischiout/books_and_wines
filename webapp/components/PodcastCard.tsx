"use client";

import Image from "next/image";

export type PodcastEpisode = {
  title: string;
  episode: string;
  duration: string;
  date: string;
  description: string;
};

type PodcastCardProps = {
  episode: PodcastEpisode;
  heroImage?: string;
  size?: "default" | "compact" | "carousel";
};

export function PodcastCard({
  episode,
  heroImage = "/crew.png",
  size = "default",
}: PodcastCardProps) {
  const compact = size === "compact";
  const carousel = size === "carousel";
  return (
    <div
      className={`group relative overflow-hidden rounded-xl border border-[#8b2e2e]/10 bg-white shadow-[0_4px_24px_rgba(139,46,46,0.06)] transition-all duration-300 hover:shadow-[0_16px_48px_rgba(139,46,46,0.12)] hover:border-[#8b2e2e]/15 ${compact ? "w-[280px] shrink-0 sm:w-[300px]" : carousel ? "w-[300px] shrink-0 sm:w-[340px]" : ""
        }`}
    >
      {/* Episode badge */}
      <div className="absolute top-3 left-3 z-10 rounded-full bg-[#8b2e2e] px-3 py-1 text-[11px] font-semibold text-white shadow-md">
        {episode.episode}
      </div>

      {/* Podcast hero */}
      <div
        className={`relative w-full overflow-hidden ${compact ? "h-32 sm:h-36" : carousel ? "h-40 sm:h-44" : "h-48 sm:h-56"
          }`}
      >
        <div className="absolute inset-0 overflow-hidden rounded-t-xl">
          <Image
            src={heroImage}
            alt="Books & Wines Podcast"
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            sizes={compact ? "300px" : "(max-width: 768px) 100vw, 50vw"}
            priority={!compact}
          />
          <div
            className="absolute inset-0 bg-linear-to-t from-black/30 via-black/5 to-transparent"
            aria-hidden
          />
        </div>
      </div>

      {/* Content */}
      <div
        className={`relative ${compact ? "p-4 sm:p-5" : carousel ? "p-5 sm:p-6" : "p-6 sm:p-8"
          }`}
      >
        <h3
          className={`font-(family-name:--font-playfair) font-semibold leading-tight text-[#2C2420] ${compact ? "text-base sm:text-lg line-clamp-2" : carousel ? "text-lg sm:text-xl" : "mt-1.5 text-xl sm:text-2xl"
            }`}
        >
          {episode.title}
        </h3>
        <p className={`text-[#4A3F35]/80 ${compact ? "mt-1.5 text-xs" : "mt-3 text-sm"}`}>
          {episode.duration} · {episode.date}
        </p>
        {(carousel || !compact) && (
          <p
            className={`mt-4 text-[15px] leading-relaxed text-[#4A3F35]/90 ${carousel ? "line-clamp-2" : ""
              }`}
          >
            {episode.description}
          </p>
        )}

        {/* Play button */}
        <button
          type="button"
          className={`mt-4 flex w-full items-center justify-center gap-2.5 rounded-lg bg-[#8b2e2e] text-white shadow-[0_2px_12px_rgba(139,46,46,0.3)] transition-all duration-300 hover:bg-[#6d2323] hover:shadow-[0_4px_16px_rgba(139,46,46,0.35)] hover:scale-[1.02] active:scale-[0.98] ${compact
              ? "py-2.5 px-4 text-sm font-medium"
              : carousel
                ? "gap-2.5 rounded-xl px-5 py-3 text-sm font-semibold sm:px-8"
                : "gap-3 rounded-xl px-6 py-4 text-base font-semibold sm:w-auto sm:px-10"
            }`}
        >
          <span
            className={`flex shrink-0 items-center justify-center rounded-full bg-white/20 ${compact ? "h-8 w-8" : carousel ? "h-9 w-9" : "h-10 w-10"
              }`}
          >
            <svg
              className={`ml-0.5 fill-current ${compact ? "h-4 w-4" : carousel ? "h-4 w-4" : "h-5 w-5"}`}
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span>Play Episode</span>
        </button>
      </div>
    </div>
  );
}
