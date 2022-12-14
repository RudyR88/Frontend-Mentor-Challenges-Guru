import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import data from '../js/data.json';
import '../scss/pages/ProductPage.css';

function ProductPage() {
    const {category, slug} = useParams();
    const item = data.filter(item => item.category === category && item.slug === slug)[0];
    const navigate = useNavigate();
    const { 
        image,
        name,
        description: desc, 
        price, 
        features, 
        includes: inc, 
        gallery,
        others
    } = item;
    const isNew = item.new;
    const {desktop, tablet, mobile} = image;
    return (
        <div className='container'>
        <button className='btn-link btn-link__back btn-link--txt' onClick={()=>navigate(-1)}>go back</button>
        <main className='product'>
            <div className='product__overview'>
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
                    <img src={mobile} className='product__overview__img'/>
                </picture>
                <div className='product__overview__info'>
                    {isNew ? <span className='overline accent uppercase'>new product</span> : ''}
                    <h2>{name}</h2>
                    <p>{desc}</p>
                    <span>$ {Intl.NumberFormat('en-US').format(price)}</span>
                    <div>
                        <div>
                            <button>-</button>
                            <span>0</span>
                            <button>+</button>
                        </div>
                        <button className='btn btn-txt btn--orange'>add to cart</button>
                    </div>
                </div>
            </div>
        </main>
        </div>
    )
}

export default ProductPage
