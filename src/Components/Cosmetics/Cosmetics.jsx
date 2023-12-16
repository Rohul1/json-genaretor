import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';


const Cosmetics = () => {
const cosmetics = [
    {id : 1, name : "alta", price : 100},
    {id : 2, name : "curi", price : 200},
    {id : 3, name : "nak ful", price : 300},
    {id : 4, name : "tip", price : 400}
]
    
    return (
        <div>
            <h2>Welcome to my cosmetic store!!</h2>
            {
                cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id}></Cosmetic>)
            }
         
        </div>
    );
};

export default Cosmetics;