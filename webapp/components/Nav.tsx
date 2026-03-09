"use client";

import Image from "next/image";
import Link from "next/link";

export function Nav() {
  return (
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
          <Link href="/books" className="transition-colors hover:text-[#8b2e2e]">
            Books
          </Link>
          <Link href="/podcast" className="transition-colors hover:text-[#8b2e2e]">
            Podcast
          </Link>
          <Link href="/discussions" className="transition-colors hover:text-[#8b2e2e]">
            Community
          </Link>
        </div>
      </div>
    </nav>
  );
}
