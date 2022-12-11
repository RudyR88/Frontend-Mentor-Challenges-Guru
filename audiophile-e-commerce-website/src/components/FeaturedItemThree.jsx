import React from 'react'
import '../scss/components/FeaturedItemThree.css'

function FeaturedItemThree({productName, productLink}) {
    return (
        <section className='no-margin-container featured-three'>
            <div className='featured-three__dec' aria-hidden='true'></div>
            <div className='featured-three__content'>
                <h4 className='uppercase'>{productName}</h4>
                <a href={productLink} className='link-btn btn--txt link-btn--transp'>see product</a>
            </div>
        </section>
    )
}

export default FeaturedItemThree
