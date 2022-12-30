import React, {useState, useEffect} from 'react';
import useCartManager from '../hooks/useCartManager';
import '../scss/components/CartItem.css';

export default function CartItem({item}) {
    const {id, name, price, icon} = item;
    const {updateQuantity, removeItem} = useCartManager();
    const [quantity, setQuantity] = useState(item.quantity);

    const incQuantity = () => {
        quantity < 100 ? setQuantity(prevQ => prevQ + 1) : '';
    }

    const decQuantity = () => {
        quantity > 0 ? setQuantity(prevQ => prevQ - 1) : '';
    }

    useEffect(()=>{
        updateQuantity(id, quantity)
        if(quantity === 0){
            removeItem(id);
        }
    }, [quantity])

    return (
        <div className='cart-item'>
            <div className='cart-item__left'>
                <img src={icon} alt='' aria-hidden='true'/>
                <div className='cart-item__left__info'>
                    <h6>{name}</h6>
                    <span>$ {Intl.NumberFormat('en-US').format(price)}</span>
                </div>
            </div>
            <div className='cart-item__right'>
            <div className='btn--txt'>
                <button className='control-btn' onClick={()=>{decQuantity()}}>-</button>
                <input 
                    type='number' 
                    className='count' 
                    aria-label='item quantity' 
                    value={quantity}
                    onChange={e => {setQuantity(e.target.valueAsNumber > 100 ? 100 : e.target.valueAsNumber)}}
                    min='1'
                    max='100'
                    />
                <button className='control-btn' onClick={()=>{incQuantity()}}>+</button>
            </div>
            </div>
        </div>       
    )
}
