import React from 'react';
import Navlinks from './Navlinks';
import '../scss/components/Footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
        <div className='no-margin-container footer__content'>
            <img className='logo' src='../assets/shared/desktop/logo.svg' alt='audiophile'/>
            <Navlinks />
            <p>Audiophile is an all in one stop to fulfill your audio needs. 
                We're a small team of music lovers and sound specialists who 
                are devoted to helping you get the most out of personal audio. 
                Come and visit our demo facility - we’re open 7 days a week.</p>
            <span>Copyright 2021. All Rights Reserved</span>
            <ul className='social'>
                <li><a href='/#facebook-link' target='_blank'><img className='social-link' src='../assets/shared/desktop/icon-facebook.svg' alt='facebook link'/></a></li>
                <li><a href='/#twitter-link' target='_blank'><img className='social-link' src='../assets/shared/desktop/icon-twitter.svg' alt='facebook link'/></a></li>
                <li><a href='/#instagram-link' target='_blank'><img className='social-link' src='../assets/shared/desktop/icon-instagram.svg' alt='facebook link'/></a></li>
            </ul>
        </div>
    </footer>
  )
}
