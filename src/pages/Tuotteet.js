import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';



function Tuotteet(url) {
    const [category, setCategory] = useState('');
    const [products, setProducts] = useState([]);

    let params = useParams();

    useEffect((url1) => {      
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
    <div>
      <h3> {category} </h3>
      {products.map(tuote => (
        <div key={tuote.tuoteid}>
          {tuote.tuotenimi}
        </div>  
      ))}
    </div>
  )
}

export default Tuotteet;