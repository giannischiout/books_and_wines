"use client";

import Image from "next/image";

const decorations = [
  {
    id: "deco1",
    src: "/deco1.png",
    position: "left-[8%] top-[15%]",
    size: 80,
    delay: "0s",
    duration: "8s",
  },
  {
    id: "deco2",
    src: "/deco1.png",
    position: "right-[12%] top-[35%]",
    size: 96,
    delay: "2s",
    duration: "10s",
  },
  {
    id: "deco3",
    src: "/deco1.png",
    position: "left-[15%] bottom-[25%]",
    size: 72,
    delay: "1s",
    duration: "9s",
  },
] as const;

export function FloatingDecorations() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {decorations.map(({ id, src, position, size, delay, duration }) => (
        <div
          key={id}
          className={`absolute bw-float  ${position}`}
          style={{
            animationDelay: delay,
            animationDuration: duration,
          }}
        >
          <Image
            src={src}
            alt=""
            width={size}
            height={size}
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
}
