import React from 'react';
import AdminHeader from './AdminHeader';
import axios from 'axios';
import { useState } from 'react';

const URL = 'http://localhost/webshop/php/'; 

function AddProduct() {

  const [tuotenimi, setTuotenimi] = useState('');
  const [hinta, setHinta] = useState('');
  const [saldo, setSaldo] = useState('');
  const [trnro, setTrnro] = useState('');
  const [tuotekuvaus, setTuotekuvaus] = useState('');
  const [img, setImg] = useState('');

  function save(e) {
    e.preventDefault()
    const json = JSON.stringify({ tuotenimi: tuotenimi, hinta: hinta, saldo: saldo,trnro: trnro, tuotekuvaus: tuotekuvaus, img: img});
    axios.post(URL + 'admin/addproducts.php', json, {
      headers: {
        'Content-Type': 'Application/json'
      }
    })

      .then((response) => {
        setTuotenimi(tuotenimi => [...tuotenimi, response.data])
        setHinta(hinta => [...hinta, response.data])
        setSaldo(saldo => [...saldo, response.data])
        setTuotenimi(trnro => [...trnro, response.data])
        setHinta(tuotekuvaus => [...tuotekuvaus, response.data])
        setSaldo(img => [...img, response.data])
        setTuotenimi('')
        setHinta('')
        setSaldo('')
        setTrnro('')
        setTuotekuvaus('')
        setImg('')
        alert('Tuote lisätty onnistuneesti!')
      })
      
      .catch(error => {
        console.log(error.response ? error.response.data.error : error)
        alert("Häiriö järjestelmässä, yritä pian uudelleen!")
      })
  }

  return (
    <>
    <div>
    <AdminHeader url={URL} />
     <h1>Add Products</h1>

     <div className="contact-form">
     <form onSubmit={save}>
            <label htmlFor="tuotenimi">tuotenimi </label>
            <input type="text" value={tuotenimi}
              onChange={(e) => setTuotenimi(e.target.value)}
              placeholder="Lisää tuotenimi" required />
            <label htmlFor="hinta"> hinta</label>
            <input type="text" value={hinta}
              onChange={(e) => setHinta(e.target.value)}
              placeholder="Lisää tuotteen hinta" required />
            <label htmlFor="saldo"> Saldo </label>
            <input type="text" value={saldo}
              onChange={(e) => setSaldo(e.target.value)}
              placeholder="Lisää tuotteiden määrä" required />
               <label htmlFor="name">tuotenimi </label>
            <input type="text" value={tuotenimi}
              onChange={(e) => setTrnro(e.target.value)}
              placeholder="Lisää tuoteryhmän numero" required />
            <label htmlFor="hinta"> hinta</label>
            <input type="text" value={hinta}
              onChange={(e) => setTuotekuvaus(e.target.value)}
              placeholder="Lisää tuotteen hinta" required />
            <label htmlFor="saldo"> Saldo </label>
            <input type="text" value={img}
              onChange={(e) => setImg(e.target.value)}
              placeholder="Lataa tuotteen kuva" required />
            <input type="submit" value="Lähetä" />        
          </form>
          </div>
    </div>
    </>
  )
}

export default AddProduct
