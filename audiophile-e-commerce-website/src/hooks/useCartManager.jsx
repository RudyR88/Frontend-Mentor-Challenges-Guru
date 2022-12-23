import {useState, useEffect} from 'react';

export default function useCartManager(){
    const cartItems = JSON.parse(localStorage.getItem('cart'));
    const [cart, setCart] = cartItems ? useState(cartItems) : useState([]);

    useEffect(()=>{
      localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const addItem = (name, price, quantity) => {
      const hasItem = cart.filter(item => item.name === name).length >= 1 ? true : false;
      if(!hasItem){
        setCart([...cart, {name, price, quantity, total: price * quantity}])
      }
    }
    const clearCart = () => {
      setCart([])
    }

    return {cart, addItem, clearCart};
}