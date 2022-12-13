import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

export default function App() {
  return (
    <>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
    </Routes>
    </>
  )
}
