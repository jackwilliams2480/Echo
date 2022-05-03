import React from "react";
import ArtistRec from "./discoverChildren/ArtistRec";
import PlaylistRec from "./discoverChildren/PlaylistRec";
import SongRec from "./discoverChildren/SongRec";
import {Grid} from "@mui/material";
function Discover(){

    return(
        <Grid
        container
        direction="column"
        justifyContent="space-around"
        alignItems="stretch"
        >
            <Grid item>
                <ArtistRec />
            </Grid>
            <Grid item>
                <PlaylistRec />
            </Grid>
            <Grid item>
                <SongRec />
            </Grid>
        </Grid>
    );
}

export default Discover;