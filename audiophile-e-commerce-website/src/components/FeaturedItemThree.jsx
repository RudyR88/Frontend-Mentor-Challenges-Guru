import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/components/FeaturedItemThree.css';

export default function FeaturedItemThree({productName, productLink}) {
    return (
        <section className='no-margin-container featured-three'>
            <div className='featured-three__dec' aria-hidden='true'></div>
            <div className='featured-three__content'>
                <h4 className='uppercase'>{productName}</h4>
                <Link to={productLink} className='link-btn btn--txt link-btn--transp'>see product</Link>
            </div>
        </section>
    );
}
