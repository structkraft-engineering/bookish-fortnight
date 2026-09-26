import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import heroImage from '../assets/hero.png'

const projects = [
  {
    number: '01',
    title: 'Structural Rehabilitation',
    category: 'Rehabilitation',
    location: 'Mumbai, Maharashtra',
    image: heroImage,
  },
  {
    number: '02',
    title: 'Building Repair Works',
    category: 'Structural Repairs',
    location: 'Mumbai, Maharashtra',
    image: heroImage,
  },
  {
    number: '03',
    title: 'Structural Assessment',
    category: 'Structural Audit',
    location: 'Mumbai, Maharashtra',
    image: heroImage,
  },
  {
    number: '04',
    title: 'Civil Engineering Works',
    category: 'Civil Engineering',
    location: 'Maharashtra, India',
    image: heroImage,
  },
  {
    number: '05',
    title: 'Building Maintenance',
    category: 'Repair & Maintenance',
    location: 'Mumbai, Maharashtra',
    image: heroImage,
  },
  {
    number: '06',
    title: 'Waterproofing & Repairs',
    category: 'Waterproofing',
    location: 'Mumbai, Maharashtra',
    image: heroImage,
  },
]

export default function Projects() {
  return (
    <div className="pt-20">
      {/* HEADER */}
      <section className="blueprint-grid">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-14 bg-gold" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
                Selected Work
              </span>
            </div>

            <h1 className="font-heading text-5xl font-extrabold uppercase leading-none text-white md:text-7xl">
              Projects
              <br />
              <span className="text-gold">That Matter.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
              A selection of structural rehabilitation, repair, assessment and
              civil engineering work.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="section">
        <div className="section-container">
          <div className="section-heading">
            <h2 className="section-title">Project Portfolio</h2>
            <div className="gold-line" />

            <p className="section-subtitle mt-6">
              Our work is centred on solving practical structural and civil
              engineering challenges across existing built environments.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="group overflow-hidden border-t-4 border-navy bg-white shadow-sm transition hover:-translate-y-1 hover:border-gold hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />

                  <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center bg-gold font-heading text-sm font-extrabold text-navy">
                    {project.number}
                  </div>

                  <div className="absolute bottom-5 left-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gold">
                      {project.category}
                    </p>

                    <p className="mt-1 text-xs text-white/70">
                      {project.location}
                    </p>
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="font-heading text-xl font-extrabold uppercase leading-tight text-navy">
                    {project.title}
                  </h3>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-steel">
                      Structural Engineering
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center bg-slate-100 text-navy transition group-hover:bg-gold">
                      <FiArrowUpRight />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT APPROACH */}
      <section className="section bg-slate-50">
        <div className="section-container">
          <div className="section-heading">
            <h2 className="section-title">Every Project Is Different</h2>
            <div className="gold-line" />
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              [
                'Existing Condition',
                'Every rehabilitation project begins with understanding what already exists and what needs attention.',
              ],
              [
                'Engineering Requirement',
                'Solutions are developed around the structural requirement, site constraints and project objectives.',
              ],
              [
                'Execution Reality',
                'The best engineering solution also needs to work on site. Practical execution remains central to our approach.',
              ],
            ].map(([title, text], index) => (
              <div key={title} className="engineering-card p-8">
                <div className="mb-5 font-heading text-5xl font-extrabold text-gold">
                  0{index + 1}
                </div>

                <h3 className="font-heading text-xl font-extrabold uppercase text-navy">
                  {title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-steel">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}