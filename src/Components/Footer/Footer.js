import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
function Copyright() {
    return (
        <Typography
            variant="body2"
            style={{
                textAlign: "center",
            }}
            color="textSecondary"
        >
            {"Copyright © "}
            <Link color="inherit">Corona Tracker App</Link> {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        minHeight: "30vh",
    },
    footer: {
        padding: theme.spacing(2, 1),
        marginTop: "auto",
        backgroundColor:
            theme.palette.type === "light" ? theme.palette.grey[200] : theme.palette.grey[800],
    },
    link: {
        fontSize: "1.1rem",
        marginTop: "1px",
        zIndex: -1,
    },
    credits: {
        display: "flex",
        justifyContent: "space-around",
    },
}));

export default function StickyFooter() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <footer className={classes.footer}>
                <Container maxWidth="sm">
                    <div className={classes.credits}>
                        <div>
                            <Typography variant="body1">
                                Developed by{" "}
                                <div>
                                    Tanvesh sarve{" "}
                                    <div>
                                        <Link
                                            className={classes.link}
                                            color="inherit"
                                            href="https://github.com/tanvesh01"
                                        >
                                            <GitHubIcon />
                                        </Link>{" "}
                                        <Link
                                            className={classes.link}
                                            color="inherit"
                                            href="https://www.instagram.com/stanvesh/"
                                        >
                                            <InstagramIcon />
                                        </Link>{" "}
                                        <Link
                                            className={classes.link}
                                            color="inherit"
                                            href="https://twitter.com/Sarve___tanvesh"
                                        >
                                            <TwitterIcon />
                                        </Link>
                                    </div>
                                </div>
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="body1">
                                {" "}
                                Illustration by{" "}
                                <div>
                                    ashdoesign{" "}
                                    <div>
                                        <Link
                                            className={classes.link}
                                            color="inherit"
                                            href="https://www.instagram.com/illusna/"
                                        >
                                            <InstagramIcon />
                                        </Link>
                                    </div>
                                </div>
                            </Typography>
                        </div>
                    </div>
                    <Copyright />
                </Container>
            </footer>
        </div>
    );
}
