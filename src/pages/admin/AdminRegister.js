import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
/* import AdminHeader from './AdminHeader'; */

const URL = 'http://localhost/webshop/php/';

  function AdminRegister({setUser}){
      const [astunnus, setAstunnus] = useState("");
      const [etunimi, setEtunimi] = useState("");
      const [Sukunimi, setSukunimi] = useState("");
      const [email, setEmail] = useState("");
      const [osoite, setOsoite] = useState("");
      const [postinro, setPostinro] = useState("");
      const [postitmp, setPostitmp] = useState("");
      /* const [Id, setId] = useState(""); */
      const [salasana, setSalasana] = useState("");
      const [user_type, setUser_type] = useState("");
      /* const [created_at, setCreated_at] = useState(""); */
    
      function register(e){
        e.preventDefault()
        const json = {astunnus,etunimi,Sukunimi,email,osoite,postinro,postitmp, salasana, user_type};
    
        axios.post(URL + "login/register.php", json, {withCredentials: true})
        .then((resp) => {
        setAstunnus(astunnus => [...astunnus, resp.data])
        setEtunimi(etunimi => [...etunimi, resp.data])
        setSukunimi(sukunimi => [...sukunimi, resp.data])
        setEmail(email => [...email, resp.data])
        setOsoite(osoite => [...osoite, resp.data])
        setPostinro(postinro => [...postinro, resp.data])
        setPostitmp(postitmp => [...postitmp, resp.data])
        setSalasana(salasana => [...salasana, resp.data])
        setUser_type(user_type => [...user_type, resp.data])
        setAstunnus('')
        setEtunimi('')
        setSukunimi('')
        setEmail('')
        setOsoite('')
        setPostinro('')
        setPostitmp('')
        setSalasana('')
        setUser_type('')
        alert(' Asiakkuus on luotu.')
        }) .catch(e=> console.log(e.message));
          console.log(json)
      
    }
    
      return (
        <>
        <div>
          <form>
            <label>
              Astunnus:
              <input type="text" onChange={e=>setAstunnus(e.target.value)}></input>
            </label>
            <label>
              Etunimi:
              <input type="text" onChange={e=>setEtunimi(e.target.value)}></input>
            </label>
            <label>
              Sukunimi:
              <input type="text" onChange={e=>setSukunimi(e.target.value)}></input>
            </label>
            <label>
              Email:
              <input type="text" onChange={e=>setEmail(e.target.value)}></input>
            </label>
            <label>
              Osoite:
              <input type="text" onChange={e=>setOsoite(e.target.value)}></input>
            </label>
            <label>
              Postinro:
              <input type="text" onChange={e=>setPostinro(e.target.value)}></input>
            </label>
            <label>
              Postitmp:
              <input type="text" onChange={e=>setPostitmp(e.target.value)}></input>
            </label>
           {/*  <label>
              Id:
              <input type="text" onChange={e=>setAstunnus(e.target.value)}></input>
            </label> */}
            <label>
              Password:
              <input type="password" onChange={e=>setSalasana(e.target.value)}></input>
            </label>            
            <label>
              User_type:
              <input type="text" onChange={e=>setUser_type(e.target.value)}></input>
            </label>
            <button type="button" onClick={register}>Register</button>
           {/*  <label>
              Created_at:
              <input type="text" onChange={e=>setAstunnus(e.target.value)}></input>
            </label> */}
          </form>
        </div>
        </>
      );
    }
  

export default AdminRegister;
