import { styled } from "styled-components";

export const Container = styled.div`
    background-color: var(--yellow);
    min-width: 100vw;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Wrapper = styled.div`
    max-width: 1100px;
    width: 100%;
    height: 91px;
    display: flex;
    align-items: center;
    img {
        width: 50px;
        height: 34px;
        margin-right: 15px;
        cursor: pointer;
    }
`

export const Form = styled.form`
    display: flex;
    width: 100%;
`

export const Input = styled.input`
    width: 100%;
    height: 34px;
    padding: 0px 15px 0px 15px;
    background-color: var(--white);
    border: none;
    border-radius: 2px;
    font-size: 18px;
    color: var(--black);
    outline: none;
    border-radius: 4px 0 0 4px;
`

export const Icon = styled.div`
    width: 34px;
    height: 34px;
    background-color: var(--backgroundColor);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 0px 4px 4px 0px;
`