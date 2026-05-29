# GhostRide Supabase Backend

Этот backend нужен, чтобы машины, брони, пользователи и отзывы были общими для всех устройств.

## Как подключить

1. Создайте проект на Supabase.
2. Откройте `SQL Editor`.
3. Выполните файл `schema.sql`.
4. Откройте `Project Settings -> API`.
5. Скопируйте:
   - Project URL
   - anon public key
6. Вставьте их в `config.js`.
7. Загрузите обновленные файлы на GitHub Pages.

## Вход через Google, Apple/iCloud, телефон и email

Для социальных входов откройте `Authentication -> Providers` и включите:

- Google
- Apple

Для телефона/email включите OTP-провайдеры в настройках Supabase Auth. На сайте кнопка `Войти` требует телефон или email: пользователь нажимает `Отправить код`, получает SMS/email-код и подтверждает вход.

Для входа с паролем включите email/phone auth в `Authentication`. В `Authentication -> URL Configuration` добавьте публичный адрес сайта в `Site URL` и `Redirect URLs`, например `https://eralitlekkabyl-rgb.github.io/ghostride/`.

## Важно

Текущие SQL-политики сделаны для demo: сайт может читать и записывать данные без настоящего Supabase Auth. Для реального запуска нужно заменить demo-политики на строгие правила доступа, подключить Supabase Auth и не хранить ИИН/права без юридической подготовки.
