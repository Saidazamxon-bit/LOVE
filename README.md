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

Oxirgi sahifada Mubina o'z fikrini yozadi va xat to'g'ridan-to'g'ri Telegram botga keladi.
Bot tokeni va chat ID: `src/data/telegram.js`.

- Botga oldin **/start** bosilgan bo'lishi kerak, aks holda bot sizga yoza olmaydi.
- Sayt istalgan hostingda ishlaydi (GitHub Pages, Vercel, Netlify, oddiy fayl).
- Token sayt kodida ochiq turadi. Kimdir botni suiiste'mol qilsa:
  @BotFather → `/revoke` → yangi tokenni `src/data/telegram.js` ga qo'ying.

## 3D o'yin: "Ikkimizning orolcha"

`public/oyin/index.html` — alohida 3D o'yin (Three.js, bitta fayl). Sayt bilan birga `/oyin/` manzilida ochiladi
(`npm run dev` → http://localhost:5173/oyin/).

Kichkina orolchada ikki qahramon: siz (yigit) va Mubina. Birga sayr qilasiz, qo'l ushlaysiz, gaplashasiz,
quchoqlashasiz va 6 ta joyda birga esdalik yaratasiz (gul, skameyka, ko'prikcha, eman daraxti, arg'imchoq,
tepalikda yulduzlar). Hammasi bajarilgach — final sahna.

- Boshqaruv: `WASD` — yurish, `Shift` — yugurish, sichqoncha — kamera, `E` — harakat, `T` — gaplashish,
  `Q` — quchoqlash, `H` — qo'l ushlash, `N` — kun/tun. Telefonda — joystik va tugmalar.
- Ismlar faylning boshida: `BOY` va `GIRL`. Dialoglar `TALKS` va `SCENES` ichida.
- Progress brauzerda saqlanadi (localStorage).
