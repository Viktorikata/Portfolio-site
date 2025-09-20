import { projects } from "../data/project";
import {Link} from 'react-router-dom';

export default function Projects() {
  return(
    <section className='min-h-[60vh] px-6 py-10'>
      <h1 className='text-3xl font-bold mb-6'>Проекты</h1>

      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {projects.map((p) => (
          <article 
          key={p.slug} 
          className='rounded-xl border p-5 hover:shadow-md transition grid gap-3'
          >
            <div 
              className='relative w-full overflow-hidden rounded-lg bg-gray-100'
              style={{paddingTop: '56.25%'}}
              >
              {p.thumb && (
                <img 
                src={p.thumb} 
                alt={p.title} 
                className="absolute inset-0 w-full h-full object-cover" 
                />
              )}
            </div>
            {/* Название  */}
            <h3 className='font-semibold text-lg'>{p.title}</h3>
            {/* Описание */}
            <p className="text-gray-600 text-sm">
              {p.summary}
            </p>
            {/* Стек технологий */}
            <div className="flex flex-wrap gap-2 text-[12px] leading-none">
              {p.stack.map((tech, i) => (
                <span
                  key={i}
                  className="inline-flex items-center justify-center h-7 px-2 border font-normal whitespace-nowrap text-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3 pt-1">
              <a
               href={`${import.meta.env.BASE_URL}apps/${p.slug}/index.html`}
               target='_blank'
               rel='noopener noreferrer'
               className="text-pink-600 hover:underline"
               >
              Просмотр
              </a>
              {p.repo && (
                <a 
                href={p.repo} 
                target="_blank" 
                className="text-pink-600 hover:underline"
                rel='noopener noreferrer'
                >
                  GitHub
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}