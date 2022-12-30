import {useState, useEffect} from 'react';

export default function useCartManager(){
    const cartItems = JSON.parse(localStorage.getItem('cart'));
    const [cart, setCart] = cartItems ? useState(cartItems) : useState([]);

    useEffect(()=>{
      localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const addItem = (id, name, price, quantity) => {
      const hasItem = cart.filter(item => item.name === name).length >= 1 ? true : false;
      if(!hasItem){
        name = name.split(' ').slice(0, -1).join(' ').replace('Mark', 'MK');
        let icon = '';
        switch(name){
            case 'XX59': 
              icon = '../assets/cart/image-xx59-headphones.jpg';
              break;
            case 'XX99 MK I': 
              icon = '../assets/cart/image-xx99-mark-one-headphones.jpg';
              break;
            case 'XX99 MK II': 
              icon = '../assets/cart/image-xx99-mark-two-headphones.jpg';
              break;
            case 'YX1 Wireless': 
              icon = '../assets/cart/image-yx1-earphones.jpg';
              break;
            case 'ZX7': 
              icon = '../assets/cart/image-zx7-speaker.jpg';
              break;
            case 'ZX9': 
              icon = '../assets/cart/image-zx9-speaker.jpg';
              break;
            default: '';
        }
        setCart([...cart, {id, name, price, quantity, icon}])
      }
    }

    const removeItem = id => {
      setCart(cart.filter(item => item.id !== id))
    }

    const clearCart = () => {
      setCart([])
    }

    const updateQuantity = (id, quantity) => {
      setCart(cart.map(item => item.id === id ? (
        {...item, quantity: quantity}
      ): item));
    }

    return {cart, setCart, addItem, removeItem, clearCart, updateQuantity};
}