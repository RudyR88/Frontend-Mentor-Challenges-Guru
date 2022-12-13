import React from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import data from '../js/data.json';
import Categories from '../components/Categories';
import About from '../components/About';
import NotFound from './NotFound';
import NewProduct from '../components/NewProduct';
import Product from '../components/Product';
import '../scss/pages/CategoryPage.css';

export default function CategoryPage() {
    const {category} = useParams();
    const productCategories = new Set(data.map(item => item.category));
    const validCategory = productCategories.has(category);
    let itemComps;

    if(validCategory){
        const items = data.filter(item => item.category === category).reverse();
        itemComps = items.map(
            item => item.new ? <NewProduct key={uuidv4()} item={item} category={category} /> 
            : <Product key={uuidv4()} item={item} category={category}/>);
    }
  return (
    <>
        {
            validCategory ?
            <>
                <main className='category'>
                    <h2 className='category__title uppercase'>{category}</h2>
                    <div className='category__items container'>
                        {itemComps}
                    </div>
                </main>
                <Categories />
                <About />
            </> 
            :
            <NotFound />
        }
    </>
  )
}
