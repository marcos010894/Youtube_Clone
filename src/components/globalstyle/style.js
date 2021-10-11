import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
    *{
        margin: 0;
        padding: 0;
        box-sizing:border-box;

    }
    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
    body{
        background-color:#f9f9f9;
    }
`