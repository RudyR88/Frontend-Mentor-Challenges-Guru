import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/components/Product.css';

export default function Product({item, category}) {
    const {name, description, slug, categoryImage} = item;
    const {mobile, tablet, desktop} = categoryImage;
    return (
        <section className='item'>
        <picture aria-hidden='true'>
           <source
            media='(min-width: 1100px)'
            srcSet={`.${desktop}`}
           />
           <source
            media='(min-width: 700px)'
            srcSet={`.${tablet}`}
           />
           <source
            media='(min-width: 375px)'
            srcSet={`.${mobile}`}
           />
          <img src={`.${mobile}`} className='item__preview'/>
        </picture>
        <div className='item__content'>
            <h2>{name}</h2>
            <p>{description}</p>
            <Link to={`/${category}/${slug}`} className='link-btn btn--txt link-btn--orange'>see product</Link>
        </div>
    </section>
    );
}
