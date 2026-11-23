import { useRef, useState } from 'react'
import { createPortal } from 'react-dom'

// Noto'g'ri javob tugmasi: sichqoncha yaqinlashsa (kompyuter) yoki bosilsa (telefon) qochadi.
// Hech qachon bosilmaydi.
export default function RunawayButton({ children, avoidRef, onFlee }) {
  const btnRef = useRef(null)
  const [slot, setSlot] = useState(null) // asl joyidagi bo'sh o'rin o'lchami
  const [pos, setPos] = useState(null)   // ekrandagi yangi joyi

  const lastFlee = useRef(0)

  const flee = (e) => {
    e?.preventDefault?.()
    // telefonda bitta bosish pointerdown + click beradi — ikki marta sanamaslik uchun
    const now = Date.now()
    if (now - lastFlee.current < 350) return
    lastFlee.current = now
    const btn = btnRef.current
    if (!btn) return
    const r = btn.getBoundingClientRect()
    const vw = window.innerWidth
    const vh = window.innerHeight
    const pad = 14
    const avoid = avoidRef?.current?.getBoundingClientRect()

    let x = pad
    let y = pad
    for (let i = 0; i < 40; i++) {
      x = pad + Math.random() * Math.max(vw - r.width - pad * 2, 0)
      y = pad + Math.random() * Math.max(vh - r.height - pad * 2, 0)
      const farEnough = Math.hypot(x - r.left, y - r.top) > Math.min(160, vw / 3)
      const hitsBest =
        avoid &&
        !(x + r.width < avoid.left - 16 || x > avoid.right + 16 ||
          y + r.height < avoid.top - 16 || y > avoid.bottom + 16)
      if (farEnough && !hitsBest) break
    }

    if (!pos) {
      // birinchi qochish: avval turgan joyida "fixed" qilamiz, keyin uchirib yuboramiz
      setSlot({ width: r.width, height: r.height })
      // barmoq uzilgandan keyin bo'sh joyni asta yig'ib qo'yamiz
      setTimeout(() => setSlot({ width: 0, height: r.height, marginLeft: -6 }), 700)
      setPos({ x: r.left, y: r.top, w: r.width })
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setPos({ x, y, w: r.width }))
      )
    } else {
      setPos({ x, y, w: r.width })
    }
    onFlee?.()
  }

  const handlers = {
    onPointerEnter: (e) => e.pointerType === 'mouse' && flee(e),
    onPointerDown: flee,
    onClick: flee,
    onFocus: (e) => e.target.matches(':focus-visible') && flee(e),
  }

  const button = (
    <button
      ref={btnRef}
      type="button"
      className={`btn btn--meh ${pos ? 'btn--fleeing' : ''}`}
      style={pos ? { left: pos.x, top: pos.y, width: pos.w } : undefined}
      {...handlers}
    >
      {children}
    </button>
  )

  if (!pos) return button
  return (
    <>
      <span className="btn-slot" style={slot} aria-hidden="true" />
      {createPortal(button, document.body)}
    </>
  )
}
