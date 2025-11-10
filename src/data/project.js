import taskifyImg from '../assets/taskify.jpg'
import movieImg from '../assets/movie-explorer.jpg'
import quizImg from '../assets/quiz-master.jpg'
import userManagerImg from '../assets/user-manager-app.jpg'

export const projects = [

    {
        slug: 'taskify',
        title: 'Taskify',
        summary: 'ToDo-приложение с категориями и статусами',
        thumb: taskifyImg,
        stack: ['React', 'useState', 'CSS', 'Git'],
        repo: 'https://github.com/Viktorikata/taskify',
    },

    {
        slug: 'user-manager-app',
        title: 'User Manager App',
        summary: 'React-приложение с CRUD-операциями и подключением к API',
        thumb: userManagerImg,
        stack: ['React', 'Redux Toolkit', 'fetch / createAsyncThunk', 'JSONPlaceholder API', 'CSS', 'Git'],
        repo: 'https://github.com/Viktorikata/user-manager-app',
    },

    {
        slug: 'quiz-master',
        title: 'Quiz-Master',
        summary: 'Интерактивная викторина на тему: "HTML, CSS, JS". Логика: вопрос → варианты → проверка → результат',
        thumb: quizImg,
        stack: ['React', 'Css', 'Google Fonts'],
        repo: 'https://github.com/Viktorikata/quiz-master',
    },

    {
        slug: 'movie-explorer',
        title: 'Movie-Explorer (работает только с ВПН)',
        summary: 'Приложение для поиска фильмов с подключением к TMDb API. Поддерживает избранное, отображение карточек, фильтрацию по названию и жанрам',
        thumb: movieImg,
        stack: ['React', 'React Router', 'React Hooks', 'CSS + Media Queries', 'TMDb API', 'localStorage', 'Google Fonts', 'Git + GitHub'],
        demo: '',
        repo: 'https://github.com/Viktorikata/movie-explorer',
    },
]
