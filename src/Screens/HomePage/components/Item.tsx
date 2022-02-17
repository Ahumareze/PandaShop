import React from 'react';

import img from '../../../Assets/Images/img1.jpg';

function Item() {
    return (
        <div className='Home_Item' style={{backgroundImage: `uri${img}`}}  >
            
        </div>
    );
}

export default Item;