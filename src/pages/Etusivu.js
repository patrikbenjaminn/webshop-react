import React from 'react';
import Karuselli from '../components/Karuselli';
import Artikkelit from './Artikkelit';
import Tarjoussivu from './Tarjoussivu';
import '../styles/Etusivu.css';

/* Kutsuu etusivun elementtejä*/
function Etusivu({URL, addToCart})  {  
  return (
    <>
      <Karuselli />
      <Tarjoussivu url={URL} addToCart={addToCart}/>
      <Artikkelit />     
    </>
  )
}
export default Etusivu;