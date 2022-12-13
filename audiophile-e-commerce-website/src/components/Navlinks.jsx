import React from 'react';
import {Link} from 'react-router-dom';
import '../scss/components/Navlinks.css';

export default function Navlinks() {
  return (
    <ul className='links subtitle'>
        <li><Link to = '/'>home</Link></li>
        <li><Link to = '/headphones'>headphones</Link></li>
        <li><Link to = '/speakers'>speakers</Link></li>
        <li><Link to = '/earphones'>earphones</Link></li>
    </ul>
  );
}
