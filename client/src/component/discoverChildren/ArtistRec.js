import React from "react";
import { Typography } from "@mui/material";
import { Card, CardActionArea, CardMedia } from "@mui/material";
import artistimg from "../../assets/artist_spotlight/dojacat.jpg"
import artistimg1 from "../../assets/artist_spotlight/easonchan.jpg"
import artistimg2 from "../../assets/artist_spotlight/Beabadoobee.jpg"
import artistimg3 from "../../assets/artist_spotlight/jaychou.webp"
import artistimg4 from "../../assets/artist_spotlight/Weeknd.webp"
import artistimg5 from "../../assets/artist_spotlight/girls.jpg"

import { CardContent } from "@mui/material";
import { Grid } from "@mui/material";
function ArtistRec(){
    return (
        <div>
            <Typography sx={{color:"#7A5C61", fontWeight:"bold", m:2}}>
                            Artists for You
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
                                DoJacat
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
                                image={artistimg1}
                                alt= "dojacat"
                                />
                        <CardContent>
                            <Typography textAlign="center">
                                Eason Chan
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
                                image={artistimg2}
                                alt= "dojacat"
                                />
                        <CardContent>
                            <Typography textAlign="center">
                                Beabadoobee
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
                                image={artistimg5}
                                alt= "dojacat"
                                />
                        <CardContent>
                            <Typography textAlign="center">
                            Girls Generation
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
                                image={artistimg3}
                                alt= "dojacat"
                                />
                        <CardContent>
                            <Typography textAlign="center">
                                Jay Chou
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
                                image={artistimg4}
                                alt= "dojacat"
                                />
                        <CardContent>
                            <Typography textAlign="center">
                                The Weeknd
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                
            </Grid>
        </div>
    );
}

export default ArtistRec;