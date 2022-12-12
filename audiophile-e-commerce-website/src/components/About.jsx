import React from 'react';
import '../scss/components/About.css';

export default function About({aboutTxt}) {
  return (
    <section className='no-margin-container about'>
        <div className='about__dec' aria-hidden='true'></div>
        <div className='about__content'>
            <h2 className='uppercase'>Bringing you the <span className='accent'>best</span> audio gear</h2>
            <p>{aboutTxt}</p>
        </div>
    </section>
  );
}