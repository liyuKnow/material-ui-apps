import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import { useStyles } from './post_card_style'

export default function PostCard({ post }) {
    const classes = useStyles();

    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component="a" href="#">
                <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                        <CardContent>
                            <Typography component="h2" variant="h5">
                                {post.title}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {post.date}
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                {post.description}
                            </Typography>
                            <Typography variant="subtitle1" style={{ color: "skyblue" }}>
                                Continue reading...
                            </Typography>
                        </CardContent>
                    </div>
                    {/* hidden if it is below xs */}
                    <Hidden xsDown>
                        <CardMedia
                            className={classes.cardMedia}
                            image={post.image}
                            title={post.imageTitle}
                        />
                    </Hidden>
                </Card>
            </CardActionArea>
        </Grid>
    );
}