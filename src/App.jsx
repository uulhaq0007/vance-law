import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import BackToTop from './components/layout/BackToTop'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import PracticePage from './pages/PracticePage'
import PracticeDetailPage from './pages/PracticeDetailPage'
import AttorneysPage from './pages/AttorneysPage'
import AttorneyDetailPage from './pages/AttorneyDetailPage'
import NewsPage from './pages/NewsPage'
import NewsDetailPage from './pages/NewsDetailPage'
import FaqPage from './pages/FaqPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

/** Reset scroll position on navigation. */
function ScrollReset() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollReset />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/practice/:slug" element={<PracticeDetailPage />} />
          <Route path="/attorneys" element={<AttorneysPage />} />
          <Route path="/attorneys/:slug" element={<AttorneyDetailPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:slug" element={<NewsDetailPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
