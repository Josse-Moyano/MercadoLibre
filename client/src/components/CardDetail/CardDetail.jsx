import React from 'react'
import { buyTranslate, conditionNew, conditionNewTranslate, conditionUsedTranslate, descriptionProductTitleTranslate, formattedPrice } from '../../utils/index.js';
import { Container, Wrapper, WrapperDescription, Img, WrapperTitle, ConditionAndBought, Title, Price, ButtonBuy, DescriptionTitle, Description, Decimals } from './CardDetail.styled.components.js'

export default function CardDetail({picture, title, description, condition, soldQuantity, amount, decimals}) {

  return (
    <Container>
        <Wrapper>
            <WrapperDescription>
                <Img src={picture} alt={title}/>
                <DescriptionTitle>{descriptionProductTitleTranslate}</DescriptionTitle>
                <Description>{description}</Description>
            </WrapperDescription>
            <WrapperTitle>
                <ConditionAndBought>
                    {condition === conditionNew ? conditionNewTranslate : conditionUsedTranslate} - {soldQuantity} vendidos
                </ConditionAndBought>
                <Title>{title}</Title>
                <Price>
                    {formattedPrice(amount)}
                    <Decimals>{decimals}</Decimals>
                </Price>
                <ButtonBuy>{buyTranslate}</ButtonBuy>
            </WrapperTitle>
        </Wrapper>
    </Container> 
  );
}
