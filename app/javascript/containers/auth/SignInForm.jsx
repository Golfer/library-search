import React, {Component, Fragment} from 'react'
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import {LockOpenOutlined} from "@material-ui/icons";
import Card from "@material-ui/core/Card";
import is from "is_js";
import {connect} from "react-redux";
import {authorization} from "../../actions/authorization";
import classes from './SignInForm.css'
import {Redirect} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";


class SignInFormOLD extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formControls: {
                email: {
                    value: '',
                    errorMsg: 'Enter correct email',
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        email: true,
                    }
                },
                password: {
                    value: '',
                    errorMsg: 'Enter correct password',
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        minLength: 6
                    }
                }
            }
        }
    }

    SubmitHandler=(event)=>{
        event.preventDefault()
    }

    handleSignIn=()=>{
        this.props.authorization(
            this.state.formControls.email.value,
            this.state.formControls.password.value,
        )
    }

    validControl(value, validation){
        if (!validation) {return true}

        let isValid = true
        if (validation.required) {
            isValid = value.trim() !== '' && isValid
        }

        if (validation.email) {
            isValid = is.email(value) && isValid
        }

        if (validation.minLength) {
            isValid = value.trim().length >= validation.minLength && isValid
        }

        return isValid
    }

    changeControlHandler=(event, controlInput)=>{
        const formControls = { ...this.state.formControls}
        const control = { ...formControls[controlInput] }

        control.value = event.target.value
        control.touched = true
        control.valid = this.validControl(control.value, control.validation)

        formControls[controlInput] = control

        let isFormValid = true

        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid
        })

        this.setState({formControls, isFormValid})
    }

    render() {

        const SignInForm =
            <Container component="main" maxWidth="md">
                <CssBaseline />
                <Card className={classes.form}>
                    <CardContent>
                        <Box className={classes.alignItemsAndJustifyContent} width={1}>
                            <Avatar className={classes.avatar}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                        </Box>
                        <form className={classes.root}  autoComplete="off" onSubmit={this.SubmitHandler}>
                            <Box alignItems="flex-start" width={1}>
                                <TextField
                                    id="email"
                                    label="Email"
                                    type="email"
                                    style={{
                                        margin: 15,
                                        minWidth: '50%'
                                    }}
                                    margin="normal"
                                    variant="outlined"
                                    error={!this.state.formControls.email.valid && this.state.formControls.email.touched}
                                    helperText={this.state.formControls.email.valid ? (!!this.props.errors.email ? this.props.errors.email[0] : null) : this.state.formControls.email.errorMsg}
                                    value={this.state.formControls.email.value}
                                    onChange={event => this.changeControlHandler(event, 'email')}
                                />
                                <TextField
                                    id="password"
                                    type="password"
                                    label="Password"
                                    style={{
                                        margin: 15,
                                        minWidth: '50%'
                                    }}
                                    margin="normal"
                                    variant="outlined"
                                    value={this.state.formControls.password.value}
                                    error={!this.state.formControls.password.valid && this.state.formControls.password.touched}
                                    helperText={this.state.formControls.password.valid ? null : this.state.formControls.password.errorMsg}
                                    onChange={event => this.changeControlHandler(event, 'password')}
                                />
                                <Box className={classes.alignItemsAndJustifyContent} width={1}>
                                    <Button
                                        variant="outlined"
                                        style={{
                                            margin: 13,
                                        }}
                                        onClick={this.handleSignIn}
                                        disabled={!this.state.isFormValid}
                                    >
                                        <label htmlFor="icon-button-search">
                                            <IconButton color="primary" aria-label="search picture" component="span">
                                                <LockOpenOutlined />
                                            </IconButton>
                                        </label>
                                        Sign In
                                    </Button>
                                </Box>

                            </Box>
                        </form>
                    </CardContent>
                </Card>
        </Container>


        return <Container component="main" maxWidth="sm">
            <CssBaseline />
            {this.props.isAuthenticate ? <Redirect to={'/books'} /> : SignInForm}
        </Container>
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticate: !!state.authorization.token,
        errors: state.authorization.errors,
        user: state.authorization.user,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        authorization: (email, password) => dispatch(authorization(email, password))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignInFormOLD)
