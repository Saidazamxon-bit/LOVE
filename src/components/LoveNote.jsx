import { useState } from 'react'
import { EmojiText } from './Emoji.jsx'
import './LoveNote.css'

// Oxirida Mubina o'z fikrini yozadi — xat Telegram botga boradi
export default function LoveNote({ misses = 0 }) {
  const [text, setText] = useState('')
  const [state, setState] = useState('idle') // idle | sending | sent | error

  const send = async (e) => {
    e.preventDefault()
    if (!text.trim() || state === 'sending') return
    setState('sending')
    try {
      const r = await fetch('api/send', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ text, misses }),
      })
      const data = await r.json().catch(() => ({}))
      if (r.ok && data.ok) return setState('sent')
      // Sabab: 404 — server yo'q (oddiy hosting), not_configured — token qo'yilmagan,
      // telegram — bot yoza olmadi (botga /start bosilmagan yoki ID noto'g'ri)
      console.warn('Xat yuborilmadi:', r.status, data.error || 'server javob bermadi')
      setState('error')
    } catch (err) {
      console.warn('Xat yuborilmadi: tarmoq xatosi', err)
      setState('error')
    }
  }

  if (state === 'sent') {
    return (
      <div className="note note--sent">
        <p className="note__thanks"><EmojiText>Yetib bordi 💌</EmojiText></p>
        <p className="note__sub">Rahmat, jonim. Har bir so‘zingni o‘qiyman.</p>
      </div>
    )
  }

  return (
    <form className="note" onSubmit={send}>
      <span className="note__tape" />
      <p className="eyebrow">endi navbat senga</p>
      <h3 className="note__title">Men haqimda nima o‘ylaysan?</h3>
      <p className="note__sub">
        <EmojiText>Ichingdagini yoz — uyalmasdan 🥺</EmojiText>
      </p>

      <textarea
        className="note__input"
        value={text}
        onChange={(e) => {
          setText(e.target.value)
          if (state === 'error') setState('idle')
        }}
        placeholder="Yoz..."
        rows={6}
        maxLength={3500}
      />

      {state === 'error' && (
        <p className="note__error">Yuborilmadi. Internetni tekshirib, yana bir bor bos.</p>
      )}

      <button className="btn btn--love note__btn" type="submit" disabled={!text.trim() || state === 'sending'}>
        {state === 'sending' ? 'Yuborilyapti...' : <EmojiText>Yuborish 💌</EmojiText>}
      </button>
    </form>
  )
}
