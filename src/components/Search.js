import axios from 'axios';
import {useState, useEffect} from 'react';
import { useParams} from 'react-router-dom';
import '../styles/Contact.css';


function Products({url}) {
    const [name, setName] = useState('');
    const [products, setProducts] = useState([]);

    let params = useParams();

    useEffect(() => { 
        
        let address ='';

        if (params.searchPhrase === undefined){
            address = url + 'products/gettuotteet.php/' + params.trnro;
        } else {
            address = url + 'products/Search.php/' + params.searchPhrase;
        }


     axios.get(address)
        .then((response) => {
            const json = response.data;
            if (params.searchPhrase ===undefined){
                setName(json.tuoteryhma)
                setProducts(json.tuote);
            }else {
                setName(params.searchPhrase);
                setProducts(json);
            }
           
        }).catch(error => {
            alert(error.response === undefined ? error : error.response.data.error)
        })
    }, [params])

}

export default Products;