import React, {Component, Fragment, useState} from 'react'
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import {Search} from "@material-ui/icons";
import Button from "@material-ui/core/Button";

import Card from '@material-ui/core/Card';
import CardContent from "@material-ui/core/CardContent";
import {connect} from "react-redux";
import {search_books} from "../../actions/search";
import {List} from "@material-ui/core";
import Loader from "../Loader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export const classes = makeStyles((theme) => ({
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
        },
        formControl: {
            margin: theme.spacing(3),
            minWidth: 120,
            maxWidth: 300,
        },
    }));

class SerchForm extends Component {
    constructor(props) {
        super(props);
        this.state = { search_by: 'title', search_query: '' };
    }

    SubmitHandler=(event)=>{
        event.preventDefault()
    }

    handleChangeSearchBy=(event)=>{
        this.setState({ search_by: event.target.value, search_query: ''})
        this.props.search_books(
            event.target.value,
            ''
        )
    }

    handleChangeSearchQuery=(event)=>{
        this.setState({ search_query: event.target.value })
        this.props.search_books(
            this.state.search_by,
            event.target.value
        )
    }

    renderBooks(){
        return this.props.searches_books.map((book, idx )=>
            <List key={book.id} className={classes.root}>
                <ListItem alignItems="flex-start">
                    <ListItemText>
                        {book.title}
                    </ListItemText>
                </ListItem>
            </List>
        )
    }


    render() {
        return <Fragment>
            <Card className={classes.root}>
                <CardContent>
                    <form className={classes.root} noValidate autoComplete="off" onSubmit={this.SubmitHandler}>
                        <Box alignItems="flex-start" width={1}>
                            <FormControl
                                variant="outlined"
                                className={classes.formControl}
                                style={{
                                    margin: 15,
                                }}
                            >
                                <InputLabel htmlFor="filled-search-by" ></InputLabel>
                                <Select
                                    native
                                    value={this.state.search_by}
                                    onChange={this.handleChangeSearchBy}
                                    inputProps={{
                                        name: 'search_by',
                                        id: 'filled-search-by',
                                    }}
                                >
                                    <option value={'author'}>Author</option>
                                    <option value={'title'}>Title</option>
                                    <option value={'isbn'}>Isbn</option>
                                    <option value={'isbn13'}>Isbn13</option>
                                </Select>
                            </FormControl>
                            <TextField
                                id="search_query"
                                label="Search"
                                style={{
                                    margin: 15,
                                    minWidth: '70%'
                                }}
                                placeholder="Books and Author"
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                value={this.state.search_query}
                                onChange={this.handleChangeSearchQuery}
                            />
                        </Box>
                    </form>
                </CardContent>
            </Card>

            <Card>
                {
                    this.props.searches_books.length !== 0 ? <List>{this.renderBooks()}</List> : null
                }
            </Card>
        </Fragment>
    }
}

function mapStateToProps(state) {
    return {
        searches_books: state.search_books.search_books
    }
}

function mapDispatchToProps(dispatch) {
    return {
        search_books: (type, q) => dispatch(search_books(type, q))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SerchForm);