import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='flex justify-between items-center px-6 py-4 bg-white shadow-md'> 
        <h1 className='text-2xl font-bold text-gray-800'>Viktoria</h1>
        <ul className='flex gap-6 text-gray-600'>
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
