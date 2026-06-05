# Школа духовного розвитку — Наталія Кармолог

Лендінг для 3-го потоку курсу "Школа духовного розвитку". Astro + Tailwind CSS, статичний сайт, готовий до деплою на GitHub Pages.

## Стек

- [Astro 6](https://astro.build) — статичний генератор з нуль-JS за замовчуванням
- [Tailwind CSS 4](https://tailwindcss.com) (`@tailwindcss/vite`)
- `astro:assets` — автоматичні `webp` + responsive `srcset`
- Без бекенду, без аналітики, без cookies

## Що, де лежить

```
src/
├── config.ts            # SITE_CONFIG: дати, ціни, Instagram URL
├── data/content.ts      # увесь текст лендінгу
├── assets/img/          # 01.jpg…19.jpg — фото та слайди
├── layouts/Base.astro   # html, head, шрифти, scroll-reveal init
├── components/          # секції лендінгу (Hero, Pricing, …)
├── styles/global.css    # Tailwind + кастомна тема
└── pages/index.astro    # збірка лендінгу
```

Щоб змінити дату старту, ціни або Instagram — редагуй **`src/config.ts`**, увесь інший контент — у **`src/data/content.ts`**.

## Команди

```sh
npm install        # встановити залежності (один раз)
npm run dev        # dev-сервер на http://localhost:4321
npm run build      # продакшен-білд у ./dist/
npm run preview    # перегляд продакшен-білду локально
```

## Деплой на GitHub Pages

1. Запуш репо в `main`.
2. У налаштуваннях репо: **Settings → Pages → Source: GitHub Actions**.
3. Action `.github/workflows/deploy.yml` сам зробить білд і опублікує сайт на `https://demqn96.github.io/NataliaKarmolog_new_course`.

Якщо змінюєш URL хостингу — онови `site` та `base` у `astro.config.mjs`.

## Чек-ліст перед запуском нового потоку

- [ ] Оновити `COURSE.startDate` та `startDateLabel` у `src/config.ts`
- [ ] Оновити `COURSE.earlyBirdDeadline` та `earlyBirdLabel`
- [ ] Перевірити `COURSE.streamNumber`
- [ ] За потреби — оновити `PRICES`
- [ ] Замінити фото в `src/assets/img/`, якщо є нові
- [ ] Закомітити та запушити в `main` — деплой стається автоматично
