import {Grid, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import NavBar from "../../component/NavBar";
import SideBar from "../../component/SideBar";

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
            <Grid item sx={{backgroundColor:"#F5F7F7"}} xs>
                <NavBar/>
            </Grid>
        </Grid>
        </ThemeProvider>);
}

export default MainPage;