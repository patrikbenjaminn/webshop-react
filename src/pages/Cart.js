import React from 'react';
import { Link } from 'react-router-dom';

export default function Cart({cart}) {
    return (
      <Link to="./Order">
        <span style={{color: '#fef'}}>{cart.length}</span>
         <i class="bi bi-cart"></i>
        
      </Link>
    );
}