import React from "react";
import { Typography } from "@mui/material";
import { Card, CardActionArea, CardMedia } from "@mui/material";
import artistimg from "../../assets/artist_spotlight/dojacat.jpg"
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
                
            </Grid>
        </div>
    );
}

export default ArtistRec;