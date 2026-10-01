import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import Emblem from '../ui/Emblem'
import { firm, heroSlides } from '../../data/firm'

const AUTOPLAY = 7500

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const go = useCallback((next) => {
    setIndex((cur) => (next + heroSlides.length) % heroSlides.length)
  }, [])

  useEffect(() => {
    if (paused) return
    const t = setTimeout(() => go(index + 1), AUTOPLAY)
    return () => clearTimeout(t)
  }, [index, paused, go])

  return (
    <section
      className="relative isolate overflow-hidden bg-navy"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Firm introduction"
    >
      {heroSlides.map((s, i) => (
        <div
          key={s.title}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === index ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden={i !== index}
        >
          <img
            src={s.image}
            alt=""
            className={`h-full w-full object-cover ${i === index ? 'animate-slowZoom' : ''}`}
            fetchPriority={i === 0 ? 'high' : 'auto'}
          />
          <div className="absolute inset-0 bg-navy/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/50 to-navy/80" />
        </div>
      ))}

      <div className="container relative flex min-h-[600px] items-center py-20 lg:min-h-[720px]">
        <div className="grid w-full items-center gap-10 lg:grid-cols-12">
          {/* Attorney portrait, framed rather than cut out */}
          <div className="hidden lg:col-span-4 lg:block">
            <div className="relative">
              <img
                src={heroSlides[index].portraitSrc ?? '/images/hero-lawyer.jpg'}
                alt={heroSlides[index].portraitAlt ?? 'Attorney at Vance & Thornbury'}
                className="h-[440px] w-full object-cover object-top"
                loading="eager"
              />
              <span className="pointer-events-none absolute -inset-3 border border-gold/50" />
              <div className="absolute -bottom-5 left-1/2 w-[85%] -translate-x-1/2 bg-gold px-5 py-3 text-center">
                <p className="font-display text-[15px] font-bold uppercase tracking-[1.4px] text-white">
                  Free Case Review
                </p>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="text-center lg:col-span-8 lg:pl-8 lg:text-left">
            {heroSlides.map((s, i) => (i !== index ? null : (
              <div key={s.title}>
                <div className="mb-5 flex justify-center lg:justify-start">
                  <Emblem className="h-14 w-14" dark="#ffffff" />
                </div>
                <p className="mb-3 font-sans text-[13px] font-bold uppercase tracking-[2px] text-gold">{s.eyebrow}</p>
                <h1 className="mx-auto max-w-[720px] font-display text-[30px] font-bold leading-tight text-white sm:text-[42px] lg:mx-0 lg:text-[50px]">
                  {s.title}
                </h1>
                <p className="mx-auto mt-6 max-w-[560px] text-white/70 lg:mx-0">{s.text}</p>

                {s.portrait && (
                  <p className="mt-4 font-display text-[19px] font-bold text-gold">Call: {firm.phoneAlt}</p>
                )}

                <div className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">
                  <Link to={s.primary.to} className="btn-gold">
                    {s.primary.label}
                  </Link>
                  <Link to={s.secondary.to} className="btn-ghost">
                    {s.secondary.label}
                  </Link>
                </div>
              </div>
            )))}
          </div>
        </div>
      </div>

      {/* Controls */}
      <button
        type="button"
        onClick={() => go(index - 1)}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center border border-white/25 text-white transition hover:border-gold hover:bg-gold md:grid"
      >
        <FiChevronLeft className="text-xl" />
      </button>
      <button
        type="button"
        onClick={() => go(index + 1)}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center border border-white/25 text-white transition hover:border-gold hover:bg-gold md:grid"
      >
        <FiChevronRight className="text-xl" />
      </button>

      <div className="absolute inset-x-0 bottom-7 flex justify-center gap-2.5">
        {heroSlides.map((s, i) => (
          <button
            key={s.title}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            className={`h-2.5 transition-all duration-500 ${
              i === index ? 'w-9 bg-gold' : 'w-2.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
