import React, {Component, Fragment} from 'react'
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import {LockOpen} from "@material-ui/icons";
import Card from "@material-ui/core/Card";
import classes from './SignUpForm.css'
import is from 'is_js'
import {connect} from "react-redux";
import {authentication} from "../../actions/authentication";
import {Redirect} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";

class SignUpForm extends Component {
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
                },
                first_name: {
                    value: '',
                    errorMsg: 'Enter correct first name',
                    valid: true,
                    touched: false,
                },
                last_name: {
                    value: '',
                    errorMsg: 'Enter correct last name',
                    valid: true,
                    touched: false,
                },
            },
        };
    }

    SignUpHandler = () => {
        this.props.authentication(
            this.state.formControls.email.value,
            this.state.formControls.password.value,
            this.state.formControls.first_name.value,
            this.state.formControls.last_name.value,
        )
    }

    SubmitHandler=(event)=>{
        event.preventDefault()
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
        const SignUpForm =
            <Container component="main" maxWidth="md">
                <CssBaseline />
                <Card className={classes.form}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    <CardContent>
                        <form className={classes.root}  autoComplete="off" onSubmit={this.SubmitHandler}>
                            <Box className={classes.alignItemsAndJustifyContent} width={1}>
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
                                    error={!this.state.formControls.email.valid && this.state.formControls.email.touched || !!this.props.errors.email}
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
                                <TextField
                                    id="first_name"
                                    label="First name"
                                    style={{
                                        margin: 15,
                                        minWidth: '50%'
                                    }}
                                    placeholder="First name"
                                    margin="normal"
                                    variant="outlined"
                                    value={this.state.formControls.first_name.value}
                                    error={!this.state.formControls.first_name.valid && this.state.formControls.first_name.touched}
                                    helperText={this.state.formControls.first_name.valid ? null : this.state.formControls.first_name.errorMsg}
                                    onChange={event => this.changeControlHandler(event, 'first_name')}
                                />
                                <TextField
                                    id="last_name"
                                    label="Last name"
                                    style={{
                                        margin: 15,
                                        minWidth: '50%'
                                    }}
                                    placeholder="Last name"
                                    margin="normal"
                                    variant="outlined"
                                    value={this.state.formControls.last_name.value}
                                    error={!this.state.formControls.last_name.valid && this.state.formControls.last_name.touched}
                                    helperText={this.state.formControls.last_name.valid ? null : this.state.formControls.last_name.errorMsg}
                                    onChange={event => this.changeControlHandler(event, 'last_name')}
                                />
                                <Box className={classes.alignItemsAndJustifyContent} width={1}>
                                    <Button
                                        variant="outlined"
                                        style={{
                                            margin: 13,
                                        }}
                                        onClick={this.SignUpHandler}
                                        disabled={!this.state.isFormValid}
                                    >
                                        <label htmlFor="icon-button-search">
                                            <IconButton color="primary" aria-label="search picture" component="span">
                                                <LockOpen />
                                            </IconButton>
                                        </label>
                                        Sign Up
                                    </Button>
                                </Box>
                            </Box>
                        </form>
                    </CardContent>
                </Card>
            </Container>

        return <Fragment>
            {this.props.isAuthenticate ? <Redirect to={'/'} /> : SignUpForm}
        </Fragment>
    }
}


function mapStateToProps(state) {
    return {
        isAuthenticate: !!state.authorization.token,
        errors: state.authentication.errors,
        user: state.authentication.user,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        authentication: (email, password, first_name, last_name) => dispatch(authentication(email, password, first_name, last_name))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)