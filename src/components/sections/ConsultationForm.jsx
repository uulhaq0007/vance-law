import { useState } from 'react'
import { FiCheckCircle } from 'react-icons/fi'
import Reveal from '../ui/Reveal'
import SectionTitle from '../ui/SectionTitle'
import { practiceAreas } from '../../data/firm'

const empty = { first: '', last: '', phone: '', area: practiceAreas[0].label, message: '' }

export default function ConsultationForm() {
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (f) => (e) => {
    setForm((p) => ({ ...p, [f]: e.target.value }))
    setErrors((p) => ({ ...p, [f]: undefined }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const next = {}
    if (!form.first.trim()) next.first = 'Required'
    if (!form.last.trim()) next.last = 'Required'
    if (!/^[\d\s()+.-]{7,}$/.test(form.phone)) next.phone = 'Enter a contact number'
    if (form.message.trim().length < 10) next.message = 'Please describe your matter briefly'
    setErrors(next)
    if (Object.keys(next).length) return

    // Front-end only — nothing is transmitted.
    setSent(true)
    setForm(empty)
  }

  return (
    <section className="relative overflow-hidden bg-mist">
      <img
        src={`${import.meta.env.BASE_URL}images/hero-1.jpg`}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.07]"
        loading="lazy"
      />

      <div className="container relative">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="hidden lg:col-span-4 lg:block">
            <img
              src={`${import.meta.env.BASE_URL}images/consult-lawyer.jpg`}
              alt="Attorney available for consultation"
              className="h-[480px] w-full object-cover object-top"
              loading="lazy"
            />
          </div>

          <div className="py-16 lg:col-span-8 lg:py-20 lg:pl-6">
            <SectionTitle title="Request a Free Consultation" />

            <Reveal delay={120}>
              <form onSubmit={onSubmit} noValidate className="mt-8">
                {sent && (
                  <div className="mb-6 flex items-center gap-3 border border-gold bg-white px-5 py-4 text-[15px] text-ink">
                    <FiCheckCircle className="shrink-0 text-xl text-gold" />
                    Thank you — your request has been recorded. This demo has no backend, so nothing was sent.
                  </div>
                )}

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first" className="sr-only">First name</label>
                    <input id="first" placeholder="First Name" value={form.first} onChange={update('first')}
                      aria-invalid={Boolean(errors.first)} className={`field ${errors.first ? 'field-error' : ''}`} />
                    {errors.first && <p className="mt-1 text-[13px] text-red-500">{errors.first}</p>}
                  </div>
                  <div>
                    <label htmlFor="last" className="sr-only">Last name</label>
                    <input id="last" placeholder="Last Name" value={form.last} onChange={update('last')}
                      aria-invalid={Boolean(errors.last)} className={`field ${errors.last ? 'field-error' : ''}`} />
                    {errors.last && <p className="mt-1 text-[13px] text-red-500">{errors.last}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="sr-only">Phone</label>
                    <input id="phone" type="tel" placeholder="Phone" value={form.phone} onChange={update('phone')}
                      aria-invalid={Boolean(errors.phone)} className={`field ${errors.phone ? 'field-error' : ''}`} />
                    {errors.phone && <p className="mt-1 text-[13px] text-red-500">{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="area" className="sr-only">Practice area</label>
                    <select id="area" value={form.area} onChange={update('area')} className="field">
                      {practiceAreas.map((a) => (
                        <option key={a.slug}>{a.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea id="message" rows={5} placeholder="Message" value={form.message} onChange={update('message')}
                    aria-invalid={Boolean(errors.message)} className={`field resize-none ${errors.message ? 'field-error' : ''}`} />
                  {errors.message && <p className="mt-1 text-[13px] text-red-500">{errors.message}</p>}
                </div>

                <button type="submit" className="btn-navy mt-6">
                  Send Now
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
