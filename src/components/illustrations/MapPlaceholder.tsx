export function MapPlaceholder() {
  return (
    <svg
      viewBox="0 0 400 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      role="img"
      aria-label="Stylised map showing the Taxivo office location"
    >
      <rect width="400" height="260" fill="#EEF3FF" />
      <g stroke="#B9CFFD" strokeWidth="1.5">
        <path d="M0 60H400" />
        <path d="M0 120H400" />
        <path d="M0 180H400" />
        <path d="M80 0V260" />
        <path d="M180 0V260" />
        <path d="M280 0V260" />
        <path d="M330 0V260" />
      </g>
      <path d="M0 150 C80 120, 140 170, 220 140 S340 90, 400 130" stroke="#8FADFB" strokeWidth="3" fill="none" />
      <circle cx="200" cy="120" r="14" fill="#0C1B4A" />
      <path d="M200 92c-16 0-28 12-28 28 0 21 28 46 28 46s28-25 28-46c0-16-12-28-28-28Z" fill="#2E5AEB" />
      <circle cx="200" cy="118" r="9" fill="#FFFFFF" />
    </svg>
  );
}
