import PageBanner from '../components/layout/PageBanner'
import AboutHistory from '../components/sections/AboutHistory'
import TestimonialsValues from '../components/sections/TestimonialsValues'
import Attorneys from '../components/sections/Attorneys'
import Partners from '../components/sections/Partners'
import ContactStrip from '../components/sections/ContactStrip'

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About Our Firm" crumbs={[{ label: 'About' }]} />
      <AboutHistory />
      <TestimonialsValues />
      <Attorneys />
      <Partners />
      <ContactStrip />
    </>
  )
}
