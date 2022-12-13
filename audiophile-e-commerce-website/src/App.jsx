import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/:category' element={<CategoryPage />} />
        {/* <Route path='/:category/:item' element={<CategoryPage />} /> */}
        <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
    </>
  )
}
