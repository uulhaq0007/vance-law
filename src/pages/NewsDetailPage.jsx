import { Link, useParams } from 'react-router-dom'
import { FiCalendar, FiHeart, FiMessageSquare, FiTag, FiUser } from 'react-icons/fi'
import PageBanner from '../components/layout/PageBanner'
import ContactStrip from '../components/sections/ContactStrip'
import Reveal from '../components/ui/Reveal'
import SectionTitle from '../components/ui/SectionTitle'
import { firm, news, practiceAreas } from '../data/firm'

export default function NewsDetailPage() {
  const { slug } = useParams()
  const post = news.find((n) => n.slug === slug)
  const others = news.filter((n) => n.slug !== slug)

  if (!post) {
    return (
      <>
        <PageBanner title="Article Not Found" crumbs={[{ label: 'News', to: '/news' }, { label: 'Not found' }]} />
        <section className="section text-center">
          <div className="container">
            <p className="mb-8">That article has been moved or withdrawn.</p>
            <Link to="/news" className="btn-navy">
              Back To News
            </Link>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageBanner title="News" crumbs={[{ label: 'News', to: '/news' }, { label: post.category }]} />

      <section className="section">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-12">
            <article className="lg:col-span-8">
              <Reveal>
                <img src={post.image} alt={post.title} className="h-[380px] w-full object-cover" />
              </Reveal>

              <Reveal delay={100}>
                <div className="mt-7 flex flex-wrap items-center gap-6 text-[14px]">
                  <span className="flex items-center gap-2">
                    <FiCalendar className="text-gold" /> {post.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <FiUser className="text-gold" /> {post.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <FiTag className="text-gold" /> {post.category}
                  </span>
                  <span className="flex items-center gap-2">
                    <FiMessageSquare className="text-gold" /> {post.comments}
                  </span>
                  <span className="flex items-center gap-2">
                    <FiHeart className="text-gold" /> {post.likes}
                  </span>
                </div>

                <h2 className="mt-5 font-display text-[26px] font-bold leading-snug text-ink sm:text-[32px]">
                  {post.title}
                </h2>

                <div className="mt-6 space-y-5">
                  <p className="text-[17px] text-ink">{post.excerpt}</p>
                  <p>
                    The record showed the initial stop was justified but the detention that followed was not. Once the
                    officer had completed the purpose of the stop, every additional minute required fresh reasonable
                    suspicion — and the state could not point to any.
                  </p>
                  <blockquote className="border-l-4 border-gold bg-mist px-8 py-7 font-display text-[19px] italic text-ink">
                    A lawful beginning does not make an unlawful continuation acceptable. The clock matters, and here
                    the clock ran twenty-six minutes too long.
                  </blockquote>
                  <p>
                    For anyone facing a similar charge, the practical lesson is to preserve the timeline early. Dash
                    camera footage, dispatch logs and body-worn recordings are routinely overwritten on short retention
                    schedules, and a preservation letter in the first week can decide the case.
                  </p>
                  <h3 className="pt-2 font-display text-[22px] font-bold text-ink">What this means for clients</h3>
                  <p>
                    We review the timeline in every traffic-stop matter as a matter of course. If you have been charged
                    following a roadside stop, bring us the citation and any paperwork you were given — the detail that
                    matters is often on the back of the form.
                  </p>
                </div>
              </Reveal>
            </article>

            <aside className="lg:col-span-4">
              <Reveal delay={140}>
                <div className="bg-mist p-7">
                  <h3 className="font-display text-[20px] font-bold text-ink">Recent Articles</h3>
                  <span className="mt-3 block h-px w-14 bg-gold" />
                  <ul className="mt-5 space-y-5">
                    {others.map((n) => (
                      <li key={n.slug} className="flex gap-4">
                        <Link to={`/news/${n.slug}`} className="shrink-0 overflow-hidden">
                          <img src={n.image} alt="" className="h-[70px] w-[84px] object-cover" loading="lazy" />
                        </Link>
                        <div>
                          <span className="text-[13px]">{n.date}</span>
                          <h4 className="font-display text-[15px] font-bold leading-snug text-ink">
                            <Link to={`/news/${n.slug}`} className="transition hover:text-gold">
                              {n.title}
                            </Link>
                          </h4>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={210}>
                <div className="mt-7 bg-mist p-7">
                  <h3 className="font-display text-[20px] font-bold text-ink">Practice Areas</h3>
                  <span className="mt-3 block h-px w-14 bg-gold" />
                  <ul className="mt-4">
                    {practiceAreas.map((a) => (
                      <li key={a.slug}>
                        <Link
                          to={`/practice/${a.slug}`}
                          className="block border-b border-line py-2.5 text-[15px] transition-colors duration-300 last:border-0 hover:text-gold"
                        >
                          {a.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={280}>
                <div className="mt-7 bg-navy p-8 text-white/70">
                  <h3 className="font-display text-[21px] font-bold text-white">Free Consultation</h3>
                  <p className="mt-3 text-[15px]">Confidential, no obligation, and no fee unless we win.</p>
                  <a
                    href={`tel:${firm.phone.replace(/[^+\d]/g, '')}`}
                    className="mt-4 block font-display text-[21px] font-bold text-gold transition hover:text-white"
                  >
                    {firm.phone}
                  </a>
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
