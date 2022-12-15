import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/components/RelevantItem.css';

function RelevantItem({item}) {
    const {slug, name, image} = item;
    const category = slug.split('-').slice(-1)[0];
    const urlCategory = category.endsWith('s') ? category : category+'s';
    const {mobile, tablet, desktop} = image;
    return (
        <div className='relevant'>
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
                <img src={`.${mobile}`}/>
            </picture>
            <h5>{name}</h5>
            <Link to={`/${urlCategory}/${slug}`} className='link-btn btn--txt link-btn--orange'>see product</Link>
        </div>
    )
}

export default RelevantItem;
