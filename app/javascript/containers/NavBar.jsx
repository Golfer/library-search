import classes from './NavBar.css'
import React, {Component, Fragment} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LogoApp from 'images/logo.png'
import {connect} from "react-redux";
import {logOut} from "../actions/authorization";

class NavigationBar extends Component {
    clickSignOutHandler=()=>{
      this.props.logOut()
    }

    renderButtonUnAuthorize(){
        return <Fragment>
            <Button color="inherit">
                <NavLink
                    to="/sign_out"
                    exact={false}
                    onClick={this.clickSignOutHandler}
                >
                    Log Out
                </NavLink>
            </Button>
        </Fragment>
    }

    renderButtonAuthorize(){
        return <Fragment>
                <Button color="inherit">
                    <NavLink
                        to="/sign_in"
                        className={classes.inactive}
                        activeClassName={classes.active}
                    >
                        Sign In
                    </NavLink>
                </Button>
                <Button color="inherit">
                    <NavLink
                        to="/sign_up"
                        className={classes.inactive}
                        activeClassName={classes.active}
                    >
                        Sign Up
                    </NavLink>
                </Button>
        </Fragment>
    }
    
    render() {

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <NavLink
                            to="/"
                            exact={true}
                            className={classes.inactive}
                            activeClassName={classes.active}
                        >
                            <img src={LogoApp} alt="logo" className={classes.logoAppStyle} style={{maxWidth: '40px'}}/>
                        </NavLink>
                        <Typography variant="h6" className={classes.title}>
                            <NavLink
                                to="/books"
                                exact={false}
                                className={classes.inactive}
                                activeClassName={classes.active}
                            >
                                Books
                            </NavLink>
                        </Typography>
                        {!!this.props.isAuthenticate ? this.renderButtonUnAuthorize() : this.renderButtonAuthorize()}
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        isAuthenticate: !!state.authorization.token,
        token: state.authorization.token,
        csrfToken: state.authorization.csrfToken
    }
}

function mapDispatchToProps(dispatch) {
    return {
        logOut: (token) => dispatch(logOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar)
