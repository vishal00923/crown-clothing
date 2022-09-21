import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Home from './routes/Home/Home';
import Shop from './routes/Shop/Shop';
import Auth from './routes/Auth/Auth';
import Checkout from './routes/Checkout/Checkout';

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Auth />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}
