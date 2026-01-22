export const translations = {
  uz: {
    // Header
    nav: {
      functions: "Imkoniyatlar",
      pricing: "Narxlar",
      faq: "FAQ",
      contact: "Bog'lanish",
    },
    header: {
      login: "Kirish",
      cta: "Bepul sinab ko'ring",
    },

    // Site config
    site: {
      name: "CallMind",
      tagline: "Har bir qo'ng'iroq muhim",
    },

    // Hero
    hero: {
      badge: "AI-powered qo'ng'iroq tahlili",
      titlePart1: "Call-markazlar uchun",
      titleHighlight: "aqlli tahliliy",
      titlePart2: "dastur!",
      subtitle: "CallMind orqali har bir qo'ng'iroqni to'liq tahlilini oling va sotuvdagi yo'qotishlarga aniq yechimlar taklif qiling!",
      cta: "Bepul sinab ko'ring",
      watchDemo: "Demo ko'rish",
      trustBadges: {
        noCard: "Kredit karta talab qilinmaydi",
        setup: "5 daqiqada sozlash",
        support: "24/7 qo'llab-quvvatlash",
      },
    },

    // Problems
    problems: {
      title: "Tanish muammolar",
      subtitle: "Ko'pchilik call-centerlar bu muammolarni boshdan kechiradi",
      items: [
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
      ],
    },

    // Solution
    solution: {
      title: "CallMind yechimi",
      titleHighlight: "qanday ishlaydi",
      subtitle: "3 oddiy qadamda barcha qo'ng'iroqlaringizni tahlil qiling",
      steps: [
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
      ],
    },

    // Functions
    functions: {
      title: "Imkoniyatlar",
      titleHighlight: "ishni osonlashtiradi",
      subtitle: "Call-center uchun to'liq AI yechim",
      coming: "Tez kunda",
      comingSoonTitle: "Tez kunda qo'shiladi",
      comingSoonDesc: "Bu imkoniyat ustida ishlamoqdamiz",
      items: [
        {
          id: "speech",
          icon: "Headphones",
          title: "AI nutqni aniqlash",
          description: "Qo'ng'iroqlarni avtomatik matnga aylantirish",
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
      ],
    },

    // Stats
    stats: {
      items: [
        { value: 50000, suffix: "+", label: "Qo'ng'iroq tahlil qilindi", icon: "Phone" },
        { value: 30, suffix: "%", label: "Sotuv konversiya oshdi", icon: "TrendingUp" },
        { value: 1000, suffix: "+", label: "Umumiy audio (soat)", icon: "Clock" },
        { value: 0, suffix: "24/7", label: "Tahlil", icon: "Activity", isStatic: true },
      ],
    },

    // Pricing
    pricing: {
      title: "Shaffof",
      titleHighlight: "narxlar",
      subtitle: "Har bir qo'ng'iroq uchun to'lang, yashirin to'lovlarsiz",
      featuresHeader: "NIMALARNI O'Z ICHIGA OLADI",
      trialNote: "Yangi hamkorlar uchun",
      trialHighlight: "7 kunlik bepul sinov davri",
      contactUs: "Bog'laning",
      plans: [
        {
          name: "Boshlang'ich",
          subtitle: "Kichik call markazlar uchun",
          price: "650",
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
          price: "550",
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
          price: "450",
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
      ],
    },

    // FAQ
    faq: {
      title: "Ko'p so'raladigan",
      titleHighlight: "savollar",
      subtitle: "Savollaringizga javoblar",
      items: [
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
      ],
    },

    // CTA
    cta: {
      badge: "Birinchi 100 minut BEPUL",
      titlePart1: "Har kuni yo'qotilayotgan",
      titleHighlight: "mijozlarni to'xtating!",
      subtitle: "Ro'yxatdan o'ting va qo'ng'iroqlaringizni professional tahlil qilishni boshlang",
      button: "Hoziroq boshlash",
      note: "Kredit karta talab qilinmaydi • Cheksiz sinov muddati",
    },

    // Footer
    footer: {
      description: "AI yordamida call-center qo'ng'iroqlarini tahlil qilish platformasi",
      pages: "Sahifalar",
      contact: "Bog'lanish",
      rights: "Barcha huquqlar himoyalangan",
      terms: "Foydalanish shartlari",
      privacy: "Maxfiylik siyosati",
    },

    // Lead Form
    leadForm: {
      title: "Bepul sinab ko'ring",
      subtitle: "Formani to'ldiring va biz siz bilan bog'lanamiz",
      name: "Ismingiz",
      namePlaceholder: "Ismingizni kiriting",
      phone: "Telefon raqamingiz",
      phonePlaceholder: "+998",
      company: "Kompaniya nomi",
      companyPlaceholder: "Kompaniyangiz nomini kiriting",
      submit: "Yuborish",
      submitting: "Yuborilmoqda...",
      successTitle: "Rahmat!",
      success: "Murojaatingiz qabul qilindi! Tez orada siz bilan bog'lanamiz.",
      error: "Xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring.",
    },

    // Modal
    modal: {
      title: "Bepul konsultatsiya",
      subtitle: "Ma'lumotlaringizni qoldiring va biz siz bilan bog'lanamiz",
    },
  },

  ru: {
    // Header
    nav: {
      functions: "Возможности",
      pricing: "Цены",
      faq: "FAQ",
      contact: "Контакты",
    },
    header: {
      login: "Войти",
      cta: "Попробовать бесплатно",
    },

    // Site config
    site: {
      name: "CallMind",
      tagline: "Каждый звонок важен",
    },

    // Hero
    hero: {
      badge: "AI-powered анализ звонков",
      titlePart1: "Умная аналитическая",
      titleHighlight: "платформа",
      titlePart2: "для колл-центров!",
      subtitle: "С CallMind получайте полный анализ каждого звонка и точные решения для устранения потерь в продажах!",
      cta: "Попробовать бесплатно",
      watchDemo: "Смотреть демо",
      trustBadges: {
        noCard: "Банковская карта не требуется",
        setup: "Настройка за 5 минут",
        support: "Поддержка 24/7",
      },
    },

    // Problems
    problems: {
      title: "Знакомые проблемы",
      subtitle: "Большинство колл-центров сталкиваются с этими проблемами",
      items: [
        {
          icon: "AlertTriangle",
          title: "Ошибки операторов обнаруживаются поздно",
          description: "Упущенные сделки выявляются только в месячном отчете. К тому времени клиенты уже ушли.",
        },
        {
          icon: "Clock",
          title: "Нет времени слушать звонки",
          description: "100+ звонков в день. Невозможно прослушать все. Проблемы остаются незамеченными.",
        },
        {
          icon: "DollarSign",
          title: "Контроль качества дорог и медленный",
          description: "QA-команда стоит дорого. Даже они не могут проверить все звонки.",
        },
      ],
    },

    // Solution
    solution: {
      title: "Решение CallMind",
      titleHighlight: "как это работает",
      subtitle: "Анализируйте все ваши звонки за 3 простых шага",
      steps: [
        {
          step: 1,
          title: "Загрузите",
          description: "Загрузите записи звонков - автоматический webhook или вручную",
          icon: "Upload",
        },
        {
          step: 2,
          title: "AI анализ",
          description: "ИИ транскрибирует, оценивает настроение и качество",
          icon: "Brain",
        },
        {
          step: 3,
          title: "Результат",
          description: "Мгновенные отчеты, рекомендации и показатели",
          icon: "BarChart3",
        },
      ],
    },

    // Functions
    functions: {
      title: "Возможности",
      titleHighlight: "упрощают работу",
      subtitle: "Полное AI-решение для колл-центра",
      coming: "Скоро",
      comingSoonTitle: "Скоро появится",
      comingSoonDesc: "Мы работаем над этой функцией",
      items: [
        {
          id: "speech",
          icon: "Headphones",
          title: "AI распознавание речи",
          description: "Автоматическое преобразование звонков в текст",
          features: [
            {
              number: "01",
              title: "Все коммуникации переводятся в текстовый формат",
              description: "Для дальнейшей обработки и анализа"
            },
            {
              number: "02",
              title: "Полные транскрипции хранятся в системе",
              description: "Доступны для просмотра и поиска в любое время"
            },
            {
              number: "03",
              title: "Поддержка узбекского, русского и английского языков",
              description: "Идеально для многоязычных колл-центров"
            }
          ]
        },
        {
          id: "control",
          icon: "CheckSquare",
          title: "Контроль и оценка",
          description: "Автоматическая оценка работы операторов",
          features: [
            {
              number: "01",
              title: "Автоматический балл за каждый звонок",
              description: "По скрипту, вежливости, навыкам продаж"
            },
            {
              number: "02",
              title: "Выявление ошибок и недостатков",
              description: "ИИ отмечает проблемные места"
            },
            {
              number: "03",
              title: "Сравнение и рейтинг",
              description: "Сравнение операторов между собой"
            }
          ]
        },
        {
          id: "analysis",
          icon: "MessageSquare",
          title: "Анализ диалогов",
          description: "Глубокий анализ разговоров",
          features: [
            {
              number: "01",
              title: "Анализ настроения",
              description: "Определение эмоций клиента и оператора"
            },
            {
              number: "02",
              title: "Ключевые слова и темы",
              description: "Поиск наиболее обсуждаемых тем",
              coming: true
            },
            {
              number: "03",
              title: "Выявление проблемных точек",
              description: "Быстро найдите, чем недовольны клиенты",
              coming: true
            }
          ]
        },
        {
          id: "analytics",
          icon: "PieChart",
          title: "Мультимодальная аналитика",
          description: "Смотрите все данные в одном месте",
          features: [
            {
              number: "01",
              title: "Real-time дашборды",
              description: "Живая статистика и показатели"
            },
            {
              number: "02",
              title: "Анализ трендов и паттернов",
              description: "Отслеживайте изменения со временем",
              coming: true
            },
            {
              number: "03",
              title: "Экспорт и отчеты",
              description: "Скачивайте в PDF, Excel формате",
              coming: true
            }
          ]
        },
        {
          id: "notifications",
          icon: "Bell",
          title: "Система уведомлений",
          description: "Получайте уведомления о важных событиях",
          features: [
            {
              number: "01",
              title: "Оповещения о критических звонках",
              description: "Мгновенное уведомление при негативных звонках"
            },
            {
              number: "02",
              title: "Интеграция с Telegram и email",
              description: "Получайте уведомления через удобные каналы"
            },
            {
              number: "03",
              title: "Настраиваемые триггеры",
              description: "Настройте нужные вам события"
            }
          ]
        },
        {
          id: "crm",
          icon: "Database",
          title: "CRM интеграция",
          description: "Связь с существующими системами",
          features: [
            {
              number: "01",
              title: "Интеграция с OnlinePBX",
              description: "Автоматический импорт звонков"
            },
            {
              number: "02",
              title: "Webhook и API",
              description: "Связь с любой системой"
            },
            {
              number: "03",
              title: "Синхронизация данных",
              description: "Все данные в одном месте"
            }
          ]
        },
        {
          id: "training",
          icon: "GraduationCap",
          title: "Обучение сотрудников",
          description: "Обучение на основе лучших практик",
          coming: true,
          features: [
            {
              number: "01",
              title: "Библиотека лучших звонков",
              description: "Используйте как образец"
            },
            {
              number: "02",
              title: "Персональные рекомендации",
              description: "План обучения для каждого оператора"
            },
            {
              number: "03",
              title: "Отслеживание прогресса",
              description: "Смотрите динамику роста"
            }
          ]
        },
        {
          id: "reports",
          icon: "FileBarChart",
          title: "Пользовательские отчеты",
          description: "Отчеты в нужном формате",
          coming: true,
          features: [
            {
              number: "01",
              title: "Настраиваемые отчеты",
              description: "Нужные вам метрики"
            },
            {
              number: "02",
              title: "Автоматическая отправка",
              description: "Плановые отчеты по email"
            },
            {
              number: "03",
              title: "Сравнение и бенчмарк",
              description: "Сравнение с отраслевыми стандартами"
            }
          ]
        }
      ],
    },

    // Stats
    stats: {
      items: [
        { value: 50000, suffix: "+", label: "Звонков проанализировано", icon: "Phone" },
        { value: 30, suffix: "%", label: "Рост конверсии продаж", icon: "TrendingUp" },
        { value: 1000, suffix: "+", label: "Всего аудио (часов)", icon: "Clock" },
        { value: 0, suffix: "24/7", label: "Анализ", icon: "Activity", isStatic: true },
      ],
    },

    // Pricing
    pricing: {
      title: "Прозрачные",
      titleHighlight: "цены",
      subtitle: "Платите за каждый звонок, без скрытых платежей",
      featuresHeader: "ЧТО ВКЛЮЧЕНО",
      trialNote: "Для новых партнеров",
      trialHighlight: "7 дней бесплатного пробного периода",
      contactUs: "Свяжитесь с нами",
      plans: [
        {
          name: "Начальный",
          subtitle: "Для небольших колл-центров",
          price: "650",
          unit: "/минута",
          cta: "Начать",
          highlighted: false,
          features: [
            { text: "До 100 часов звонков в месяц", included: true },
            { text: "Расширенные возможности анализа", included: true },
            { text: "Подробные отчеты и экспорт", included: true },
            { text: "VOIP интеграция", included: true },
            { text: "Telegram интеграция", included: false },
            { text: "Премиум поддержка", included: false },
          ],
        },
        {
          name: "Профессиональный",
          subtitle: "Для средних колл-центров",
          price: "550",
          unit: "/минута",
          badge: "Лучший выбор",
          cta: "Начать",
          highlighted: true,
          features: [
            { text: "До 500 часов звонков в месяц", included: true },
            { text: "Расширенные возможности анализа", included: true },
            { text: "Подробные отчеты и экспорт", included: true },
            { text: "VOIP интеграция", included: true },
            { text: "Telegram интеграция", included: true },
            { text: "Премиум поддержка", included: true },
          ],
        },
        {
          name: "Корпоративный",
          subtitle: "Для крупных колл-центров",
          price: "450",
          unit: "/минута",
          isEnterprise: true,
          cta: "Связаться",
          highlighted: false,
          features: [
            { text: "Безлимитные звонки", included: true },
            { text: "Полный анализ", included: true },
            { text: "Индивидуальные интеграции", included: true },
            { text: "Индивидуальное обучение", included: true },
            { text: "Поддержка 24/7", included: true },
            { text: "Индивидуальные функции", included: true },
          ],
        },
      ],
    },

    // FAQ
    faq: {
      title: "Часто задаваемые",
      titleHighlight: "вопросы",
      subtitle: "Ответы на ваши вопросы",
      items: [
        {
          question: "Как производится оплата?",
          answer: "Оплата производится в конце каждого месяца в зависимости от количества проанализированных звонков. Оплатить можно банковским переводом, через Click или Payme.",
        },
        {
          question: "Мои звонки в безопасности?",
          answer: "Да, все данные хранятся в зашифрованном виде. Мы соблюдаем стандарты ISO 27001 и не передаем ваши данные третьим лицам.",
        },
        {
          question: "Какие языки поддерживаются?",
          answer: "В настоящее время мы поддерживаем узбекский, русский и английский языки. Другие языки будут добавлены в ближайшее время.",
        },
        {
          question: "Как работает интеграция с OnlinePBX?",
          answer: "Интеграция с OnlinePBX происходит автоматически через webhook. Настройка занимает 5 минут. Подробная инструкция в разделе документации.",
        },
      ],
    },

    // CTA
    cta: {
      badge: "Первые 100 минут БЕСПЛАТНО",
      titlePart1: "Прекратите терять",
      titleHighlight: "клиентов каждый день!",
      subtitle: "Зарегистрируйтесь и начните профессиональный анализ ваших звонков",
      button: "Начать прямо сейчас",
      note: "Банковская карта не требуется • Неограниченный пробный период",
    },

    // Footer
    footer: {
      description: "Платформа для анализа звонков колл-центра с помощью ИИ",
      pages: "Страницы",
      contact: "Контакты",
      rights: "Все права защищены",
      terms: "Условия использования",
      privacy: "Политика конфиденциальности",
    },

    // Lead Form
    leadForm: {
      title: "Попробуйте бесплатно",
      subtitle: "Заполните форму и мы свяжемся с вами",
      name: "Ваше имя",
      namePlaceholder: "Введите ваше имя",
      phone: "Номер телефона",
      phonePlaceholder: "+998",
      company: "Название компании",
      companyPlaceholder: "Введите название компании",
      submit: "Отправить",
      submitting: "Отправка...",
      successTitle: "Спасибо!",
      success: "Ваша заявка принята! Мы скоро свяжемся с вами.",
      error: "Произошла ошибка. Пожалуйста, попробуйте снова.",
    },

    // Modal
    modal: {
      title: "Бесплатная консультация",
      subtitle: "Оставьте свои данные и мы свяжемся с вами",
    },
  },
};

export type Translations = typeof translations.uz;
