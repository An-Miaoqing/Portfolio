'use client'

import { useState } from 'react'

type FormState = {
  company: string
  email: string
  message: string
  name: string
  subject: string
}

const initialState: FormState = {
  name: '',
  email: '',
  company: '',
  subject: '',
  message: '',
}

type Status = 'error' | 'idle' | 'submitting' | 'success'

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState)
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleChange = (field: keyof FormState) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValues((current) => ({ ...current, [field]: event.target.value }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('submitting')
    setErrorMessage(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          company: values.company || undefined,
          subject: values.subject,
          message: values.message,
        }),
      })

      const data = (await response.json().catch(() => null)) as { error?: string } | null

      if (!response.ok) {
        setStatus('error')
        setErrorMessage(data?.error ?? 'Something went wrong. Please try again shortly.')
        return
      }

      setStatus('success')
      setValues(initialState)
    } catch {
      setStatus('error')
      setErrorMessage('Something went wrong. Please check your connection and try again.')
    }
  }

  const isSubmitting = status === 'submitting'

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={handleChange('name')}
            disabled={isSubmitting}
          />
        </div>
        <div className="contact-form__field">
          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={handleChange('email')}
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className="contact-form__field">
        <label htmlFor="contact-company">Company <span>(optional)</span></label>
        <input
          id="contact-company"
          name="company"
          type="text"
          autoComplete="organization"
          value={values.company}
          onChange={handleChange('company')}
          disabled={isSubmitting}
        />
      </div>

      <div className="contact-form__field">
        <label htmlFor="contact-subject">Subject</label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          required
          value={values.subject}
          onChange={handleChange('subject')}
          disabled={isSubmitting}
        />
      </div>

      <div className="contact-form__field">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          required
          value={values.message}
          onChange={handleChange('message')}
          disabled={isSubmitting}
        />
      </div>

      <div className="contact-form__actions">
        <button className="button button--primary" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending…' : 'Send Message'}
        </button>

        <div aria-live="polite" className="contact-form__status">
          {status === 'success' ? (
            <p className="contact-form__success">✓ Message sent successfully.</p>
          ) : null}
          {status === 'error' ? <p className="contact-form__error">{errorMessage}</p> : null}
        </div>
      </div>
    </form>
  )
}
