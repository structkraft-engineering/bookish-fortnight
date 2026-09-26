import { motion } from 'framer-motion'
import {
  FiArrowRight,
  FiCheck,
  FiClipboard,
  FiDroplet,
  FiLayers,
  FiShield,
  FiTool,
} from 'react-icons/fi'
import { Link } from 'react-router-dom'

const services = [
  {
    number: '01',
    icon: FiShield,
    title: 'Structural Rehabilitation',
    description:
      'Rehabilitation solutions for existing structures where deterioration, ageing or changing requirements call for engineering intervention.',
    points: [
      'Condition-based rehabilitation planning',
      'Repair and strengthening strategies',
      'Existing structure improvement',
      'Site-focused engineering solutions',
    ],
  },
  {
    number: '02',
    icon: FiTool,
    title: 'Structural Repairs',
    description:
      'Repair solutions aimed at addressing distressed or deteriorated structural components and restoring their intended performance.',
    points: [
      'Concrete repair',
      'Deterioration treatment',
      'Structural element repairs',
      'Repair methodology support',
    ],
  },
  {
    number: '03',
    icon: FiClipboard,
    title: 'Structural Audit',
    description:
      'Systematic assessment of existing structures to understand visible conditions, potential concerns and engineering requirements.',
    points: [
      'Visual condition assessment',
      'Defect documentation',
      'Structural observations',
      'Technical recommendations',
    ],
  },
  {
    number: '04',
    icon: FiLayers,
    title: 'Civil Engineering',
    description:
      'Civil engineering support integrated with structural repair, renovation and construction requirements.',
    points: [
      'Civil repair works',
      'Renovation support',
      'Construction coordination',
      'Site execution assistance',
    ],
  },
  {
    number: '05',
    icon: FiDroplet,
    title: 'Waterproofing',
    description:
      'Water ingress and waterproofing solutions considered as part of a broader building repair and maintenance strategy.',
    points: [
      'Water leakage assessment',
      'Waterproofing requirements',
      'Treatment coordination',
      'Preventive maintenance',
    ],
  },
  {
    number: '06',
    icon: FiCheck,
    title: 'Project Consultancy',
    description:
      'Technical guidance throughout the project lifecycle, from understanding the problem through implementation.',
    points: [
      'Technical consultation',
      'Repair planning',
      'Contractor coordination',
      'Execution monitoring',
    ],
  },
]

export default function Services() {
  return (
    <div className="pt-20">
      {/* HEADER */}
      <section className="blueprint-grid relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-14 bg-gold" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
                What We Do
              </span>
            </div>

            <h1 className="font-heading text-5xl font-extrabold uppercase leading-none text-white md:text-7xl">
              Engineering
              <br />
              <span className="text-gold">Solutions.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
              From structural assessment to rehabilitation and civil
              engineering execution, our services are built around the
              requirements of existing structures.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="section-container">
          <div className="section-heading">
            <h2 className="section-title">Our Services</h2>
            <div className="gold-line" />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon

              return (
                <motion.article
                  key={service.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="engineering-card group p-7 md:p-9"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-navy text-gold transition group-hover:bg-gold group-hover:text-navy">
                      <Icon size={25} />
                    </div>

                    <span className="font-heading text-4xl font-extrabold text-slate-100">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-7 font-heading text-2xl font-extrabold uppercase text-navy">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-steel">
                    {service.description}
                  </p>

                  <div className="mt-7 grid gap-3 border-t border-slate-100 pt-6 sm:grid-cols-2">
                    {service.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-3 text-sm text-carbon"
                      >
                        <FiCheck className="mt-1 shrink-0 text-gold" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="section bg-slate-50">
        <div className="section-container">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                Our Methodology
              </p>

              <h2 className="mt-4 font-heading text-4xl font-extrabold uppercase leading-tight text-navy md:text-5xl">
                Diagnose.
                <br />
                Design.
                <br />
                Deliver.
              </h2>

              <div className="gold-line !mx-0" />

              <p className="mt-7 leading-8 text-steel">
                Effective rehabilitation begins with understanding the
                existing condition. We approach each assignment as an
                engineering problem requiring appropriate assessment,
                planning and execution.
              </p>
            </div>

            <div className="grid gap-5">
              {[
                [
                  '01',
                  'Understand',
                  'Review the building, available information, visible defects and project requirements.',
                ],
                [
                  '02',
                  'Plan',
                  'Translate observations into a practical technical approach and repair strategy.',
                ],
                [
                  '03',
                  'Execute',
                  'Coordinate implementation with attention to site conditions and technical requirements.',
                ],
                [
                  '04',
                  'Review',
                  'Maintain focus on quality, documentation and the intended engineering outcome.',
                ],
              ].map(([number, title, text]) => (
                <div
                  key={number}
                  className="flex gap-6 border-l-4 border-navy bg-white p-6 transition hover:border-gold"
                >
                  <div className="font-heading text-xl font-extrabold text-gold">
                    {number}
                  </div>

                  <div>
                    <h3 className="font-heading text-lg font-extrabold uppercase text-navy">
                      {title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-steel">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="section-container">
          <div className="bg-navy p-8 md:p-14">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                  Need Technical Support?
                </p>

                <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase text-white md:text-4xl">
                  Let's Discuss Your Requirement.
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-white/55">
                  Share the nature of your structural or civil engineering
                  requirement with our team.
                </p>
              </div>

              <Link to="/contact" className="btn-gold">
                Get In Touch
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}