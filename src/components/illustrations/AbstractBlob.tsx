import { cn } from "@/lib/utils";

export function AbstractBlob({ className }: { className?: string }) {
  return (
    <svg
      className={cn("pointer-events-none absolute -z-10 blur-3xl", className)}
      width="600"
      height="600"
      viewBox="0 0 600 600"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M431 100C500 150 550 250 520 340C490 430 380 460 290 480C200 500 90 480 50 400C10 320 40 200 120 130C200 60 362 50 431 100Z"
        fill="url(#blob-gradient)"
        fillOpacity="0.25"
      />
      <defs>
        <linearGradient id="blob-gradient" x1="0" y1="0" x2="600" y2="600" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2E5AEB" />
          <stop offset="1" stopColor="#0C1B4A" />
        </linearGradient>
      </defs>
    </svg>
  );
}
