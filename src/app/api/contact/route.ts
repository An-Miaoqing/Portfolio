import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const CONTACT_RECIPIENT = 'an.miaoqing@gmail.com'
const CONTACT_SENDER = 'Portfolio Contact <contact@amq.systems>'
const GENERIC_ERROR = 'Something went wrong. Please try again, or contact me directly by email.'
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const MAX_LENGTHS = {
  name: 100,
  email: 254,
  company: 150,
  subject: 200,
  message: 5000,
} as const

type ContactPayload = {
  company?: string
  email: string
  message: string
  name: string
  subject: string
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

function validatePayload(body: unknown): { errors: string[]; payload?: ContactPayload } {
  if (typeof body !== 'object' || body === null) {
    return { errors: ['Invalid request body.'] }
  }

  const { company, email, message, name, subject } = body as Record<string, unknown>
  const errors: string[] = []

  if (!isNonEmptyString(name) || name.trim().length > MAX_LENGTHS.name) {
    errors.push('A valid name is required.')
  }
  if (!isNonEmptyString(email) || !EMAIL_PATTERN.test(email.trim()) || email.trim().length > MAX_LENGTHS.email) {
    errors.push('A valid email is required.')
  }
  if (!isNonEmptyString(subject) || subject.trim().length > MAX_LENGTHS.subject) {
    errors.push('A subject is required.')
  }
  if (!isNonEmptyString(message) || message.trim().length > MAX_LENGTHS.message) {
    errors.push('A message is required.')
  }
  if (company !== undefined && (typeof company !== 'string' || company.length > MAX_LENGTHS.company)) {
    errors.push('Company is invalid.')
  }

  if (errors.length > 0) return { errors }

  return {
    errors: [],
    payload: {
      name: (name as string).trim(),
      email: (email as string).trim(),
      company: typeof company === 'string' && company.trim().length > 0 ? company.trim() : undefined,
      subject: (subject as string).trim(),
      message: (message as string).trim(),
    },
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

export async function POST(request: Request) {
  let body: unknown

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 })
  }

  // Honeypot: a hidden field real visitors never fill in. If populated, this is a bot —
  // pretend success so it doesn't learn to adapt, but skip sending anything.
  const honeypot = (body as Record<string, unknown> | null)?.website
  if (typeof honeypot === 'string' && honeypot.trim().length > 0) {
    console.warn('Contact form honeypot triggered; skipping send.')
    return NextResponse.json({ success: true })
  }

  const { errors, payload } = validatePayload(body)
  if (!payload) {
    return NextResponse.json({ error: errors.join(' ') }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY is not configured.')
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 500 })
  }

  const text = [
    'New Portfolio Message',
    '',
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    payload.company ? `Company: ${payload.company}` : null,
    `Subject: ${payload.subject}`,
    '',
    'Message:',
    payload.message,
  ]
    .filter((line) => line !== null)
    .join('\n')

  const html = `
    <h2>New Portfolio Message</h2>
    <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
    ${payload.company ? `<p><strong>Company:</strong> ${escapeHtml(payload.company)}</p>` : ''}
    <p><strong>Subject:</strong> ${escapeHtml(payload.subject)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(payload.message).replaceAll('\n', '<br />')}</p>
  `

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from: CONTACT_SENDER,
      to: [CONTACT_RECIPIENT],
      replyTo: payload.email,
      subject: `[Portfolio] ${payload.subject}`,
      text,
      html,
    })

    if (error) {
      console.error('Resend API error:', error)
      return NextResponse.json({ error: GENERIC_ERROR }, { status: 502 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to send contact message:', error)
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 502 })
  }
}
