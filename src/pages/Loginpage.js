import '../styles/Loginpage.css';
/*import axios from 'axios';*/
import { useState } from 'react';
import axios from 'axios';

const URL = 'http://localhost/webshop/php/';

function Loginpage() {
  const [astunnus, setAstunnus] = useState('');
  const [salasana, setSalasana] = useState('');
  
 

  function save(e) {
    e.preventDefault()
    const json = JSON.stringify({astunnus: astunnus, salasana: salasana });
    axios.post(URL + 'login_form.php', json, {
      headers: {
        'Content-Type': 'Application/json',

      }})
      .then((response) => {
        console.log(response);
      })
  }
    
  return (
    <>
      <div className="logform">
        <div className="logform__header">
          <h12>Kirjaudu sisään!</h12>
        </div>
        <div className="logform__container">
          <form onSubmit={save}>
            <label htmlFor="astunnus">Astunnus </label>
            <input type="texti" value={astunnus}
              onChange={(e) => setAstunnus(e.target.value)}
              placeholder="astunnus" required />
          
            <label htmlFor="salasana">Salasana </label>
            <input type="texti" value={salasana}
              onChange={(e) => setSalasana(e.target.value)}
              placeholder="salasana" required />
              <input type="submit" value="Lähetä" />
           
          </form>

        </div>
      </div>
      
    </>
  );
}
export default Loginpage;