import React from 'react'
import '../styles/Tarjoussivu.css'
import '../products/Products'
import { useState, useEffect } from 'react'
import '../styles/Tuotteet.css'

function handleClick(addToCart){
  return
}
const Tarjoussivu = () => {
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
          {tarjoukset.map(tarjous => (
            <div className="col">
              <div className="card h-100">
                <img src={"../../images/" + tarjous.img} className="img-fluid mb-3" alt="" />
                <input type="button" onClick={handleClick} value="OSTA TÄSTÄ" />
                <h3 className="tuotenimi">{tarjous.tuotenimi}  </h3>
                <p><span className='tuote'> {tarjous.tarjoushinta}</span></p>
              </div>
            </div>
          ))}
        {/*   {tarjoukset.map(tuote => (
            <div className="col-lg-3">
              <div className="card h-100">
                <img src={"../../images/" + tuote.img} className="img-fluid mb-3" alt="" />
                <input type="button" onClick={handleClick} value="OSTA TÄSTÄ" />
                <h3 className="tuotenimi">{tuote.tuotenimi}  </h3>
                <p><span className='tuote'> {tuote.hinta}</span></p>
              </div>
            </div>
          ))} */}
     {/*      {tarjoukset.map(tuote => (
            <div className="col-lg-3">
              <div className="card h-100">
                <img src={"../../images/" + tuote.img} className="img-fluid mb-3" alt="" />
                <input type="button" onClick={handleClick} value="OSTA TÄSTÄ" />
                <h3 className="tuotenimi">{tuote.tuotenimi}  </h3>
                <p><span className='tuote'> {tuote.hinta}</span></p>
              </div>
            </div>
          ))}
          {tarjoukset.map(tuote => (
            <div className="col-lg-3">
              <div className="card h-100">
                <img src={"../../images/" + tuote.img} className="img-fluid mb-3" alt="" />
                <input type="button" onClick={handleClick} value="OSTA TÄSTÄ" />
                <h3 className="tuotenimi">{tuote.tuotenimi}  </h3>
                <p><span className='tuote'> {tuote.hinta}</span></p>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </section>

  )
}

export default Tarjoussivu