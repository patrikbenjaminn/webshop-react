import '../../styles/Contact.css';
import React, { useEffect, useState } from "react"


    
const ReadContact = () => {
    const [palautteet, setPalautteet] = useState([])

    const fetchData = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
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

        <div>
{palautteet.length > 0 && (
        <ul>
          {palautteet.map(palaute => (
            <li key={palaute.palauteid}>{palaute.name}{palaute.email}{palaute.timestamp}{palaute.message}</li>
          ))}
        </ul>
      )}
    </div>
       
    )

}
export default ReadContact; 

