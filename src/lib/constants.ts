
export interface Feature {
  number: string;
  title: string;
  description: string;
  coming?: boolean;
}

export interface FunctionItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  coming?: boolean;
  image?: string;
  features: Feature[];
}

export const SITE_CONFIG = {
  name: "CallMind",
  tagline: "Har bir qo'ng'iroq muhim",
  email: "info@callmind.uz",
  phone: "+998 90 506 41 47",
  telegram: "https://t.me/callmindbot",
  instagram: "https://instagram.com/callminduz",
};

export const NAV_LINKS = [
  { label: "Imkoniyatlar", href: "#functions" },
  { label: "Narxlar", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Bog'lanish", href: "#contact" },
];

export const PROBLEMS = [
  {
    icon: "AlertTriangle",
    title: "Operatorlar xatolarini kech topasiz",
    description: "Yo'qotilgan bitimlar faqat oylik hisobotda aniqlanadi. Shu paytgacha mijozlar ketib bo'lgan.",
  },
  {
    icon: "Clock",
    title: "Qo'ng'iroqlarni tinglashga vaqt yo'q",
    description: "Kuniga 100+ qo'ng'iroq. Hammasini tinglash mumkin emas. Muammolar ko'zdan qochadi.",
  },
  {
    icon: "DollarSign",
    title: "Sifat nazorati qimmat va sekin",
    description: "QA jamoasi qimmat. Ular ham hamma qo'ng'iroqni tekshira olmaydi.",
  },
];

export const SOLUTION_STEPS = [
  {
    step: 1,
    title: "Yuklang",
    description: "Qo'ng'iroq yozuvlarini yuklang - avtomatik webhook yoki qo'lda",
    icon: "Upload",
  },
  {
    step: 2,
    title: "AI tahlil",
    description: "AI transkripsiya qiladi, kayfiyat va sifatni baholaydi",
    icon: "Brain",
  },
  {
    step: 3,
    title: "Natija",
    description: "Bir zumda hisobotlar, tavsiyalar va ko'rsatkichlar",
    icon: "BarChart3",
  },
];

export const FUNCTIONS: FunctionItem[] = [
  {
    id: "speech",
    icon: "Headphones",
    title: "AI nutqni aniqlash",
    description: "Qo'ng'iroqlarni avtomatik matnga aylantirish",
    image: "/images/functions/speech.svg",
    features: [
      {
        number: "01",
        title: "Barcha kommunikatsiyalar matn formatiga o'tkaziladi",
        description: "Keyingi qayta ishlash va tahlil qilish uchun"
      },
      {
        number: "02",
        title: "Tizimda to'liq transkripsiyalar saqlanadi",
        description: "Istalgan vaqtda ko'rish va qidirish mumkin"
      },
      {
        number: "03",
        title: "O'zbek, rus va ingliz tillarini qo'llab-quvvatlash",
        description: "Ko'p tilli call-centerlar uchun ideal"
      }
    ]
  },
  {
    id: "control",
    icon: "CheckSquare",
    title: "Nazorat va baholash",
    description: "Operatorlar ishini avtomatik baholash",
    image: "/images/functions/control.svg",
    features: [
      {
        number: "01",
        title: "Har bir qo'ng'iroq uchun avtomatik ball",
        description: "Skript, xushmuomalalik, savdo ko'nikmalari bo'yicha"
      },
      {
        number: "02",
        title: "Xatolar va kamchiliklarni aniqlash",
        description: "AI muammoli joylarni belgilaydi"
      },
      {
        number: "03",
        title: "Taqqoslash va reyting",
        description: "Operatorlarni bir-biri bilan solishtirish"
      }
    ]
  },
  {
    id: "analysis",
    icon: "MessageSquare",
    title: "Dialog tahlili",
    description: "Suhbatlarni chuqur tahlil qilish",
    image: "/images/functions/analysis.svg",
    features: [
      {
        number: "01",
        title: "Kayfiyat tahlili",
        description: "Mijoz va operator emotsiyalarini aniqlash"
      },
      {
        number: "02",
        title: "Kalit so'zlar va mavzular",
        description: "Eng ko'p muhokama qilinadigan mavzularni topish",
        coming: true
      },
      {
        number: "03",
        title: "Muammo nuqtalarini aniqlash",
        description: "Mijozlar nimadan norozi - tez toping",
        coming: true
      }
    ]
  },
  {
    id: "analytics",
    icon: "PieChart",
    title: "Multimodal analitika",
    description: "Barcha ma'lumotlarni bir joyda ko'ring",
    image: "/images/functions/analytics.svg",
    features: [
      {
        number: "01",
        title: "Real-time dashboardlar",
        description: "Jonli statistika va ko'rsatkichlar"
      },
      {
        number: "02",
        title: "Trend va pattern tahlili",
        description: "Vaqt o'tishi bilan o'zgarishlarni kuzating",
        coming: true
      },
      {
        number: "03",
        title: "Eksport va hisobotlar",
        description: "PDF, Excel formatida yuklab oling",
        coming: true
      }
    ]
  },
  {
    id: "notifications",
    icon: "Bell",
    title: "Bildirishnomalar tizimi",
    description: "Muhim hodisalar haqida xabar olish",
    image: "/images/functions/notifications.svg",
    features: [
      {
        number: "01",
        title: "Kritik qo'ng'iroqlar haqida ogohlantirish",
        description: "Salbiy qo'ng'iroqlar bo'lganda darhol xabar"
      },
      {
        number: "02",
        title: "Telegram va email integratsiya",
        description: "Qulay kanallar orqali xabar olish"
      },
      {
        number: "03",
        title: "Moslashtirilgan triggerlar",
        description: "O'zingizga kerakli hodisalarni belgilang"
      }
    ]
  },
  {
    id: "crm",
    icon: "Database",
    title: "CRM integratsiya",
    description: "Mavjud tizimlar bilan bog'lanish",
    image: "/images/functions/crm.svg",
    features: [
      {
        number: "01",
        title: "OnlinePBX integratsiya",
        description: "Avtomatik qo'ng'iroq import"
      },
      {
        number: "02",
        title: "Webhook va API",
        description: "Istalgan tizim bilan bog'lanish"
      },
      {
        number: "03",
        title: "Ma'lumotlarni sinxronlashtirish",
        description: "Barcha ma'lumotlar bir joyda"
      }
    ]
  },
  {
    id: "training",
    icon: "GraduationCap",
    title: "Xodimlarni o'qitish",
    description: "Eng yaxshi amaliyotlar asosida o'qitish",
    coming: true,
    image: "/images/functions/training.svg",
    features: [
      {
        number: "01",
        title: "Eng yaxshi qo'ng'iroqlar kutubxonasi",
        description: "Namuna sifatida foydalanish"
      },
      {
        number: "02",
        title: "Shaxsiy tavsiyalar",
        description: "Har bir operator uchun o'qitish rejasi"
      },
      {
        number: "03",
        title: "Progress kuzatuvi",
        description: "O'sish dinamikasini ko'ring"
      }
    ]
  },
  {
    id: "reports",
    icon: "FileBarChart",
    title: "Maxsus hisobotlar",
    description: "Kerakli formatda hisobotlar",
    coming: true,
    image: "/images/functions/reports.svg",
    features: [
      {
        number: "01",
        title: "Moslashtirilgan hisobotlar",
        description: "O'zingizga kerakli metrikalar"
      },
      {
        number: "02",
        title: "Avtomatik yuborish",
        description: "Rejali hisobotlar email orqali"
      },
      {
        number: "03",
        title: "Taqqoslash va benchmark",
        description: "Sanoat standartlari bilan solishtirish"
      }
    ]
  }
];

export const FEATURES = [
  {
    icon: "FileText",
    title: "AI Transkripsiya",
    description: "O'zbek, rus va ingliz tillarida aniq speech-to-text",
  },
  {
    icon: "Heart",
    title: "Kayfiyat tahlili",
    description: "Mijoz va operator emotsiyalarini real-time aniqlash",
  },
  {
    icon: "Star",
    title: "Operator skoringi",
    description: "Har bir operator uchun avtomatik sifat bahosi",
  },
  {
    icon: "Target",
    title: "Lid kvalifikatsiyasi",
    description: "Qaysi lidlar sotuvga tayyor - AI aniqlaydi",
  },
  {
    icon: "LineChart",
    title: "Real-time hisobotlar",
    description: "Jonli dashboardlar va tezkor analitika",
  },
  {
    icon: "Plug",
    title: "CRM integratsiya",
    description: "OnlinePBX, webhooks va boshqa tizimlar bilan bog'lanish",
  },
];

export const STATS = [
  { value: 50000, suffix: "+", label: "qo'ng'iroq tahlil qilindi" },
  { value: 30, suffix: "%", label: "sotuv konversiyasi oshdi" },
  { value: 5, suffix: "x", label: "tezroq sifat nazorati" },
];

export const PRICING_PLANS = [
  {
    name: "Boshlang'ich",
    subtitle: "Kichik call markazlar uchun",
    oldPrice: "650",
    price: "550",
    unit: "/daqiqa",
    cta: "Boshlash",
    highlighted: false,
    features: [
      { text: "100 soatgacha qo'ng'iroqlar oyiga", included: true },
      { text: "Kengaytirilgan tahlil imkoniyatlari", included: true },
      { text: "Batafsil hisobotlar va eksport", included: true },
      { text: "VOIP integratsiya", included: true },
      { text: "Telegram integratsiya", included: false },
      { text: "Oliy darajadagi qo'llab-quvvatlash", included: false },
    ],
  },
  {
    name: "Professional",
    subtitle: "O'rta hajmli call markazlar uchun",
    oldPrice: "550",
    price: "450",
    unit: "/daqiqa",
    badge: "Eng qulay",
    cta: "Boshlash",
    highlighted: true,
    features: [
      { text: "500 soatgacha qo'ng'iroqlar oyiga", included: true },
      { text: "Kengaytirilgan tahlil imkoniyatlari", included: true },
      { text: "Batafsil hisobotlar va eksport", included: true },
      { text: "VOIP integratsiya", included: true },
      { text: "Telegram integratsiya", included: true },
      { text: "Oliy darajadagi qo'llab-quvvatlash", included: true },
    ],
  },
  {
    name: "Maxsus",
    subtitle: "Katta call markazlar uchun",
    price: "350",
    unit: "/daqiqa",
    isEnterprise: true,
    cta: "Bog'lanish",
    highlighted: false,
    features: [
      { text: "Cheksiz qo'ng'iroqlar", included: true },
      { text: "To'liq tahlil", included: true },
      { text: "Maxsus integratsiyalar", included: true },
      { text: "Maxsus o'quv", included: true },
      { text: "24/7 qo'llab-quvvatlash", included: true },
      { text: "Maxsus funksiyalay", included: true },
    ],
  },
];

export const FAQ_ITEMS = [
  {
    question: "Qanday to'lov qilaman?",
    answer: "To'lov har oy oxirida tahlil qilingan qo'ng'iroqlar soniga qarab amalga oshiriladi. Bank o'tkazmasi, Click yoki Payme orqali to'lashingiz mumkin.",
  },
  {
    question: "Qo'ng'iroqlarim xavfsizmi?",
    answer: "Ha, barcha ma'lumotlar shifrlangan holda saqlanadi. Biz ISO 27001 standartlariga amal qilamiz va ma'lumotlaringizni uchinchi tomonlarga bermang.",
  },
  {
    question: "Qaysi tillarni qo'llab-quvvatlaysiz?",
    answer: "Hozirda o'zbek, rus va ingliz tillarini qo'llab-quvvatlaymiz. Boshqa tillar ham tez orada qo'shiladi.",
  },
  {
    question: "OnlinePBX bilan integratsiya qanday?",
    answer: "OnlinePBX webhook orqali avtomatik integratsiya qilinadi. Sozlash 5 daqiqa vaqt oladi. Batafsil qo'llanma hujjatlar bo'limida.",
  },
];
