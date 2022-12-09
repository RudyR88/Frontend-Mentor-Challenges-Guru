import React from 'react';
import '../scss/components/ProductHero.css';

function ProductHero({productName, productDesc}) {
    return (
        <section className='product-hero'>
            <div className='product-hero__content container'>
                <span className='overline uppercase'>new product</span>
                <h1 className='uppercase'>{productName}</h1>
                <p>{productDesc}</p>
                <button className='btn btn-txt btn-orange'>see product</button>
            </div>
        </section>
    )
}

export default ProductHero;
