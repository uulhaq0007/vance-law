import { Link } from 'react-router-dom'
import { FiHeart, FiMessageSquare, FiTag } from 'react-icons/fi'
import Reveal from '../ui/Reveal'
import { news } from '../../data/firm'

export function NewsCard({ post, delay = 0 }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="group flex h-full flex-col bg-mist">
        <Link to={`/news/${post.slug}`} className="relative block overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="h-[230px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <span className="absolute bottom-0 left-6 bg-navy px-4 py-2 text-center font-display text-white transition-colors duration-300 group-hover:bg-gold">
            <span className="block text-[19px] font-bold leading-none">{post.day}</span>
            <span className="mt-0.5 block text-[12px] uppercase">{post.month}</span>
          </span>
        </Link>

        <div className="flex flex-1 flex-col p-6">
          <p className="flex items-center gap-2 text-[13px]">
            <FiTag className="text-gold" />
            <span className="text-gold">{post.category}</span>, {post.tag}
          </p>

          <h3 className="mt-2 font-display text-[19px] font-bold leading-snug">
            <Link to={`/news/${post.slug}`} className="text-ink transition-colors duration-300 hover:text-gold">
              {post.title}
            </Link>
          </h3>

          <p className="mt-3 flex-1 text-[15px]">{post.excerpt}</p>

          <Link
            to={`/news/${post.slug}`}
            className="mt-5 inline-block font-sans text-[13px] font-bold uppercase tracking-[1.2px] text-navy transition-colors duration-300 hover:text-gold"
          >
            Read More
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-line px-6 py-3.5 text-[12.5px]">
          <span>{post.author}</span>
          <span className="flex items-center gap-1.5">
            <FiMessageSquare className="text-gold" /> {post.comments} Comments
          </span>
          <span className="flex items-center gap-1.5">
            <FiHeart className="text-gold" /> {post.likes} Likes
          </span>
        </div>
      </article>
    </Reveal>
  )
}

export default function LatestNews() {
  return (
    <section className="section">
      <div className="container">
        <div className="mb-14 text-center">
          <Reveal>
            <h2 className="sec-title">Our Latest News</h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="ornament ornament-center">
              <span className="ornament-slash">//</span>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((post, i) => (
            <NewsCard key={post.slug} post={post} delay={i * 110} />
          ))}
        </div>
      </div>
    </section>
  )
}
