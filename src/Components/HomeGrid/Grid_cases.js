import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ConfirmedImage from "../../Assets/Asset 2.svg";
import RecoverdImage from "../../Assets/Asset 4.svg";
import DeathImage from "../../Assets/Asset 3.svg";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Confirmed from "./Cases/Confirmed";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: "center"
  },
  landing: {
    display: "flex",
    alignContent: "center",
    border: " 1px solid grey",
    height: "25rem",
    marginBottom: "10px",
    backgroundColor: "white",
    borderRadius: "1rem",
    fontWeight: 700
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid(props) {
  const classes = useStyles();
  //const yellow = "rgb(255, 235, 153)";

  return (
    <React.Fragment>
      <div className={classes.landing}>
        <div><Typography variant="h1" component="h2">Corona Tracker</Typography></div>
      </div>
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Confirmed content={props.confirmed} image={ConfirmedImage} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Confirmed content={props.recovered} image={RecoverdImage} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Confirmed content={props.deaths} image={DeathImage} />
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
