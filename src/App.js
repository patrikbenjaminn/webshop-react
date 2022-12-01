import './App.css';
import Etusivu from './pages/Etusivu';
import { Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Return from './pages/Returning';
/* import Tuoteryhmät from './pages/Tuoteryhmät'; */
import Tuotteet from './pages/Tuotteet';
import Admin from './pages/admin/Admin';
/* import Header from './components/Header'; */
import Products from './components/Products';
import {useState} from "react";
/* import ReactDOM from 'react-dom/client'
 */
const URL = 'http://localhost:3005/src/php/';

function App(props) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    const newCart = [...cart,product];
    setCart(newCart);
    localStorage.setItem('cart',JSON.stringify(newCart));
  }

  return (
    <>
      <Navbar url={URL} />
        <div className='container'>
          <Routes>

              <Route path='/' element={ <Etusivu />} />
              {/* <Route path='/Tuoteryhmät' element={ <Tuoteryhmät />} /> */}
              <Route path="/Tuotteet/:tuoteid" element={<Tuotteet url={URL}/>}/>
              {/* <Route path='/Lautapelit' element={ <Lautapelit />} />
              <Route path='/Konsolipelit' element={ <Konsolipelit />} />
              <Route path='/Tietokonepelit' element={ <Tietokonepelit />} />
              <Route path='/Tarvikkeet' element={ <Tarvikkeet />} />
              <Route path='/Uutuudet' element={ <Uutuudet />} /> */}
              <Route path='/Contact' element={ <Contact />} />
              <Route path='/Returning' element={ <Return />} />
              <Route path='/Admin' element={ <Admin />} />
              <Route path='*' element={ <NotFound />} />
              <Route path='/products/:categoryId' element={ <Products url={URL} addToCart={addToCart} />} />


          </Routes>
          
        </div>
      <Footer />
    </>
  );
}



export default App;
