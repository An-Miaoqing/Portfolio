import { NextResponse } from 'next/server'

const CONTACT_RECIPIENT = 'an.miaoqing@gmail.com'
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_FIELD_LENGTH = 5000

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

  if (!isNonEmptyString(name) || name.length > MAX_FIELD_LENGTH) errors.push('Name is required.')
  if (!isNonEmptyString(email) || !EMAIL_PATTERN.test(email) || email.length > MAX_FIELD_LENGTH) {
    errors.push('A valid email is required.')
  }
  if (!isNonEmptyString(subject) || subject.length > MAX_FIELD_LENGTH) errors.push('Subject is required.')
  if (!isNonEmptyString(message) || message.length > MAX_FIELD_LENGTH) errors.push('Message is required.')
  if (company !== undefined && (typeof company !== 'string' || company.length > MAX_FIELD_LENGTH)) {
    errors.push('Company is invalid.')
  }

  if (errors.length > 0) return { errors }

  return {
    errors: [],
    payload: {
      name: (name as string).trim(),
      email: (email as string).trim(),
      company: typeof company === 'string' ? company.trim() : undefined,
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

  const { errors, payload } = validatePayload(body)
  if (!payload) {
    return NextResponse.json({ error: errors.join(' ') }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY is not configured.')
    return NextResponse.json(
      { error: 'The contact form is not fully configured yet. Please email directly instead.' },
      { status: 500 },
    )
  }

  const html = `
    <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
    ${payload.company ? `<p><strong>Company:</strong> ${escapeHtml(payload.company)}</p>` : ''}
    <p><strong>Subject:</strong> ${escapeHtml(payload.subject)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(payload.message).replaceAll('\n', '<br />')}</p>
  `

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Contact Form <onboarding@resend.dev>',
        to: [CONTACT_RECIPIENT],
        reply_to: payload.email,
        subject: `[Portfolio] ${payload.subject}`,
        html,
      }),
    })

    if (!response.ok) {
      const errorBody = await response.text()
      console.error('Resend API error:', response.status, errorBody)
      return NextResponse.json({ error: 'The message could not be sent. Please try again shortly.' }, { status: 502 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to send contact message:', error)
    return NextResponse.json({ error: 'The message could not be sent. Please try again shortly.' }, { status: 502 })
  }
}
