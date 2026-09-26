import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  FiArrowRight,
  FiChevronDown,
  FiMenu,
  FiPhone,
  FiX,
} from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

import logo from '../assets/logo.svg'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="navbar-glass border-b border-white/10">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          {/* LOGO */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center"
          >
            <img
              src={logo}
              alt="S.K. Associates / StructKraft Engineering LLP"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative py-7 text-xs font-bold uppercase tracking-[0.12em] transition ${
                    isActive
                      ? 'text-gold'
                      : 'text-white/80 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}

                    {isActive && (
                      <motion.span
                        layoutId="nav-line"
                        className="absolute bottom-0 left-0 right-0 h-1 bg-gold"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <Link
            to="/contact"
            className="hidden items-center gap-2 border border-gold bg-gold px-5 py-3 text-xs font-extrabold uppercase tracking-wide text-navy transition hover:bg-white hover:text-navy lg:flex"
          >
            Start a Project
            <FiArrowRight />
          </Link>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center border border-white/20 text-white lg:hidden"
          >
            {open ? <FiX size={23} /> : <FiMenu size={23} />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-white/10 bg-navy lg:hidden"
          >
            <div className="px-5 py-6">
              <nav className="flex flex-col">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between border-b border-white/10 py-4 text-sm font-bold uppercase tracking-wider ${
                        isActive ? 'text-gold' : 'text-white'
                      }`
                    }
                  >
                    {item.label}
                    <FiChevronDown className="-rotate-90" />
                  </NavLink>
                ))}
              </nav>

              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-6 flex items-center justify-center gap-2 bg-gold px-5 py-4 text-sm font-extrabold uppercase text-navy"
              >
                Start a Project
                <FiArrowRight />
              </Link>

              <a
                href="tel:+912240000000"
                className="mt-4 flex items-center justify-center gap-2 border border-white/20 px-5 py-4 text-sm font-semibold text-white"
              >
                <FiPhone className="text-gold" />
                Contact Our Team
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}