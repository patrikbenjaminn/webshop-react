import './App.css';
import Etusivu from './pages/Etusivu';
import { Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';

function App() {
  return (
    <>

       <Routes>
          <Route path='/' element={ <Etusivu />} />
          <Route path='/Contact' element={ <Contact />} />

          <Route path='*' element={ <NotFound />} />

       </Routes>


    </>
  );
}

export default App;
