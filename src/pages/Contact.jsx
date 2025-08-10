export default function Contact() {
  return (
    <section className="min-h-[60vh] px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Контакты</h1>

      <ul className="space-y-2 text-gray-700">
        <li>Email: <a href='mailto:va.2816275@yandex.com' className="text-pink-600 hover:underline">va.2816275@yandex.com</a></li>
        <li>GitHub: <a href="https://github.com/Viktorikata" target='_blank' className="text-pink-600 hover:underline">github.com/Viktorikata</a></li>
       </ul>
    </section>
  );
}