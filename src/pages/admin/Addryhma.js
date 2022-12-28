import React from 'react';
import AdminHeader from './AdminHeader';
import axios from 'axios';
import { useState } from 'react';
import '../../styles/AddRyhma.css';

const URL = 'http://localhost/webshop/php/'; 

/* Luodaan tuoteryhmän lisäys*/
function Addryhma() {

  const [trnimi, setTrnimi] = useState('');
 

  function save(e) {
    e.preventDefault()
    const json = JSON.stringify({ trnimi: trnimi});
    axios.post(URL + 'admin/addRyhma.php', json, {
      headers: {
        'Content-Type': 'Application/json'
      }
    })

      .then((response) => {
        setTrnimi(trnimi => [...trnimi, response.data]) 
        setTrnimi('')  
        alert('Tuoteryhma lisätty onnistuneesti!')
      })
      
      .catch(error => {
        console.log(error.response ? error.response.data.error : error)
        alert("Häiriö järjestelmässä, yritä pian uudelleen!")
      })
  }

  /* Luodaan tuoterymä sivun lisäys elementit */
  return (
 
    <div>
    <AdminHeader url={URL} />

    <div className="contact-form2">
     <h1>Lisää tuoteryhmä </h1> 

     <form onSubmit={save}>
            <label htmlFor="trnimi">tuoteryhmän nimi </label>
            <input type="text" value={trnimi}
              onChange={(e) => setTrnimi(e.target.value)}
              placeholder="Lisää tuoteryhmän nimi" required />
            <input type="submit" value="Lähetä" />        
          </form>
          </div>
    </div>

   
  )
}

export default Addryhma
