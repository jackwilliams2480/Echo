import React from "react";
import { Grid, Card, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";

function playlistInfomation({cover,name}){
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
                    image={cover}
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
                        {name}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
}

export default playlistInfomation;