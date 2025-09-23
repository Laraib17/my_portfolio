import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Login from './pages/Login';
import PlaceOrder from './pages/PlaceOrder';
import Order from './pages/Order';
import Cart from './pages/cart';
import Contact from './pages/Contact';
import Navbar from './components/navbar';

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <img src="assets/logo.png" alt="" />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Navbar" element={<Navbar />} />
      </Routes>
    </div>
  );
};
export default App;
