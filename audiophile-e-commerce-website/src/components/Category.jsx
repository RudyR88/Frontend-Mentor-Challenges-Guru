import React from 'react'
import '../scss/components/Category.css'

function Category({productImg, productCategory, categoryLink}) {
    return (
        <a href={categoryLink} className='category__link uppercase'>
            <img className='category__link__img' src={productImg} alt='' aria-hidden='true'/>
            <h6>{productCategory}</h6>
            <span className='btn--txt category__link__txt'>shop <img className='arrow-icon' src='../assets/shared/desktop/icon-arrow-right.svg' alt='' aria-hidden='true'/></span>
        </a>
    )
}

export default Category
