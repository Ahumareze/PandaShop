import React from 'react';
import './Checkout.css';

import CheckoutHeader from './Components/CheckoutHeader';
import CheckoutInput from './Components/CheckoutInput';

const width = window.innerWidth;

function Checkout(props: any) {
    return (
        <div className='CheckoutPage'>
            <CheckoutHeader props={props} />
            <section>
                <div className='CheckoutForm' style={{width: width - 30}}>
                    <p className='CheckoutHeader' >Details</p>
                    <CheckoutInput name='Name' />
                    <CheckoutInput name='Phone number' />
                    <CheckoutInput name='Delivery Address' />
                </div>
            </section>
        </div>
    );
}

export default Checkout;