import { Link } from 'react-router-dom'
import Emblem from './Emblem'
import { firm } from '../../data/firm'

/**
 * Split wordmark with the emblem centred between the two partner names,
 * mirroring the classic law-firm lockup. `variant="light"` for dark surfaces.
 */
export default function Logo({ variant = 'dark', size = 'md', className = '' }) {
  const light = variant === 'light'
  const type = size === 'sm' ? 'text-[15px]' : 'text-[19px] sm:text-[22px]'
  const mark = size === 'sm' ? 'h-9 w-9' : 'h-12 w-12 sm:h-14 sm:w-14'

  return (
    <Link
      to="/"
      className={`group inline-flex items-center gap-2 sm:gap-3 ${className}`}
      aria-label={`${firm.name} — home`}
    >
      <span
        className={`font-display font-bold uppercase tracking-[2px] ${type} ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        {firm.nameLeft}
      </span>
      <Emblem className={`${mark} shrink-0 transition-transform duration-500 group-hover:scale-105`} dark={light ? '#ffffff' : '#223555'} />
      <span
        className={`font-display font-bold uppercase tracking-[2px] ${type} ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        {firm.nameRight}
      </span>
    </Link>
  )
}
