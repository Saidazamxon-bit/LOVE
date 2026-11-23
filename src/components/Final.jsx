import Sticker from './Sticker.jsx'
import { NAME } from '../data/questions.js'
import { EmojiText } from './Emoji.jsx'
import './Final.css'

// "i love you" harflari (rasmdan kesilgan)
const words = [[0], [1, 2, 3, 4], [5, 6, 7]]

export default function Final({ onRestart }) {
  let n = 0
  return (
    <section className="page final">
      <div className="final__letters" aria-label="i love you">
        {words.map((w, wi) => (
          <span className="final__word" key={wi}>
            {w.map((l) => {
              const order = n++
              return (
                <img
                  key={l}
                  src={`img/letters/${l}.png`}
                  alt=""
                  className="final__letter"
                  style={{ '--i': order, '--r': `${(order % 2 ? 1 : -1) * (3 + (order % 3) * 2)}deg` }}
                  draggable="false"
                />
              )
            })}
          </span>
        ))}
      </div>

      <h2 className="final__name">{NAME}</h2>
      <p className="final__text">
        Hamma javobing to‘g‘ri chiqdi.<br />
        Sen mening eng chiroyli javobimsan.
      </p>

      <div className="final__polaroid">
        <img src="img/kollaj.jpg" alt="Bizning xotiralar" draggable="false" />
        <span><EmojiText>bizning xotiralar ❤️</EmojiText></span>
      </div>

      <Sticker src="img/qogoz-yurak.png" className="final__heart" rotate={-8} />

      <button className="btn btn--ghost" onClick={onRestart}>
        Yana bir bor
      </button>
    </section>
  )
}
