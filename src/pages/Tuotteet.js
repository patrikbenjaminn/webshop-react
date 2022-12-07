import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Tuotteet.css'


function Tuotteet(url) {
    const [category, setCategory] = useState('');
    const [products, setProducts] = useState([]);

    let params = useParams();

    useEffect(() => {      
     axios.get('http://localhost/webshop/php/products/gettuotteet.php/' + params.trnro)
        .then((response) => {
            const json = response.data;
            setCategory(json.tuoteryhma)
            setProducts(json.tuote);
        }).catch(error => {
            alert(error.response === undefined ? error : error.response.data.error)
        })
    }, [params])
    

  return (
    <div class = "tuotteet">
      <h3 class ="tuotteetotsikko"> {category} </h3>
      {products.map(tuote => (
        <div class="tuotteetinfo" key={tuote.tuoteid}>
          {tuote.tuotenimi}            
          {tuote.hinta}
          {tuote.tuotekuvaus}
        </div>  
      ))}
    </div>
  )
}

export default Tuotteet;