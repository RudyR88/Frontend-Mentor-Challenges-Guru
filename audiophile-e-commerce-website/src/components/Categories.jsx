import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import Category from './Category';
import '../scss/components/Categories.css';

export default function Categories() {
    return (
        <section className='categories no-margin-container'>
            <Category
                key={uuidv4()}
                productImg='../assets/shared/desktop/image-category-thumbnail-headphones.png'
                productCategory='headphones'
                categoryLink='/headphones' 
            />
            <Category
                key={uuidv4()}
                productImg='../assets/shared/desktop/image-category-thumbnail-speakers.png'
                productCategory='speakers'
                categoryLink='/speakers' 
            />
            <Category
                key={uuidv4()}
                productImg='../assets/shared/desktop/image-category-thumbnail-earphones.png'
                productCategory='earphones'
                categoryLink='/earphones' 
            />
        </section>
    );
}