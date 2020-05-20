import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Confirmed from "./Cases/Confirmed";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid(props) {
  const classes = useStyles();
  const green = "#00c853";
  const red = "red";
  const yellow = "yellow";
  return (
    <div className={classes.root}>
      <Grid container spacing={6}>
        <Grid item xs={4}>
          <Confirmed content={props.confirmed} color={yellow} />
        </Grid>
        <Grid item xs={4}>
          <Confirmed content={props.recovered} color={green} />
        </Grid>
        <Grid item xs={4}>
          <Confirmed content={props.deaths} color={red} />
        </Grid>
      </Grid>
    </div>
  );
}
