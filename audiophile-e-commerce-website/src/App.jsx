import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import NotFound from './pages/NotFound';
import MobileMenu from './components/mobileMenu';

export default function App() {
  const [toggled, setToggled] = useState(false);
  const [cart, setCart] = useState([]);

  const toggleMenu = () => {
    setToggled(prevState => !prevState);
  };

  const closeMenu = () => {
    setToggled(false);
  }

  const addCart = (item, quantity) => {

  }

  const clearCart = () => {
    setCart([]);
  }

  return (
    <>
    <Navbar toggleMenu={toggleMenu}/>
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/:category' element={<CategoryPage />} />
        <Route path='/:category/:slug' element={<ProductPage />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
    { toggled && <MobileMenu closeMenu={closeMenu}/> }
    <Footer />
    </>
  )
}
