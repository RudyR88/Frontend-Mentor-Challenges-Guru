import React from 'react';
import Categories from '../components/Categories';
import ProductHero from '../components/ProductHero';
import FeaturedItem from '../components/FeaturedItem';
import FeaturedItemTwo from '../components/FeaturedItemTwo';
import FeaturedItemThree from '../components/FeaturedItemThree';
import About from '../components/About';
import '../scss/pages/Home.css';

function Home() {
    return (
        <>
            <main className='home' role='main'>
                <ProductHero
                    productName = 'xx99 mark ii headphones'
                    productDesc = {`Experience natural, lifelike audio 
                        and exceptional build quality made for the passionate music enthusiast.`}
                    productLink = '/headphones/xx99-mark-two-headphones'
                />
                <Categories />
                <FeaturedItem
                    decoration = '../assets/home/desktop/pattern-circles.svg'
                    productName = 'zx9 speaker'
                    productDesc = {`Upgrade to premium speakers that are phenomenally 
                        built to deliver truly remarkable sound.`}
                    productLink = '/speakers/zx9-speaker'
                />
                <FeaturedItemTwo
                    productName = 'zx7 speaker'
                    productLink = '/speakers/zx7-speaker'
                />
                <FeaturedItemThree
                    productName = 'yx1 earphones'
                    productLink = '/earphones/yx1-earphones'
                />
            </main>
            <About />
        </>   
    );
}

export default Home;
