import { Grid,Typography } from "@mui/material";
import React from "react";
import BrowseMenue from "./sideBarChildren/BrowseMenue";
import PlayListMenue from "./sideBarChildren/PlayListMenue";


function SideBar({handleClick}){
    return (
            <Grid container direction="column" justifyContent="flex-start" alignItems="stretch" sx={{height:"87.5vh"}}>
                <Grid item xs={1} sx={{width:'100%'}}>
                    <Typography sx={{px:2, fontWeight:"bold", color:"#293241"}}>Echo</Typography>
                </Grid>
                <Grid item xs sx={{width:'100%'}}>
                    <BrowseMenue handleClick={handleClick}/>
                </Grid>
                <Grid item xs sx={{width:'100%'}}>
                    <PlayListMenue handleClick={handleClick}/>
                </Grid>
                
            </Grid>);
}

export default SideBar;