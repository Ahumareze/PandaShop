import React, { useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import './Checkout.css';

import CheckoutHeader from './Components/CheckoutHeader';
import CheckoutInput from './Components/CheckoutInput';

const width = window.innerWidth;

function Checkout(props: any) {
    const [alert, setAlert] = useState(false);

    const view = (
        <div className='CheckoutAlertDiv'>
            <div className="CheckoutAlert">
                <p>Please confirm delivery</p>
                <div className='AlertButtons'></div>
            </div>
        </div>
    )

    return (
        <>
            <div className='CheckoutPage'>
                <CheckoutHeader props={props} />
                <section>
                    <div className='CheckoutForm' style={{width: width - 30}}>
                        <p className='CheckoutHeader' >Details</p>
                        <CheckoutInput name='Name' />
                        <CheckoutInput name='Phone number' />
                        <CheckoutInput name='Delivery Address' />
                        <div className='PayOnDeliveryDiv'>
                            <p>Pay on delivery ($300) </p>  
                            <FiCheck size={20} color='salmon' />
                        </div>
                        <button style={{width: width - 60}} >Request Delivery</button>
                    </div>
                </section>
            </div>
            {view}
        </>
    );
}

export default Checkout;