import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';

function CheckoutHeader(props: any) {
    const navigate = () => {
        props.props.history.push('/')
    }

    return (
        <div className='CartHeader' >
            <div className='CartBox' onClick={() => navigate()} >
                <FiChevronLeft size={30} color='#B786D9' style={{paddingLeft: 5}} />
            </div>
            <div className='CartTitle'>
                <p>Cart</p>
            </div>
            <div className='CartBox cb2' onClick={() => props.clear()} >
                <p>Clear</p>
            </div>
        </div>
    );
}

export default CheckoutHeader;