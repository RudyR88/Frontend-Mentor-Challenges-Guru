import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import Category from './Category';
import '../scss/components/Categories.css';

export default function Categories({closeMenu}) {
    return (
        <section className='categories no-margin-container'>
            <Category
                key={uuidv4()}
                productImg='../assets/shared/desktop/image-category-thumbnail-headphones.png'
                productCategory='headphones'
                categoryLink='/headphones'
                closeMenu={closeMenu}
            />
            <Category
                key={uuidv4()}
                productImg='../assets/shared/desktop/image-category-thumbnail-speakers.png'
                productCategory='speakers'
                categoryLink='/speakers'
                closeMenu={closeMenu}
            />
            <Category
                key={uuidv4()}
                productImg='../assets/shared/desktop/image-category-thumbnail-earphones.png'
                productCategory='earphones'
                categoryLink='/earphones'
                closeMenu={closeMenu}
            />
        </section>
    );
}