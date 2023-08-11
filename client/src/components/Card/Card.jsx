import React from "react";
import { useNavigate } from "react-router-dom";
import { PiVan } from "react-icons/pi";
import { conditionNew, conditionNewTranslate, conditionUsedTranslate, formattedPrice } from "../../utils/index.js";
import { Container, Wrapper, Img, Price, WrapperDescription, WrapperAddress, Address, Title, DividerLine, ImgFreeShipping, WrapperImg } from "./Card.styled.components.js";


export default function Card ({id, title, price, picture, condition, free_shipping, address, isLast}) {

    const navigate = useNavigate();

    return (
        <>
            <Container>
                <Wrapper>
                    <WrapperImg>
                        <Img src={picture} alt={title} onClick={()=> navigate(`/items/${id}`)}/>
                    </WrapperImg>
                    <WrapperDescription>
                        <Price> 
                            {formattedPrice(price.amount)} 
                            {free_shipping && <ImgFreeShipping><PiVan size='0.5em'/></ImgFreeShipping>}
                        </Price>
                        <Title>{title}</Title>
                        <div>{condition === conditionNew ? conditionNewTranslate : conditionUsedTranslate}</div>
                    </WrapperDescription>
                    <WrapperAddress>
                        <Address>{address}</Address>   
                    </WrapperAddress>
                </Wrapper>
            </Container>
            {!isLast && <DividerLine/>}
        </>
    );
}