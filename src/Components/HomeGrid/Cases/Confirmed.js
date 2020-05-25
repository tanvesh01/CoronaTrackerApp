import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345,
        fontFamily: theme.typography.fontFamily,
        borderRadius: "1rem",
        boxShadow: "0px 44px 28px -26px rgba(148,148,148,1)",

        background: "linear-gradient(0deg, rgba(250,225,120,1) 61%, rgba(255,240,176,1) 100%),"

    },
    media: {
        height: 300,
        // backgroundColor: "rgb(250,225,120)",
        // background: "linear-gradient(0deg, rgba(250,225,120,1) 61%, rgba(255,240,176,1) 100%),"
        // backgroundColor: (props) => props.color,
    },
    para: {
        marginBottom: "10px",
        fontSize: "1rem"
    }
}));

export default function MediaCard(props) {
    const classes = useStyles(props);
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" className={classes.para}>
                        {props.para}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {props.content}
                        {"    "}
                        <Typography variant="caption" display="inline" gutterBottom>
                            Humans
                        </Typography>
                    </Typography>

                </CardContent>
            </CardActionArea>
        </Card >
    );
}
