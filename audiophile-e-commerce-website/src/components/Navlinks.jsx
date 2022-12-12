import React from 'react';
import '../scss/components/Navlinks.css'

export default function Navlinks() {
  return (
    <ul className='links subtitle'>
        <li><a href={'/'}>home</a></li>
        <li><a href={'/headphones'}>headphones</a></li>
        <li><a href={'/speakers'}>speakers</a></li>
        <li><a href={'/earphones'}>earphones</a></li>
    </ul>
  );
}
