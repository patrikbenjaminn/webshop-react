import React from 'react'
import '../../styles/Tuotteet.css';
import axios, { useState, useEffect } from 'react';

/* const URL = 'http://localhost/webshop/php/'; */

const Nauta = () => {

    const [tuotteet, setTuotteet] = useState([])
    const [editTuote, setEditTuote] = useState(null);
    const [editTuotenimi, setEditTuotenimi] = useState('');
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

  function remove(tuoteid) {
    const json = JSON.stringify({tuoteid:tuoteid})
    axios.post(URL + 'DeleteTuote.php', json,{
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    .then((response) => {
      const newListWithoutRemoved = tuotteet.filter((item) => item.tuoteid !==tuoteid);
      setTuotteet(newListWithoutRemoved);
    }).catch (error => {
      alert(error.response ? error.response.data.error : error);
    })
  }

  function setEditedTuote(tuote) {
    setEditTuote(tuote);
    setEditTuotenimi(tuote?.tuotenimi);
  }

  function update(e) {
    e.preventDefault();
    const json = JSON.stringify({tuoteid:editTuote.tuoteid,tuotenimi:editTuotenimi})
    axios.post(URL + 'updateTuote.php',json,{
      headers: {
        'Content-Type' : 'application/json'
      }
    })
      .then((response) => {
        tuotteet[(tuotteet.findIndex(tuote => tuote.tuoteid === editTuote.tuoteid))].tuotenimi = editTuotenimi;
        setTuotteet([...tuotteet]);
        setEditedTuote(null);
      }).catch (error => {
        alert(error.response ? error.response.data.error : error);
      });
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
          <li key={tuote.tuoteid}> {tuote.tuotenimi} {tuote.hinta} {tuote.saldo} {tuote.trnro} {tuote.tuotekuvaus} {tuote.img} 
          {editTuote?.tuoteid !== tuote.tuoteid &&
            tuote.tuotenimi
          }  
          {editTuote?.tuoteid === tuote.tuoteid && 
              <form onSubmit={update}>
                <input value={editTuotenimi} onChange={e => setEditTuotenimi(e.target.value)} />
                <button>Save</button>
                <button type="button" onClick={() => setEditedTuote(null)}>Cancel</button>
              </form> 
          }  
          <a className='delete' onClick={() => remove(tuote.tuoteid)} href="#">    
              Delete
            </a>&nbsp;
            {editTuote === null &&
               <a className='edit' onClick={() => setEditedTuote(tuote)} href="#">
                Edit
               </a>
            }              
      </li>
        ))}
      </li>
    )}

<a href="http://localhost:3000/admin/AdminDashboard" className='btn btn-secondary' id= "submit">Back to AdminDashboard </a>
  </div>
     
  )

}

export default Nauta;
