import React from 'react';
import useCartManager from '../hooks/useCartManager';
import '../scss/components/Cart.css';

export default function Cart() {
    const {cart, clearCart} = useCartManager();
    return (
        <div className='toggle-bg'>
            <div className='cart-menu'>
                <div className='cart-menu__head'>
                    <span className='cart-title uppercase'>cart ({cart.length})</span>
                    <button className='btn-link btn-link__back btn-link--txt remove-txt' onClick={()=>{clearCart()}}>Remove all</button>
                </div>
            </div>
        </div>
    )
}
