import { useMemo } from 'react'
import Emoji from './Emoji.jsx'
import './FloatingHearts.css'

// Fonda sekin ko'tariladigan yurakchalar
export default function FloatingHearts({ count = 18 }) {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        size: 10 + Math.random() * 18,
        duration: 12 + Math.random() * 14,
        delay: -Math.random() * 26,
        drift: (Math.random() - 0.5) * 80,
      })),
    [count]
  )

  return (
    <div className="hearts" aria-hidden="true">
      {hearts.map((h, i) => (
        <span
          key={i}
          style={{
            left: `${h.left}%`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            '--drift': `${h.drift}px`,
          }}
        >
          <Emoji e="❤️" size={h.size} />
        </span>
      ))}
    </div>
  )
}
