import React from 'react';
import Categories from '../components/Categories';
import Navbar from '../components/Navbar';
import ProductHero from '../components/ProductHero';
import FeaturedItem from '../components/FeaturedItem';
import '../scss/pages/Home.css';
import FeaturedItemTwo from '../components/FeaturedItemTwo';

function Home() {
    return (
        <div className='home'>
            <Navbar />
            <main role='main'>
                <ProductHero
                    productName = 'xx99 mark ii headphones'
                    productDesc = {`Experience natural, lifelike audio 
                    and exceptional build quality made for the passionate music enthusiast.`}
                    productLink = '/headphones/xx99-mark-ii'
                />
                <Categories />
                <FeaturedItem
                    decoration = '../assets/home/desktop/pattern-circles.svg'
                    productName = 'zx9 speaker'
                    productDesc = {`Upgrade to premium speakers that are phenomenally 
                    built to deliver truly remarkable sound.`}
                    productLink = '/speakers/zx9'
                />
                <FeaturedItemTwo
                    productName = 'zx7 speaker'
                    productLink = '/speakers/zx7'
                />
            </main>
        </div>   
    );
}

export default Home;
