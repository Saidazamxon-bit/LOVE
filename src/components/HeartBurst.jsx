import { useMemo } from 'react'
import Emoji from './Emoji.jsx'
import './HeartBurst.css'

// To'g'ri javob bosilganda yurakchalar portlashi
export default function HeartBurst({ x, y, count = 16 }) {
  const parts = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const angle = (i / count) * Math.PI * 2 + Math.random() * 0.4
        const dist = 70 + Math.random() * 90
        return {
          dx: Math.cos(angle) * dist,
          dy: Math.sin(angle) * dist - 30,
          size: 14 + Math.random() * 16,
          delay: Math.random() * 0.08,
        }
      }),
    [count]
  )

  return (
    <div className="burst" style={{ left: x, top: y }} aria-hidden="true">
      {parts.map((p, i) => (
        <span
          key={i}
          style={{
            '--dx': `${p.dx}px`,
            '--dy': `${p.dy}px`,
            animationDelay: `${p.delay}s`,
          }}
        >
          <Emoji e="❤️" size={p.size} />
        </span>
      ))}
    </div>
  )
}
