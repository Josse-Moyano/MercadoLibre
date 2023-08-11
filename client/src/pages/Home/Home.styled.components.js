import { styled } from "styled-components";

export const BackgroundImage = styled.div`
    width: 100%;
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