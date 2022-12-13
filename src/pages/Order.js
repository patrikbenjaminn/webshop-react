import React, {useState, useEffect} from "react";
import uuid from 'react-uuid';
import axios from "axios";

export default function Order({url, cart}){
    let sum = 0;

    return(
        <div className="ostoskori">
            <h3 className="header">Ostoskori</h3>
            <table className="table">
                <tbody>
                    {cart.map(product=>{
                        sum+=parseFloat(product.price);
                        return(
                            <tr key={uuid()}>
                            <td>{product.name}</td>
                            <td>{product.price} €</td>
                            <td></td>
                            </tr>
                            
                        )
                    })}
                    <tr key={uuid()}>
                        <td></td>
                        <td>{sum.toFixed(2)}€</td>
                        <td></td>
                    </tr>

                </tbody>
            </table>
        </div>
    )

}