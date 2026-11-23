import { useRef, useState } from 'react'
import { questions, teases } from '../data/questions.js'
import Progress from './Progress.jsx'
import QuestionCard from './QuestionCard.jsx'
import HeartBurst from './HeartBurst.jsx'
import { EmojiText } from './Emoji.jsx'

export default function Quiz({ onDone }) {
  const [index, setIndex] = useState(0)
  const [tease, setTease] = useState('')
  const [burst, setBurst] = useState(null)
  const fleeCount = useRef(0)
  const busy = useRef(false)

  const handleFlee = () => {
    setTease(teases[fleeCount.current % teases.length])
    fleeCount.current += 1
  }

  const handleBest = (e) => {
    if (busy.current) return
    busy.current = true
    setBurst({ x: e.clientX, y: e.clientY, id: Date.now() })
    setTimeout(() => {
      busy.current = false
      setTease('')
      if (index + 1 < questions.length) setIndex(index + 1)
      else onDone(fleeCount.current)
    }, 750)
  }

  return (
    <section className="page quiz">
      <Progress total={questions.length} current={index} />
      <QuestionCard
        key={index}
        number={index + 1}
        total={questions.length}
        question={questions[index]}
        onBest={handleBest}
        onFlee={handleFlee}
      />
      <p className="quiz__tease" aria-live="polite"><EmojiText>{tease}</EmojiText></p>
      {burst && <HeartBurst key={burst.id} x={burst.x} y={burst.y} />}
    </section>
  )
}
