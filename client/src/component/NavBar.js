import { AppBar,Box,Toolbar,Button, Grid } from "@mui/material";


import React from "react";
import SearchBar from "./navBarChildren/searchBar";

function NavBar(){
    return(  <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" elevation={0}>
          <Toolbar sx={{backgroundColor:"#F5F7F7"}}>
            <Grid container direction="row" justifyContent="space-between" alignItems="flex-start">
            <Grid item sx={{ border:1 , borderColor: 'text.primary', borderRadius:'32px'}}>
                <SearchBar />
            </Grid>
            <Grid item>
                <Button color="primary">Login</Button>
            </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>);
}

export default NavBar;