"use client";

import Image from "next/image";
import Link from "next/link";
import { StarRating, WineGlassIcon } from "./icons";

export type BookReview = {
  id: string;
  title: string;
  author: string;
  cover: string;
  genre: string;
  rating: number;
  synopsis: string;
  discussionUrl: string;
  publicationYear?: number;
};

type BookCardProps = {
  book: BookReview;
};

export function BookCard({ book }: BookCardProps) {
  return (
    <article className="group relative flex flex-col overflow-visible rounded-[18px] border border-[#8b2e2e]/20 bg-white shadow-[0_2px_12px_rgba(139,46,46,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(139,46,46,0.1)] sm:flex-row sm:items-stretch">
      {/* Book cover - overlaps card slightly, layered depth */}
      <div className="relative flex shrink-0 justify-center px-8 pt-8 sm:justify-start sm:px-10 sm:pt-10 sm:pr-0 sm:pb-10">
        {/* Layered depth - subtle second book shadow behind */}
        <div
          className="absolute left-5 top-5 h-[220px] w-[150px] rounded-lg bg-[#8b2e2e]/6 shadow-[0_4px_12px_rgba(44,36,32,0.08)] sm:left-6 sm:top-6 sm:h-[260px] sm:w-[180px]"
          aria-hidden
        />
        <div className="relative -ml-2 h-[220px] w-[150px] sm:h-[260px] sm:w-[180px]">
          {/* Flat minimal ribbon bookmark - thin strip at top center like a real bookmark */}
          <div
            className="absolute -top-0.5 left-1/2 z-10 h-12 w-[4px] -translate-x-1/2 rounded-b-sm bg-[#8b2e2e]"
            aria-hidden
          />
          <div className="relative h-full w-full overflow-hidden rounded-lg shadow-[0_4px_16px_rgba(44,36,32,0.12)] transition-shadow duration-300 group-hover:shadow-[0_6px_24px_rgba(44,36,32,0.16)]">
            <Image
              src={book.cover}
              alt={book.title}
              fill
              className="object-cover"
              sizes="180px"
            />
          </div>
        </div>
      </div>

      {/* Content - balanced two-column with generous spacing */}
      <div className="relative flex flex-1 flex-col justify-center px-8 pb-10 pt-4 sm:px-10 sm:py-10 sm:pl-6">
        <h3 className="font-(family-name:--font-playfair) text-2xl font-semibold leading-tight text-[#2C2420] sm:text-[1.75rem]">
          {book.title}
        </h3>
        <p className="font-(family-name:--font-playfair) mt-1.5 text-sm font-normal text-[#4A3F35]/80">
          {book.author}
        </p>
        {/* Subtle metadata */}
        <div className="mt-4 flex flex-wrap items-center gap-2 text-[13px] text-[#4A3F35]/65">
          <StarRating rating={book.rating} id={book.id} size="sm" />
          <span>{book.rating}</span>
          <span className="text-[#4A3F35]/50">·</span>
          <span>{book.genre}</span>
        </div>
        <p className="mt-4 line-clamp-3 text-[15px] leading-relaxed text-[#4A3F35]/90">
          {book.synopsis}
        </p>
        <Link
          href={book.discussionUrl}
          className="group/btn mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#8b2e2e] px-5 py-3 text-[15px] font-medium text-white shadow-sm transition-all duration-300 hover:bg-[#6d2323] hover:shadow-md hover:gap-3"
        >
          Join Discussion
          <svg
            className="h-4 w-4 shrink-0 opacity-70 transition-transform duration-300 group-hover/btn:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>

        {/* Minimal monoline wine glass - bottom corner */}
        <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6">
          <WineGlassIcon className="h-6 w-6 text-[#8b2e2e]/30" />
        </div>
      </div>
    </article>
  );
}
