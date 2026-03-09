"use client";

import Image from "next/image";
import Link from "next/link";
import upcomingReadsData from "./data/upcoming-reads.json";

const featuredBook = {
  title: "The Midnight Library",
  author: "Matt Haig",
  cover: "/book1.jpg",
  description:
    "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.",
};

const podcastEpisode = {
  title: "Fantasy That Changed Us",
  episode: "Ep. 12",
  duration: "42 min",
  date: "March 5, 2025",
  description:
    "We dive into Matt Haig's beloved novel about regret, possibility, and the countless lives we might have led—with a side of Malbec.",
};

type BookReview = {
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

const upcomingReads: BookReview[] = upcomingReadsData as BookReview[];

function StarRating({ rating, id, size = "md" }: { rating: number; id?: string; size?: "sm" | "md" }) {
  const display = Math.round(rating * 2) / 2;
  const full = Math.floor(display);
  const hasHalf = display % 1 === 0.5;
  const empty = 5 - full - (hasHalf ? 1 : 0);
  const gradientId = `half-star-${id ?? "default"}`;
  const sizeClass = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";
  const StarSvg = ({ filled }: { filled: boolean }) => (
    <svg className={`${sizeClass} ${filled ? "text-amber-600/90" : "text-amber-600/25"}`} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: full }).map((_, i) => (
        <StarSvg key={`full-${i}`} filled />
      ))}
      {hasHalf && (
        <svg className={`${sizeClass} text-amber-600/90`} viewBox="0 0 20 20" aria-hidden>
          <defs>
            <linearGradient id={gradientId}>
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="50%" stopColor="#e5e7eb" />
            </linearGradient>
          </defs>
          <path fill={`url(#${gradientId})`} d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )}
      {Array.from({ length: empty }).map((_, i) => (
        <StarSvg key={`empty-${i}`} filled={false} />
      ))}
    </div>
  );
}

function BookCard({ book }: { book: BookReview }) {
  return (
    <article className="group relative flex flex-col overflow-visible rounded-[18px] border border-[#8b2e2e]/20 bg-white shadow-[0_2px_12px_rgba(139,46,46,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(139,46,46,0.1)] sm:flex-row sm:items-stretch">
      {/* Book cover - overlaps card slightly, layered depth */}
      <div className="relative flex shrink-0 justify-center px-8 pt-8 sm:justify-start sm:pl-10 sm:pt-10 sm:pr-0 sm:pb-10">
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

const discussionTopics = [
  {
    title: "Which ending would you choose?",
    replies: 23,
    excerpt: "If you had access to the midnight library, which life would you try first?",
  },
  {
    title: "Book & wine pairings for March",
    replies: 18,
    excerpt: "Share your perfect wine recommendations for our current read.",
  },
  {
    title: "Upcoming meetup: March 15",
    replies: 12,
    excerpt: "We're meeting at The Reading Room. See you there!",
  },
];

function WineGlassIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M8 22h8" />
      <path d="M7 10h10" />
      <path d="M12 15v7" />
      <path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-5L12 2l-3 3c-1.5 1-2 3-2 5a5 5 0 0 0 5 5z" />
    </svg>
  );
}

function WaveformIcon({ className }: { className?: string }) {
  const bars = [0.35, 0.55, 0.85, 0.5, 0.75, 0.45, 0.7, 0.5, 0.6, 0.9, 0.4, 0.65];
  return (
    <div className={`flex items-end justify-center gap-1 h-12 ${className || ""}`} aria-hidden>
      {bars.map((h, i) => (
        <div
          key={i}
          className="w-1.5 rounded-full bg-[#8b2e2e]/50"
          style={{ height: `${h * 100}%`, minHeight: 6 }}
        />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7efe8]">
      {/* Upcoming episode alert - scrolling above nav */}
      <div className="border-b border-[#8b2e2e]/10 bg-[#f0e8e0]/70 text-[#8b2e2e]">
        <div className="mx-auto max-w-7xl px-4 py-2 text-xs sm:px-6 sm:text-sm">
          <div className="bw-marquee-track">
            <div className="bw-marquee">
              <span className="mr-12 font-medium">
                Upcoming episode: {podcastEpisode.title} — {podcastEpisode.date}
              </span>
              <span className="mr-12 font-medium">
                Upcoming episode: {podcastEpisode.title} — {podcastEpisode.date}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Nav - logo from books_and_wines */}
      <nav className="sticky top-0 z-40 border-b border-[#8b2e2e]/15 bg-[#f7efe8]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="flex items-center">
            <Image
              src="/books_and_wines.jpg"
              alt="Books & Wines Book Club"
              width={180}
              height={70}
              className="h-12 w-auto object-contain sm:h-14"
              priority
            />
          </Link>
          <div className="flex items-center gap-6 text-sm text-[#4A3F35]">
            <Link href="/books" className="hover:text-[#8b2e2e] transition-colors">
              Books
            </Link>
            <Link href="/podcast" className="hover:text-[#8b2e2e] transition-colors">
              Podcast
            </Link>
            <Link href="/discussions" className="hover:text-[#8b2e2e] transition-colors">
              Community
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero - two columns: left content, right episode card */}
      <section className="relative mx-auto max-w-7xl px-4 pt-10 pb-12 sm:px-6 sm:pt-12 sm:pb-14 lg:pt-16 lg:pb-16">
        {/* Wine glass accent */}
        <div className="absolute right-4 top-6 text-[#8b2e2e]/15 md:right-6" aria-hidden>
          <WineGlassIcon className="h-6 w-6 md:h-7 md:w-7" />
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* Left: Title, subtitle, buttons, hosts */}
          <div>
            <h1 className="font-(family-name:--font-playfair) text-5xl font-semibold tracking-tight text-[#8b2e2e] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem] leading-[0.95]">
              BOOKS & WINES
            </h1>
            <p className="font-(family-name:--font-playfair) mt-1 text-base text-[#8b2e2e]/90 sm:text-lg">
              Book Club
            </p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#4A3F35] sm:text-xl md:text-2xl">
              A podcast and book club where three friends{" "}
              <span className="inline-flex align-middle">
                <span className="inline-flex items-center rounded-full border-2 border-[#8b2e2e]/50 p-1.5">
                  <span className="flex -space-x-2">
                    {[
                      { src: "/host1.jpg", name: "Host1" },
                      { src: "/host2.jpg", name: "Host2" },
                      { src: "/host3.jpg", name: "Host3" },
                    ].map((host) => (
                      <span
                        key={host.name}
                        className="relative block h-8 w-8 shrink-0 overflow-hidden rounded-full ring-2 ring-[#f7efe8] sm:h-9 sm:w-9"
                        title={host.name}
                      >
                        <Image
                          src={host.src}
                          alt={host.name}
                          fill
                          className="object-cover"
                          sizes="36px"
                        />
                      </span>
                    ))}
                    <Link
                      href="/hosts"
                      className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#8b2e2e] text-white ring-2 ring-[#f7efe8] transition-colors hover:bg-[#6d2323] sm:h-9 sm:w-9"
                      aria-label="View all hosts"
                    >
                      <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7v6M17 7h-6" />
                      </svg>
                    </Link>
                  </span>
                </span>
              </span>{" "}
              read, discuss, and recommend the books we can&apos;t stop thinking about
              — always paired with a good glass of wine.
            </p>
            {/* Equal-width buttons */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/podcast"
                className="flex w-full justify-center rounded-full border-2 border-[#8b2e2e] bg-[#8b2e2e] px-5 py-3 text-sm font-medium text-white transition-all hover:bg-[#6d2323] hover:border-[#6d2323] sm:flex-1"
              >
                Listen to the Podcast
              </Link>
              <Link
                href="/books"
                className="flex w-full justify-center rounded-full border-2 border-[#8b2e2e] bg-transparent px-5 py-3 text-sm font-medium text-[#8b2e2e] transition-all hover:bg-[#8b2e2e]/10 sm:flex-1"
              >
                Browse Books
              </Link>
            </div>
          </div>

          {/* Right: Latest episode card - book left, text right */}
          <div className="relative overflow-hidden rounded-2xl border border-[#8b2e2e]/18 bg-white shadow-[0_6px_26px_rgba(139,46,46,0.14)]">
            <div className="relative grid gap-6 p-5 sm:p-6 md:p-7 md:grid-cols-[auto,minmax(0,1fr)] md:items-start">
              {/* Left: book cover only */}
              <div className="relative h-36 w-28 overflow-hidden rounded-lg shadow-md sm:h-40 sm:w-32">
                <Image
                  src={featuredBook.cover}
                  alt={featuredBook.title}
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>

              {/* Right: text content + play */}
              <div className="flex flex-col gap-3 md:gap-4">
                <p className="text-xs font-medium uppercase tracking-wider text-[#8b2e2e]">
                  Latest Episode
                </p>
                <h3 className="font-(family-name:--font-playfair) text-xl font-semibold text-[#2C2420] sm:text-2xl">
                  {podcastEpisode.title}
                </h3>
                <p className="text-sm font-medium text-[#4A3F35]">
                  {podcastEpisode.episode} · {podcastEpisode.duration}
                </p>
                <p className="max-w-md text-sm leading-relaxed text-[#4A3F35]">
                  {podcastEpisode.description}
                </p>
                <div className="mt-2">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-full bg-[#8b2e2e] px-6 py-2.5 text-sm font-medium text-white shadow-md transition-all hover:bg-[#6d2323] hover:shadow-lg"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Play Episode
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Reads - close to hero */}
      <section className="relative mx-auto max-w-7xl px-4 pt-8 pb-12 sm:px-6 sm:pt-10 sm:pb-14">
        <div className="absolute right-4 top-10 text-[#8b2e2e]/10" aria-hidden>
          <WineGlassIcon className="h-5 w-5" />
        </div>

        <h2 className="font-(family-name:--font-playfair) mb-6 text-xl font-semibold text-[#8b2e2e] sm:mb-8 sm:text-2xl">
          Latest Reads
        </h2>
        <div className="-mx-4 flex gap-5 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 sm:gap-6 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#8b2e2e]/20">
          {upcomingReads.slice(0, 6).map((book) => (
            <Link
              key={book.id}
              href={book.discussionUrl}
              className="group flex shrink-0 flex-col"
            >
              <div className="relative h-[180px] w-[125px] overflow-hidden rounded-lg shadow-md transition-all group-hover:-translate-y-0.5 group-hover:shadow-lg sm:h-[200px] sm:w-[140px]">
                <Image
                  src={book.cover}
                  alt={book.title}
                  fill
                  className="object-cover"
                  sizes="165px"
                />
              </div>
              <p className="mt-3 max-w-[125px] truncate text-center text-xs font-medium text-[#2C2420] sm:max-w-[140px] sm:text-sm">
                {book.title}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Now Reading */}
      <section className="border-t border-[#8b2e2e]/10 bg-[#f0e8e0]/50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
          <h2 className="font-(family-name:--font-playfair) mb-10 text-3xl font-semibold tracking-tight text-[#8b2e2e] md:text-4xl">
            Now Reading
          </h2>
          <div className="rounded-2xl border border-[#8b2e2e]/15 bg-white p-6 shadow-[0_4px_20px_rgba(139,46,46,0.06)] transition-shadow hover:shadow-[0_8px_30px_rgba(139,46,46,0.1)] md:flex md:gap-8 md:p-8">
            <div className="relative mb-6 h-[320px] w-[220px] shrink-0 overflow-hidden rounded-xl md:mb-0 md:h-[380px] md:w-[260px]">
              <Image
                src={featuredBook.cover}
                alt={featuredBook.title}
                fill
                className="object-cover"
                sizes="260px"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center">
              <p className="mb-1 text-sm font-medium uppercase tracking-wider text-[#8b2e2e]">
                March pick
              </p>
              <h3 className="font-(family-name:--font-playfair) mb-2 text-2xl font-semibold text-[#2C2420] md:text-3xl">
                {featuredBook.title}
              </h3>
              <p className="mb-4 text-[#4A3F35]">{featuredBook.author}</p>
              <p className="text-[#4A3F35] leading-relaxed">{featuredBook.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Podcast Episode */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
        <h2 className="font-(family-name:--font-playfair) mb-10 text-3xl font-semibold tracking-tight text-[#8b2e2e] md:text-4xl">
          Latest Podcast Episode
        </h2>
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
              {podcastEpisode.title}
            </h3>
            <p className="mb-3 text-sm text-[#4A3F35]">
              {podcastEpisode.date} · {podcastEpisode.duration}
            </p>
            <p className="text-[#4A3F35] leading-relaxed">
              {podcastEpisode.description}
            </p>
          </div>
          <div className="mt-4 hidden md:block">
            <WaveformIcon />
          </div>
        </div>
      </section>

      {/* Upcoming Reads */}
      <section className="border-t border-[#8b2e2e]/15 bg-[#f0e8e0]/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
          <h2 className="font-(family-name:--font-playfair) mb-10 text-3xl font-semibold tracking-tight text-[#8b2e2e] md:text-4xl">
            Upcoming Reads
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {upcomingReads.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      {/* Community Discussion */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
        <h2 className="font-(family-name:--font-playfair) mb-10 text-3xl font-semibold tracking-tight text-[#8b2e2e] md:text-4xl">
          Community Discussion
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {discussionTopics.map((topic, i) => (
            <Link
              key={i}
              href={`/discussions/${i}`}
              className="block rounded-2xl border border-[#8b2e2e]/15 bg-white p-6 shadow-[0_4px_20px_rgba(139,46,46,0.06)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(139,46,46,0.1)]"
            >
              <h3 className="font-(family-name:--font-playfair) mb-2 text-lg font-semibold text-[#2C2420]">
                {topic.title}
              </h3>
              <p className="mb-4 line-clamp-2 text-sm text-[#4A3F35]">
                {topic.excerpt}
              </p>
              <span className="text-sm font-medium text-[#8b2e2e]">
                {topic.replies} replies
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer - logo from books_and_wines */}
      <footer className="border-t border-[#8b2e2e]/15 bg-[#f0e8e0]/50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/books_and_wines.jpg"
                alt="Books & Wines Book Club"
                width={140}
                height={55}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <div className="flex gap-8 text-sm text-[#4A3F35]">
              <Link href="/about" className="hover:text-[#8b2e2e] transition-colors">
                About
              </Link>
              <Link href="/join" className="hover:text-[#8b2e2e] transition-colors">
                Join
              </Link>
              <Link href="/contact" className="hover:text-[#8b2e2e] transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-[#4A3F35]/80 sm:text-left">
            © {new Date().getFullYear()} Books & Wines. A book club for story lovers.
          </p>
        </div>
      </footer>
    </div>
  );
}
