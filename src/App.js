            /*  css ja react */
import './App.css';
import { Routes, Route, BrowserRouter, json } from 'react-router-dom';
import React, {useEffect, useState} from "react";
import uuid from 'react-uuid';

          /* componentit */
import NavBar from './components/NavBar';
import Footer from './components/Footer';

          
         /* sivut */
import Etusivu from './pages/Etusivu';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import Loginpage from './pages/Loginpage';
import Return from './pages/Returning';
import Tuotteet from './pages/Tuotteet';
import Cart from './pages/Cart';
import Tarjoussivu from './pages/Tarjoussivu';
import Searchproducts from './pages/Search';
import Order from './pages/Order';


          /* admin */

import AdminLogin from './pages/admin/AdminLogin';
import Nauta from './pages/admin/Nauta';
import Nautaryhmat from './pages/admin/Nautaryhmat';
import AdminRegister from './pages/admin/AdminRegister';
import AddProduct from './pages/admin/AddProduct';
import UpDateProduct from './pages/admin/UpDateProduct';
import Addryhma from './pages/admin/Addryhma';
import Sidebar from './pages/admin/AdminSideBar';
import Readcontact from './pages/admin/Readcontact';
import AddOffers from './pages/admin/AddOffers';    
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminHeader from './pages/admin/AdminHeader';

// import ReactDOM from 'react-dom/client'
/*import Header from './components/Header';
import Products from './products/Products';*/ 

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

  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, [])

  function addToCart(tuote) {
    if(cart.some(item => item.id === tuote.tuotenimi)){
      const tuoteOlemassa = cart.filter(item => item.id === tuote.tuotenimi);
      muutaMaara(parseInt(tuoteOlemassa[0].maara) +1, tuote);

    }
    else{
    tuote['maara'] = 1;
    const newCart = [...cart,tuote];
    setCart(newCart);
    localStorage.setItem('cart',JSON.stringify(newCart));
  }
}
  
  function removeFromCart(tuote){
    const itemsWithoutRemoved = cart.filter(item => item.id !== tuote.id);
    setCart(itemsWithoutRemoved);
    localStorage.setItem('cart',JSON.stringify(itemsWithoutRemoved));
  }

  function muutaMaara(maara,tuote){
    tuote.maara = maara;
    const index = cart.findIndex((item => item.id === tuote.id));
    const modifiedCart = Object.assign([...cart],{[index]: tuote});
    setCart(modifiedCart);
    localStorage.setItem('cart',JSON.stringify(modifiedCart));

  }
  return (
    
    <>
      <NavBar url={URL} cart={cart} />
        <div className='container'>
      
      
          <Routes>

              <Route path='/' element={ <Etusivu />} />
              <Route path="/Tuotteet/:trnro" element={<Tuotteet url={URL} addToCart={addToCart}  />}/>
              <Route path='/Contact' element={ <Contact />} />
              <Route path='*' element={ <NotFound />} />
              <Route path="/Search" element={<Searchproducts url={URL}/>}/>
              <Route path='/Search/:searchPhrase' element={<Searchproducts url={URL} addToCart={addToCart} />}/>
              <Route path='/Order' element={<Order cart={cart} removeFromCart={removeFromCart} muutaMaara={muutaMaara}/>}/>
              <Route path='/Tarjoussivu/:tuoteid' element={ <Tarjoussivu url={URL} addToCart={addToCart} />} />
              <Route path='/Returning' element={ <Return />} />
              <Route path='/Signup' element={ <Signup />} />
              <Route path='/Loginpage' element={ <Loginpage />} />
              <Route path='/admin/AdminDashboard/*' element={<AdminDashboard />} />
              <Route path='/admin/AdminLogin' element={ <AdminLogin />} />
              <Route path='/admin/AdminRegister' element={ <AdminRegister />} />
              <Route path='/admin/AddProduct' element={ <AddProduct />} />
              <Route path='/admin/Addryhma' element={ <Addryhma />} />
              <Route path='/admin/AddOffers' element={ <AddOffers />} />  
              <Route path='/admin/UpDateProduct' element={ <UpDateProduct />} />
              <Route path='/admin/Nauta' element={ <Nauta />} />
              <Route path='/admin/Nautaryhmat' element={ <Nautaryhmat />} />
              <Route path='/admin/AdminSideBar' element={ <Sidebar/>} />
              <Route path='/admin/Readcontact' element={ <Readcontact/>} />
              
          </Routes>
          
        
          </div>
      <Footer />
    </>
  );
}

export default App;
