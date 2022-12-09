import React from 'react';
import Categories from '../components/Categories';
import Navbar from '../components/Navbar';
import ProductHero from '../components/ProductHero';
import '../scss/pages/Home.css';

function Home() {
    return (
        <div className='home'>
            <Navbar />
            <main role='main'>
                <ProductHero
                    productName = 'xx99 mark ii headphones'
                    productDesc = {`Experience natural, lifelike audio 
                    and exceptional build quality made for the passionate music enthusiast.`}
                />
                <Categories />
            </main>
        </div>   
    );
}

export default Home;
