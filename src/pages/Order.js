import React, {useState, useEffect} from "react";
import uuid from 'react-uuid';
import axios from "axios";
import { createRef } from "react";
import '../styles/order.css'

export default function Order({cart,removeFromCart,muutaMaara}){

    const url = 'http://localhost/webshop/php/';

    const [inputs,_] = useState([]);
    const [inputIndex, setInputIndex] = useState(-1);
    const[etunimi, setEtunimi] = useState('');
    const[sukunimi, setSukunimi] = useState('');
    const[osoite, setOsoite] = useState('');
    const[postinro, setPostinro] = useState('');
    const[postitmp, setPostitmp] = useState('');
    const[finished, setFinished] = useState(false);
    let sum = 0;

    useEffect(()=> {
        for (let i = 0; i<cart.length;i++) {
            inputs[i] = createRef();
        }
        },[cart.length])

    useEffect(() => {
        if (inputs.length > 0 && inputIndex > -1 && inputs[inputIndex].current !== null){
            inputs[inputIndex].current.focus();
        }
    }, [cart, inputs, inputIndex])

    function order(e){
        e.preventDefault();
    

    const json = JSON.stringify({
        etunimi: etunimi,
        sukunimi: sukunimi,
        osoite: osoite,
        postinro: postinro,
        postitmp: postitmp,
        cart: cart,

    });
    axios.post(url + 'products/tallennus.php',json,{
        headers:{
            'Accept': 'application/json',
            'Content-Type' : 'application/json'
        }
    })
    .then(() => {
        setFinished(true);
    }).catch(error =>{
        alert(error.response === undefined ? error : error.response.data.error);
    });
    }
    function changeAmount(e,tuote,index){
        muutaMaara(e.target.value,tuote);
        setInputIndex(index);
    }  
    if (finished === false){
        console.log(cart);
    return(
        <div id="ostoskori">
            <h3 className="ostoskori">Ostoskori</h3>
            <table className="table">
                <tbody>
                    {cart.map((tuote, index)=>{
                        sum+=parseFloat(tuote.hinta) * parseInt(tuote.maara);
                        return(
                            <tr key={uuid()}>
                            <td>{tuote.tuotenimi}</td>
                            <td>{tuote.hinta} €</td>
                            <td>
                            <input ref={inputs[index]} style={{width: '60px'}} value={tuote.maara} onChange={e=> changeAmount(e,tuote,index)}/>
                            </td>
                            <td><a href="#" onClick={() => removeFromCart(tuote)}>Poista tuote</a></td>
                            </tr>
                        )
                    })}
                    <tr key={uuid()}>
                        <td></td>
                        <td>{sum.toFixed(2)}€</td>
                        <td>Summa yhteensä</td>
                    </tr>

                </tbody>
            </table>
            {cart.length > 0 &&
            <>
            <h3 className="ostoskori">Asiakastiedot</h3> 
            <form onSubmit={order}>
            <div className="form-group">
                <label>Etunimi:</label>
                <input className="form-control" onChange={e=> setEtunimi(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label>Sukunimi:</label>
                    <input className="form-control" onChange={e=> setSukunimi(e.target.value)}></input>
                    </div>
                <div className="form-group">
                    <label>Osoite</label>
                    <input className="form-control" onChange={e=> setOsoite(e.target.value)}></input>
                    </div>
                 <div className="form-group">
                    <label>Postinumero</label>
                    <input className="form-control" onChange={e=> setPostinro(e.target.value)}></input>
                    </div>
                 <div className="form-group">
                    <label>Kaupunki</label>
                    <input className="form-control" onChange={e=> setPostitmp(e.target.value)}></input>
                </div>
                <br></br>
                <div className="buttons">
                    <button id="nappula" className="btn btn-primary btn-lg">Tilaa nyt!</button>
                </div>
                <br></br>
                </form>
                </>
                }
                </div>
                )
            } else{
                return (<h2 className="Kiitos">Kiitos tilauksesta!</h2>);
            }
}
