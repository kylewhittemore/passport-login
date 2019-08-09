import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link, Route, BrowserRouter as Router } from "react-router-dom";


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    score: {
        flexGrow: 1,
        textAlign: "right",
        marginRight: theme.spacing(2)
    },
    welcome: {
        flexGrow: 1,
        textAlign: "center",
    },
    bar: {

    }
}));

const NavBar = props => {

    const classes = useStyles();

    return (

        <div className={classes.root}>
            <AppBar position="static" color="primary">
                <Toolbar className={classes.bar}>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        {props.currentUser.username ?
                            `Welcome ${props.currentUser.username}`
                            :
                            `Welcome`
                        }
                    </Typography>
                    {props.currentUser.username ?
                        <Link to="/"><Button onClick={props.handleLogout} color="inherit">Logout</Button></Link>
                        :
                        <>
                            <Link to="/login"><Button color="inherit">Login</Button></Link>
                            <Link to="/signup"><Button color="inherit">Signup</Button></Link>
                        </>
                    }
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar