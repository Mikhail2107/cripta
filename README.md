#  Сборка React + TypeScript + Vite

Проверить приложение можно перейдя по ссылке:
https://cripta-gies.vercel.app/

Верстка макеты выполнена с использованием Grid и Flex. Размеры преимущественно указаны в зависимости от размеров экрана и указаны в vw, что позволяет адаптировать компоненты в сетке не прибегая к media запросам. 

Данные data.min.json хранятся в public, для доступа Versel, и соответственно отображения на экране.

Кнопка Refresh (две скругленные стрелочки) обновляют данные графика (рандомно от 0 до 20), то же самое происходит при выборе доступного бота. Для отображения графика использовал библиотеку Recharts, исправив некоторые инлайновые стили.

При выборе отрезка времени - 24 часа, 7 дней, 30 дней и Все время - данные выбранного промежутка времени хранятся в localStorage. При перезагрузке страницы из LocalStorage получаем сохраненный промежуток времени и результаты ботов.
