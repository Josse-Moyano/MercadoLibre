import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
`

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    margin: 16px 0px 16px 16px;
`

export const WrapperImg = styled.div`
    width: 180px;
    height: 180px;
    margin-right: 16px;
    border: 4px;
    cursor: pointer;
`

export const Img = styled.img`
    width: 100%;
`

export const Price = styled.div`
    margin-bottom: 32px;
    margin-top: 16px;
    font-size: 24px;
    display: flex;
    align-items: center;
`

export const ImgFreeShipping = styled.div`
    margin-left: 8px;
    border-radius: 100%;
    background-color: var(--green);
    padding: 5px;
    display: flex;
    svg {
    margin-left: -1px
}
`

export const Title = styled.div`
    color: var(--black);
`

export const WrapperDescription = styled.div`
    width: 100%;
    font-size: 18px;
`

export const WrapperAddress = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 300px;
    min-width: 100px;
`

export const Address = styled.div`
    width: 100%;
    font-size: 12px;
    color: var(--lightGrey);
    margin-top: 30px;
`

export const DividerLine = styled.div`
    width: 95%;
    height: 1px;
    background-color: var(--backgroundColor);
    margin: 0 16px;
`;