import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import Navlinks from './Navlinks';
import '../scss/components/Navbar.css';

export default function Navbar({toggleMenu, toggleCart}) {
    
    return (
        <header>
            <nav className='nav container flex-between'>
                <div className='nav-left flex-between'>
                    <img onClick={toggleMenu} className='mobile-menu' src='../assets/shared/tablet/icon-hamburger.svg' alt='mobile menu'/>
                    <Link className='logo'to='/'><img src='../assets/shared/desktop/logo.svg' alt='audiophile'/></Link>
                    <Navlinks />
                </div>
                <img onClick={toggleCart} tabIndex={0} className='cart' src='../assets/shared/desktop/icon-cart.svg' alt='cart'/>
            </nav>
            <hr />
        </header>
    );
}
