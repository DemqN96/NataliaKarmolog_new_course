export const SITE = {
  title: 'Школа духовного розвитку — Наталія Кармолог',
  description:
    'Унікальна система, що поєднує психологію, регрес, кармологію та психосоматику. Старт 3-го потоку — 30 липня.',
  url: 'https://demqn96.github.io/NataliaKarmolog_new_course',
  author: 'Наталія Кармолог',
  lang: 'uk',
  ogImage: '/og.jpg',
};

export const COURSE = {
  startDate: '2026-07-30T10:00:00+03:00',
  earlyBirdDeadline: '2026-07-16T23:59:59+03:00',
  streamNumber: 3,
  durationMonths: 4,
  lessonsCount: 30,
  startDateLabel: '30 липня',
  earlyBirdLabel: '16 липня',
};

export const PRICES = {
  expert: {
    regular: { uah: 40_000, usd: 900 },
    earlyBird: { uah: 36_000, usd: 800 },
    slots: 30,
  },
  vip: {
    regular: { uah: 67_000, usd: 1_500 },
    earlyBird: { uah: 63_000, usd: 1_400 },
    slots: 3,
  },
} as const;

export const INSTAGRAM_URL = 'https://www.instagram.com/nataliia_karmolog/';
export const INSTAGRAM_HANDLE = '@nataliia_karmolog';

export const BANK_DETAILS = {
  recipient: 'ФОП Войтович Наталія Вікторівна',
  ipn: '3571600882',
  iban: 'UA963220010000026004330060904',
  bank: 'УНІВЕРСАЛ БАНК',
  purpose: 'Оплата за онлайн-курс',
};

export const AUTHOR = {
  fullName: 'Войтович Наталія',
  roles: [
    'Кармолог',
    'Психолог',
    'Психосоматолог ГНМ',
    'Гіпнотерапевт',
    'Регресолог',
    'Духовний наставник',
  ],
  description:
    'Авторка Школи духовного розвитку та курсу «Стан достатку».',
  stats: [
    { value: '130+', label: 'учнів' },
    { value: '700+', label: 'особистих терапій' },
    { value: '4', label: 'місяці навчання' },
  ],
};
