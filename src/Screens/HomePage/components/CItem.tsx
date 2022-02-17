import React from 'react';

import icon from '../../../Assets/Icons/dress.png';

function CItem() {
    return (
        <div className='Collection_Item'>
            <div className='Collection_Item_logo'>
                <img src={icon} />
            </div>
            <p>Dress</p>
        </div>
    );
}

export default CItem;