import React, {FC} from 'react';

const width = window.innerWidth

interface CartProps {
    img: any
}

const Item:FC<CartProps> = ({img}):JSX.Element => {
    return (
        <div className='CartItem' style={{width: width - 30}} >
            <div className='CartItemImg' style={{backgroundImage: `url(${img})`}} ></div>
            <div className='CartDetails'>
                <p className='CartDetailsTitle' >Gucci Scarf</p>
                <p className='CartDetailsTitle' >size: Xl</p>
                <p className='CartDetailsTitle' >$200</p>
            </div>
            <div className='CartCancleContainer'></div>
        </div>
    );
}

export default Item;