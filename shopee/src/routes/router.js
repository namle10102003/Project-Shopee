import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from '../components/ui/commons/header.js';
import Footer from '../components/ui/commons/footer.js';
import HomePage from '../pages/homePage';
import ProductPage from '../pages/productPage';
import CartPage from '../pages/cartPage';
import CheckoutPage from '../pages/checkoutPage';
import OrderTrackingPage from '../pages/orderTrackingPage';
import UserPage from '../pages/userPage.js';
import SearchingPage from '../pages/searchingPage.js';
import LoginPage from '../pages/loginPage.jsx';

function AppRouter() {
  return (
    <Router>
        <Header />
        
          <Routes>
          <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/products" element={<SearchingPage />} />
              <Route path="/order-tracking" element={<OrderTrackingPage />} />
              <Route path="/user/:id" element={<UserPage />} />
          </Routes>
        <Footer />
      </Router>
  );
}

export default AppRouter;