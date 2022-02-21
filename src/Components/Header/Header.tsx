import React, {FC, useEffect, useState} from 'react';
import './Header.css';

import {FiShoppingBag, FiMenu, FiSearch} from 'react-icons/fi'

interface HeaderProps {
    prop: any,
    num: any
}

const Header: FC<HeaderProps> = ({prop, num}): JSX.Element => {
    const [newNum, setNum] = useState(num);

    useEffect(() => {
        setNum(num.length)
    }, [num])

    const navigate = () => {
        prop.history.push('/cart')
    }

    return (
        <div className='Header'>
            <div className='Hamburger_container'>
                <FiMenu  size={35} />
            </div>
            <div className='Header_search_container'>
                {/* <div className="main_input_container">
                    <div className="search_icon">
                        <FiSearch size={24} opacity={0.5} />
                    </div>
                    <input placeholder='Search products' />
                </div> */}
                Panda Fashion
            </div>
            <div className='Header_shoppingbag_container' onClick={() => navigate()} >
                <div className='CartNum'>
                    <FiShoppingBag size={35} color='#B786D9' />
                    {/* {newNum !== 0 && <p className='CartNumber'>{newNum}</p> } */}
                </div>
            </div>
        </div>
    );
}

export default Header;