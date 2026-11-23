// Mubinaning yozgan xatini Telegram botga yuboradi.
// Token faqat serverda (muhit o'zgaruvchilarida) turadi — brauzerga hech qachon chiqmaydi.
const MAX_LEN = 3500

export async function sendLoveNote({ text, misses }, env = process.env) {
  const token = env.TELEGRAM_BOT_TOKEN
  const chatId = env.TELEGRAM_CHAT_ID
  if (!token || !chatId) return { status: 500, body: { ok: false, error: 'not_configured' } }

  const note = String(text ?? '').trim().slice(0, MAX_LEN)
  if (!note) return { status: 400, body: { ok: false, error: 'empty' } }

  const tries = Math.max(0, Math.min(Number(misses) || 0, 9999))
  const message =
    `💌 Mubinadan xat\n\n${note}\n\n` +
    `— noto‘g‘ri javobni ${tries} marta bosmoqchi bo‘ldi 😅`

  try {
    const r = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: message }),
    })
    const data = await r.json().catch(() => ({}))
    if (!r.ok || !data.ok) return { status: 502, body: { ok: false, error: 'telegram' } }
    return { status: 200, body: { ok: true } }
  } catch {
    return { status: 502, body: { ok: false, error: 'network' } }
  }
}
