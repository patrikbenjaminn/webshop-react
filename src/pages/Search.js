import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Search.css';
import '../App.css';
import { Navigate } from 'react-router-dom';



const url = 'http://localhost/webshop/php/';


export default function Searchproducts() {

    const [name, setName] = useState('');
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState([]);


    function executeSearch(e) {
        if (e.charCode === 13) {
            e.preventDefault();
            Navigate('/Search/' + search);
       
        }
    }


    let params = useParams();

    useEffect(() => {

        let address = '';

        if (params.searchPhrase === undefined) {
            address = url + 'products/gettuotteet.php/' + params.trnro;
        } else {
            address = url + 'products/search.php/' + params.searchPhrase;
        }

        axios.get(address)
            .then((response) => {
                const json = response.data;
                if (params.searchPhrase === undefined) {
                    setName(json.tuoteryhma)
                    setProducts(json.tuote);

                } else {
                    setName(params.searchPhrase);
                    setProducts(json);

                }

            }).catch(error => {
                alert(error.response === undefined ? error : error.response.data.error)
            })
    }, [params])

    return (
        <>
            <form className="form-inline">
                <input
                    value={search}
      
                    onChange={(e)=>setSearch(e.target.value)}
                    onKeyDown={(e)=>executeSearch(e)}
                    className="form-control"
                    type="search"
                    placeholder="Etsi tuotteita"
                    aria-label='Search'
                />           
             
            </form>
            <div>
                    <h3> {name} </h3>
                    {products?.map(tuote => (
                        <li key={tuote.tuoteid}>{tuote.tuotenimi}{tuote.hinta}</li>
                    ))
                    }
                </div>
        </>
    );
}

