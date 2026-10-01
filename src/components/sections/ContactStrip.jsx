import LawIcon from '../ui/LawIcon'
import Reveal from '../ui/Reveal'
import { firm } from '../../data/firm'

const blocks = [
  { icon: 'pin', title: 'Visit Our Office', lines: [firm.address] },
  { icon: 'phone', title: 'Get In Touch With Us', lines: [`${firm.phone}, ${firm.phoneAlt}`, firm.email] },
  { icon: 'clock', title: 'Office Hours', lines: [firm.hoursFull] },
]

export default function ContactStrip() {
  return (
    <section className="bg-navy pb-14 pt-16">
      <div className="container">
        <div className="grid gap-12 text-center md:grid-cols-3">
          {blocks.map((b, i) => (
            <Reveal key={b.title} delay={i * 110}>
              <div className="group">
                <span className="mx-auto grid h-16 w-16 place-items-center bg-gold text-white transition-transform duration-500 group-hover:-translate-y-1">
                  <LawIcon name={b.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-[21px] font-bold text-white">{b.title}</h3>
                <span className="mx-auto mt-3 block h-px w-14 bg-white/35" />
                <div className="mt-4 space-y-1 text-[15px] text-white/70">
                  {b.lines.map((l) => (
                    <p key={l}>{l}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
