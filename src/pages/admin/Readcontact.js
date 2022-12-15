import '../../styles/ReadContact.css';
import React, { useEffect, useState } from "react"
   
const ReadContact = () => {
    const [palautteet, setPalautteet] = useState([])

    const fetchData = () => {
      fetch("http://localhost/webshop/php/admin/readContact.php")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setPalautteet(data)
        })
    }
  
    useEffect(() => {
      fetchData()
    }, [])

    return (

        <div className='contact-form2'>
            <h1> Saapuneet asiakaspalautteet</h1>
{palautteet.length > 0 && (
        <ul>
          {palautteet.map(palaute => (
            <li key={palaute.palauteid}>{palaute.name}{palaute.email}{palaute.timestamp}{palaute.message}</li>
          ))}
        </ul>
      )}

<a href="http://localhost:3000/admin/AdminDashboard" className='btn btn-secondary' id= "submit">Back to AdminDashboard </a>
    </div>
       
    )

}
export default ReadContact; 

