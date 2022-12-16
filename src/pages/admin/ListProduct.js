/* import axios from 'axios';
import '../../styles//ListProduct.css';
import {useEffect, useState} from 'react';

const URL = 'http://localhost/webshop/php/admin/';

function ListProduct() {
  const [tuotteet, setTuotteet] = useState([]);
  const [newTuote, setNewTuote] = useState('');
  const [editTuote, setEditTuote] = useState(null);
  const [editTuotenimi, setEditTuotenimi] = useState('');

  useEffect(() => {
    axios.get(URL)
    .then((response) => {
      setTuotteet(response.data)
    }).catch(error => {
      alert(error.response ? error.response.data.error : error);
    })
  }, [])

  const save = (e) => {
    e.preventDefault()
    const json = JSON.stringify({tuotenimi:newTuote})
    axios.post(URL + 'addproducts.php',json,{
      headers: {
        'Content-Type':'application/json'
      }
    })
    .then((response) => {
      setTuotteet([...tuotteet,response.data])
      setNewTuote('')
    }).catch(error => {
       console.log(error.response ? error.response.data.error : error)
       alert('häiriö') 
    })
  }

function remove(tuoteid) {
  const json = JSON.stringify({tuoteid:tuoteid})
  axios.post(URL + 'DeleteTuote.php', json,{
    headers: {
      'Content-Type' : 'application/json'
    }
  })
  .then((response) => {
    const newListWithoutRemoved = tuotteet.filter((item) => item.tuoteid !==tuoteid);
    setTuotteet(newListWithoutRemoved);
  }).catch (error => {
    alert(error.response ? error.response.data.error : error);
  })
}

function setEditedTuote(tuote) {
  setEditTuote(tuote);
  setEditTuotenimi(tuote?.tuotenimi);
}

function update(e) {
  e.preventDefault();
  const json = JSON.stringify({tuoteid:editTuote.tuoteid,tuotenimi:editTuotenimi})
  axios.post(URL + 'updateTuote.php',json,{
    headers: {
      'Content-Type' : 'application/json'
    }
  })
    .then((response) => {
      tuotteet[(tuotteet.findIndex(tuote => tuote.tuoteid === editTuote.tuoteid))].tuotenimi = editTuotenimi;
      setTuotteet([...tuotteet]);
      setEditedTuote(null);
    }).catch (error => {
      alert(error.response ? error.response.data.error : error);
    });
}

  return (
    <div className='container'>
      <form onSubmit={save}>
        <label>Uusi tuote</label>
        <input value={newTuote} onChange={e => setNewTuote(e.target.value)} />
        <button>Save</button>
      </form>
        <ol>
         {tuotteet?.map(tuote => (
          <li key={tuote.tuoteid}>
            {editTuote?.tuoteid !== tuote.tuoteid &&
              tuote.tuotenimi
            }  
            {editTuote?.tuoteid === tuote.tuoteid && 
              <form onSubmit={update}>
                <input value={editTuotenimi} onChange={e => setEditTuotenimi(e.target.value)} />
                <button>Save</button>
                <button type="button" onClick={() => setEditedTuote(null)}>Cancel</button>
              </form>            
        }
        <a className='delete' onClick={() => remove(tuote.tuoteid)} href="#">    
              Delete
            </a>&nbsp;
            {editTuote === null &&
               <a className='edit' onClick={() => setEditedTuote(tuote)} href="#">
                Edit
               </a>
            }
           </li> 
        ))}
      </ol> 
    </div>
  ); 
}

export default ListProduct; */
