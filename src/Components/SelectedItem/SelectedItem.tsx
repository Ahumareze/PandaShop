import React, { useState, FC } from 'react';
import './SelectedItem.css';

import img from '../../Assets/Images/img2.jpg'
import SizeSelector from './SizeSelector';
import { FiChevronLeft } from 'react-icons/fi';

interface SelectedItemProps {
    data: any,
    back: () => void
}

const SelectedItem:FC<SelectedItemProps> = ({data, back}):JSX.Element => {

    const [size, setSize] = useState();

    return (
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
                    <div className='AddToCartButton'></div>
                </div>
            </div>
        </div>
    );
}

export default SelectedItem;