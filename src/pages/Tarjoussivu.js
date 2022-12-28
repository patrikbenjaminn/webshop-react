import React from 'react'
import { useState, useEffect } from 'react'
import '../styles/Tarjoussivu.css'

/* Luodaan tarjoussivu*/
function Tarjoussivu({ url, addToCart }) {

  
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
/* Luodaan Sivun elementit*/
  return (

    <section className="tarjoukset" style={{ textalign: "center" }}>
      <div className="container py-5">
        <h1 className="text-center">Päivän tarjoukset</h1>
        <div className="row py-5">
        {tarjoukset.map(tuote => (
                <div key={tuote.tuoteid} className="col-lg-3">
                  <div className="card h-100">
                    <img src={"../../images/" + tuote.img} className="img-fluid mb-3" alt="" />
                    <h3 className="tuotenimi2">{tuote.tuotenimi}  </h3>                         
                    <button className='btn btn-primary' type="button" onClick={()=> addToCart(tuote)} >Lisää koriin</button>
                    <p><span className='hinta2'> {tuote.tarjoushinta}</span><span className='hinta'> (norm. {tuote.hinta})</span></p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>

  )
}

export default Tarjoussivu;
