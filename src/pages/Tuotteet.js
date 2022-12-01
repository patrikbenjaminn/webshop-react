import axios from 'axios'
import React,{useState,useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'

const URL = 'http://localhost/webshop/src/php/';

export default function Tuotteet({url}) {
    const [categoryName, setCategoryName] = useState('');
    const [products, setProducts] = useState([]);

    let params = useParams();

    useEffect(() => {
        console.log(url);
        axios.get(URL + 'tuote.php/' + params.tuotteet.trnro)
          .then((response) => {
            const json = response.data;
            setCategoryName(json.tuoteryhma);
            setProducts(json.tuotteet);
            console.log(json.tuotteet)
          }).catch (error => {
            alert(error.response === undefined ? error : error.response.data.error);
          })
      }, [params])

  return (
    <div>
        <h3>Tuoteryhmä {categoryName}</h3>
        {products.map(tuote => (         
        <div key={tuote.tuoteid}>
            {tuote.tuotenimi}
        </div>
        ))}
    </div>
  )
}
