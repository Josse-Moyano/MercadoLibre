import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container } from './Products.styled.components.js'
import Cards from "../../components/Cards/Cards";
import { cleanError, getProducts } from "../../redux/action";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";

export default function Products() {

  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchValue = searchParams.get('search');

  useEffect(() => {
    dispatch(cleanError());
    searchValue && dispatch(getProducts(searchValue));
  }, [dispatch, searchValue]);  

  return (
    <Container>
      <BreadCrumbs/>
      <Cards/> 
    </Container>
  )
}
