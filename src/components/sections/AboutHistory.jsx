import { Link } from 'react-router-dom'
import LawIcon from '../ui/LawIcon'
import Reveal from '../ui/Reveal'
import SectionTitle from '../ui/SectionTitle'
import StatDonut from './StatDonut'
import { aboutTiles, firm, history } from '../../data/firm'

export default function AboutHistory() {
  return (
    <section className="section bg-mist">
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          {/* About */}
          <div>
            <SectionTitle title={`About ${firm.name}`} />

            <Reveal delay={120}>
              <p className="mt-6">
                Since {firm.founded} this firm has represented people at the worst moment of their year — a business
                unravelling, a marriage ending, a charge that could take everything. What has kept clients coming back
                for four decades is not showmanship. It is preparation, plain answers, and returning phone calls.
              </p>
            </Reveal>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {aboutTiles.map((tile, i) => (
                <Reveal key={tile.title} delay={180 + i * 90}>
                  <div className="group relative overflow-hidden">
                    <img
                      src={tile.image}
                      alt={tile.title}
                      className="h-[130px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-navy/75 transition-colors duration-300 group-hover:bg-gold/85" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-2 text-center text-white">
                      <LawIcon name={tile.icon} className="h-6 w-6" />
                      <p className="font-display text-[14px] font-bold leading-tight">{tile.title}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={420}>
              <h3 className="mt-10 font-display text-[24px] font-bold text-gold">Get Free Consultation</h3>
              <span className="mt-3 block h-px w-16 bg-gold" />
              <p className="mt-5">
                Bring whatever paperwork you have — a summons, a contract, a termination letter. Half an hour with a
                partner is usually enough to tell you whether you have a claim worth pursuing and what it would cost.
              </p>
              <p className="mt-4 font-display text-[19px] italic text-ink">
                “We can give you a free and entirely confidential evaluation.”
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-6">
                <Link to="/contact" className="btn-navy">
                  Free Consultation
                </Link>
                <p className="text-[14px]">
                  For criminal charges:{' '}
                  <a
                    href={`tel:${firm.phone.replace(/[^+\d]/g, '')}`}
                    className="font-display text-[20px] font-bold text-gold transition hover:text-navy"
                  >
                    {firm.phone}
                  </a>
                </p>
              </div>
            </Reveal>
          </div>

          {/* History + stats */}
          <div>
            <SectionTitle title="Our History" />

            <ol className="mt-8 space-y-7">
              {history.map((item, i) => (
                <Reveal key={item.year} delay={i * 110}>
                  <li className="flex gap-5">
                    <span className="relative h-fit shrink-0 bg-gold px-4 py-1.5 font-display text-[15px] font-bold text-white after:absolute after:left-1/2 after:top-full after:-translate-x-1/2 after:border-x-[6px] after:border-t-[7px] after:border-x-transparent after:border-t-gold">
                      {item.year}
                    </span>
                    <div>
                      <h3 className="font-display text-[18px] font-bold text-ink">{item.title}</h3>
                      <p className="mt-1.5 text-[15px]">{item.text}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={200}>
              <div className="mt-10 border border-line bg-white p-6">
                <img
                  src={`${import.meta.env.BASE_URL}images/history.jpg`}
                  alt="Attorneys reviewing a client file"
                  className="h-[190px] w-full object-cover"
                  loading="lazy"
                />
                <StatDonut />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
