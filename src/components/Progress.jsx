import './Progress.css'

// Yuqoridagi yurakchalar: nechta savolga javob berildi
export default function Progress({ total, current }) {
  return (
    <div className="progress" aria-label={`${current + 1} / ${total}`}>
      {Array.from({ length: total }, (_, i) => (
        <span
          key={i}
          className={`progress__heart ${i < current ? 'is-done' : ''} ${i === current ? 'is-now' : ''}`}
        >
          ❤
        </span>
      ))}
    </div>
  )
}
