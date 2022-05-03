import React from "react";
import { Grid } from "@mui/material";
import PopularChart from "./trendingChildren/PopularChart";

function Trending(){

    function createData(name) {
        return { name };
      }
      
      const rows = [
        createData('Frozen yoghurt'),
        createData('Ice cream sandwich'),
        createData('Eclair'),
        createData('Cupcake'),
        createData('Gingerbread'),
      ];

    return (
        <div style={{"marginTop":40}}>
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                style={{"marginTop":"20"}}
            >
                <Grid item xs={3}>
                    <PopularChart catagory={"Artist"} data={rows}/>
                </Grid>
                <Grid item xs={3}>
                    <PopularChart catagory={"Playlist"} data={rows}/>
                </Grid>
                <Grid item xs={3}>
                    <PopularChart catagory={"Song"} data={rows}/>
                </Grid>
            </Grid>
        </div>
    )

}

export default Trending;