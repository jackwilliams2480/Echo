import { Grid,Typography } from "@mui/material";
import React from "react";
import BrowseMenue from "./BrowseMenue";
import PlayListMenue from "./PlayListMenue";


function SideBar(){
    return (
            <Grid container direction="column" justifyContent="flex-start" alignItems="stretch" sx={{height:"100vh"}}>
                <Grid item xs={1} sx={{width:'100%'}}>
                    <Typography sx={{px:2, fontWeight:"bold", color:"#293241"}}>Echo</Typography>

                </Grid>
                <Grid item xs sx={{width:'100%'}}>
                    <BrowseMenue />
                </Grid>
                <Grid item xs sx={{width:'100%'}}>
                    <PlayListMenue />
                </Grid>
                
            </Grid>);
}

export default SideBar;