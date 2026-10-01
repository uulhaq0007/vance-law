import { useCallback, useEffect, useState } from 'react'
import LawIcon from '../ui/LawIcon'
import Reveal from '../ui/Reveal'
import { testimonials, values } from '../../data/firm'

/** Split band: navy testimonial carousel on the left, value props on the right. */
export default function TestimonialsValues() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const go = useCallback((next) => {
    setIndex((cur) => (next + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (paused) return
    const t = setTimeout(() => go(index + 1), 7000)
    return () => clearTimeout(t)
  }, [index, paused, go])

  return (
    <section className="grid lg:grid-cols-2">
      {/* Testimonials */}
      <div
        className="relative overflow-hidden bg-navy px-6 py-16 lg:py-20 lg:pl-[max(1.5rem,calc((100vw-1170px)/2))] lg:pr-16"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <img
          src="/images/cta-bg.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-10"
          loading="lazy"
        />

        <div className="relative">
          <div className="flex items-center gap-5">
            <span className="grid h-[62px] w-[62px] shrink-0 place-items-center rounded-full border border-white/35 text-white">
              <LawIcon name="quote" className="h-6 w-6" />
            </span>
            <div>
              <h2 className="sec-title sec-title-light">What Our Clients Say</h2>
              <div className="ornament">
                <span className="ornament-slash">//</span>
              </div>
            </div>
          </div>

          <div className="relative mt-9 min-h-[260px] sm:min-h-[230px]">
            {testimonials.map((t, i) => (
              <blockquote
                key={t.name}
                className={`absolute inset-x-0 top-0 transition-all duration-700 ${
                  i === index ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
                }`}
                aria-hidden={i !== index}
              >
                <p className="text-[17px] leading-[1.8] text-white/85">{t.quote}</p>

                <span className="my-7 block h-px w-24 bg-white/30" />

                <footer className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="h-14 w-14 object-cover" loading="lazy" />
                  <div>
                    <cite className="block font-display text-[17px] font-bold not-italic text-white">{t.name}</cite>
                    <span className="text-[14px] italic text-gold">{t.role}</span>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="mt-4 flex gap-2.5">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial ${i + 1}`}
                aria-current={i === index}
                className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                  i === index ? 'bg-gold' : 'bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-mist px-6 py-16 lg:py-20 lg:pl-16 lg:pr-[max(1.5rem,calc((100vw-1170px)/2))]">
        <h2 className="sec-title">Why Clients Choose Us</h2>
        <div className="ornament">
          <span className="ornament-slash">//</span>
        </div>

        <div className="mt-9 space-y-8">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 110}>
              <div className="flex gap-5">
                <span className="grid h-[58px] w-[58px] shrink-0 place-items-center rounded-full bg-gold text-white">
                  <LawIcon name={v.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-[19px] font-bold text-ink">{v.title}</h3>
                  <p className="mt-1.5 text-[15px]">{v.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
