import React from "react";
import Cart from './components/cart/Cart';
import Home from "./components/pages/Home";
import Login from "./components/login/Login";
import Failed from './components/failed/Failed';
import Checkout from "./components/checkout/Checkout";
import Success from "./components/success/Success";
import Register from "./components/register/Register";
import Canceled from "./components/canceled/Canceled";
import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="max-w-screen-2xl mx-auto border-solid border-2">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/success" element={<Success />} />
          <Route path="/canceled" element={<Canceled />} />
          <Route path="*" element={<Failed />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;