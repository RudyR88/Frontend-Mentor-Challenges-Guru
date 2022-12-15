import React from 'react';
import '../scss/components/Includes.css';

export default function Includes({info}) {
    const {quantity, item} = info;
    return (
        <div className='includes'>
            <span><span className='accent quant'>{quantity}x</span>{item}</span>
        </div>
    );
}
