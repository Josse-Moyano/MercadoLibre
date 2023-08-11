import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom';
import { MdNavigateNext } from "react-icons/md";
import { Container, Span } from './BreadCrumbs.styled.components.js'

export default function BreadCrumbs() {

  const searchCategories = useSelector((state) => state?.products?.categories);
  const productDetailCategories = useSelector((state) => state?.productDetail?.categories);
  const location = useLocation();
  const { id } = useParams();

  const isProductDetailPage = location.pathname.startsWith('/items/') && id;
  let selectedCategories = searchCategories;

  if (isProductDetailPage && productDetailCategories?.length > 0) {
    selectedCategories = productDetailCategories;
  }

  if (!selectedCategories || selectedCategories.length === 0) {
    return null;
  }
  
  return (
    <Container>
      {selectedCategories.map((category, index) => (
        <Span key={category}>
          {category}
          {index !== selectedCategories.length - 1 && <MdNavigateNext />}
        </Span>
      ))}
    </Container>
  );
}