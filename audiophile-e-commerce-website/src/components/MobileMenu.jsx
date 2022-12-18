import React from 'react';
import Categories from './Categories';

export default function MobileMenu({closeMenu}) {
    return (
        <div className='toggle-bg'>
            <div className='menu'>
            <Categories closeMenu={closeMenu}/>
            </div>
        </div>
    )
}