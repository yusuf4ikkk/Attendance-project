# Smart Attendance — запуск на Vercel

## 1. Firebase (бесплатно)
1. console.firebase.google.com → Add project.
2. Build → Authentication → Sign-in method → включить **Anonymous**.
3. Build → Firestore Database → Create database. Вкладка Rules → вставить содержимое `firestore.rules` → Publish.
4. Project settings → Your apps → Web (</>) → скопировать конфиг в `config.js`.

## 2. Vercel
Вариант А (проще): vercel.com/new → перетащить эту папку.
Вариант Б: `npm i -g vercel`, затем в папке `vercel --prod`.

## 3. После деплоя
- Firebase → Authentication → Settings → Authorized domains → добавить домен `*.vercel.app` вашего проекта.
- Первый вход преподавателя: PIN **1234**. Сразу смените его в Настройках.

Правила Firestore простые: любой вошедший может читать и писать. Для строгой защиты нужны Cloud Functions.
