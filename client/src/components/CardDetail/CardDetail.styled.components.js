import { styled } from "styled-components";

export const Container = styled.div`
    background-color: var(--backgroundColor);
    display: flex;
    height: auto;
    flex-direction: column;
    align-items: center;
`

export const Wrapper = styled.div`
    background-color: var(--white);
    max-width: calc(1100px - 64px);
    width: 100%;
    padding: 32px;
    display: flex;
    flex-direction: row;
    margin-bottom: 32px;
`

export const WrapperDescription = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const Img = styled.img`
    width: 680px;
`

export const WrapperTitle = styled.div`
    width: 40%;
`

export const ConditionAndBought = styled.div`
    font-size: 14px;
    margin-bottom: 16px;
`

export const Title = styled.div`
    font-size: 24px;
    font-weight: 600;
`

export const Price = styled.div`
    font-size: 46px;
    margin: 32px 0px 32px 0px;
    display: flex;
`

export const Decimals = styled.div`
    font-size: 26px;
`

export const ButtonBuy = styled.button`
    width: 100%;
    height: 40px;
    background-color: var(--blue);
    border: none;
    border-radius: 4px;
    color: var(--white);
    margin-right: 32px;
    cursor: pointer;
`
export const DescriptionTitle = styled.div`
    font-size: 28px;
    margin-top: 32px;
    margin-bottom: 32px;
`

export const Description = styled.div`
    color: var(--lightGrey);
`
 
