import { useRef } from 'react'
import Sticker from './Sticker.jsx'
import RunawayButton from './RunawayButton.jsx'
import { EmojiText } from './Emoji.jsx'
import './QuestionCard.css'

export default function QuestionCard({ number, total, question, onBest, onFlee }) {
  const bestRef = useRef(null)

  return (
    <article className="card">
      <span className="card__tape" />
      <Sticker src={question.img} className="card__img" rotate={number % 2 ? -6 : 6} />

      <p className="eyebrow">savol {number} / {total}</p>
      <h2 className="card__q">{question.q}</h2>

      <div className="card__answers">
        {question.answers.map((a, i) =>
          a.best ? (
            <button
              key={i}
              ref={bestRef}
              type="button"
              className="btn btn--love"
              onClick={onBest}
            >
              <EmojiText>{a.text}</EmojiText>
            </button>
          ) : (
            <RunawayButton key={i} avoidRef={bestRef} onFlee={onFlee}>
              <EmojiText>{a.text}</EmojiText>
            </RunawayButton>
          )
        )}
      </div>
    </article>
  )
}
