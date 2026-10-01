/**
 * Scales-of-justice emblem inside a laurel ring — drawn for this project so the
 * mark is original rather than a borrowed template logo.
 */
export default function Emblem({ className = 'h-14 w-14', gold = '#b89b5e', dark = '#223555' }) {
  // Laurel leaves generated around the lower half of the ring on both sides.
  const leaves = []
  for (let i = 0; i < 9; i++) {
    const t = -55 + i * 15
    for (const side of [-1, 1]) {
      leaves.push(
        <ellipse
          key={`${i}-${side}`}
          cx="32"
          cy="7.5"
          rx="3.6"
          ry="1.7"
          fill={dark}
          opacity={0.9}
          transform={`rotate(${side * (90 + t)} 32 32) translate(0 -1) rotate(${side * -22} 32 7.5)`}
        />,
      )
    }
  }

  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Scales of justice emblem">
      {leaves}
      {/* Balance */}
      <g stroke={gold} strokeWidth="1.9" fill="none" strokeLinecap="round">
        <path d="M32 20v22M25 43.5h14" />
        <path d="M20 26h24" />
        <path d="M20 26l-4.6 9.4h9.2zM44 26l-4.6 9.4h9.2z" />
      </g>
      <circle cx="32" cy="20" r="2.4" fill={gold} />
      <rect x="24" y="42.5" width="16" height="2.4" rx="1.2" fill={gold} />
    </svg>
  )
}
