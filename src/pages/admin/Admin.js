import React from 'react'
import axios from 'axios';
import AdminDashboard from './AdminDashboard';
import { useState, useEffect } from 'react';




const URL = 'http://localhost/webshop/php/';

export default function Admin() {

  const [loggedUser, setLoggedUser] = useState(null);
  const [errorText, setErrorText] = useState("");

  
  useEffect(()=>{
    axios.post(URL+"login/login.php", {}, {withCredentials:true} )
      .then(resp => setLoggedUser(resp.data))
      .catch(e => console.log(e.message));
  }, []);

  function logout(){
    axios.post(URL+"login/logout.php", {}, {withCredentials:true} )
      .then(resp => setLoggedUser(null))
      .catch(e => console.log(e.message));
  }

  return (
    <div>
      {loggedUser && <button type="button" onClick={logout}>Logout</button>}
      {loggedUser ? 
        <AdminDashboard astunnus={loggedUser}/> : 
        <Login setLoggedUser={setLoggedUser} setError={setErrorText}/>
      }
      {!loggedUser && <h3 style={{color:'red'}}>{errorText}</h3>}
    </div>
  );
}

function Login({setLoggedUser, setError}){
  const [astunnus, setAstunnus] = useState("");
  const [salasana, setSalasana] = useState("");

  function logIn(){
    const formData = new FormData();
    formData.append("astunnus", astunnus);
    formData.append("salasana", salasana);

    axios.post(URL+"login/login.php", formData,)// {withCredentials:true} )
      .then(resp => {
        setLoggedUser(resp.data);
        setError("");
      })
      .catch(e=> setError(e.response.data));
  }  
  return (
    <form>
      <label>astunnus:</label>
      <input type="text" value={astunnus} onChange={e=>setAstunnus(e.target.value)}/>
      <label>Salasana:</label>
      <input type="salasana" value={salasana} onChange={e=>setSalasana(e.target.value)}/>
      <button type="button" onClick={logIn}>Kirjaudu sisään</button>
    </form>
  )
}

function AdminRegister({setUser}){
  const [astunnus, setAstunnus] = useState("");
  const [etunimi, setEtunimi] = useState("");
  const [Sukunimi, setSukunimi] = useState("");
  const [email, setEmail] = useState("");
  const [osoite, setOsoite] = useState("");
  const [postinro, setPostinro] = useState("");
  const [postitmp, setPostitmp] = useState("");
  const [Id, setId] = useState("");
  const [salasana, setSalasana] = useState("");
  const [user_type, setUser_type] = useState("");
  const [created_at, setCreated_at] = useState("");

  function register(e){

    const json = {astunnus,etunimi,Sukunimi,email,osoite,postinro,postitmp,Id, salasana, user_type,created_at};

    axios.post(URL+"login/register.php",  json, {withCredentials: true})
      .then(resp => setUser(astunnus))
      .catch(e=> console.log(e.message));
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
        <button type="button" onClick={register}>Register</button>
        <label>
          User_type:
          <input type="text" onChange={e=>setUser_type(e.target.value)}></input>
        </label>
       {/*  <label>
          Created_at:
          <input type="text" onChange={e=>setAstunnus(e.target.value)}></input>
        </label> */}
      </form>
    </div>
    </>
  )
}
