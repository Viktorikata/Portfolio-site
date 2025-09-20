export default function About() {
  return (
    <section className="min-h-[60vh] px-6 py-10">
      <h1 className="text-center text-3xl font-bold mb-4">Обо мне</h1>
      <p className="text-center text-gray-700 leading-relaxed">
        Я — фронтенд-разработчик. Фокус — создание производительных и поддерживаемых интерфейсов на React. Работаю по принципам модульности, предсказуемости и простоты: чистая архитектура компонентов, явные типы данных, аккуратные зависимости и понятные стили.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 ">Чем я полезна:</h2>
      <ul className="list-disc ml-5 text-gray-700">
        <li>Проектирую UI из задач бизнеса и сценариев пользователя.</li>
        <li>Реализую адаптивные интерфейсы, следуя best practices по доступности (клавиатурная навигация, контраст).</li>
        <li>Забочусь о производительности: код-сплиттинг, мемоизация, lazy-роутинг, оптимизация ассетов.</li>
        <li>Навожу порядок в кодовой базе: единый стиль, именование, структура папок, осмысленные коммиты.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Технологии и инструменты:</h2>
      <ul className="list-disc ml-5 text-gray-700">
        <li> <b>Ядро:</b> JavaScript (ES6+), TypeScript (база), React, React Router, Vite, TypeScript.</li>
        <li> <b>Стиль:</b> CSS3, Tailwind CSS (utility-first, адаптивность, тёмная тема при необходимости).</li>
        <li> <b>Состояние/данные:</b> React hooks, Context; знакома с Redux Toolkit, createAsyncThunk, REST API.</li>
        <li> <b>Инфраструктура:</b> Git/GitHub, GitHub Pages, базовая CI/CD, линтинг (ESLint), форматирование (Prettier).</li>
        <li> <b>Качество:</b> базовые знания о тестировании</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Подход к работе:</h2>
      <ul className="list-disc ml-5 text-gray-700">
        <li> Ставлю прозрачные критерии готовности: функционал, адаптив, доступность, покрытие критических сценариев.</li>
        <li> Разбиваю задачи на короткие итерации, фиксирую результаты и риски.</li>
        <li> Поддерживаю читаемость: самодокументируемый код, понятные PR-описания и коммиты.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Сейчас:</h2>
      <p  className="list-disc ml-5 text-gray-700">Развиваю портфолио из нескольких React-проектов (включая CRUD и работу с API), ищу команду, где смогу приносить пользу и расти как разработчица.</p>


    </section>
  );
}

