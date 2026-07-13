export function NotFoundIllustration() {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto w-full max-w-sm h-auto"
      role="img"
      aria-label="Illustration of a misplaced document"
    >
      <circle cx="200" cy="150" r="130" className="fill-brand-50 dark:fill-ink-800" />
      <rect x="130" y="80" width="140" height="180" rx="12" className="fill-white stroke-brand-200 dark:fill-ink-900 dark:stroke-ink-700" strokeWidth="2" />
      <rect x="152" y="110" width="96" height="10" rx="5" className="fill-brand-100 dark:fill-ink-700" />
      <rect x="152" y="132" width="70" height="8" rx="4" className="fill-ink-200 dark:fill-ink-700" />
      <rect x="152" y="150" width="96" height="8" rx="4" className="fill-ink-200 dark:fill-ink-700" />
      <rect x="152" y="168" width="60" height="8" rx="4" className="fill-ink-200 dark:fill-ink-700" />
      <circle cx="270" cy="205" r="34" fill="#2E5AEB" />
      <path
        d="M258 205h24M270 193v24"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
        transform="rotate(45 270 205)"
      />
    </svg>
  );
}
