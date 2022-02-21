import React from 'react';
import './Checkout.css';
import CheckoutHeader from './Components/CheckoutHeader';

function Checkout(props: any) {
    return (
        <div className='CheckoutPage'>
            <CheckoutHeader />
        </div>
    );
}

export default Checkout;