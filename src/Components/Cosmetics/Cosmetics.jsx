import React from 'react';
import add from '../../Utilities/Calculate';

const Cosmetics = () => {

    const first = 55;
    const second = 60;
    const total = add
    return (
        <div>
            <h2>Welcome to my cosmetic store!!</h2>
            <p>Total : {total}</p>
        </div>
    );
};

export default Cosmetics;