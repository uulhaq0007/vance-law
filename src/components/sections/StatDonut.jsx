import { useInView } from '../../hooks/useInView'
import { useCountUp } from '../../hooks/useCountUp'
import { stats } from '../../data/firm'

const TONES = {
  navy: '#223555',
  gold: '#b89b5e',
  light: '#3d5680',
  deep: '#16203a',
}

/**
 * Donut chart mirroring the reference's caseload graphic. Segments are sized by
 * each stat's share of the total and drawn with stroke-dasharray.
 */
export default function StatDonut() {
  const [ref, inView] = useInView({ threshold: 0.35 })

  const R = 54
  const C = 2 * Math.PI * R
  const total = stats.reduce((sum, s) => sum + s.value, 0)

  let offset = 0
  const segments = stats.map((s) => {
    const share = s.value / total
    const seg = { ...s, dash: share * C, offset }
    offset += share * C
    return seg
  })

  const headline = stats[0]
  const headlineValue = useCountUp(headline.value, inView, 2000)

  return (
    <div ref={ref} className="mt-6">
      <div className="relative mx-auto h-[210px] w-[210px]">
        <svg viewBox="0 0 140 140" className="h-full w-full -rotate-90">
          <circle cx="70" cy="70" r={R} fill="none" stroke="#eeeeee" strokeWidth="30" />
          {segments.map((s) => (
            <circle
              key={s.label}
              cx="70"
              cy="70"
              r={R}
              fill="none"
              stroke={TONES[s.tone]}
              strokeWidth="30"
              strokeDasharray={`${inView ? s.dash : 0} ${C}`}
              strokeDashoffset={-s.offset}
              style={{ transition: 'stroke-dasharray 1.4s cubic-bezier(.22,.61,.36,1)' }}
            />
          ))}
        </svg>

        <div className="absolute inset-0 grid place-items-center">
          <div className="grid h-[86px] w-[86px] place-items-center rounded-full bg-gold text-center text-white">
            <div>
              <p className="font-display text-[21px] font-bold leading-none">{headlineValue.toLocaleString()}</p>
              <p className="mt-1 text-[11px] uppercase tracking-wide">{headline.label.split(' ')[0]}</p>
            </div>
          </div>
        </div>
      </div>

      <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5">
        {stats.map((s) => (
          <div key={s.label} className="flex items-center gap-2.5">
            <span className="h-3 w-3 shrink-0" style={{ background: TONES[s.tone] }} />
            <dt className="sr-only">{s.label}</dt>
            <dd className="text-[13px] leading-tight text-ink">
              <span className="font-display font-bold">{s.value.toLocaleString()}</span>{' '}
              <span className="text-body">{s.label}</span>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
