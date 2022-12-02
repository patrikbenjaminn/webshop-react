import React from 'react'
import '../styles/Signup.css'

export default function Signup() {
  return (
    <>
       
    <h2> Rekisteröidy </h2>
    <form method="post" action="createaccount.php">
        <input type="text" name="astunnus" className="form-control" placeholder="astunnus"/>
        <input type="text" name="etunimi" className="form-control" placeholder="etunimi"/>
        <input type="text" name="sukunimi" className="form-control" placeholder="sukunimi"/>
        <input type="text" name="email" className="form-control" placeholder="email"/>
        <input type="text" name="osoite" className="form-control" placeholder="osoite"/>
        <input type="text" name="postinro" className="form-control" placeholder="postinro"/>
        <input type="text" name="postitmp" className="form-control" placeholder="postitmp"/>        
        <input type="" name="salasana" className="form-control" placeholder="salasana"/>
        <input type="submit" value="Register"/>
    </form>
    
    </>
  )
}
