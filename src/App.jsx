import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Home from './routes/Home/Home';
import Shop from './routes/Shop/Shop';
import Auth from './routes/Auth/Auth';
import Checkout from './routes/Checkout/Checkout';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './utils/firebase';

import { setCurrentUser } from './store/user/userAction';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
