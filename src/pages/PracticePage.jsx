import PageBanner from '../components/layout/PageBanner'
import PracticeAreas from '../components/sections/PracticeAreas'
import ConsultationForm from '../components/sections/ConsultationForm'
import ContactStrip from '../components/sections/ContactStrip'

export default function PracticePage() {
  return (
    <>
      <PageBanner title="Practice Areas" crumbs={[{ label: 'Practice Areas' }]} />
      <PracticeAreas limit={0} />
      <ConsultationForm />
      <ContactStrip />
    </>
  )
}
