import './Sticker.css'

// Oq fonli rasmlarni qog'oz ustiga "yopishtirilgan" stiker qilib ko'rsatadi
export default function Sticker({ src, alt = '', className = '', rotate = 0, style }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`sticker ${className}`}
      style={{ '--r': `${rotate}deg`, ...style }}
      draggable="false"
    />
  )
}
