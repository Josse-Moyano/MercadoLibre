import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReactLoading from "react-loading";
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import { BackgroundImage, Container } from './ProductDetail.styled.components.js'
import { cleanError, cleanProductDetail, getProductDetail } from '../../redux/action';
import CardDetail from '../../components/CardDetail/CardDetail.jsx';
import ErrorImage from '../../components/ErrorImage/ErrorImage';

export default function ProductDetail() {

  const productsError = useSelector((state) => state?.productsError);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(cleanError());
    dispatch(getProductDetail(id));
    return () => {
      dispatch(cleanProductDetail());
    };
  }, [dispatch, id]);  

  const productDetail = useSelector((state) => state?.productDetail?.item)

  const { picture, title, description, condition, sold_quantity, price } = productDetail || {};

  if (productsError) { 
    return <ErrorImage/>
  }

  return (
    <Container>
            <BreadCrumbs/>
            {
              productDetail ? (
                <CardDetail 
                  picture={picture} 
                  title={title} 
                  description={description} 
                  condition={condition} 
                  soldQuantity={sold_quantity} 
                  amount={price?.amount} 
                  decimals={price?.decimals}
                />
              ) : (
                <BackgroundImage>
                  <ReactLoading type='spinningBubbles' color='var(--yellow)'/>
                </BackgroundImage>
              )
            }
    </Container>
  );
}
