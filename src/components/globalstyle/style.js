import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
    body{
        background-color:#f9f9f9;
        margin:0;
    }
    .display{
        display: flex;
        align-items: stretch;
    }
`;

export const InputDrawer = styled.input`
    width:500px;
    height: 25px;
    border: 1px solid black;
`

export const DivInput = styled.div` 
    width: 100%;
    text-align: center;
    @media (max-width: 1050px){
        display:none;
    }
`;

export const DivAcountSmartPhone = styled.div`
    display: none; 
    @media (max-width: 615px){
        display:block;
    }
`;

export const DivAcountDesktop = styled.div`
    @media (max-width: 615px){
        display:none;
    }
    
`;



export const BtnPesquisa = styled.button`
    height: 25px;
`