import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx';

import Home from './pages/Home.jsx';
import Projects from'./pages/Projects.jsx';
import About from'./pages/About.jsx';
import Contact from'./pages/Contact.jsx';

function App() {
  return (  
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />        
        <Route path='*' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;