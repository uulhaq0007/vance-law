import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'

export default function PageBanner({ title, crumbs = [] }) {
  return (
    <section className="relative overflow-hidden bg-navy py-20 lg:py-28">
      <img
        src={`${import.meta.env.BASE_URL}images/page-banner.jpg`}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-navy/70" />

      <div className="container relative text-center">
        <h1 className="font-display text-[30px] font-bold text-white sm:text-[40px] lg:text-[46px]">{title}</h1>
        <span className="mx-auto mt-4 block h-px w-20 bg-gold" />

        <nav aria-label="Breadcrumb" className="mt-5">
          <ol className="flex flex-wrap items-center justify-center gap-2 text-[14px] text-white/65">
            <li>
              <Link to="/" className="transition hover:text-gold">
                Home
              </Link>
            </li>
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-2">
                <FiChevronRight className="text-gold" />
                {i === crumbs.length - 1 || !c.to ? (
                  <span className="text-white">{c.label}</span>
                ) : (
                  <Link to={c.to} className="transition hover:text-gold">
                    {c.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  )
}
