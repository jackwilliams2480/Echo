import React from "react";
import { Typography } from "@mui/material";
import { Card, CardActionArea, CardMedia } from "@mui/material";
import artistimg from "../../assets/artist_spotlight/placeholder.png"
import { CardContent } from "@mui/material";
import { Grid } from "@mui/material";
function SongRec(){
    return (
        <div>
            <Typography sx={{color:"#7A5C61", fontWeight:"bold", m:2}}>
                            Songs for You
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="baseline"
                spacing={2}
                >
                <Grid item>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height = "80"
                                image={artistimg}
                                alt= "dojacat"
                                />
                        <CardContent>
                            <Typography textAlign="center">
                                Song 1
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height = "80"
                                image={artistimg}
                                alt= "dojacat"
                                />
                        <CardContent>
                            <Typography textAlign="center">
                            Song 2
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height = "80"
                                image={artistimg}
                                alt= "dojacat"
                                />
                        <CardContent>
                            <Typography textAlign="center">
                            Song 3
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height = "80"
                                image={artistimg}
                                alt= "dojacat"
                                />
                        <CardContent>
                            <Typography textAlign="center">
                            Song 4
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height = "80"
                                image={artistimg}
                                alt= "dojacat"
                                />
                        <CardContent>
                            <Typography textAlign="center">
                            Song 5
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height = "80"
                                image={artistimg}
                                alt= "dojacat"
                                />
                        <CardContent>
                            <Typography textAlign="center">
                            Song 6
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                
            </Grid>
        </div>
    );
}

export default SongRec;