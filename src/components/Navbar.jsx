import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='flex flex-wrap justify-between items-center px-6 py-4 bg-white shadow-md'> 
        <h1 className='hidden md:block text-2xl font-bold text-gray-800'>Portfolio</h1>
        <ul className='justify-center w-full flex flex-wrap gap-4 text-gray-600 text-sm sm:text-base'>
            <li>
                <Link to='/' className='hover:text-black'>Главная</Link>
            </li>
            <li>
                <Link to='/projects' className='hover:text-black'>Проекты</Link>
            </li>
            <li>
                <Link to='/about' className='hover:text-black'>Обо мне</Link>
            </li>
            <li>
                <Link to='/contact' className='hover:text-black'>Контакты</Link>
            </li>
        </ul>
        </nav>
    );
}
export default Navbar;