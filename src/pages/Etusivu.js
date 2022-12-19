import React from 'react';
import Karuselli from '../components/Karuselli';
import Artikkelit from './Artikkelit';
import Tarjoussivu from './Tarjoussivu';
import '../styles/Etusivu.css'


function Etusivu() {  
  return (
    <>
      <Karuselli />
      <Tarjoussivu />
      <Artikkelit />     
    </>
  )
}
export default Etusivu;