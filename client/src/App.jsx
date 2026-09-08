import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Homes'
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import Products from './Pages/Products';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from './Pages/ProductDetails';
import Checkout from './Pages/Checkout';
import Register from './Pages/Register';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetails />}/>
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />      
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      
    </Routes>     
    </BrowserRouter>
  )
}

export default App
