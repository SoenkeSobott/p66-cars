import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'

type ContactBody = { type: 'buyer' | 'mechanic'; [key: string]: string }

const LABELS: Record<string, string> = {
  name: 'Name',
  email: 'Email',
  phone: 'Phone',
  carDetails: 'Car details / listing link',
  location: 'Location',
  date: 'Preferred date',
  area: 'Service area',
  qualifications: 'Qualifications',
  message: 'Additional notes',
}

function buildEmail(type: 'buyer' | 'mechanic', fields: Record<string, string>): string {
  const title = type === 'buyer' ? 'New Buyer Request' : 'New Mechanic Application'

  const rows = Object.entries(fields)
    .filter(([, v]) => v?.trim())
    .map(
      ([k, v]) => `
      <tr>
        <td style="padding:8px 24px 8px 0;color:#64748b;font-size:14px;white-space:nowrap;vertical-align:top">${LABELS[k] ?? k}</td>
        <td style="padding:8px 0;color:#0f172a;font-size:14px">${v}</td>
      </tr>`
    )
    .join('')

  return `<!DOCTYPE html><html><body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f8fafc;padding:40px 0;margin:0">
  <div style="max-width:520px;margin:0 auto;background:white;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,.1)">
    <div style="background:#0f172a;padding:24px 32px">
      <p style="color:#94a3b8;margin:0 0 4px;font-size:11px;text-transform:uppercase;letter-spacing:.1em">p66.cars</p>
      <h1 style="color:white;margin:0;font-size:20px;font-weight:600">${title}</h1>
    </div>
    <div style="padding:32px">
      <table style="width:100%;border-collapse:collapse">${rows}</table>
    </div>
    <div style="background:#f8fafc;padding:16px 32px;border-top:1px solid #e2e8f0">
      <p style="margin:0;color:#94a3b8;font-size:12px">Sent via p66.cars contact form</p>
    </div>
  </div>
</body></html>`
}

export async function POST(req: NextRequest) {
  const body = (await req.json()) as ContactBody
  const { type, ...fields } = body

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })

  const subject =
    type === 'buyer'
      ? `New buyer request — ${fields.name}`
      : `New mechanic application — ${fields.name}`

  try {
    await transporter.sendMail({
      from: `p66.cars <${process.env.GMAIL_USER}>`,
      to: 'heimann_p@yahoo.de',
      subject,
      html: buildEmail(type, fields),
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
