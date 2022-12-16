import React from 'react'
import '../../styles/Tuotteet.css';
import { useState, useEffect } from 'react';

/* const URL = 'http://localhost/webshop/php/'; */

const Nauta = () => {

    const [tuotteet, setTuotteet] = useState([])
  /* const [tuotenimi, setTuotenimi] = useState('');
  const [hinta, setHinta] = useState('');
  const [saldo, setSaldo] = useState('');
  const [trnro, setTrnro] = useState('');
  const [tuotekuvaus, setTuotekuvaus] = useState('');
  const [img, setImg] = useState(''); */

  const fetchData = () => {
    fetch("http://localhost/webshop/php/admin/tuotteet.php")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setTuotteet(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (

      <div className='tuotteet'>
          <h1> Tuotteet:</h1>
{tuotteet.length > 0 && (
      <li>
        {tuotteet.map(tuote => (
          <li key={tuote.tuoteid}> {tuote.tuotenimi} {tuote.hinta} {tuote.saldo} {tuote.trnro} {tuote.tuotekuvaus} {tuote.img} </li>
        ))}
      </li>
    )}

<a href="http://localhost:3000/admin/AdminDashboard" className='btn btn-secondary' id= "submit">Back to AdminDashboard </a>
  </div>
     
  )

}

export default Nauta;
