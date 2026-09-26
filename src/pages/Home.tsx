import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FiArrowRight,
  FiClipboard,
  FiLayers,
  FiShield,
  FiTool,
} from 'react-icons/fi'

import heroImage from '../assets/hero.png'

const services = [
  {
    icon: FiShield,
    title: 'Structural Rehabilitation',
    text: 'Engineering-led rehabilitation solutions designed to restore structural performance and extend service life.',
  },
  {
    icon: FiTool,
    title: 'Structural Repairs',
    text: 'Systematic repair solutions for distressed, deteriorated and damaged structural elements.',
  },
  {
    icon: FiClipboard,
    title: 'Structural Audit',
    text: 'Condition assessment and technical evaluation to understand existing structural performance.',
  },
  {
    icon: FiLayers,
    title: 'Civil Engineering',
    text: 'Integrated civil engineering support for repair, renovation and construction requirements.',
  },
]

const stats = [
  ['01', 'Engineering', 'Technical approach to every assignment'],
  ['02', 'Assessment', 'Understand before we intervene'],
  ['03', 'Execution', 'Practical solutions built for site conditions'],
  ['04', 'Longevity', 'Focus on durable structural outcomes'],
]

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative flex min-h-[720px] items-center overflow-hidden bg-navy pt-20">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Structural engineering project"
            className="h-full w-full object-cover opacity-55"
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="hero-grid absolute inset-0 opacity-40" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 md:px-8">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-7 flex items-center gap-4"
            >
              <span className="h-px w-14 bg-gold" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
                Structural Rehabilitation & Civil Engineering
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-8xl"
            >
              Engineering
              <br />
              <span className="text-gold">Strength.</span>
              <br />
              Building
              <br />
              <span className="text-white/75">Confidence.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 max-w-2xl text-base leading-8 text-white/70 md:text-lg"
            >
              S.K. Associates / StructKraft Engineering LLP delivers
              structural rehabilitation and civil engineering solutions for
              buildings and built assets across Mumbai and beyond.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Link to="/services" className="btn-gold">
                Explore Our Services
                <FiArrowRight />
              </Link>

              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 border border-white/30 px-8 py-4 font-heading text-sm font-bold uppercase text-white transition hover:border-gold hover:bg-white hover:text-navy"
              >
                View Projects
              </Link>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM LABEL */}
        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-navy/70 backdrop-blur">
          <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
            {stats.map(([number, title, text]) => (
              <div
                key={number}
                className="border-r border-white/10 px-5 py-5 last:border-r-0 md:px-8"
              >
                <div className="mb-2 text-xs font-bold text-gold">
                  {number}
                </div>
                <div className="font-heading text-sm font-extrabold uppercase text-white">
                  {title}
                </div>
                <div className="mt-1 hidden text-xs text-white/45 sm:block">
                  {text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <div className="section-container">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-gold">
                About StructKraft
              </div>

              <h2 className="font-heading text-4xl font-extrabold uppercase leading-tight text-navy md:text-5xl">
                Existing Structures.
                <br />
                New Strength.
              </h2>

              <div className="gold-line !mx-0" />

              <p className="mt-8 text-base leading-8 text-steel">
                We focus on the engineering challenges that come with
                existing structures — assessment, repair, rehabilitation,
                strengthening and civil engineering execution.
              </p>

              <p className="mt-5 text-base leading-8 text-steel">
                Our approach combines technical understanding with practical
                site execution, helping clients make informed decisions about
                their built assets.
              </p>

              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 font-heading text-sm font-extrabold uppercase text-navy hover:text-gold"
              >
                Discover Our Approach
                <FiArrowRight />
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -right-3 -top-3 h-full w-full border-2 border-gold/40" />

              <div className="relative bg-navy p-8 md:p-12">
                <div className="mb-10 flex items-center justify-between">
                  <span className="font-heading text-sm font-bold uppercase tracking-wider text-white">
                    Engineering Principles
                  </span>

                  <span className="h-3 w-3 bg-gold" />
                </div>

                <div className="space-y-7">
                  {[
                    'Assess the existing condition',
                    'Identify structural requirements',
                    'Develop practical solutions',
                    'Execute with technical discipline',
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-start gap-4 border-b border-white/10 pb-6 last:border-0 last:pb-0"
                    >
                      <span className="font-heading text-sm font-bold text-gold">
                        0{index + 1}
                      </span>

                      <span className="text-sm leading-6 text-white/75">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section bg-slate-50">
        <div className="section-container">
          <div className="section-heading">
            <h2 className="section-title">Our Expertise</h2>
            <div className="gold-line" />
            <p className="section-subtitle mt-6">
              Engineering services focused on the assessment, repair,
              rehabilitation and improvement of existing built assets.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="engineering-card group p-7"
                >
                  <div className="mb-7 flex h-14 w-14 items-center justify-center bg-navy text-gold transition group-hover:bg-gold group-hover:text-navy">
                    <Icon size={25} />
                  </div>

                  <h3 className="font-heading text-lg font-extrabold uppercase leading-tight text-navy">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-steel">
                    {service.text}
                  </p>

                  <Link
                    to="/services"
                    className="mt-7 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-navy transition hover:text-gold"
                  >
                    Learn More
                    <FiArrowRight />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="blueprint-grid section text-white">
        <div className="section-container">
          <div className="section-heading">
            <h2 className="section-title text-white">How We Work</h2>
            <div className="gold-line" />
          </div>

          <div className="grid gap-0 md:grid-cols-4">
            {[
              ['01', 'Assess', 'Understand the existing structure and site condition.'],
              ['02', 'Analyse', 'Identify the engineering requirements and constraints.'],
              ['03', 'Engineer', 'Develop appropriate repair or rehabilitation solutions.'],
              ['04', 'Deliver', 'Coordinate execution with quality and technical focus.'],
            ].map(([number, title, text], index) => (
              <div
                key={number}
                className={`border-white/10 p-7 ${
                  index < 3 ? 'md:border-r' : ''
                }`}
              >
                <div className="font-heading text-5xl font-extrabold text-gold">
                  {number}
                </div>

                <h3 className="mt-5 font-heading text-xl font-extrabold uppercase text-white">
                  {title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/55">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="section-container">
          <div className="relative overflow-hidden bg-gold px-7 py-14 md:px-14 md:py-16">
            <div className="absolute right-0 top-0 h-40 w-40 border-l border-b border-navy/10" />
            <div className="absolute bottom-0 right-20 h-24 w-24 border-l border-t border-navy/10" />

            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-3xl">
                <div className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-navy/60">
                  Let's Build With Confidence
                </div>

                <h2 className="font-heading text-3xl font-extrabold uppercase leading-tight text-navy md:text-5xl">
                  Have a Structural Challenge?
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-navy/70 md:text-base">
                  Tell us about your building, repair requirement or
                  rehabilitation project and our team can discuss the next
                  steps.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex shrink-0 items-center gap-2 border-2 border-navy bg-navy px-7 py-4 font-heading text-sm font-extrabold uppercase text-white transition hover:bg-white hover:text-navy"
              >
                Contact Us
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}