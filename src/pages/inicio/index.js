import React from "react";
import { Button, ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';
import  Home  from "../../components/home";


function PageInitial() {
    const theme = createMuiTheme({
        spacing: 4,
        palette:{
            primary:{
                main: '#f44336',
            },
            secondary:{
                main: '#3f51b5',
            },
        },
    });

    return(
    <ThemeProvider theme={theme}>
        <Home></Home>
    </ThemeProvider>
    )
}

export default PageInitial