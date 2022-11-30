import './App.css';
import Etusivu from './pages/Etusivu';
import { Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Return from './pages/Returning';
import Tuoteryhmät from './pages/Tuoteryhmät';
import Lautapelit from './pages/Lautapelit';
import Konsolipelit from './pages/Konsolipelit';
import Tietokonepelit from './pages/Tietokonepelit';
import Tarvikkeet from './pages/Tarvikkeet';
import Uutuudet from './pages/Uutuudet';
import Admin from './pages/Admin';
import Header from './header/Header';
import Products from './Products';


function App(props) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    const newCart = [...cart,product];
    setCart(newCart);
    localStorage.setItem('cart',JSON.stringify(newCart));
  }
  return (
    <>
      <Navbar />
        <div className='container'>
          <Routes>
              <Products prod="bearspray" addToCart={addToCart}>Add BEAR SPRAY to cart</Products>
              <Route path='/' element={ <Etusivu />} />
              <Route path='/Tuoteryhmät' element={ <Tuoteryhmät />} />
              <Route path='/Lautapelit' element={ <Lautapelit />} />
              <Route path='/Konsolipelit' element={ <Konsolipelit />} />
              <Route path='/Tietokonepelit' element={ <Tietokonepelit />} />
              <Route path='/Tarvikkeet' element={ <Tarvikkeet />} />
              <Route path='/Uutuudet' element={ <Uutuudet />} />
              <Route path='/Contact' element={ <Contact />} />
              <Route path='/Returning' element={ <Return />} />
              <Route path='/Admin' element={ <Admin />} />
              <Route path='*' element={ <NotFound />} />

          </Routes>
        </div>
      <Footer />
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
