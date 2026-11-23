// Har bir savolda 3 ta javob. `best: true` — eng zo'r javob (faqat u keyingi savolga o'tkazadi).
// Qolgan javoblar bosilmaydi — qochib ketadi :)
export const NAME = 'Mubin'

export const questions = [
  {
    q: 'Meni sevasanmi?',
    img: 'img/barmoq-izi.png',
    answers: [
      { text: 'Balki...' },
      { text: 'Ha, sevaman ❤', best: true },
      { text: 'Yo‘q' },
    ],
  },
  {
    q: 'Meni sog‘inasanmi?',
    img: 'img/qogoz-yurak.png',
    answers: [
      { text: 'Har daqiqa sog‘inaman', best: true },
      { text: 'Ba’zan' },
      { text: 'Yo‘q' },
    ],
  },
  {
    q: 'Biz ikkimiz kimga o‘xshaymiz?',
    img: 'img/mushuklar.png',
    answers: [
      { text: 'Hech kimga' },
      { text: 'Bilmadim' },
      { text: 'Shu ikki mushukchaga 🐾', best: true },
    ],
  },
  {
    q: 'Xafa qilib qo‘ysam, kechirasanmi?',
    img: 'img/plastir.png',
    answers: [
      { text: 'Ha, kechiraman', best: true },
      { text: 'O‘ylab ko‘raman' },
      { text: 'Yo‘q' },
    ],
  },
  {
    q: 'Mening yuragim kimniki?',
    img: 'img/anatomik-yurak.png',
    answers: [
      { text: 'Bilmayman' },
      { text: 'Meniki, faqat meniki', best: true },
      { text: 'Boshqaniki' },
    ],
  },
  {
    q: 'Men bilan doim birga bo‘lasanmi?',
    img: 'img/lola.png',
    answers: [
      { text: 'Balki' },
      { text: 'Yo‘q' },
      { text: 'Ha, umrbod ❤', best: true },
    ],
  },
]

// Noto'g'ri javobni bosmoqchi bo'lganda chiqadigan hazil gaplar
export const teases = [
  'Voy, qochib ketdi 😅',
  'Unaqa javob yo‘q bu yerda',
  'Qizil tugmani bos-chi 😌',
  'Ushlay olmaysan, baribir',
  'Rostini ayt, Mubin 💋',
  'Bu tugma uyalib qochyapti',
]
