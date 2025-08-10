export default function About() {
  return (
    <section className="min-h-[60vh] px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">Обо мне</h1>
      <p className="text-gray-700 leading-relaxed max-w-2xl">
        Я Виктория, фронтенд-разработчица. Люблю React, современную вёрстку и красивые интерфейсы.
        Здесь расскажу про стек, опыт и чем могу быть полезна.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Стек</h2>
      <ul className="list-disc ml-5 text-gray-700">
        <li>HTML, CSS</li>
        <li>Tailwind</li>
        <li>Java Script</li>
        <li>React, React Router</li>
        <li>Vite</li>
      </ul>
    </section>
  );
}