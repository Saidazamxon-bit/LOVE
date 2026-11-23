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

  return (
    <div className="app">
      <FloatingHearts />

      <main className={`scene ${doorOpen ? 'scene--in' : ''}`}>
        {stage === 'welcome' && <Welcome onStart={() => setStage('quiz')} />}
        {stage === 'quiz' && <Quiz onDone={() => setStage('final')} />}
        {stage === 'final' && <Final onRestart={() => setStage('welcome')} />}
      </main>

      <Door onOpened={() => setDoorOpen(true)} />
    </div>
  )
}
