import React from 'react'
import '../styles/Tarjous.css'
import './Tuotteet'
import { useState, useEffect } from 'react'
import '../styles/Tarjoussivu.css'


function Tarjoussivu(addToCart) {


function Tarjoussivu () {
  
  const [tarjoukset, setTarjoukset] = useState([])

  const fetchData = () => {
    fetch("http://localhost/webshop/php/admin/tarjoussivu.php")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setTarjoukset(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (

    <section className="tarjoukset" style={{ textalign: "center" }}>
      <div className="container py-5">
        <h1 className="text-center">Päivän tarjoukset</h1>
        <div className="row py-5">
          {tarjoukset.map(tuote => (
            <div className="col">
              <div className="card h-100">
                <img src={"../../images/" + tarjous.img} className="img-fluid mb-3" alt="" />
                <input type="button" onClick={handleClick} value="OSTA TÄSTÄ" />
                <h3 className="tuotenimi2">{tarjous.tuotenimi}  </h3>
               
                <p><div className='hinta2'>{tarjous.tarjoushinta}</div></p>
                <p><div className='hinta'>(norm. {tarjous.normihinta})</div></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  )
}

export default Tarjoussivu;
