import { Link } from 'react-router-dom'
import PageBanner from '../components/layout/PageBanner'
import Emblem from '../components/ui/Emblem'

export default function NotFoundPage() {
  return (
    <>
      <PageBanner title="404" crumbs={[{ label: 'Page Not Found' }]} />
      <section className="section text-center">
        <div className="container">
          <Emblem className="mx-auto h-20 w-20 opacity-40" />
          <p className="mt-6 font-display text-[92px] font-bold leading-none text-mist sm:text-[140px]">404</p>
          <h2 className="-mt-6 font-display text-[26px] font-bold text-ink sm:text-[34px]">
            This page is not on the record
          </h2>
          <p className="mx-auto mt-4 max-w-[520px]">
            The page you asked for has been moved or withdrawn. Return to the homepage, or call the office and we will
            point you to what you need.
          </p>
          <Link to="/" className="btn-navy mt-9">
            Back To Home
          </Link>
        </div>
      </section>
    </>
  )
}
