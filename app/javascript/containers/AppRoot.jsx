import './AppRoot.css';
import React, {Fragment} from "react";
import {Route, Switch} from "react-router-dom";
import NavBar from './NavBar';

import RandomBooks from './books/RandomBooks'
import SignInForm from './auth/SignInForm'
import SignUpForm from './auth/SignUpForm'
import LogOut from './auth/LogOutForm'

function App() {

    return (
        <Fragment>
            <NavBar />
            <Switch>
                <Route exact path="/" component={RandomBooks} />
                <Route path="/books" component={RandomBooks} />
                <Route path="/sign_in" component={SignInForm} />
                <Route path="/sign_up" component={SignUpForm} />
                <Route path="/logout" component={LogOut} />
            </Switch>
        </Fragment>
    );
}

export default App;