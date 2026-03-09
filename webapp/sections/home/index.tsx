"use client";

import Image from "next/image";
import Link from "next/link";
import { BookCard } from "@/components/BookCard";
import { DiscussionCard } from "@/components/DiscussionCard";
import { Footer } from "@/components/Footer";
import { LatestPodcastRow } from "@/components/LatestPodcastRow";
import { Nav } from "@/components/Nav";
import { PodcastCard } from "@/components/PodcastCard";
import type { BookReview } from "@/components/BookCard";
import upcomingReadsData from "@/app/data/upcoming-reads.json";

const featuredBook = {
  title: "The Midnight Library",
  author: "Matt Haig",
  cover: "/book1.jpg",
  description:
    "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.",
};

const podcastEpisodes = [
  {
    title: "Romance That Made Us Cry",
    episode: "Ep. 10",
    duration: "36 min",
    date: "Feb 21, 2025",
    description: "Sarah J. Maas and the worlds we escape into—paired with a smooth Merlot.",
  },
  {
    title: "Fantasy That Changed Us",
    episode: "Ep. 11",
    duration: "38 min",
    date: "Feb 28, 2025",
    description: "The books that redefine what we think we know about possibility and second chances.",
  },
  {
    title: "The Midnight Library",
    episode: "Ep. 12",
    duration: "42 min",
    date: "March 5, 2025",
    description:
      "We dive into Matt Haig's beloved novel about regret, possibility, and the countless lives we might have led—with a side of Malbec.",
  },
  {
    title: "Mysteries We Couldn't Put Down",
    episode: "Ep. 13",
    duration: "45 min",
    date: "March 12, 2025",
    description: "Thrillers that keep you turning pages late into the night—and the perfect wine to match.",
  },
];

const upcomingReads: BookReview[] = upcomingReadsData as BookReview[];

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

export default function Home() {
  return (
    <div className="min-h-screen bw-grid-bg">
      {/* Upcoming episode alert - scrolling above nav */}
      <div className="border-b border-[#8b2e2e]/10 bg-[#f0e8e0]/70 text-[#8b2e2e]">
        <div className="mx-auto max-w-7xl px-4 py-2 text-xs sm:px-6 sm:text-sm">
          <div className="bw-marquee-track">
            <div className="bw-marquee">
              <span className="mr-12 font-medium">
                Upcoming episode: {podcastEpisodes[3].title} — {podcastEpisodes[3].date}
              </span>
              <span className="mr-12 font-medium">
                Upcoming episode: {podcastEpisodes[3].title} — {podcastEpisodes[3].date}
              </span>
            </div>
          </div>
        </div>
      </div>

      <Nav />

      {/* Hero - two columns: left content, right episode card */}
      <section className="relative mx-auto max-w-7xl overflow-visible px-4 pt-10 pb-12 sm:px-6 sm:pt-12 sm:pb-14 lg:pt-16 lg:pb-16">
        <div className="grid gap-10 overflow-visible lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* Left: Title, subtitle, buttons, hosts */}
          <div>
            <h1 className="font-(family-name:--font-playfair) text-5xl font-semibold leading-[0.95] tracking-tight text-[#8b2e2e] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem]">
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
                      <svg
                        className="h-4 w-4 sm:h-5 sm:w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 17L17 7M17 7v6M17 7h-6"
                        />
                      </svg>
                    </Link>
                  </span>
                </span>
              </span>{" "}
              read, discuss, and recommend the books we can&apos;t stop thinking about
              — always paired with a good glass of wine.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/podcast"
                className="flex w-full justify-center rounded-full border-2 border-[#8b2e2e] bg-[#8b2e2e] px-5 py-3 text-sm font-medium text-white transition-all hover:border-[#6d2323] hover:bg-[#6d2323] sm:flex-1"
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

          <PodcastCard
            episode={podcastEpisodes[podcastEpisodes.length - 1]}
            heroImage="/crew.png"
            size="default"
          />
        </div>
      </section>

      {/* Latest Reads */}
      <section className="relative mx-auto max-w-7xl px-4 pt-8 pb-12 sm:px-6 sm:pt-10 sm:pb-14">

        <h2 className="font-(family-name:--font-playfair) mb-6 text-xl font-semibold text-[#8b2e2e] sm:mb-8 sm:text-2xl">
          Latest Reads
        </h2>
        <div className="-mx-4 flex gap-5 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:gap-6 sm:px-6 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#8b2e2e]/20">
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
        <LatestPodcastRow episode={podcastEpisodes[3]} />
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
            <DiscussionCard key={i} topic={topic} href={`/discussions/${i}`} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
