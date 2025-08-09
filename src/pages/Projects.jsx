export default function Projects() {
  return(
    <section className='min-h-[60vh] px-6 py-10'>
      <h1 className='text-3xl font-bold mb-6'>Проекты</h1>
      
      {/*заглушка*/}
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {[1,2,3].map((i) => (
          <article key={i} className='rounded-xl border p-5 hover:shadow-md transition'>
            <div className='aspect-video rounded-lg bg-gray-100 mb-4' />
            <h3 className='font-semibold text-lg'>Проект {i}</h3>
            <p className="text-gray-600 text-sm mt-1">
              Описание проекта
            </p>
            <button className="mt-3 text-pink-600 hover:underline">Смотреть</button>
          </article>
        ))}
      </div>
    </section>
  );
}