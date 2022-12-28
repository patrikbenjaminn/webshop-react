import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import '../styles/Tarjoussivu.css'



export default function Searchproducts({ url, addToCart }) {

  const [name, setName] = useState('');
  const [products, setProducts] = useState([]);

  let params = useParams();

  useEffect(() => {

    let address = '';
    if (params.searchPhrase === undefined) {
      address = url + 'products/gettuotteet.php/' + params.trnro;
    }
    else {
      address = url + 'products/search.php/' + params.searchPhrase;
    }

    axios.get(address)
      .then((response) => {
        const json = response.data;

        setName(params.searchPhrase);
        setProducts(json);
      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error)

      })
  }, [params])

  return (
    <>
      <div>
        <section className="tarjoukset" style={{ textalign: "center" }}>
          <div className="container py-5">
            <h1 className="text-center">Hakutulos</h1>

            <div className="row gy-5 d-flex justify-content-center">
              {products.length === 0 && (
                <p className="text-center">Ei hakutuloksia nimellä "{name}"</p>
              )}

              {products.map(tuote => (
                <div className="col-lg-3">
                  <div className="card h-100">
                    <img src={"../../images/" + tuote.img} className="img-fluid mb-3" alt="" />
                    <h3 className="tuotenimi2">{tuote.tuotenimi}  </h3>                         
                    <button className='btn btn-primary' type="button" onClick={()=> addToCart(tuote)} >Lisää koriin</button>
                    {tuote.tarjoushinta === null && (
                      <p><span className='hinta2'>  {tuote.hinta}</span></p>
                    )}
                    {tuote.tarjoushinta != null && (<p><span className='hinta2'> {tuote.tarjoushinta}</span><span className='hinta'> (norm. {tuote.hinta})</span></p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );




}

