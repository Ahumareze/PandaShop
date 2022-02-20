import React, { useState } from 'react';
import './SelectedItem.css';

import img from '../../Assets/Images/img2.jpg'
import SizeSelector from './SizeSelector';

function SelectedItem() {

    const [size, setSize] = useState();

    return (
        <div className='SelectedItemPage'>
            <div className='SelectedItemTop' style={{backgroundImage: `url(${img})`}} ></div>
            <div className='SelcetedItemBottom'>
                <div className="ItemInfoContainer">
                    <p className='ItemNameTag' >Gucci T-shirt</p>
                    <p className='ItemPriceTag'>$200</p>
                    <p className='ItemSize' >Size</p>
                    <div className='SelectorContainer'>
                        <SizeSelector tag='S' active={size === 'S' ? true : false} onClick={(e) => setSize(e)} />
                        <SizeSelector tag='M' active={size === 'M' ? true : false} onClick={(e) => setSize(e)} />
                        <SizeSelector tag='L' active={size === 'L' ? true : false} onClick={(e) => setSize(e)} />
                        <SizeSelector tag='XL' active={size === 'XL' ? true : false} onClick={(e) => setSize(e)} />
                    </div>
                    <p className='ItemDescription'>Newely imported gucci shirt straight outta the carribean island.</p>
                </div>
            </div>
        </div>
    );
}

export default SelectedItem;