import React from 'react';

import img from '../../../Assets/Images/img1.jpg';

function Item() {
    return (
        <div className='Home_Item' style={{backgroundImage: `url(${img})`, width: window.innerWidth - 30}}  >
            <div className='Home_Item_title'>
                <p>New Arrivials</p>
            </div>
        </div>
    );
}

export default Item;