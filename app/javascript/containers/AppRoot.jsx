import React, {Component, Fragment} from "react"
import {connect} from "react-redux"
import './AppRoot.css'
import {Redirect, Route, Switch} from "react-router-dom"

import NavBar from './NavBar';
import DashBoard from './dashBoard/index'
import RandomBooks from './books/RandomBooks'
import SignInForm from './auth/SignInForm'
import SignUpForm from './auth/SignUpForm'
import LogOut from './auth/LogOutForm'
import {authoLogin} from "../actions/authorization";

class App extends Component {

    componentDidMount() {
        this.props.authoLogin()
    }

    render() {
        return (
            <Fragment>
                <NavBar />
                <Switch>
                    <Route path="/logout" component={LogOut} />
                    <Route path="/books" component={RandomBooks} />
                    <Route path="/sign_in" component={SignInForm} />
                    <Route path="/sign_up" component={SignUpForm} />
                    <Route exact path="/" component={DashBoard} />
                    <Redirect to="/" />
                    <Redirect to="/books" />
                </Switch>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticate: !!state.authorization.token
    }
}

function mapDispatchToProps(dispatch) {
    return {
        authoLogin: () => dispatch(authoLogin())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);