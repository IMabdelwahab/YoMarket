import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './components/navbar';
import Home from './components/home';
import Footer from './components/footer';
import ProductCard from './components/ProductCard';
import ProductList from './components/productList';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Home/>
    <ProductList title ="Category 1"/>
    <ProductList title ="Category 2"/>
    <ProductList title ="Category 3"/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
