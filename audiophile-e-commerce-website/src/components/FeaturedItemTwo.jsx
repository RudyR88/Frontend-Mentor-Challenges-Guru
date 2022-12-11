import React from 'react';
import '../scss/components/FeaturedItemTwo.css';

function FeaturedItemTwo({productName, productLink}) {
    return (
        <section className='no-margin-container featured-two'>
            <h4 className='uppercase'>{productName}</h4>
            <a href={productLink} className='link-btn btn--txt link-btn--transp'>see product</a>
        </section>
    )
}

export default FeaturedItemTwo;
