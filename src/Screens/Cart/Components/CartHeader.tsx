import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';

function CartHeader() {
    return (
        <div className='CartHeader' >
            <div className='CartBox'>
                <FiChevronLeft size={30} color='#B786D9' style={{paddingLeft: 5}} />
            </div>
            <div className='CartTitle'>
                <p>Cart</p>
            </div>
            <div className='CartBox cb2'>
                <p>Clear</p>
            </div>
        </div>
    );
}

export default CartHeader;