import './Emoji.css'

// Emojilarni hamma qurilmada bir xil (iOS uslubida) ko'rsatish uchun rasm sifatida chiqaramiz.
// Rasmlar: public/emoji/<kod>.png
const ALIAS = { '2764': '2764-fe0f' }

const fileOf = (e) => {
  const code = [...e]
    .map((c) => c.codePointAt(0).toString(16))
    .filter((h) => h !== 'fe0f')
    .join('-')
  return ALIAS[code] || code
}

export default function Emoji({ e, size, className = '', style }) {
  return (
    <img
      className={`emoji ${className}`}
      src={`emoji/${fileOf(e)}.png`}
      alt={e}
      draggable="false"
      style={size ? { width: size, height: size, ...style } : style}
    />
  )
}

// Matn ichidagi emojilarni avtomatik rasmga almashtiradi: <EmojiText>Salom 😌</EmojiText>
const EMOJI_RE = /(\p{Extended_Pictographic}️?)/u

export function EmojiText({ children }) {
  return String(children)
    .split(EMOJI_RE)
    .map((part, i) => (i % 2 ? <Emoji key={i} e={part} /> : part))
}
