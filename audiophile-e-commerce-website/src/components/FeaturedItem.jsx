import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/components/FeaturedItem.css';

function FeaturedItem({decoration, productName, productDesc, productLink}) {
    return (
        <section className='no-margin-container featured'>
            <img className='decoration' src={decoration} alt='' aria-hidden='true'/>
            <div className='featured__img' aria-hidden='true'></div>
            <div className='featured__content'>
                <h1 className='uppercase'>{productName}</h1>
                <p>{productDesc}</p>
                <Link to={productLink} className='link-btn btn--txt link-btn--black'>see product</Link>
            </div>
        </section>
    );
}

export default FeaturedItem;
