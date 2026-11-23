import Sticker from './Sticker.jsx'
import { NAME } from '../data/questions.js'
import './Welcome.css'

export default function Welcome({ onStart }) {
  return (
    <section className="page welcome">
      <Sticker src="img/lola.png" className="welcome__lily" rotate={-14} />
      <Sticker src="img/barmoq-izi.png" className="welcome__print" rotate={10} />

      <p className="eyebrow">sen uchun kichkina sayt</p>
      <h1 className="welcome__title">
        Salom, <span>{NAME}</span>
      </h1>
      <p className="welcome__text">
        Bir nechta savol tayyorladim.<br />
        Faqat rostini ayt — men baribir bilaman 😌
      </p>

      <Sticker src="img/mushuklar.png" className="welcome__cats" alt="Ikki mushukcha" />

      <button className="btn btn--love" onClick={onStart}>
        Boshladik ❤
      </button>
    </section>
  )
}
