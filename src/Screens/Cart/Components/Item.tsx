import React, {FC} from 'react';
import { FiXCircle } from 'react-icons/fi';

const width = window.innerWidth

interface CartProps {
    img: any,
    nameTag: any,
    price: any,
    size: any,
    value: any
}

const Item:FC<CartProps> = ({img, nameTag, price, size, value}):JSX.Element => {
    return (
        <div className='CartItem' style={{width: width - 30}} >
            <div className='CartItemImg' style={{backgroundImage: `url(${img})`}} ></div>
            <div className='CartDetails'>
                <p className='CartDetailsTitle' >{nameTag}</p>
                <p className='CartDetailsTitle' >size: {size}</p>
                <p className='CartDetailsTitle' >${price}</p>
            </div>
            <div className='CartCancleContainer'>
                <FiXCircle size={22} color='#fa8072' />
            </div>
        </div>
    );
}

export default Item;