import React, {FC} from 'react';

interface ItemProps {
    img: any,
    title: string,
    onSelect: (e: string) => void
}

const Item:FC<ItemProps> = ({img, title, onSelect}):JSX.Element => {
    return (
        <div className='Home_Item' style={{backgroundImage: `url(${img})`, width: window.innerWidth - 30}} onClick={() => onSelect(title)}  >
            <div className='Home_Item_title'>
                <p>{title}</p>
            </div>
        </div>
    );
}

export default Item;