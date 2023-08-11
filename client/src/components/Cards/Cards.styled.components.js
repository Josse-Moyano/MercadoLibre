import { styled } from "styled-components";

export const Container = styled.div`
    background-color: var(--white);
    max-width: 1100px;
    width: 100%;
    margin-bottom: 32px;
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
`
export const BackgroundImage = styled.div`
    max-width: 1100px;
    width: 100%;
    margin-bottom: 32px;
    height: calc(100vh - 70px);
    background-color: var(--backgroundColor);
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 40vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

