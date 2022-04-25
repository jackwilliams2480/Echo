import {Grid, ThemeProvider, createTheme, Typography } from "@mui/material";
import React from "react";
import SideBar from "./SideBar";

const theme = createTheme({
    typography:{
        "fontFamily":`"Quicksand","sans-serif"`,
    },
})

function MainPage(){

    return(
        <ThemeProvider theme={theme}>

        <Grid container direction="row" alignItems="stretch" rowSpacing={0}>
            <Grid item sx={{backgroundColor:"#E8ECEF", minWidth:160}}>
                <SideBar />
            </Grid>
            <Grid item>
            
            </Grid>
        </Grid>
        </ThemeProvider>);
}

export default MainPage;