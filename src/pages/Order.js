import React, {useState, useEffect} from "react";
import uuid from 'react-uuid';
import axios from "axios";


export default function Order({cart,removeFromCart}){
    let sum = 0;

    return(
        <div id="ostoskori">
            <h3 className="ostoskori">Ostoskori</h3>
            <table className="table">
                <tbody>
                    {cart.map(tuote=>{
                        sum+=parseFloat(tuote.hinta);
                        return(
                            <tr key={uuid()}>
                            <td>{tuote.tuotenimi}</td>
                            <td>{tuote.hinta} €</td>
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
        </div>
    )

}