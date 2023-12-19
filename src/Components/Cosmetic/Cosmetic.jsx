import React from 'react';
import './Cosmetic.css'
import { addToDb } from '../../Utilities/Fakedb';

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;

    const addToCart = (id) =>{
        addToDb(id);
    }
    const addToCartWithParam = () => addToCart(id)
    return (
        <div className='product'>
            <h2 className='bbbb'>Buy this: {name} </h2>
            <p>Only for: ${price}</p>
            <p><small>Id: {id}</small></p>
            <button onClick={addToCartWithParam}>Add to cart</button>
            
        </div>
    );
};

export default Cosmetic;