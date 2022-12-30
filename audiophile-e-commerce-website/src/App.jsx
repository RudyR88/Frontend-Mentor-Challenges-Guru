import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import NotFound from './pages/NotFound';
import MobileMenu from './components/MobileMenu';
import Cart from './components/Cart';
import useToggleManager from './hooks/useToggleManager';

export default function App() {
  const [menuToggle, toggleMenu, closeToggle] = useToggleManager();
  const [cartToggle, toggleCart] = useToggleManager();

  return (
    <>
    <Navbar toggleMenu={toggleMenu} toggleCart={toggleCart}/>
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/headphones' element={<CategoryPage category='headphones'/>} />
        <Route path='/headphones/:slug' element={<ProductPage category='headphones'/>} />
        <Route path='/speakers' element={<CategoryPage category='speakers'/>} />
        <Route path='/speakers/:slug' element={<ProductPage category='speakers'/>} />
        <Route path='/earphones' element={<CategoryPage category='earphones'/>} />
        <Route path='/earphones/:slug' element={<ProductPage category='earphones'/>} />
        <Route path='*' element={<NotFound />} />
    </Routes>
    { menuToggle && <MobileMenu closeMenu={closeToggle}/> }
    { cartToggle && <Cart /> }
    <Footer />
    </>
  )
}
