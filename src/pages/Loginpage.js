import '../styles/Loginpage.css';
/*import axios from 'axios';*/
import { useState } from 'react';

/*const URL = 'http://localhost/webshop/php';*/

function Loginpage() {
  const [astunnus, setAstunnus] = useState('');
  const [salasana, setSalasana] = useState('');
  
 

  function save(e) {
   /* e.preventDefault()
    const json = JSON.stringify({astunnus: astunnus, etunimi: etunimi, sukunimi: sukunimi, email: email, osoite: osoite, postinro: postinro, postitmp: postitmp, salasana: salasana });
    axios.post(URL + 'Createaccount.php', json, {
      headers: {
        'Content-Type': 'Application/json'*/
      }
    

      /*.then((response) => {
        setAstunnus(astunnus => [...astunnus, response.data])
        setEtunimi(etunimi => [...etunimi, response.data])
        setSukunimi(sukunimi => [...sukunimi, response.data])
        setEmail(email => [...email, response.data])
        setOsoite(osoite => [...osoite, response.data])
        setPostinro(postinro => [...postinro, response.data])
        setPostitmp(postitmp => [...postitmp, response.data])
        setSalasana(salasana => [...salasana, response.data])

        setAstunnus('')
        setEtunimi('')
        setSukunimi('')
        setEmail('')
        setOsoite('')
        setPostinro('')
        setPostitmp('')
        setSalasana('')
        alert('Hienoa! Asiakkuus on luotu')
      })
      .catch(error => {
        console.log(error.response ? error.response.data.error : error)
        alert("Häiriö järjestelmässä, yritä pian uudelleen!")
      })
  }*/


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