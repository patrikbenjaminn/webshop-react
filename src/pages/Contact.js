import '../styles/Contact.css';
import axios from 'axios';
import { useState } from 'react';

const URL = 'http://localhost/webshop/src/php/';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function save(e) {
    e.preventDefault()
    const json = JSON.stringify({ name: name, email: email, message: message });
    axios.post(URL + 'Contact.php', json, {
      headers: {
        'Content-Type': 'Application/json'
      }
    })

      .then((response) => {
        setName(name => [...name, response.data])
        setEmail(email => [...email, response.data])
        setMessage(message => [...message, response.data])
        setName('')
        setEmail('')
        setMessage('')
        alert('Viesti lähetetty onnistuneesti! Kiitos yhteydenotosta!')
      })
      .catch(error => {
        console.log(error.response ? error.response.data.error : error)
        alert("Häiriö järjestelmässä, yritä pian uudelleen!")
      })
  }


  return (
    <>
      <div className="contact-form">
        <div className="contact-form__header">
          <h2>Yhteydenottolomake</h2>
          Täytä yhteydenottolomake, niin olemme sinuun yhteydessä mahdollisimman pian!
        </div>
        <div className="contact-form__container">
          <form onSubmit={save}>
            <label htmlFor="name">Nimi </label>
            <input type="text" value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Etunimi, Sukunimi" required />
            <label htmlFor="email"> Sähköpostiosoite </label>
            <input type="email" value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com" required />
            <label htmlFor="message"> Viesti </label>
            <textarea type="message" value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Kirjoita tähän..." required />
            <input type="submit" value="Lähetä" />

           
          </form>

        </div>
      </div>
    </>
  );
}
export default Contact;