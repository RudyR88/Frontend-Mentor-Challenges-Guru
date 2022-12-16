import React from 'react';
import Categories from '../components/Categories';
import '../scss/pages/NotFound.css';

export default function NotFound() {
  return (
    <>
    <main className='not-found'>
      <div className='not-found__content container'>
        <img src='https://media.giphy.com/media/JSv2Yg4qUkEDGvYYqY/giphy.gif' alt=''  aria-hidden='true'/>
        <h2>Who are you?!</h2>
        <h5>Lets... get you back on track</h5>
        <a className='subtitle credit' href="https://giphy.com/gifs/cbc-comedy-schittscreek-514-JSv2Yg4qUkEDGvYYqY">via GIPHY</a>
      </div>
    </main>
    <Categories />
    </>
  );
}
