import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FiChevronDown, FiMenu, FiSearch, FiX } from 'react-icons/fi'
import Logo from '../ui/Logo'
import LawIcon from '../ui/LawIcon'
import { firm, languages, navigation } from '../../data/firm'

export default function Header() {
  const [stuck, setStuck] = useState(false)
  const [drawer, setDrawer] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [lang, setLang] = useState(languages[0])
  const [openSub, setOpenSub] = useState(null)
  const langRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 220)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setDrawer(false)
    setSearchOpen(false)
    setOpenSub(null)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = drawer || searchOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [drawer, searchOpen])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setDrawer(false)
        setSearchOpen(false)
        setLangOpen(false)
      }
    }
    const onClick = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false)
    }
    window.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [])

  return (
    <header className="relative z-50">
      {/* Gold promise bar */}
      <div className="bg-gold text-white">
        <div className="container flex h-11 items-center justify-between gap-4 text-[13px]">
          <p className="truncate">
            <span className="font-bold uppercase tracking-wide">Our No Fee Promise</span>
            <span className="hidden sm:inline"> — {firm.promise}</span>
          </p>

          <div className="flex shrink-0 items-center gap-5">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="hidden items-center gap-2 transition hover:text-navy md:flex"
            >
              Search Your Needs Here <FiSearch />
            </button>

            <div className="relative" ref={langRef}>
              <button
                type="button"
                onClick={() => setLangOpen((v) => !v)}
                aria-expanded={langOpen}
                aria-haspopup="listbox"
                className="flex items-center gap-1.5 transition hover:text-navy"
              >
                {lang} <FiChevronDown className={`text-[12px] transition-transform ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              {langOpen && (
                <ul
                  role="listbox"
                  aria-label="Select language"
                  className="absolute right-0 top-full z-30 mt-1 w-[140px] bg-white py-1 text-ink shadow-lg"
                >
                  {languages.map((l) => (
                    <li key={l}>
                      <button
                        type="button"
                        role="option"
                        aria-selected={l === lang}
                        onClick={() => {
                          setLang(l)
                          setLangOpen(false)
                        }}
                        className={`block w-full px-4 py-1.5 text-left text-[14px] transition hover:bg-mist hover:text-gold ${
                          l === lang ? 'text-gold' : ''
                        }`}
                      >
                        {l}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Contact row with centred logo */}
      <div className="bg-white py-6">
        <div className="container grid items-center gap-5 lg:grid-cols-3">
          <div className="hidden lg:block">
            <p className="text-[14px]">{firm.addressShort}</p>
            <a
              href={`tel:${firm.phone.replace(/[^+\d]/g, '')}`}
              className="font-display text-[24px] font-bold text-gold transition hover:text-navy"
            >
              {firm.phone}
            </a>
          </div>

          <div className="flex justify-center">
            <Logo />
          </div>

          <div className="hidden text-right lg:block">
            <p className="text-[14px]">Office Hours: {firm.hours}</p>
            <a
              href={`mailto:${firm.email}`}
              className="font-display text-[19px] font-bold text-gold transition hover:text-navy"
            >
              {firm.email}
            </a>
          </div>
        </div>
      </div>

      {/* Navy navigation bar */}
      <div
        className={`w-full transition-shadow duration-300 ${
          stuck ? 'fixed inset-x-0 top-0 z-50 shadow-lg' : 'relative'
        }`}
      >
        <div className="container">
          <div className="flex items-stretch justify-between bg-navy">
            <nav className="hidden xl:flex">
              {navigation.map((item) => (
                <div key={item.label} className="group relative">
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `relative flex items-center gap-1.5 px-6 py-5 font-display text-[16px] font-bold text-white transition-colors duration-200 hover:text-gold ${
                        isActive ? 'text-gold' : ''
                      } ${isActive ? 'after:absolute after:inset-x-4 after:top-0 after:h-[3px] after:bg-gold' : ''}`
                    }
                  >
                    {item.label}
                    {item.children && (
                      <FiChevronDown className="text-[12px] transition-transform duration-300 group-hover:rotate-180" />
                    )}
                  </NavLink>

                  {item.children && (
                    <ul className="invisible absolute left-0 top-full z-20 w-[230px] translate-y-3 border-t-[3px] border-gold bg-white py-2 opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            to={child.to}
                            className="block px-5 py-2 text-[14px] text-ink transition-all duration-200 hover:translate-x-1.5 hover:text-gold"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile bar */}
            <div className="flex items-center gap-3 px-4 py-3 xl:hidden">
              <button
                type="button"
                onClick={() => setDrawer(true)}
                aria-label="Open menu"
                className="flex items-center gap-2 font-display text-[15px] font-bold text-white"
              >
                <FiMenu className="text-xl" /> Menu
              </button>
            </div>

            <div className="flex items-center gap-2 px-3 xl:px-0">
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                aria-label="Open search"
                className="grid h-10 w-10 place-items-center text-white transition hover:text-gold md:hidden"
              >
                <FiSearch />
              </button>
              <Link
                to="/contact"
                className="my-2 mr-2 hidden bg-white px-6 py-3 font-sans text-[13px] font-bold uppercase tracking-[1.2px] text-navy transition-colors duration-300 hover:bg-gold hover:text-white sm:block"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Keeps layout stable when the nav bar becomes fixed */}
      {stuck && <div className="h-[64px]" aria-hidden="true" />}

      {/* Search overlay */}
      <div
        className={`fixed inset-0 z-[60] flex items-center justify-center bg-navy/95 px-6 transition-opacity duration-300 ${
          searchOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <button
          type="button"
          onClick={() => setSearchOpen(false)}
          aria-label="Close search"
          className="absolute right-7 top-7 grid h-12 w-12 place-items-center border border-white/30 text-white transition hover:bg-gold"
        >
          <FiX className="text-2xl" />
        </button>
        <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-[620px] border-b border-white/30 pb-4">
          <label htmlFor="site-search" className="sr-only">
            Search this site
          </label>
          <div className="flex items-center gap-4">
            <input
              id="site-search"
              type="search"
              placeholder="Search practice areas, attorneys, articles…"
              className="w-full bg-transparent font-display text-[20px] text-white placeholder-white/40 outline-none sm:text-[28px]"
            />
            <button type="submit" aria-label="Search" className="text-white transition hover:text-gold">
              <FiSearch className="text-3xl" />
            </button>
          </div>
        </form>
      </div>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-[60] xl:hidden ${drawer ? 'visible' : 'invisible'}`} aria-hidden={!drawer}>
        <div
          onClick={() => setDrawer(false)}
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${drawer ? 'opacity-100' : 'opacity-0'}`}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-[330px] max-w-[88vw] flex-col bg-white transition-transform duration-500 ${
            drawer ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-line px-5 py-4">
            <Logo size="sm" />
            <button
              type="button"
              onClick={() => setDrawer(false)}
              aria-label="Close menu"
              className="grid h-10 w-10 shrink-0 place-items-center bg-mist text-ink transition hover:bg-gold hover:text-white"
            >
              <FiX className="text-xl" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-5 py-3">
            <ul className="divide-y divide-line">
              {navigation.map((item) => {
                const expanded = openSub === item.label
                return (
                  <li key={item.label}>
                    <div className="flex items-center justify-between">
                      <NavLink
                        to={item.to}
                        end={item.to === '/'}
                        className={({ isActive }) =>
                          `block py-3.5 font-display text-[16px] font-bold ${isActive ? 'text-gold' : 'text-ink'}`
                        }
                      >
                        {item.label}
                      </NavLink>
                      {item.children && (
                        <button
                          type="button"
                          onClick={() => setOpenSub(expanded ? null : item.label)}
                          aria-expanded={expanded}
                          aria-label={`Toggle ${item.label} submenu`}
                          className="grid h-8 w-8 place-items-center bg-mist text-ink"
                        >
                          <FiChevronDown className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
                        </button>
                      )}
                    </div>
                    {item.children && (
                      <ul className="grid transition-all duration-300" style={{ gridTemplateRows: expanded ? '1fr' : '0fr' }}>
                        <li className="overflow-hidden">
                          <ul className="pb-2 pl-3">
                            {item.children.map((child) => (
                              <li key={child.label}>
                                <Link to={child.to} className="block py-1.5 text-[14px] transition hover:text-gold">
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    )}
                  </li>
                )
              })}
            </ul>

            <Link to="/contact" className="btn-gold mt-6 w-full">
              Free Consultation
            </Link>

            <div className="mt-6 space-y-2 border-t border-line pt-5 text-[14px]">
              <a href={`tel:${firm.phone.replace(/[^+\d]/g, '')}`} className="flex items-center gap-3 hover:text-gold">
                <LawIcon name="phone" className="h-4 w-4 text-gold" /> {firm.phone}
              </a>
              <a href={`mailto:${firm.email}`} className="flex items-center gap-3 hover:text-gold">
                <LawIcon name="edit" className="h-4 w-4 text-gold" /> {firm.email}
              </a>
              <p className="flex items-start gap-3 pb-6">
                <LawIcon name="pin" className="mt-1 h-4 w-4 shrink-0 text-gold" /> {firm.address}
              </p>
            </div>
          </nav>
        </aside>
      </div>
    </header>
  )
}
