import React from "react";
import { ThemeProvider } from "@material-ui/core";
import  Home  from "../../components/home";
import { theme } from "../../components/theme";

function PageInitial() {
    return(
    <ThemeProvider theme={theme}>
        <Home />
    </ThemeProvider>
    )
}

export default PageInitial