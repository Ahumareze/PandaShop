import React, { useState, FC } from 'react';
import './SelectedItem.css';

import img from '../../Assets/Images/img2.jpg'
import SizeSelector from './SizeSelector';
import { FiChevronLeft, FiShoppingBag } from 'react-icons/fi';
import { RiCheckboxCircleLine } from 'react-icons/ri';

interface SelectedItemProps {
    data: any,
    cart: any,
    back: () => void,
    setCart: (e: any) => void
}

const SelectedItem:FC<SelectedItemProps> = ({data, back, cart, setCart}):JSX.Element => {
    const [size, setSize] = useState('~');
    const [alert, setAlert] = useState(false);
    const [itemData, setItemData] = useState(data);

    const addToCheckout = () => {
        const itemData = {
            ...data,
            size: size
        };
        const newArr = [...cart, itemData];
        setCart(newArr);
        localStorage.setItem('@pandaShop', JSON.stringify(newArr));
        setAlert(true);
    }

    const alertDiv = (
        <div className='preCartAlertDiv' onClick={() => setAlert(false)} >
            <div className='PreCartAlert'>
                <RiCheckboxCircleLine size={40} color='#B786D9' />
                <p>Item added to cart</p>
            </div>
        </div>
    )

    return (
        <>
        <div className='SelectedItemPage'>
            <div className='SelectedItemTop' style={{backgroundImage: `url(${data.img})`}} >
                <div className='SelectedItemBack' onClick={() => back()} >
                    <FiChevronLeft size={30} color={'#fff'} />
                </div>
            </div>
            <div className='SelcetedItemBottom'>
                <div className="ItemInfoContainer">
                    <p className='ItemNameTag' >{data.nameTag}</p>
                    <p className='ItemPriceTag'>${data.price}</p>
                    <p className='ItemSize' >Size</p>
                    <div className='SelectorContainer'>
                        <SizeSelector tag='S' active={size === 'S' ? true : false} onClick={(e) => setSize(e)} />
                        <SizeSelector tag='M' active={size === 'M' ? true : false} onClick={(e) => setSize(e)} />
                        <SizeSelector tag='L' active={size === 'L' ? true : false} onClick={(e) => setSize(e)} />
                        <SizeSelector tag='XL' active={size === 'XL' ? true : false} onClick={(e) => setSize(e)} />
                    </div>
                    <p className='ItemDescription'>Newely imported gucci shirt straight outta the carribean island.</p>
                </div>
                <div className='SelectedItemBottom' >
                    <div className='AddToCartButton' onClick={() => addToCheckout()} >
                        <p>Add to Cart</p>
                        <FiShoppingBag size={20} color='#fff' />
                    </div>
                </div>
            </div>
        </div>
        {alert && alertDiv}
        </>
    );
}

export default SelectedItem;