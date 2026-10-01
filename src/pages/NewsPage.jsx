import PageBanner from '../components/layout/PageBanner'
import { NewsCard } from '../components/sections/LatestNews'
import ContactStrip from '../components/sections/ContactStrip'
import { news } from '../data/firm'

export default function NewsPage() {
  return (
    <>
      <PageBanner title="Firm News" crumbs={[{ label: 'News' }]} />
      <section className="section">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {news.map((post, i) => (
              <NewsCard key={post.slug} post={post} delay={i * 110} />
            ))}
          </div>
        </div>
      </section>
      <ContactStrip />
    </>
  )
}
