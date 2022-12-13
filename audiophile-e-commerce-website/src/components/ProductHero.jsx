import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/components/ProductHero.css';

function ProductHero({productName, productDesc, productLink}) {
    return (
        <section className='product-hero'>
            <div className='product-hero__content container'>
                <span className='overline uppercase'>new product</span>
                <h1 className='uppercase'>{productName}</h1>
                <p>{productDesc}</p>
                <Link to={productLink} className='link-btn btn--txt link-btn--orange'>see product</Link>
            </div>
        </section>
    )
}

export default ProductHero;
