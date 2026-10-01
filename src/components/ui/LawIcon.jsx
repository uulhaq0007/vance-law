/**
 * Hand-authored line icons for practice areas and value props, so no
 * third-party icon-font glyphs are reproduced. 24×24 grid, 1.5 stroke.
 */
const paths = {
  briefcase: (
    <>
      <path d="M3.5 8.5h17v11h-17z" />
      <path d="M9 8.5V6.2A1.7 1.7 0 0110.7 4.5h2.6A1.7 1.7 0 0115 6.2v2.3" />
      <path d="M3.5 13h17M10.8 13v2h2.4v-2" />
    </>
  ),
  family: (
    <>
      <circle cx="8" cy="7" r="2.6" />
      <circle cx="16.4" cy="8.2" r="2.1" />
      <path d="M3.5 20v-3a4.5 4.5 0 019 0v3" />
      <path d="M14 20v-2.4a3.6 3.6 0 016.5-2.1" />
      <path d="M20.5 20v-2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.2l7.3 2.7v5.4c0 4.3-2.9 8-7.3 9.5-4.4-1.5-7.3-5.2-7.3-9.5V5.9z" />
      <path d="M12 8.4v4.2M12 15.6h.01" />
    </>
  ),
  scroll: (
    <>
      <path d="M6.5 3.5h11a2 2 0 012 2v13a2 2 0 01-2 2h-11a2 2 0 01-2-2v-13a2 2 0 012-2z" />
      <path d="M8.5 8h7M8.5 11.5h7M8.5 15h4" />
    </>
  ),
  scales: (
    <>
      <path d="M12 4.5v15M8 19.5h8" />
      <path d="M5 8h14" />
      <path d="M5 8l-2.6 5.4h5.2zM19 8l-2.6 5.4h5.2z" />
      <circle cx="12" cy="4.6" r="1.2" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.4" />
      <path d="M3.6 12h16.8" />
      <path d="M12 3.6c2.2 2.4 3.3 5.3 3.3 8.4s-1.1 6-3.3 8.4c-2.2-2.4-3.3-5.3-3.3-8.4s1.1-6 3.3-8.4z" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8.2" r="3.5" />
      <path d="M5 20v-1.2A5.2 5.2 0 0110.2 13.6h3.6A5.2 5.2 0 0119 18.8V20" />
    </>
  ),
  gavel: (
    <>
      <path d="M13.6 4.6l5.8 5.8-2.4 2.4-5.8-5.8z" />
      <path d="M11.6 8.2l-7 7 2.6 2.6 7-7" />
      <path d="M4.5 20.5h8" />
    </>
  ),
  edit: (
    <>
      <path d="M4.5 19.5h15" />
      <path d="M15.4 4.9l3.2 3.2-9 9-4 .8.8-4z" />
    </>
  ),
  search: (
    <>
      <circle cx="10.8" cy="10.8" r="6.3" />
      <path d="M15.4 15.4l4.6 4.6" />
    </>
  ),
  phone: (
    <path d="M7 3.8l2.4 4-1.7 1.9a12 12 0 006.6 6.6l1.9-1.7 4 2.4-.6 3a1.6 1.6 0 01-1.8 1.3C10.9 20.3 3.7 13.1 2.8 5.2A1.6 1.6 0 014.1 3.4z" />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.4" />
      <path d="M12 7v5.3l3.3 2" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21.2s6.6-5.6 6.6-10.4a6.6 6.6 0 10-13.2 0C5.4 15.6 12 21.2 12 21.2z" />
      <circle cx="12" cy="10.6" r="2.5" />
    </>
  ),
  quote: <path d="M9.6 5.5C6.4 6.9 4.4 9.8 4.4 13.4c0 3 1.8 5.1 4.3 5.1 2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.5-3.3-3.5-.4 0-.8.1-1 .2.3-1.7 1.7-3.4 3.6-4.4zm9.5 0c-3.2 1.4-5.2 4.3-5.2 7.9 0 3 1.8 5.1 4.3 5.1 2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.5-3.3-3.5-.4 0-.8.1-1 .2.3-1.7 1.7-3.4 3.6-4.4z" />,
}

export default function LawIcon({ name, className = 'h-8 w-8' }) {
  const shape = paths[name] ?? paths.scales
  const filled = name === 'quote'

  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke={filled ? 'none' : 'currentColor'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {shape}
    </svg>
  )
}
