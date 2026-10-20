import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMinus, FiPlus } from 'react-icons/fi'
import PageBanner from '../components/layout/PageBanner'
import ContactStrip from '../components/sections/ContactStrip'
import Reveal from '../components/ui/Reveal'
import SectionTitle from '../components/ui/SectionTitle'
import { faqs, firm } from '../data/firm'

export default function FaqPage() {
  const [open, setOpen] = useState(0)

  return (
    <>
      <PageBanner title="Frequently Asked Questions" crumbs={[{ label: 'FAQ' }]} />

      <section className="section">
        <div className="container">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-8">
              <SectionTitle
                title="Questions We Are Asked Most"
                text="These are the questions that come up at nearly every first consultation. If yours is not here, call the office — we would rather spend five minutes on the phone than have you guess."
              />

              <div className="mt-9 space-y-3">
                {faqs.map((f, i) => {
                  const expanded = open === i
                  return (
                    <Reveal key={f.q} delay={i * 80}>
                      <div className={`border transition-colors duration-300 ${expanded ? 'border-gold' : 'border-line'}`}>
                        <h3>
                          <button
                            type="button"
                            onClick={() => setOpen(expanded ? -1 : i)}
                            aria-expanded={expanded}
                            className="flex w-full items-center justify-between gap-5 px-6 py-4 text-left font-display text-[17px] font-bold text-ink transition-colors duration-300 hover:text-gold"
                          >
                            {f.q}
                            <span
                              className={`grid h-8 w-8 shrink-0 place-items-center transition-colors duration-300 ${
                                expanded ? 'bg-gold text-white' : 'bg-mist text-ink'
                              }`}
                            >
                              {expanded ? <FiMinus /> : <FiPlus />}
                            </span>
                          </button>
                        </h3>
                        <div className="grid transition-all duration-300" style={{ gridTemplateRows: expanded ? '1fr' : '0fr' }}>
                          <div className="overflow-hidden">
                            <p className="px-6 pb-5 text-[15px]">{f.a}</p>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  )
                })}
              </div>
            </div>

            <aside className="lg:col-span-4">
              <Reveal delay={150}>
                <img
                  src={`${import.meta.env.BASE_URL}images/feature.jpg`}
                  alt=""
                  aria-hidden="true"
                  className="h-[300px] w-full object-cover"
                  loading="lazy"
                />
              </Reveal>

              <Reveal delay={220}>
                <div className="mt-7 bg-navy p-8 text-white/70">
                  <h3 className="font-display text-[21px] font-bold text-white">Still Have a Question?</h3>
                  <p className="mt-3 text-[15px]">
                    The initial consultation is free and confidential, whether or not you go on to instruct us.
                  </p>
                  <a
                    href={`tel:${firm.phone.replace(/[^+\d]/g, '')}`}
                    className="mt-4 block font-display text-[22px] font-bold text-gold transition hover:text-white"
                  >
                    {firm.phone}
                  </a>
                  <Link to="/contact" className="btn-gold mt-5 w-full">
                    Contact The Office
                  </Link>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      <ContactStrip />
    </>
  )
}
