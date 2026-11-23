import Emoji from './Emoji.jsx'
import './Progress.css'

// Yuqoridagi yurakchalar: nechta savolga javob berildi
export default function Progress({ total, current }) {
  return (
    <div className="progress" aria-label={`${current + 1} / ${total}`}>
      {Array.from({ length: total }, (_, i) => (
        <Emoji
          key={i}
          e="❤️"
          className={`progress__heart ${i < current ? 'is-done' : ''} ${i === current ? 'is-now' : ''}`}
        />
      ))}
    </div>
  )
}
