import React from 'react'
import '../styles/tuote.css'
import './Tuotteet'
import { useState, useEffect } from 'react'
import '../styles/tuotesivu.css'


function Tarjoussivu(addToCart) {


function Tarjoussivu () {
  
  const [tarjoukset, setTarjoukset] = useState([])

  const fetchData = () => {
    fetch("http://localhost/webshop/php/admin/tuotesivu.php")
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
            <img src={"../../images/" + tuote.img} className="img-fluid mb-3" alt=""/>
            <h3 className="tuotenimi">{tuote.tuotenimi}  </h3>
            <p><span className='tuote'> {tuote.hinta}</span></p>
            <button className='btn btn-primary' type="button" onClick={e=> addToCart(tuote)}>Lisää koriin</button>
          </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  )
}
}
export default Tarjoussivu;
