import React from "react";
import { ThemeProvider } from "@material-ui/core";
import  Home  from "../../components/home";
import { theme } from "../../components/theme";
import AlterState from "../../components/menuOpen/openmenu"; 

function PageInitial() {
    <AlterState />
    return(
    <ThemeProvider theme={theme}>
        <Home comando='responsive' />
    </ThemeProvider>
    )
}

export default PageInitial