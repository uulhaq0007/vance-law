import { Link } from 'react-router-dom'
import LawIcon from '../ui/LawIcon'
import Reveal from '../ui/Reveal'
import { practiceAreas } from '../../data/firm'

export default function PracticeAreas({ limit = 4, showTitle = false }) {
  const list = limit ? practiceAreas.slice(0, limit) : practiceAreas

  return (
    <section className="section">
      <div className="container">
        {showTitle && (
          <div className="mb-14 text-center">
            <Reveal>
              <h2 className="sec-title">Our Practice Areas</h2>
            </Reveal>
            <Reveal delay={80}>
              <div className="ornament ornament-center">
                <span className="ornament-slash">//</span>
              </div>
            </Reveal>
          </div>
        )}

        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((area, i) => (
            <Reveal key={area.slug} delay={i * 100} className="h-full">
              <article className="group flex h-full flex-col">
                <div className="flex items-start gap-4">
                  <span className="shrink-0 text-gold transition-transform duration-500 group-hover:-translate-y-1">
                    <LawIcon name={area.icon} className="h-10 w-10" />
                  </span>
                  <div>
                    <p className="font-display text-[15px] italic text-body">{area.label}</p>
                    <h3 className="mt-1 font-display text-[19px] font-bold leading-snug text-ink transition-colors duration-300 group-hover:text-gold">
                      {area.title}
                    </h3>
                  </div>
                </div>

                <span className="my-5 block h-px w-full bg-line" />

                <p className="flex-1 text-[15px]">{area.text}</p>

                <Link to={`/practice/${area.slug}`} className="btn-navy mt-6 self-start">
                  Read More
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
