import React from "react";
import { Grid, Card, CardMedia } from "@mui/material";
import artistimg from "../../assets/artist_spotlight/easonchan.jpg"
import { Typography } from "@mui/material";

function playlistInfomation(){
    return <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="flex-end"
    >
        <Grid item xs={2}>
            <Card>
                <CardMedia 
                    component="img"
                    height = "160"
                    image={artistimg}
                    alt= "easonChan"
                />
            </Card>
        </Grid>
        <Grid item xs={9}>
            <Grid
                container
                direction="column"
                justifyContent="flex-end"
                alignItems="flex-start"
            >
                <Grid item>
                    <Typography variant="subtitle2">
                        Album
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h4">
                        Eason Chan
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
}

export default playlistInfomation;