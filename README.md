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

## Telegram xat

Oxirgi sahifada Mubina o'z fikrini yozadi va xat Telegram botga keladi.

1. `cp .env.example .env.local` qilib, `TELEGRAM_BOT_TOKEN` va `TELEGRAM_CHAT_ID`ni to'ldiring
   (`.env.local` git'ga tushmaydi).
2. Telegram'da botingizni ochib **/start** bosing — aks holda bot sizga yoza olmaydi.
3. Lokal: `npm run dev` yoki `npm run build && npm run preview` — `/api/send` ishlaydi.
4. Internetga: Vercel'ga joylang va o'sha ikki o'zgaruvchini
   Project Settings → Environment Variables bo'limiga qo'shing (`api/send.js` server funksiyasi).

Token faqat serverda turadi, saytning brauzerdagi kodida ko'rinmaydi.
