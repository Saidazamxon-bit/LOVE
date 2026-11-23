// Vercel serverless funksiyasi: POST /api/send  { text, misses }
import { sendLoveNote } from './_telegram.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false })
  let body = req.body
  if (typeof body === 'string') {
    try { body = JSON.parse(body) } catch { body = {} }
  }
  const { status, body: out } = await sendLoveNote(body || {})
  res.status(status).json(out)
}
