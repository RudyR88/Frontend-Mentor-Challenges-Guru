import React from 'react';
import Navlinks from './Navlinks';
import '../scss/components/Navbar.css';

function Navbar() {
    return (
        <header>
            <nav className='nav container flex-between'>
                <div className='nav-left flex-between'>
                    <img className='mobile-menu' src='../assets/shared/tablet/icon-hamburger.svg' alt='mobile menu'/>
                    <a className='logo' href={'/'}><img src='../assets/shared/desktop/logo.svg' alt='audiophile'/></a>
                    <Navlinks />
                </div>
                <img className='cart' src='../assets/shared/desktop/icon-cart.svg' alt='cart'/>
            </nav>
            <hr />
        </header>
    );
}

export default Navbar;
