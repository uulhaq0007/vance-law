import Hero from '../components/sections/Hero'
import PracticeAreas from '../components/sections/PracticeAreas'
import AboutHistory from '../components/sections/AboutHistory'
import TestimonialsValues from '../components/sections/TestimonialsValues'
import Attorneys from '../components/sections/Attorneys'
import ConsultationForm from '../components/sections/ConsultationForm'
import LatestNews from '../components/sections/LatestNews'
import Partners from '../components/sections/Partners'
import ContactStrip from '../components/sections/ContactStrip'

export default function Home() {
  return (
    <>
      <Hero />
      <PracticeAreas />
      <AboutHistory />
      <TestimonialsValues />
      <Attorneys />
      <ConsultationForm />
      <LatestNews />
      <Partners />
      <ContactStrip />
    </>
  )
}
