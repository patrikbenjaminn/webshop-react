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


    let params = useParams();

    useEffect(() => {

        let address = '';

        address = url + 'products/search.php/' + params.searchPhrase;
        console.log(address);

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
                        <h1 className="text-center"> hakutulos</h1>
                        <div className="row gy-5">
                            {products.map(tuote => (
                                <div className="col-lg-3">
                                    <div className="card h-100">
                                        <img src={"../../images/" + tuote.img} className="img-fluid mb-3" alt="" />
                                        <input type="button" onClick={() => window.location.href = './Products/xbox'} value="OSTA TÄSTÄ" />
                                        <h3 className="text-center">{tuote.tuotenimi}  </h3>
                                        <p><span className='tuote'> {tuote.hinta}</span></p>
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

