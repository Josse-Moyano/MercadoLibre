import { createGlobalStyle } from 'styled-components'; 

export default createGlobalStyle`
:root {
    
    --backgroundColor: #EEEEEE;
    --blue: #3483FA;
    --black: #333333;
    --white: #FFF;
    --yellow: #FFE600;
    --lightGrey: #999999;
    --darkGrey: #666666;
    --green: #1ed760;

    --family: "Proxima Nova", -apple-system, "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: var(--family);
    }

}`