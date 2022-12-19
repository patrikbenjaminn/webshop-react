import '../styles/Signup.css';
import axios from 'axios';
import { useState } from 'react';

const URL = 'http://localhost/webshop/php/';

function Signup() {
  const [astunnus, setAstunnus] = useState('');
  const [etunimi, setEtunimi] = useState('');
  const [sukunimi, setSukunimi] = useState('');
  const [email, setEmail] = useState('');
  const [osoite, setOsoite] = useState('');
  const [postinro, setPostinro] = useState('');
  const [postitmp, setPostitmp] = useState('');
  const [salasana, setSalasana] = useState('');

  function save(e) {
   
   e.preventDefault()
    const json = JSON.stringify({astunnus: astunnus, etunimi: etunimi, sukunimi: sukunimi, email: email, osoite: osoite, postinro: postinro, postitmp: postitmp, salasana: salasana });
    axios.post(URL + 'createaccount.php', json, {
      headers: {
        'Content-Type': 'Application/json'
      }
    })
  
      .then((response) => {
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
        alert('Hienoa! Asiakkuus on luotu.')
      })
      .catch(error => {
        console.log(error.response ? error.response.data.error : error)
        alert("Häiriö järjestelmässä, yritä pian uudelleen!")
      })
  }


  return (
    <>
      <div className="regform">
        <div className="regform__header">
          <h8>Rekisteröitymislomake.</h8>
        </div>
        <div className="regform__container">
          <form onSubmit={save}>
            <label htmlFor="astunnus">Astunnus </label>
            <input type="texti" value={astunnus}
              onChange={(e) => setAstunnus(e.target.value)}
              placeholder="astunnus" required />

            <label htmlFor="etunimi">Etunimi </label>
            <input type="texti" value={etunimi}
              onChange={(e) => setEtunimi(e.target.value)}
              placeholder="etunimi" required />

            <label htmlFor="sukunimi">Sukunimi </label>
            <input type="texti" value={sukunimi}
              onChange={(e) => setSukunimi(e.target.value)}
              placeholder="sukunimi" required />

            <label htmlFor="email"> Sähköpostiosoite </label>
            <input type="emaili" value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com" required />

            <label htmlFor="osoite">Osoite </label>
            <input type="texti" value={osoite}
              onChange={(e) => setOsoite(e.target.value)}
              placeholder="osoite" required />

            <label htmlFor="postinro">Postinro </label>
            <input type="texti" value={postinro}
              onChange={(e) => setPostinro(e.target.value)}
              placeholder="postinro" required />

            <label htmlFor="postitmp">Postitmp </label>
            <input type="texti" value={postitmp}
              onChange={(e) => setPostitmp(e.target.value)}
              placeholder="postitmp" required />

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
export default Signup;
