import React from 'react';
import Categories from '../components/Categories';
import Navbar from '../components/Navbar';
import ProductHero from '../components/ProductHero';
import FeaturedItem from '../components/FeaturedItem';
import '../scss/pages/Home.css';
import FeaturedItemTwo from '../components/FeaturedItemTwo';
import FeaturedItemThree from '../components/FeaturedItemThree';
import About from '../components/About';

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
                <FeaturedItemThree
                    productName = 'yx1 earphones'
                    productLink = '/earphones/yx1'
                />
                <About
                    aboutTxt = {`Located at the heart of New York City, Audiophile is the 
                        premier store for high end headphones, earphones, speakers, and audio 
                        accessories. We have a large showroom and luxury demonstration rooms 
                        available for you to browse and experience a wide range of our products. 
                        Stop by our store to meet some of the fantastic people who make Audiophile 
                        the best place to buy your portable audio equipment.`}
                />
            </main>
        </div>   
    );
}

export default Home;
