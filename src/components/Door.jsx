import { useState } from 'react'
import { NAME } from '../data/questions.js'
import './Door.css'

// Kirishdagi eshik: bosilsa taqillaydi va ikki tavaqasi ochiladi
export default function Door({ onOpened }) {
  const [phase, setPhase] = useState('closed') // closed | knock | open | gone

  const open = () => {
    if (phase !== 'closed') return
    setPhase('knock')
    setTimeout(() => {
      setPhase('open')
      onOpened?.()
    }, 450)
    setTimeout(() => setPhase('gone'), 2400)
  }

  if (phase === 'gone') return null

  return (
    <div
      className={`door door--${phase}`}
      onClick={open}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && open()}
      role="button"
      tabIndex={0}
      aria-label="Eshikni ochish"
    >
      <div className="door__light" />
      <div className="door__frame">
        <div className="door__leaf door__leaf--left">
          <span className="door__panel" />
          <span className="door__panel door__panel--low" />
          <span className="door__knob" />
        </div>
        <div className="door__leaf door__leaf--right">
          <span className="door__panel" />
          <span className="door__panel door__panel--low" />
          <span className="door__knob" />
        </div>

        <div className="door__sign">
          <span className="door__string" />
          <div className="door__tag">
            <small>faqat</small>
            <strong>{NAME}</strong>
            <small>uchun</small>
          </div>
        </div>

        <p className="door__hint">eshikni ochish uchun bos</p>
      </div>
    </div>
  )
}
