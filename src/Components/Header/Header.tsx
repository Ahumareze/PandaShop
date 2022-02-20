import React, {FC, useState} from 'react';
import './Header.css';

import {FiShoppingBag, FiMenu, FiSearch} from 'react-icons/fi'

interface HeaderProps {
    props: any
}

const Header: FC<HeaderProps> = ({props}): JSX.Element => {

    const navigate = () => {
        props.history.push('/cart')
    }

    return (
        <div className='Header'>
            <div className='Hamburger_container'>
                <FiMenu  size={35} />
            </div>
            <div className='Header_search_container'>
                <div className="main_input_container">
                    <div className="search_icon">
                        <FiSearch size={24} opacity={0.5} />
                    </div>
                    <input placeholder='Search products' />
                </div>
            </div>
            <div className='Header_shoppingbag_container' onClick={() => navigate()} >
                <FiShoppingBag size={35} color='#F3D175' />
            </div>
        </div>
    );
}

export default Header;