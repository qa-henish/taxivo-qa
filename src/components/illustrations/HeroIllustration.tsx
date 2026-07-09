export function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 520 460"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      role="img"
      aria-label="Illustration of a financial dashboard with an upward growth chart"
    >
      <rect x="40" y="40" width="440" height="380" rx="24" fill="#0C1B4A" />
      <rect x="40" y="40" width="440" height="380" rx="24" fill="url(#hero-panel-gradient)" fillOpacity="0.9" />

      {/* Header bar */}
      <rect x="72" y="76" width="140" height="14" rx="7" fill="#FFFFFF" fillOpacity="0.9" />
      <rect x="72" y="100" width="90" height="10" rx="5" fill="#8FADFB" />
      <circle cx="440" cy="90" r="18" fill="#2E5AEB" />
      <path d="M432 90l6 6 10-12" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Stat cards row */}
      <rect x="72" y="136" width="110" height="72" rx="14" fill="#FFFFFF" fillOpacity="0.08" />
      <rect x="72" y="136" width="110" height="72" rx="14" stroke="#5C82F5" strokeOpacity="0.4" />
      <rect x="88" y="152" width="50" height="8" rx="4" fill="#B9CFFD" />
      <rect x="88" y="170" width="70" height="16" rx="6" fill="#FFFFFF" />

      <rect x="198" y="136" width="110" height="72" rx="14" fill="#FFFFFF" fillOpacity="0.08" />
      <rect x="198" y="136" width="110" height="72" rx="14" stroke="#5C82F5" strokeOpacity="0.4" />
      <rect x="214" y="152" width="50" height="8" rx="4" fill="#B9CFFD" />
      <rect x="214" y="170" width="70" height="16" rx="6" fill="#FFFFFF" />

      <rect x="324" y="136" width="124" height="72" rx="14" fill="#2E5AEB" />
      <rect x="340" y="152" width="50" height="8" rx="4" fill="#DCE7FE" />
      <rect x="340" y="170" width="80" height="16" rx="6" fill="#FFFFFF" />

      {/* Chart area */}
      <rect x="72" y="232" width="376" height="148" rx="16" fill="#FFFFFF" fillOpacity="0.06" />
      <polyline
        points="96,340 150,310 204,325 258,270 312,285 366,220 420,240"
        fill="none"
        stroke="#5C82F5"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M96,340 150,310 204,325 258,270 312,285 366,220 420,240 V368 H96 Z"
        fill="url(#hero-chart-gradient)"
        fillOpacity="0.35"
      />
      {[96, 150, 204, 258, 312, 366, 420].map((x, i) => {
        const ys = [340, 310, 325, 270, 285, 220, 240];
        return <circle key={x} cx={x} cy={ys[i]} r="4" fill="#FFFFFF" />;
      })}

      <defs>
        <linearGradient id="hero-panel-gradient" x1="40" y1="40" x2="480" y2="420" gradientUnits="userSpaceOnUse">
          <stop stopColor="#12296F" />
          <stop offset="1" stopColor="#0C1B4A" />
        </linearGradient>
        <linearGradient id="hero-chart-gradient" x1="96" y1="220" x2="96" y2="368" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5C82F5" />
          <stop offset="1" stopColor="#5C82F5" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
