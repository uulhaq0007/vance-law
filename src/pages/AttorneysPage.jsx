import PageBanner from '../components/layout/PageBanner'
import Attorneys from '../components/sections/Attorneys'
import TestimonialsValues from '../components/sections/TestimonialsValues'
import ContactStrip from '../components/sections/ContactStrip'

export default function AttorneysPage() {
  return (
    <>
      <PageBanner title="Our Attorneys" crumbs={[{ label: 'Attorneys' }]} />
      <Attorneys showTitle={false} />
      <TestimonialsValues />
      <ContactStrip />
    </>
  )
}
