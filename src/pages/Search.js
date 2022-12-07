import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Contact.css';
import '../App.css';


const url = 'http://localhost/webshop/php/';


export default function Searchproducts() {


    const [name, setName] = useState('');
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");

    const handleChange = e => {
        setSearch(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        alert("you have searched for - " + search);
        // or you can send data to backend
    };

    const handleKeypress = e => {
        //it triggers by pressing the enter key
        if (e.keyCode === 13) {
            handleSubmit();
        }
    };

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
            <form className="form-inline my-2 my-lg-0">
                <input
                    value={search}
                    onChange={handleChange}
                    onKeyPress={handleKeypress}
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Etsi tuotteita"
                    aria-label='Search'
                />
                <button onClick={handleSubmit} type="submit">
                    Lähetä
                </button>
                <div>
                    <h3> {name} </h3>

                    {products?.map(tuote => (
                        <li key={tuote.tuoteid}>{tuote.tuotenimi}{tuote.hinta}</li>
                    ))
                    }
                </div>
            </form>
            
        </>
    );
}

