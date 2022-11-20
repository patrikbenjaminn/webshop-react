/* import React from 'react'
import '../styles/Contact.css';
import { useState } from 'react';


 function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(''); 


    return (
        <>
            <div className="contact-form">
                <div className="contact-form__header">
                    <h2>Yhteydenottolomake</h2>
                    <p>Voit lähettää meille palautetta. Olemme yhteydessä viimeistään seuraavana arkipäivänä.</p>
                </div>
                <div className="contact-form__container">
                
                <form >

                    <label htmlFor="name">Nimi </label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}
                        placeholder="Etunimi, Sukunimi" required />


                    <label htmlFor="email"> Sähköpostiosoite </label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
                        placeholder="joku@example.com" required />

                    <label htmlFor="message"> Viesti </label>
                    <textarea type="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)}
                        placeholder="Voit kirjoittaa palautetta tähän..." required />

                    <button type="submit">LÄHETÄ</button>
                </form>
                </div>
            </div>

        </>
    );
}
export default Contact; */