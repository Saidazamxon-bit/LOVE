import { useState } from 'react'
import { EmojiText } from './Emoji.jsx'
import { sendToTelegram } from '../data/telegram.js'
import './LoveNote.css'

// Oxirida Mubina o'z fikrini yozadi — xat jimgina Telegram botga boradi
export default function LoveNote({ misses = 0 }) {
  const [text, setText] = useState('')
  const [done, setDone] = useState(false)

  // Xat orqa fonda jimgina ketadi: Mubina hech narsa sezmaydi.
  // Internet bo'lmasa bir necha marta qayta urinadi.
  const deliver = async (note) => {
    for (let i = 0; i < 6; i++) {
      try {
        if (await sendToTelegram(note, misses)) return
      } catch (err) {
        console.warn('Qayta urinish...', err)
      }
      await new Promise((res) => setTimeout(res, 1500 * (i + 1)))
    }
  }

  const confirm = (e) => {
    e.preventDefault()
    if (!text.trim() || done) return
    deliver(text)
    setDone(true)
  }

  if (done) {
    return (
      <div className="note note--sent">
        <p className="note__thanks"><EmojiText>Rahmat ❤️</EmojiText></p>
        <p className="note__sub">Seni juda yaxshi ko‘raman.</p>
      </div>
    )
  }

  return (
    <form className="note" onSubmit={confirm}>
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
        }}
        placeholder="Yoz..."
        rows={6}
        maxLength={3500}
      />

      <button className="btn btn--love note__btn" type="submit" disabled={!text.trim()}>
        Tasdiqlash
      </button>
    </form>
  )
}
