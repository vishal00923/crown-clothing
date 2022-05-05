import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import ShopPage from './Pages/ShopPage/ShopPage';
import SignInSignUpPage from './Pages/SignInSignUpPage/SignInSignUpPage';

import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/sign-in" component={SignInSignUpPage} />
      </Switch>
    </div>
  );
};

export default App;
