import { useState } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import PageBanner from '../components/layout/PageBanner'
import ConsultationForm from '../components/sections/ConsultationForm'
import ContactStrip from '../components/sections/ContactStrip'
import LawIcon from '../components/ui/LawIcon'
import Reveal from '../components/ui/Reveal'
import SectionTitle from '../components/ui/SectionTitle'
import { faqs, firm } from '../data/firm'

export default function ContactPage() {
  const [open, setOpen] = useState(0)

  return (
    <>
      <PageBanner title="Contact Us" crumbs={[{ label: 'Contact' }]} />
      <ConsultationForm />

      <section className="section">
        <div className="container">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionTitle
                title="Frequently Asked Questions"
                text="If your question is not answered here, call the office. We would rather spend five minutes on the phone than have you guess."
              />

              <div className="mt-8 space-y-3">
                {faqs.map((f, i) => {
                  const expanded = open === i
                  return (
                    <Reveal key={f.q} delay={i * 80}>
                      <div className={`border ${expanded ? 'border-gold' : 'border-line'} transition-colors duration-300`}>
                        <h3>
                          <button
                            type="button"
                            onClick={() => setOpen(expanded ? -1 : i)}
                            aria-expanded={expanded}
                            className="flex w-full items-center justify-between gap-5 px-6 py-4 text-left font-display text-[16px] font-bold text-ink transition-colors duration-300 hover:text-gold"
                          >
                            {f.q}
                            <span
                              className={`grid h-7 w-7 shrink-0 place-items-center transition-colors duration-300 ${
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

            <div>
              <SectionTitle title="Visit The Office" />
              <Reveal delay={120}>
                <ul className="mt-8 space-y-6">
                  <li className="flex gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center bg-gold text-white">
                      <LawIcon name="pin" className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-[17px] font-bold text-ink">Address</h3>
                      <p className="text-[15px]">{firm.address}</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center bg-gold text-white">
                      <LawIcon name="phone" className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-[17px] font-bold text-ink">Telephone</h3>
                      <p className="text-[15px]">
                        <a href={`tel:${firm.phone.replace(/[^+\d]/g, '')}`} className="transition hover:text-gold">
                          {firm.phone}
                        </a>{' '}
                        ·{' '}
                        <a href={`tel:${firm.phoneAlt.replace(/[^+\d]/g, '')}`} className="transition hover:text-gold">
                          {firm.phoneAlt}
                        </a>
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center bg-gold text-white">
                      <LawIcon name="clock" className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-[17px] font-bold text-ink">Office Hours</h3>
                      <p className="text-[15px]">{firm.hoursFull}</p>
                    </div>
                  </li>
                </ul>
              </Reveal>

              {/* Locator drawn locally — no third-party map embed */}
              <Reveal delay={200}>
                <div className="relative mt-8 h-[280px] overflow-hidden bg-navy">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)',
                      backgroundSize: '42px 42px',
                    }}
                  />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                    <span className="relative mx-auto grid h-14 w-14 place-items-center bg-gold text-white">
                      <span className="absolute inset-0 animate-pulseRing bg-gold/60" />
                      <LawIcon name="pin" className="relative h-6 w-6" />
                    </span>
                    <p className="mt-4 font-display text-[18px] font-bold text-white">{firm.name}</p>
                    <p className="px-6 text-[14px] text-white/60">{firm.address}</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <ContactStrip />
    </>
  )
}
