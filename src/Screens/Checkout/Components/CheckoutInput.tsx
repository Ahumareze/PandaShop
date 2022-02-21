import React from 'react';

const width = window.innerWidth

function CheckoutInput() {
    return (
        <div className='CheckoutInput' style={{width: width - 60}} >
            <p>Name</p>
            <input />
        </div>
    );
}

export default CheckoutInput;