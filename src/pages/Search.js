import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Contact.css';
import '../App.css';


const url = 'http://localhost/webshop/php/';


export default function Searchproducts() {
    const [value, setValue] = useState("");

    const handleChange = e => {
        setValue(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        alert("you have searched for - " + value);
        // or you can send data to backend
    };

    const handleKeypress = e => {
        //it triggers by pressing the enter key
        if (e.keyCode === 13) {
            handleSubmit();
        }
    };

    const [name, setName] = useState('');
    const [products, setProducts] = useState([]);


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
        <>


            <form className="form-inline my-2 my-lg-0">
                <input
                    value={value}
                    onChange={handleChange}
                    onKeyPress={handleKeypress}
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Etsi tuotteita"
                    aria-label='Search'
                />
                <button onClick={handleSubmit} type="submit">
                    Submit
                </button>

                <div>
                    <h2>Löydetyt tuotteet: </h2>
                    <ol>
                        {/* {products?.map(tuote => (
                    <li key={tuote.tuoteid}>{tuote.tuotenimi}{tuote.hinta}</li>
                ))
                }
                {name?.map(tuote => (
                    <li key={tuote.tuoteid}>{tuote.tuotenimi}{tuote.hinta}</li>
                ))
                } */}
                    </ol>

                </div>
            </form>

        </>
    );
}

