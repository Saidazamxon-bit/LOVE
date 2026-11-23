// Mubinaning xati shu botga keladi.
// Diqqat: token sayt kodida ochiq turadi (egasi shunday tanladi).
// Agar kimdir botni suiiste'mol qilsa: @BotFather → /revoke → yangi tokenni shu yerga qo'ying.
export const TELEGRAM_BOT_TOKEN = '9187907559:AAHweeiTe_a15cAgqUKsNGx5-lO72YmuhOU'
export const TELEGRAM_CHAT_ID = '7919670157'

export async function sendToTelegram(text, misses = 0) {
  const message =
    `💌 Mubinadan xat\n\n${String(text).trim().slice(0, 3500)}\n\n` +
    `— noto‘g‘ri javobni ${misses} marta bosmoqchi bo‘ldi 😅`

  const r = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: message }),
  })
  const data = await r.json().catch(() => ({}))
  if (!data.ok) console.warn('Telegram xatosi:', data.description || r.status)
  return Boolean(data.ok)
}
