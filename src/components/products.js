import { useState } from "react";

export default function Products({url, addToCart}) {
    console.log(url);
    return (
        <div>
            <h3>Products for {url}</h3>
                <button onClick={e => addToCart({url})}>
                    Add {url} to cart
                </button>
        </div>
    );
}