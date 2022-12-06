import axios from 'axios';
import {useState, useEffect} from 'react';
import { Navigate, useParams} from 'react-router-dom';
import '../styles/Contact.css';
import '../App.css';


function Search({url}) {
    const [name, setName] = useState('');
    const [products, setProducts] = useState([]);
    const[search, setSearch] = useState([]);


    let params = useParams();

    useEffect(() => { 
        
        let address ='';

       if (params.searchPhrase === undefined){
            address = url + '../products/gettuotteet.php/' + params.trnro;
        } else {
            address = url + '../products/search.php/' + params.searchPhrase;
        }

     axios.get(address)
        .then((response) => {
            const json = response.data;
          if (params.searchPhrase ===undefined){
                setName(json.trnro)
                setProducts(json.tuotteet);
            }else {
                setName(params.searchPhrase);
                setProducts(json);
            } 
           
        }).catch(error => {
            alert(error.response === undefined ? error : error.response.data.error)
        }) 
    }, [params])

    function executeSearch(e) {
        if (e.charCode === 13){
            e.preventDefault()
            Navigate('/search' + search);
        }
    }
return (
    <div className='contact-form'>
      <h2>Etsi tuotteita</h2>
      { <form className="form-inline my-2 my-lg-0">
<input
value={search}
onChange={(e) => setSearch(e.target.value)}
onKeyPress={(e) => executeSearch(e)}
className="form-control mr-sm-2"
type="search"
placeholder= "Search"
aria-label='Search' />
</form> }
<ol>
        {products?.map(tuote=> (
          <li key={tuote.tuoteid}>{tuote.tuotenimi}{tuote.hinta}</li>
        ))
        } 
     
      </ol>

    </div>
  );

}


export default Search;