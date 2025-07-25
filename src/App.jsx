import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx';
import { Suspense, lazy } from 'react';

const Home = lazy(() => import ('./pages/Home.jsx'));
const Projects = lazy(() => import('./pages/Projects.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));

function App() {
  return (  
    <>
      <Navbar />
      <Suspense fallback={<div className="p-6">Загрузка...</div>}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />        
      </Routes>
      </Suspense>
    </>
  );
}

export default App;