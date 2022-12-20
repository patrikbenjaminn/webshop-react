import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Tuotteet.css'
import '../styles/Tarjoussivu.css'

const URL = 'http://localhost/webshop/php/';


function Tuotteet({url,addToCart}) {
  const [category, setCategory] = useState('');
  const [products, setProducts] = useState([]);

  let params = useParams();

  useEffect(() => {
    axios.get(url + 'products/gettuotteet.php/' + params.trnro)
      .then((response) => {
        const json = response.data;
        setCategory(json.tuoteryhma)
        setProducts(json.tuote);
      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error)
      })
  }, [params])

  return (


    <section className="tarjoukset" style={{ textalign: "center" }}>
      <div className="container py-5">
        <h1 className="text-center"> {category}</h1>
        <div className="row gy-5">
          {products.map(tuote => (
        <div className="col-lg-3">
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

export default Tuotteet;