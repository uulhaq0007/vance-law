import Emblem from '../ui/Emblem'
import { partners } from '../../data/firm'

/**
 * Client/affiliate strip. Each mark is set as type beside the house emblem, so
 * no real company logo is reproduced. The list is doubled for a seamless loop.
 */
export default function Partners() {
  const loop = [...partners, ...partners]

  return (
    <section aria-label="Firm affiliations" className="border-y border-line bg-white py-10">
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-16 hover:[animation-play-state:paused]">
          {loop.map((name, i) => (
            <span key={`${name}-${i}`} className="group flex shrink-0 items-center gap-3 select-none">
              <Emblem className="h-8 w-8 opacity-30 transition-opacity duration-300 group-hover:opacity-100" dark="#909090" gold="#909090" />
              <span className="whitespace-nowrap font-display text-[21px] font-bold uppercase tracking-[1.5px] text-body/50 transition-colors duration-300 group-hover:text-gold">
                {name}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
