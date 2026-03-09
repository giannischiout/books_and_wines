"use client";

import Link from "next/link";

type DiscussionTopic = {
  title: string;
  replies: number;
  excerpt: string;
};

type DiscussionCardProps = {
  topic: DiscussionTopic;
  href: string;
};

export function DiscussionCard({ topic, href }: DiscussionCardProps) {
  return (
    <Link
      href={href}
      className="block rounded-2xl border border-[#8b2e2e]/15 bg-white p-6 shadow-[0_4px_20px_rgba(139,46,46,0.06)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(139,46,46,0.1)]"
    >
      <h3 className="font-(family-name:--font-playfair) mb-2 text-lg font-semibold text-[#2C2420]">
        {topic.title}
      </h3>
      <p className="mb-4 line-clamp-2 text-sm text-[#4A3F35]">{topic.excerpt}</p>
      <span className="text-sm font-medium text-[#8b2e2e]">{topic.replies} replies</span>
    </Link>
  );
}
