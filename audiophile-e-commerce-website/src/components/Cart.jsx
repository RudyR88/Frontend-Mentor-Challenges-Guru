import React from 'react';
import { Link } from 'react-router-dom';
import useCartManager from '../hooks/useCartManager';
import CartItem from './CartItem';
import { v4 as uuidv4 } from 'uuid';
import '../scss/components/Cart.css';

export default function Cart() {
    const {cart, clearCart} = useCartManager();
    const cartItems = cart.map(item => <CartItem key={uuidv4()} item={item}/>)
    const cartTotal = cart.map(item => item.price * item.quantity).reduce((acc, cur)=> acc + cur, 0);

    return (
        <div className='toggle-bg'>
            <div className='cart-menu'>
                <div className='cart-menu__head'>
                    <span className='cart-title uppercase'>cart ({cart.length})</span>
                    <button className='btn-link btn-link__back btn-link--txt remove-txt' onClick={()=>{clearCart()}}>Remove all</button>
                </div>
                <div className='cart-menu__items'>
                    {cartItems}
                </div>
                <div className='cart-menu__total'>
                    <span className='uppercase'>total</span>
                    <h6>$ {Intl.NumberFormat('en-US').format(cartTotal)}</h6>
                </div>
                <Link to={'/checkout'} className={`link-btn btn--txt link-btn--orange checkout`}>checkout</Link>
            </div>
        </div>
    )
}
