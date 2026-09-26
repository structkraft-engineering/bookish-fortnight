import { FormEvent, useState } from 'react'
import {
  FiArrowRight,
  FiClock,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from 'react-icons/fi'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="pt-20">
      {/* HEADER */}
      <section className="blueprint-grid">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-14 bg-gold" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
                Start A Conversation
              </span>
            </div>

            <h1 className="font-heading text-5xl font-extrabold uppercase leading-none text-white md:text-7xl">
              Let's Talk
              <br />
              <span className="text-gold">Engineering.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
              Have a structural rehabilitation, repair, audit or civil
              engineering requirement? Tell us about your project.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="section">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            {/* DETAILS */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                Contact Information
              </p>

              <h2 className="mt-4 font-heading text-3xl font-extrabold uppercase text-navy md:text-4xl">
                Connect With Our Team
              </h2>

              <div className="gold-line !mx-0" />

              <p className="mt-7 leading-8 text-steel">
                Share a few details about your requirement and we can
                understand the nature of the project before discussing the
                next steps.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-navy text-gold">
                    <FiMapPin />
                  </div>

                  <div>
                    <h3 className="font-heading text-sm font-extrabold uppercase text-navy">
                      Office
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-steel">
                      Mumbai,
                      <br />
                      Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-navy text-gold">
                    <FiPhone />
                  </div>

                  <div>
                    <h3 className="font-heading text-sm font-extrabold uppercase text-navy">
                      Phone
                    </h3>

                    <a
                      href="tel:+912240000000"
                      className="mt-2 block text-sm text-steel transition hover:text-gold"
                    >
                      +91 22 4000 0000
                    </a>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-navy text-gold">
                    <FiMail />
                  </div>

                  <div>
                    <h3 className="font-heading text-sm font-extrabold uppercase text-navy">
                      Email
                    </h3>

                    <a
                      href="mailto:info@structkraft.com"
                      className="mt-2 block text-sm text-steel transition hover:text-gold"
                    >
                      info@structkraft.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-navy text-gold">
                    <FiClock />
                  </div>

                  <div>
                    <h3 className="font-heading text-sm font-extrabold uppercase text-navy">
                      Working Hours
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-steel">
                      Monday – Saturday
                      <br />
                      9:00 AM – 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="border-t-4 border-navy bg-white p-7 shadow-xl md:p-10">
              <div className="mb-8">
                <h2 className="font-heading text-2xl font-extrabold uppercase text-navy">
                  Project Enquiry
                </h2>

                <p className="mt-2 text-sm text-steel">
                  Give us some information about your requirement.
                </p>
              </div>

              {submitted ? (
                <div className="border border-green-200 bg-green-50 p-8">
                  <div className="flex h-14 w-14 items-center justify-center bg-navy text-gold">
                    <FiSend size={24} />
                  </div>

                  <h3 className="mt-6 font-heading text-2xl font-extrabold uppercase text-navy">
                    Enquiry Ready
                  </h3>

                  <p className="mt-3 leading-7 text-steel">
                    Thank you. Your enquiry has been captured in this demo
                    interface. Connect the form to your preferred email or
                    backend service to receive submissions.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 font-heading text-sm font-extrabold uppercase text-navy hover:text-gold"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-xs font-bold uppercase tracking-wider text-navy"
                      >
                        Name *
                      </label>

                      <input
                        id="name"
                        name="name"
                        required
                        className="form-input"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="mb-2 block text-xs font-bold uppercase tracking-wider text-navy"
                      >
                        Company
                      </label>

                      <input
                        id="company"
                        name="company"
                        className="form-input"
                        placeholder="Company / Society"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-xs font-bold uppercase tracking-wider text-navy"
                      >
                        Email *
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="form-input"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-xs font-bold uppercase tracking-wider text-navy"
                      >
                        Phone *
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        className="form-input"
                        placeholder="+91"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-navy"
                    >
                      Requirement
                    </label>

                    <select
                      id="service"
                      name="service"
                      className="form-input"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option>Structural Rehabilitation</option>
                      <option>Structural Repairs</option>
                      <option>Structural Audit</option>
                      <option>Civil Engineering</option>
                      <option>Waterproofing</option>
                      <option>Project Consultancy</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-navy"
                    >
                      Project Details *
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="form-input resize-none"
                      placeholder="Tell us about the building, location and requirement..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-gold w-full"
                  >
                    Send Enquiry
                    <FiArrowRight />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="section bg-slate-50">
        <div className="section-container">
          <div className="overflow-hidden border border-slate-200 bg-navy">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[320px] overflow-hidden bg-[#12264d]">
                <div className="blueprint-grid absolute inset-0 opacity-60" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center border-2 border-gold text-gold">
                      <FiMapPin size={34} />
                    </div>

                    <p className="mt-6 font-heading text-xl font-extrabold uppercase text-white">
                      Mumbai
                    </p>

                    <p className="mt-2 text-sm text-white/50">
                      Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center p-8 md:p-12">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                  Based In Mumbai
                </p>

                <h2 className="mt-4 font-heading text-3xl font-extrabold uppercase text-white md:text-4xl">
                  Engineering For The Built Environment
                </h2>

                <p className="mt-5 leading-8 text-white/55">
                  Get in touch with our team to discuss your structural
                  rehabilitation, repair, audit or civil engineering
                  requirement.
                </p>

                <a
                  href="mailto:info@structkraft.com"
                  className="mt-7 inline-flex items-center gap-2 font-heading text-sm font-extrabold uppercase text-gold hover:text-white"
                >
                  Email Our Team
                  <FiArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}