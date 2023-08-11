import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchBar from './components/SearchBar/SearchBar';
import Home from './pages/Home/Home';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Products from './pages/Products/Products';
import GlobalStyles from './styles/GlobalStyles';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles/>
      <SearchBar  />
      <Routes>
        <Route exact path='/' element= {<Home/>} />
        <Route path='/items' element= {<Products/>} />
        <Route path='/items/:id' element= {<ProductDetail/>} />
      </Routes>
    </BrowserRouter>
  );
}