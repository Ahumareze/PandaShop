import React, {FC} from 'react';
import './Item.css';

interface ItemProps{
    img: any,
    nameTag: string,
    price: number,
    onSelect: (e: any) => void 
}

const Item:FC<ItemProps> = ({img, nameTag, price, onSelect}):JSX.Element => {
    const obj = {img: img, nameTag: nameTag, price: price}
    return (
        <div className='Item' onClick={() => onSelect(obj)} >
            <div className='Item_Image' style={{backgroundImage: `url(${img})`}} ></div>
            <p className='Item_price'>{nameTag}</p>
            <p className='Item_amount'>${price}</p>
        </div>
    );
}

export default Item;