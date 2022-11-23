import React from 'react'
import '../styles/Contact.css';
import { useState } from 'react';
import axios from 'axios';


function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

 /* const url= "http://localhost/Contact.php" ;

  let fData = new FormData();
  fData.append('name', name);
  fData.append('email', email); 
  fData.append('message', message);

  axios.post(url, fData)
  .then(response=> alert(response.data))
  .catch(error=>alert(error));
*/
  return (
    <>
      <div className="contact-form">
        <div className="contact-form__header">
          <h2>Yhteydenottolomake</h2>
          <p>Täytä yhteydenottolomake, niin otamme sinuun yhteyttä mahdollisimman pian.</p>
        </div>
        <div className="contact-form__container">
          <form >
            <label htmlFor="name">Nimi </label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}
              placeholder="Etunimi, Sukunimi" required />
            <label htmlFor="email"> Sähköpostiosoite </label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com" required />
            <label htmlFor="message"> Viesti </label>
            <textarea type="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)}
              placeholder="Kirjoita tähän..." required />
            <button type="submit" value="LÄHETÄ">LÄHETÄ</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Contact;