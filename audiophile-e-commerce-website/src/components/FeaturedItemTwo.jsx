import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/components/FeaturedItemTwo.css';

function FeaturedItemTwo({productName, productLink}) {
    return (
        <section className='no-margin-container featured-two'>
            <h4 className='uppercase'>{productName}</h4>
            <Link to={productLink} className='link-btn btn--txt link-btn--transp'>see product</Link>
        </section>
    )
}

export default FeaturedItemTwo;
