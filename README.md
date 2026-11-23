# Mubina uchun ❤️

Kichkina romantik sayt: eshik ochiladi → salomlashish → savollar → "i love you".

## Ishga tushirish

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # tayyor sayt dist/ papkada
```

## Tuzilishi

- `src/data/questions.js` — savollar va javoblar (`best: true` — eng zo'r javob). Ism ham shu yerda (`NAME`).
- `src/components/Door.jsx` — kirishdagi ochiladigan eshik
- `src/components/Welcome.jsx` — salom sahifasi
- `src/components/Quiz.jsx`, `QuestionCard.jsx` — savollar
- `src/components/RunawayButton.jsx` — qochib ketadigan tugma (kompyuterda hover, telefonda bosganda)
- `src/components/Final.jsx` — yakuniy "i love you" sahifasi
- `public/img/` — stikerlar

## Emojilar

Emojilar hamma qurilmada bir xil (iOS uslubida) ko'rinishi uchun rasm sifatida chiqariladi:
`src/components/Emoji.jsx` matndagi emojini `public/emoji/<kod>.png` rasmiga almashtiradi.
Yangi emoji qo'shsangiz, uning rasmini ham shu papkaga qo'shing
(`emoji-datasource-apple` paketidagi `img/apple/64/` dan, masalan `1f60d.png`).
