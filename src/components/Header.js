import React from 'react'
import Cart from "../pages/Cart";

export default function Header(props) {
    return (
        <header>
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
            <Cart />
        </header>
    );
}