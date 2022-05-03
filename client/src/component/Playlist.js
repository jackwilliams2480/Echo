import React from "react";
import { Grid } from "@mui/material";
import PlaylistInfomation from "./playlistChildren/playlistInfomation";
import SongList from "./playlistChildren/songList";
function Playlist({data}){


    return <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                
            >
                <Grid item xs={2} sx={{"width":"100%",p:2}}>
                    <PlaylistInfomation />
                </Grid>
                <Grid item xs={10} sx={{"width":"100%"}}>
                    <SongList data={data}/>
                </Grid>
             </Grid>
}

export default Playlist;