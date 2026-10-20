import { Link, useParams } from 'react-router-dom'
import { FiCheck } from 'react-icons/fi'
import PageBanner from '../components/layout/PageBanner'
import ConsultationForm from '../components/sections/ConsultationForm'
import ContactStrip from '../components/sections/ContactStrip'
import LawIcon from '../components/ui/LawIcon'
import Reveal from '../components/ui/Reveal'
import SectionTitle from '../components/ui/SectionTitle'
import { firm, practiceAreas } from '../data/firm'

const bullets = [
  'A partner supervises your file from first meeting to resolution',
  'Written fee estimate before any work begins',
  'Discovery obtained and reviewed within the first two weeks',
  'Plain-language status updates, in writing, every month',
]

export default function PracticeDetailPage() {
  const { slug } = useParams()
  const area = practiceAreas.find((a) => a.slug === slug)
  const others = practiceAreas.filter((a) => a.slug !== slug)

  if (!area) {
    return (
      <>
        <PageBanner title="Practice Area Not Found" crumbs={[{ label: 'Practice Areas', to: '/practice' }, { label: 'Not found' }]} />
        <section className="section text-center">
          <div className="container">
            <p className="mb-8">That practice area is not listed. It may have been renamed.</p>
            <Link to="/practice" className="btn-navy">
              All Practice Areas
            </Link>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageBanner title={area.label} crumbs={[{ label: 'Practice Areas', to: '/practice' }, { label: area.label }]} />

      <section className="section">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Reveal>
                <img
                  src={`${import.meta.env.BASE_URL}images/feature.jpg`}
                  alt=""
                  aria-hidden="true"
                  className="h-[340px] w-full object-cover"
                  loading="lazy"
                />
              </Reveal>

              <div className="mt-9">
                <SectionTitle title={area.title} />
                <Reveal delay={120}>
                  <p className="mt-6">{area.text}</p>
                  <p className="mt-4">{area.detail}</p>
                </Reveal>

                <Reveal delay={200}>
                  <h3 className="mt-10 font-display text-[22px] font-bold text-ink">How we handle these matters</h3>
                  <ul className="mt-5 space-y-3">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-[15px]">
                        <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center bg-gold text-white">
                          <FiCheck className="text-[11px]" />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal delay={260}>
                  <div className="mt-10 border-l-4 border-gold bg-mist px-8 py-7">
                    <p className="font-display text-[19px] italic text-ink">
                      “Bring whatever paperwork you have. Half an hour with a partner is usually enough to tell you
                      whether you have a claim worth pursuing.”
                    </p>
                    <p className="mt-3 text-[14px]">— {firm.name}</p>
                  </div>
                </Reveal>
              </div>
            </div>

            <aside className="lg:col-span-4">
              <Reveal delay={140}>
                <div className="bg-mist p-7">
                  <h3 className="font-display text-[20px] font-bold text-ink">Other Practice Areas</h3>
                  <span className="mt-3 block h-px w-14 bg-gold" />
                  <ul className="mt-5 space-y-1">
                    {others.map((o) => (
                      <li key={o.slug}>
                        <Link
                          to={`/practice/${o.slug}`}
                          className="group flex items-center gap-3 border-b border-line py-3 text-[15px] transition-colors duration-300 last:border-0 hover:text-gold"
                        >
                          <LawIcon name={o.icon} className="h-5 w-5 shrink-0 text-gold" />
                          {o.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={220}>
                <div className="mt-7 bg-navy p-8 text-white/70">
                  <h3 className="font-display text-[21px] font-bold text-white">Speak To An Attorney</h3>
                  <p className="mt-3 text-[15px]">
                    Free, confidential and without obligation. Most calls are returned the same working day.
                  </p>
                  <a
                    href={`tel:${firm.phone.replace(/[^+\d]/g, '')}`}
                    className="mt-5 block font-display text-[22px] font-bold text-gold transition hover:text-white"
                  >
                    {firm.phone}
                  </a>
                  <Link to="/contact" className="btn-gold mt-5 w-full">
                    Request a Call
                  </Link>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      <ConsultationForm />
      <ContactStrip />
    </>
  )
}
