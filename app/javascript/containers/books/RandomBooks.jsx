import React, {Component} from 'react'
import {connect} from "react-redux";
import {fetchBooks} from '../../actions/book';
import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import Loader from "../Loader";
import IconButton from "@material-ui/core/IconButton";
import {LockOpen} from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

const classes = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

class RandomBooks extends Component {
    componentDidMount() {
        this.props.books.length > 0 ? null : this.props.fetchBooks()
    }

    renderBooks(){
        return this.props.books.map((book, idx )=>
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
        return (
            <Container component="main" maxWidth="xl">
                <CssBaseline />
                <h3>
                    <span>
                        Random books
                    </span>
                    <Button
                        variant="outlined"
                        style={{
                            margin: 13,
                        }}
                        onClick={()=> {this.props.fetchBooks()}}
                    >
                        Reload
                    </Button>
                </h3>
                {
                    this.props.books.length !== 0 ? <List>{this.renderBooks()}</List> : <Loader/>
                }
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.books.books,
        loading: state.books.loading,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchBooks: () => dispatch(fetchBooks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomBooks)