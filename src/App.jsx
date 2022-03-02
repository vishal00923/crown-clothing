import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUpPage from './pages/sign-in_sign-up/sign-in_sign-up.component';

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
