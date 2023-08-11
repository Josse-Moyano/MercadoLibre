import React from 'react'
import { useSelector } from 'react-redux';
import ReactLoading from "react-loading";
import Card from '../Card/Card'
import ErrorImage from '../ErrorImage/ErrorImage';
import { BackgroundImage, Container, Wrapper } from './Cards.styled.components.js';

export default function Cards() {

    const products = useSelector((state) => state?.products?.items)
    const productsError = useSelector((state) => state?.productsError);

    if (productsError) { 
        return <ErrorImage/>
    }
  
    return (
        products?.length > 0 ? (
            <Container>
                <Wrapper>
                    { products?.map((product, index) => (
                        <Card 
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            picture={product.picture}
                            condition={product.condition}
                            free_shipping={product.free_shipping}
                            address={product.address}
                            isLast={index === products.length - 1}
                        />
                        ))}
                </Wrapper>
            </Container>
        ) : (
            <BackgroundImage>
                <ReactLoading type='spinningBubbles' color='var(--yellow)'/>
            </BackgroundImage>
        ) 
    );
}
