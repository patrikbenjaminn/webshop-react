import { useState } from "react";

export default function Products({prod, addToCart}) {
    console.log(prod);
    return (
        <div>
            <h3>Products for {prod}</h3>
                <button onClick={e => addToCart({prod})}>
                    Add {prod} to cart
                </button>
        </div>
    );
}