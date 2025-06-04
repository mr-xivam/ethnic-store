import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import FAQs from './components/FAQs';
import Riwaz from './components/Riwaz';
import Cart from './components/Cart';

const App = () => {
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0.0);

  return (
    <Router>
      <Navbar cartCount={cartCount} cartTotal={cartTotal} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/sapnas-riwaz" element={<Riwaz />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
