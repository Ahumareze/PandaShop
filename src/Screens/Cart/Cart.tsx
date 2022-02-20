import React from 'react';
import './Cart.css';

import img from '../../Assets/Images/img3.jpg';

//Imported Components
import CartHeader from './Components/CartHeader';
import Item from './Components/Item';

function Cart() {
    return (
        <div className='CartPage'>
            <CartHeader />
            <section>
                <Item img={img} />
            </section>
        </div>
    );
}

export default Cart;