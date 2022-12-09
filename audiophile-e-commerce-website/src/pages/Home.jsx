import React from 'react';
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
                    productImg = '../assets/home/desktop/image-hero.jpg'
                    productImgAlt = 'black xx00 mark 2 headphones'
                />
            </main>
        </div>   
    );
}

export default Home;
