"use client";

import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
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
            <Link href="/about" className="transition-colors hover:text-[#8b2e2e]">
              About
            </Link>
            <Link href="/join" className="transition-colors hover:text-[#8b2e2e]">
              Join
            </Link>
            <Link href="/contact" className="transition-colors hover:text-[#8b2e2e]">
              Contact
            </Link>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-[#4A3F35]/80 sm:text-left">
          © {new Date().getFullYear()} Books & Wines. A book club for story lovers.
        </p>
      </div>
    </footer>
  );
}
