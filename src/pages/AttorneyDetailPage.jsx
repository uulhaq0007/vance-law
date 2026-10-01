import { Link, useParams } from 'react-router-dom'
import { FiMail, FiPhone } from 'react-icons/fi'
import PageBanner from '../components/layout/PageBanner'
import ContactStrip from '../components/sections/ContactStrip'
import Reveal from '../components/ui/Reveal'
import SectionTitle from '../components/ui/SectionTitle'
import { attorneys } from '../data/firm'

export default function AttorneyDetailPage() {
  const { slug } = useParams()
  const person = attorneys.find((a) => a.slug === slug)
  const others = attorneys.filter((a) => a.slug !== slug)

  if (!person) {
    return (
      <>
        <PageBanner title="Attorney Not Found" crumbs={[{ label: 'Attorneys', to: '/attorneys' }, { label: 'Not found' }]} />
        <section className="section text-center">
          <div className="container">
            <p className="mb-8">No attorney profile matches that address.</p>
            <Link to="/attorneys" className="btn-navy">
              All Attorneys
            </Link>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageBanner title={person.name} crumbs={[{ label: 'Attorneys', to: '/attorneys' }, { label: person.name }]} />

      <section className="section">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <img
                src={person.image}
                alt={person.name}
                className="h-[480px] w-full object-cover object-top"
              />
            </Reveal>

            <div className="lg:col-span-7">
              <SectionTitle title={person.name} />
              <Reveal delay={100}>
                <p className="mt-4 font-display text-[17px] italic text-gold">
                  {person.role} · {person.area}
                </p>
                <p className="mt-6">{person.bio}</p>
                <p className="mt-4">
                  {person.name.split(' ')[0]} takes a small number of matters at a time, which is deliberate: it means
                  every client speaks to the attorney who knows their file rather than to whoever is free that morning.
                </p>

                <dl className="mt-8 grid gap-4 border-y border-line py-6 sm:grid-cols-2">
                  <div className="flex items-center gap-3">
                    <FiPhone className="shrink-0 text-gold" />
                    <div>
                      <dt className="sr-only">Phone</dt>
                      <dd>
                        <a href={`tel:${person.phone.replace(/[^+\d]/g, '')}`} className="transition hover:text-gold">
                          {person.phone}
                        </a>
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FiMail className="shrink-0 text-gold" />
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>
                        <a href={`mailto:${person.email}`} className="break-all transition hover:text-gold">
                          {person.email}
                        </a>
                      </dd>
                    </div>
                  </div>
                </dl>

                <Link to="/contact" className="btn-navy mt-8">
                  Request a Consultation
                </Link>
              </Reveal>
            </div>
          </div>

          <div className="mt-16">
            <SectionTitle title="Other Attorneys" align="center" />
            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {others.map((a, i) => (
                <Reveal key={a.slug} delay={i * 100}>
                  <article className="group text-center">
                    <Link to={`/attorneys/${a.slug}`} className="block overflow-hidden">
                      <img
                        src={a.image}
                        alt={a.name}
                        className="h-[260px] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </Link>
                    <h3 className="mt-4 font-display text-[18px] font-bold text-ink transition-colors duration-300 group-hover:text-gold">
                      <Link to={`/attorneys/${a.slug}`}>{a.name}</Link>
                    </h3>
                    <p className="font-display text-[14px] italic text-gold">{a.role}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactStrip />
    </>
  )
}
