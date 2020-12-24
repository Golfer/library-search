import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    active: {
        color: 'white'
    }
}));



function clickSignInHandler() {

    console.log('clickSignInHandler')
}

function clickBooksHandler() {
    console.log('clickBooksHandler')
}

function clickSignUpHandler() {
    console.log('clickSignUpHandler')
}
export default function NavigationBar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit">
                        <NavLink
                            to="/books"
                            exact={false}
                            activeClassName={classes.active}
                            onClick={clickBooksHandler}
                        >
                            Books
                        </NavLink>
                    </Button>
                    <Button color="inherit">
                        <NavLink
                            to="/sign_in"
                            exact={false}
                            activeClassName={classes.active}
                            onClick={clickSignInHandler}
                        >
                            Sign In
                        </NavLink>
                    </Button>

                    <NavLink
                        to="/sign_up"
                        exact={false}
                        activeClassName={classes.active}
                        onClick={clickSignUpHandler}
                    >
                        <Button color="inherit">
                            Sign Up
                        </Button>
                    </NavLink>
                </Toolbar>
            </AppBar>
        </div>
    );
}
