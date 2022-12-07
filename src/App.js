import './App.css';
import Etusivu from './pages/Etusivu';
import { Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import Loginpage from './pages/Loginpage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Return from './pages/Returning';
import Tuotteet from './pages/Tuotteet';
import Admin from './pages/admin/Admin';
import Header from './components/Header';
/*import Products from './components/Products';
import Tuoteryhmät from './pages/Tuoteryhmät';
/*import Admin from './pages/Admin';
import Header from './components/Header';
import Products from './products/Products';*/
import {useState} from "react";
import Cart from './pages/Cart';
import AdminDashboard from './pages/admin/AdminDashboard';
import { Search } from 'react-bootstrap-icons';
import Order from './pages/Order';

/* import ReactDOM from 'react-dom/client'
 */

const URL = 'http://localhost/webshop/php/';

function App() {

  /*
  Jos herjaa CORS-virheistä, niin avaa XAMPPin Apache config ja sieltä httpd.conf
  Lisää sinne seuraavat kolme riviä heti "Listen 80" rivin alle

  Header set Access-Control-Allow-Origin "*"
  Header set Access-Control-Allow-Methods "GET, POST, PUT, DELETE, OPTIONS"
  Header set Access-Control-Allow-Headers "X-Requested-With, Content-Type, X-Token-Auth, Authorization"
  */

  // ostoskori
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    const newCart = [...cart,product];
    setCart(newCart);
    localStorage.setItem('cart',JSON.stringify(newCart));
  }
  const URL1 = window.location.href
  return (
    <>
      <NavBar url={URL} />
        <div className='container'>
          <Routes>

              <Route path='/' element={ <Etusivu />} />
              <Route path="/Tuotteet/:trnro" element={<Tuotteet url={URL}  />}/>
              <Route path='/Contact' element={ <Contact />} />
              <Route path='/Returning' element={ <Return />} />
              <Route path='/Signup' element={ <Signup />} />
              <Route path='/Loginpage' element={ <Loginpage />} />
              <Route path='/AdminDashboard' element={ <AdminDashboard />} />
              <Route path='*' element={ <NotFound />} />
              <Route path="/Search" element={<Search url={URL}/>}/>
              <Route path='/Cart' element={ <Cart url={URL} addToCart={addToCart} />} /> 
              <Route path='/order' element={<Order cart={cart}/>}/>
              <Route path='/Search/searchPhrase' element={<Search url={URL}/>}/>
              <Route path='/Tuotteet/tuoteid' element={<Tuotteet url={URL}/>}/>


          </Routes>
          
        </div>
      <Footer />
    </>
  );
}



export default App;
