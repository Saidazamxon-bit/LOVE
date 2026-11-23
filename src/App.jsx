import { useState } from 'react'
import Door from './components/Door.jsx'
import Welcome from './components/Welcome.jsx'
import Quiz from './components/Quiz.jsx'
import Final from './components/Final.jsx'
import FloatingHearts from './components/FloatingHearts.jsx'

// Bosqichlar: eshik -> salom -> savollar -> yakun
export default function App() {
  const [doorOpen, setDoorOpen] = useState(false)
  const [stage, setStage] = useState('welcome')
  const [misses, setMisses] = useState(0) // noto'g'ri javobni necha marta bosmoqchi bo'ldi

  return (
    <div className="app">
      <FloatingHearts />

      <main className={`scene ${doorOpen ? 'scene--in' : ''}`}>
        {stage === 'welcome' && <Welcome onStart={() => setStage('quiz')} />}
        {stage === 'quiz' && <Quiz onDone={(n) => { setMisses(n); setStage('final') }} />}
        {stage === 'final' && <Final misses={misses} onRestart={() => setStage('welcome')} />}
      </main>

      <Door onOpened={() => setDoorOpen(true)} />
    </div>
  )
}
