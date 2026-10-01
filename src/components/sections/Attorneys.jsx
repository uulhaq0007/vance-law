import { Link } from 'react-router-dom'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { FiMail, FiPhone } from 'react-icons/fi'
import Reveal from '../ui/Reveal'
import { attorneys } from '../../data/firm'

const socials = [FaFacebookF, FaTwitter, FaLinkedinIn]

export default function Attorneys({ showTitle = true }) {
  return (
    <section className="section">
      <div className="container">
        {showTitle && (
          <div className="mb-14 text-center">
            <Reveal>
              <h2 className="sec-title">Meet Our Attorneys</h2>
            </Reveal>
            <Reveal delay={80}>
              <div className="ornament ornament-center">
                <span className="ornament-slash">//</span>
              </div>
            </Reveal>
          </div>
        )}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {attorneys.map((a, i) => (
            <Reveal key={a.slug} delay={i * 100}>
              <article className="group h-full">
                <Link to={`/attorneys/${a.slug}`} className="relative block overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.name}
                    className="h-[300px] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute inset-0 bg-navy/0 transition-colors duration-500 group-hover:bg-navy/25" />
                </Link>

                <h3 className="mt-5 font-display text-[19px] font-bold text-ink transition-colors duration-300 group-hover:text-gold">
                  <Link to={`/attorneys/${a.slug}`}>{a.name}</Link>
                </h3>
                <p className="font-display text-[15px] italic text-gold">{a.role}</p>

                <span className="my-4 block h-px w-full bg-line" />

                <ul className="space-y-2 text-[14px]">
                  <li>
                    <a href={`tel:${a.phone.replace(/[^+\d]/g, '')}`} className="flex items-center gap-3 transition hover:text-gold">
                      <FiPhone className="shrink-0 text-gold" /> {a.phone}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${a.email}`} className="flex items-center gap-3 transition hover:text-gold">
                      <FiMail className="shrink-0 text-gold" />
                      <span className="truncate">{a.email}</span>
                    </a>
                  </li>
                </ul>

                <div className="mt-4 flex gap-2">
                  {socials.map((Icon, s) => (
                    <a
                      key={s}
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      aria-label={`${a.name} profile`}
                      className="grid h-9 w-9 place-items-center border border-line text-body transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-white"
                    >
                      <Icon className="text-[13px]" />
                    </a>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
