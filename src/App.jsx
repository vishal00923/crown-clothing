import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import ShopPage from './Pages/ShopPage/ShopPage';
import SignInSignUpPage from './Pages/SignInSignUpPage/SignInSignUpPage';

import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/sign-in" element={<SignInSignUpPage />} />
      </Routes>
    </div>
  );
};

export default App;
