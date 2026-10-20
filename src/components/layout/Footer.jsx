import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiCheck, FiChevronRight } from 'react-icons/fi'
import { FaFacebookF, FaLinkedinIn, FaSkype, FaTwitter } from 'react-icons/fa'
import Logo from '../ui/Logo'
import { firm, practiceAreas, tweets } from '../../data/firm'

const utility = [
  { label: 'About Us', to: '/about' },
  { label: 'Attorneys', to: '/attorneys' },
  { label: 'Our News', to: '/news' },
  { label: 'FAQs', to: '/faq' },
  { label: 'Consultation', to: '/contact' },
  { label: 'Contact Us', to: '/contact' },
]

const socials = [FaFacebookF, FaTwitter, FaLinkedinIn, FaSkype]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState(null)

  const subscribe = (e) => {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMsg({ ok: false, text: 'Enter a valid email address.' })
      return
    }
    // Front-end only — nothing leaves the browser.
    setMsg({ ok: true, text: 'Thank you — you are subscribed. (Demo only.)' })
    setEmail('')
  }

  return (
    <footer className="relative overflow-hidden bg-[#1a1a1a] text-white/60">
      <img
        src={`${import.meta.env.BASE_URL}images/footer-bg.jpg`}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.08]"
        loading="lazy"
      />

      <div className="container relative">
        <div className="grid gap-12 py-16 lg:grid-cols-4 lg:py-20">
          {/* About */}
          <div>
            <h3 className="font-display text-[21px] font-bold text-white">About the Firm</h3>
            <div className="ornament">
              <span className="ornament-slash">//</span>
            </div>
            <p className="mt-6 text-[15px]">
              Since {firm.founded}, {firm.name} has represented families, founders and the accused across Oregon and
              Washington — with preparation, plain answers and returned phone calls.
            </p>
            <Link to="/about" className="btn-navy mt-6">
              Read Our Story
            </Link>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display text-[21px] font-bold text-white">Useful Links</h3>
            <div className="ornament">
              <span className="ornament-slash">//</span>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-x-4">
              <ul className="space-y-2.5 text-[15px]">
                {practiceAreas.map((a) => (
                  <li key={a.slug}>
                    <Link
                      to={`/practice/${a.slug}`}
                      className="flex items-center gap-1.5 transition-all duration-300 hover:translate-x-1 hover:text-gold"
                    >
                      <FiChevronRight className="shrink-0 text-[12px] text-gold" />
                      {a.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2.5 text-[15px]">
                {utility.map((u) => (
                  <li key={u.label}>
                    <Link
                      to={u.to}
                      className="flex items-center gap-1.5 transition-all duration-300 hover:translate-x-1 hover:text-gold"
                    >
                      <FiChevronRight className="shrink-0 text-[12px] text-gold" />
                      {u.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Updates */}
          <div>
            <h3 className="font-display text-[21px] font-bold text-white">Latest Updates</h3>
            <div className="ornament">
              <span className="ornament-slash">//</span>
            </div>
            <ul className="mt-6 space-y-5">
              {tweets.map((t, i) => (
                <li key={i} className="flex gap-3 text-[15px]">
                  <FaTwitter className="mt-1.5 shrink-0 text-gold" />
                  <div>
                    <p>
                      <span className="text-gold">{t.handle}</span> {t.text}
                    </p>
                    <span className="mt-1 block text-[13px] font-bold text-white/45">{t.time}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display text-[21px] font-bold text-white">Newsletter</h3>
            <div className="ornament">
              <span className="ornament-slash">//</span>
            </div>
            <p className="mt-6 text-[15px]">
              Sign up for occasional notes on changes to the law that affect our clients. No more than one a month.
            </p>

            <form onSubmit={subscribe} noValidate className="mt-5 flex">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setMsg(null)
                }}
                placeholder="Email address"
                className="w-full bg-white px-4 py-3 text-[15px] text-ink outline-none"
              />
              <button
                type="submit"
                className="shrink-0 bg-navy px-6 font-display text-[15px] font-bold text-white transition-colors duration-300 hover:bg-gold"
              >
                Go
              </button>
            </form>

            {msg ? (
              <p className={`mt-2 flex items-center gap-2 text-[13px] ${msg.ok ? 'text-gold' : 'text-red-400'}`}>
                {msg.ok && <FiCheck />} {msg.text}
              </p>
            ) : (
              <p className="mt-2 text-[13px] italic">Your email address is kept confidential.</p>
            )}

            <h4 className="mt-8 font-display text-[17px] font-bold text-white">Follow Us On</h4>
            <div className="mt-3 flex gap-2">
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  aria-label="Firm social profile"
                  className="grid h-10 w-10 place-items-center bg-white/10 text-white transition-colors duration-300 hover:bg-gold"
                >
                  <Icon className="text-[14px]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10 bg-black/25">
        <div className="container flex flex-col items-center justify-between gap-4 py-5 text-[14px] md:flex-row">
          <p>
            Copyright © {new Date().getFullYear()} {firm.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/faq" className="transition hover:text-gold">
              Terms Of Use
            </Link>
            <Link to="/faq" className="transition hover:text-gold">
              Privacy &amp; Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
