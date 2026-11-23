// Har bir savolda 3 ta javob. `best: true` — eng zo'r javob (faqat u keyingi savolga o'tkazadi).
// Qolgan javoblar bosilmaydi — qochib ketadi :)
// Emojilar avtomatik iOS uslubidagi rasmga aylanadi (public/emoji ichida bo'lishi kerak).
export const NAME = 'Mubina'

export const questions = [
  {
    q: 'Meni sevasanmi?',
    img: 'img/barmoq-izi.png',
    answers: [
      { text: 'Balki' },
      { text: 'Ha, sevaman ❤️', best: true },
      { text: 'Yo‘q' },
    ],
  },
  {
    q: 'Meni sog‘inasanmi?',
    img: 'img/qogoz-yurak.png',
    answers: [
      { text: 'Ba’zan' },
      { text: 'Juda ham 🥺', best: true },
      { text: 'Yo‘q' },
    ],
  },
  {
    q: 'Saidumarni boxchadan olib olemi?',
    img: 'img/mushuklar.png',
    answers: [
      { text: 'Yo‘q' },
      { text: 'Ha, olamiz ❤️', best: true },
      { text: 'Balki' },
    ],
  },
  {
    q: 'Xafa qilib qo‘ysam, kechirasanmi?',
    img: 'img/plastir.png',
    answers: [
      { text: 'Balki' },
      { text: 'Ha, albatta', best: true },
      { text: 'Yo‘q' },
    ],
  },
  {
    q: 'Mening yuragim kimniki?',
    img: 'img/anatomik-yurak.png',
    answers: [
      { text: 'Bilmam' },
      { text: 'Meniki 💋', best: true },
      { text: 'Hech kimniki' },
    ],
  },
  {
    q: 'Men bilan doim birga bo‘lasanmi?',
    img: 'img/lola.png',
    answers: [
      { text: 'Balki' },
      { text: 'Ha, umrbod ❤️', best: true },
      { text: 'Yo‘q' },
    ],
  },
]

// Noto'g'ri javobni bosmoqchi bo'lganda chiqadigan hazil gaplar
export const teases = [
  'Voy, qochib ketdi 😅',
  'Unaqa javob yo‘q bu yerda',
  'Qizil tugmani bos-chi 😌',
  'Ushlay olmaysan, baribir',
  `Rostini ayt, ${NAME} 💋`,
  'Bu tugma uyalib qochyapti 🥺',
]
