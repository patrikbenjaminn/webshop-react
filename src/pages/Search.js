import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Contact.css';
import '../App.css';


const URL = 'http://localhost/webshop/php/';

function Search({ URL }) {
    const [name,setName] = useState('');
    const [products, setProducts] = useState([]);


    let params = useParams();

    useEffect(() => {

        let address = '';

        if (params.searchPhrase === undefined) {
            address = URL + 'products/gettuotteet.php/' + params.trnro;
        } else {
            address = URL + 'products/search.php/' + params.searchPhrase;
        }

        axios.get(address)
            .then((response) => {
                const json = response.data;
                if (params.searchPhrase === undefined) {
                    setName(json.trnro)
                    setProducts(json.tuotteet);
                } else {
                    setName(params.searchPhrase);
                    setProducts(json);
                }

            }).catch(error => {
                alert(error.response === undefined ? error : error.response.data.error)
            })
    }, [params])


    return (
        <div>
         
            <ol>
                {products?.map(tuote => (
                    <li key={tuote.tuoteid}>{tuote.tuotenimi}{tuote.hinta}</li>
                ))
                }

            </ol>

        </div>
    );

}


export default Search;