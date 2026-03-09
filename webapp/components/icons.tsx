export function WineGlassIcon({ className }: { className?: string }) {
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

export function WaveformIcon({ className }: { className?: string }) {
  const bars = [0.35, 0.55, 0.85, 0.5, 0.75, 0.45, 0.7, 0.5, 0.6, 0.9, 0.4, 0.65];
  return (
    <div
      className={`flex h-12 items-end justify-center gap-1 ${className ?? ""}`}
      aria-hidden
    >
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

export function StarRating({
  rating,
  id,
  size = "md",
}: {
  rating: number;
  id?: string;
  size?: "sm" | "md";
}) {
  const display = Math.round(rating * 2) / 2;
  const full = Math.floor(display);
  const hasHalf = display % 1 === 0.5;
  const empty = 5 - full - (hasHalf ? 1 : 0);
  const gradientId = `half-star-${id ?? "default"}`;
  const sizeClass = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";
  const StarSvg = ({ filled }: { filled: boolean }) => (
    <svg
      className={`${sizeClass} ${filled ? "text-amber-600/90" : "text-amber-600/25"}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
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
          <path
            fill={`url(#${gradientId})`}
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
      )}
      {Array.from({ length: empty }).map((_, i) => (
        <StarSvg key={`empty-${i}`} filled={false} />
      ))}
    </div>
  );
}
