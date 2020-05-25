import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ConfirmedImage from "../../Assets/Asset 7.svg";
import RecoverdImage from "../../Assets/Asset 5.svg";
import DeathImage from "../../Assets/Asset 6.svg";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Confirmed from "./Cases/Confirmed";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: "center"
  },
  landing: {
    overflow: "hidden",
    display: "flex",
    height: "22rem",
    marginBottom: theme.spacing(4),
    backgroundColor: "white",
    borderRadius: "1rem",
    fontFamily: theme.typography.fontFamily,
    paddingBottom: "10px",
    [theme.breakpoints.down("xs")]: {
      height: "23rem"
    }
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  sub: {
    fontSize: "1.5rem",
    padding: "0.5rem 1rem 0.1rem 1.5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  text: {
    paddingTop: "1rem",
    paddingLeft: "1.5rem",
    fontSize: "5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  }
}));

export default function CenteredGrid(props) {
  const classes = useStyles();
  //const yellow = "rgb(255, 235, 153)";
  const confirmed = "These are the total number of confirmed cases in India";
  const deaths = "These are the total number of Death cases in India";
  const recover = "These are the total number of recovered cases in India";
  return (
    <React.Fragment>
      <div className={classes.landing}>
        <div >
          <Typography className={classes.text} variant="h1" >Corona Tracker</Typography>
          <div>

            <Typography variant="body1" className={classes.sub} color="textSecondary" >
              Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.
          </Typography>
          </div>
          <div>
            <Typography variant="body1" className={classes.sub} color="textSecondary" >
              In humans, these viruses cause respiratory tract infections that can range from mild to lethal.
          </Typography>
          </div>
          <div>
            <Typography variant="body1" className={classes.sub} color="textSecondary" >
              This tracker will get you realtime statistics about COVID-19 in India and the world.
          </Typography>
          </div>
          <div>
            <Typography variant="body1" className={classes.sub} color="textSecondary" >
              Check out the sidebar for this data in the form of a graph!
              </Typography>
          </div>

        </div>
      </div>
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Confirmed content={props.confirmed} para={confirmed} image={ConfirmedImage} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Confirmed content={props.recovered} para={recover} image={RecoverdImage} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Confirmed content={props.deaths} para={deaths} image={DeathImage} />
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
