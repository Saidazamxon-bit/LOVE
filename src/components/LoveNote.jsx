import { useState } from 'react'
import { EmojiText } from './Emoji.jsx'
import { sendToTelegram } from '../data/telegram.js'
import './LoveNote.css'

// Oxirida Mubina o'z fikrini yozadi — xat Telegram botga boradi
export default function LoveNote({ misses = 0 }) {
  const [text, setText] = useState('')
  const [state, setState] = useState('idle') // idle | sending | sent | error

  // Bir marta yuborishga urinish. Muvaffaqiyatli bo'lsa true qaytaradi.
  const trySend = async () => {
    try {
      return await sendToTelegram(text, misses)
    } catch (err) {
      console.warn('Xat yuborilmadi: tarmoq xatosi', err)
      return false
    }
  }

  const send = async (e) => {
    e.preventDefault()
    if (!text.trim() || state === 'sending') return
    setState('sending')
    // Ekranga xato yozmaymiz — jimgina 3 marta urinib ko'ramiz
    for (let i = 0; i < 3; i++) {
      if (await trySend()) return setState('sent')
      await new Promise((res) => setTimeout(res, 800 * (i + 1)))
    }
    setState('error') // tugma faqat silkinadi, yana bosish mumkin
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
        }}
        placeholder="Yoz..."
        rows={6}
        maxLength={3500}
      />

      <button
        key={state === 'error' ? Date.now() : 'btn'}
        className={`btn btn--love note__btn ${state === 'sending' ? 'is-sending' : ''} ${state === 'error' ? 'is-shake' : ''}`}
        type="submit"
        disabled={!text.trim() || state === 'sending'}
      >
        <EmojiText>Yuborish 💌</EmojiText>
      </button>
    </form>
  )
}
