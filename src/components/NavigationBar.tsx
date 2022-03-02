import { AppBar,  makeStyles, Toolbar, Typography } from "@material-ui/core";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import React from "react";

const useStyles = makeStyles(() => ({
    root: {
        fontSize: "40px"
    }
}))

const NavigationBar = (): JSX.Element => {
    const classes: ClassNameMap = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.root}>Post List App</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavigationBar;