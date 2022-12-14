import React, { useState } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import useCartManager from '../hooks/useCartManager';
import { v4 as uuidv4 } from 'uuid';
import Includes from '../components/Includes';
import Categories from '../components/Categories';
import About from '../components/About';
import RelevantItem from '../components/RelevantItem';
import data from '../json/data.json';
import '../scss/pages/ProductPage.css';

export default function ProductPage({category}) {
    const [count, setCount] = useState(1);
    const {slug} = useParams();
    const navigate = useNavigate();
    const {cart, addItem} = useCartManager();
    const item = data.filter(item => item.category === category && item.slug === slug)[0];
    if(!item){
        return <Navigate to='/not-found' />
    }
    const {
        id, 
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
    const {first, second, third} = gallery;
    const featureParagraphs = features.split('\n\n').map(para => <p key={uuidv4()}>{para}</p>);
    const includedComps = inc.map(info => <Includes key={uuidv4()} info={info}/>);
    const othersComps = others.map(item => <RelevantItem key={uuidv4()} item={item}/>);
    const isInCart = cart.filter(item => item.id === id).length  === 1 ? true : false;

    const addCount = () => {
        count < 100 ? setCount(prevCount => prevCount + 1) : '';
    };
    const subCount = () => {
        count > 1 ? setCount(prevCount => prevCount - 1) : '';
    };

    return (
        <>
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
                        <img src={`.${mobile}`} className='product__overview__img'/>
                    </picture>
                    <div className='product__overview__info'>
                        {isNew ? <span className='overline accent uppercase tag'>new product</span> : ''}
                        <h2>{name}</h2>
                        <p>{desc}</p>
                        <span className='price'>$ {Intl.NumberFormat('en-US').format(price)}</span>
                        {
                            isInCart ?
                            <span className='link-btn btn--txt link-btn--orange disabled'>Added to cart</span>
                            :
                            <>
                                <div className='controls'>
                                    <div className='btn--txt'>
                                        <button className='control-btn' onClick={subCount} disabled={count === 1 ? true : false}>-</button>
                                        <input 
                                            type='number' 
                                            className='count' 
                                            aria-label='item quantity' 
                                            value={count} 
                                            onChange={e => {setCount(e.target.valueAsNumber > 100 ? 100 : e.target.valueAsNumber)}}
                                            min='1'
                                            max='100'
                                            />
                                        <button className='control-btn' onClick={addCount}>+</button>
                                    </div>
                                    <button className='link-btn btn--txt link-btn--orange' 
                                        onClick={()=>{addItem(id, name, price, count)}}
                                    >
                                        add to cart
                                    </button>
                                </div>
                            </>
                        }
                    </div>
                </div>
                <div className='product__about'>
                    <div className='product__about__features'>
                        <h3 className='uppercase'>features</h3>
                        {featureParagraphs}
                    </div>
                    <div className='product__about__included'>
                        <h3 className='uppercase'>in the box</h3>
                        <div>
                            {includedComps}
                        </div>
                    </div>
                </div>
                <div className='product__imgs' aria-hidden='true'>
                    <div className='product__imgs__row-one'>
                    <picture aria-hidden='true'>
                        <source
                            media='(min-width: 1100px)'
                            srcSet={`.${first.desktop}`}
                        />
                        <source
                            media='(min-width: 700px)'
                            srcSet={`.${first.tablet}`}
                        />
                        <source
                            media='(min-width: 375px)'
                            srcSet={`.${first.mobile}`}
                        />
                        <img src={`.${first.mobile}`}/>
                    </picture>
                    <picture aria-hidden='true'>
                        <source
                            media='(min-width: 1100px)'
                            srcSet={`.${second.desktop}`}
                        />
                        <source
                            media='(min-width: 700px)'
                            srcSet={`.${second.tablet}`}
                        />
                        <source
                            media='(min-width: 375px)'
                            srcSet={`.${second.mobile}`}
                        />
                        <img src={`.${second.mobile}`}/>
                    </picture>
                    </div>
                    <picture aria-hidden='true'>
                        <source
                            media='(min-width: 1100px)'
                            srcSet={`.${third.desktop}`}
                        />
                        <source
                            media='(min-width: 700px)'
                            srcSet={`.${third.tablet}`}
                        />
                        <source
                            media='(min-width: 375px)'
                            srcSet={`.${third.mobile}`}
                        />
                        <img src={`.${second.mobile}`} className='third'/>
                    </picture>
                </div>
                <div className='product__relevant'>
                    <h3 className='uppercase'>you may also like</h3>
                    <div className='product__relevant-items'>
                        {othersComps}
                    </div>
                </div>
            </main>
            <Categories />
            <About />
        </div>
        </>
    );
}