import React from 'react';
import { FiHome, FiShoppingBag, FiUser } from 'react-icons/fi';
import './NavBar.css';

function NavBar() {
    return (
        <div className='NavBar'>
            <div className='NavBar_box'>
                <FiHome size={35} color='#B786D9' />
            </div>
            <div className="NavBar_box">
                <FiShoppingBag size={30} opacity={0.5} />
            </div>
            <div className="NavBar_box">
                <FiUser size={30} opacity={0.5} />
            </div>
        </div>
    );
}

export default NavBar;