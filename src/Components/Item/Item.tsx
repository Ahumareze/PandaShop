import React, {FC} from 'react';
import './Item.css';

interface ItemProps{
    img: any,
    nameTag: string,
    price: number
}

const Item:FC<ItemProps> = ({img, nameTag, price}):JSX.Element => {
    return (
        <div className='Item'>
            <div className='Item_Image' style={{backgroundImage: `url(${img})`}} ></div>
            <p className='Item_price'>{nameTag}</p>
            <p className='Item_amount'>${price}</p>
        </div>
    );
}

export default Item;