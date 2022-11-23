import React from 'react';
import Karuselli from '../components/Karuselli';
import Artikkelit from './Artikkelit';
import Tarjoussivu from './Tarjoussivu';


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