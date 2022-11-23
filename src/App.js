import './App.css';
import Etusivu from './pages/Etusivu';
import { Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Return from './pages/Returning';
import Tuoteryhmät from './pages/Tuoteryhmät';

function App() {
  return (
    <>
      <Navbar />
        <div className='container'>
          <Routes>
              <Route path='/' element={ <Etusivu />} />
              <Route path='/Tuoteryhmät' element={ <Tuoteryhmät />} />
              <Route path='/Contact' element={ <Contact />} />
              <Route path='/Returning' element={ <Return />} />

              <Route path='*' element={ <NotFound />} />

          </Routes>
        </div>
      <Footer />
    </>
  );
}

export default App;
