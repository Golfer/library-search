import React, {Component, Fragment} from 'react'
import {connect} from "react-redux";
import {fetchBooks} from '../../actions/book';
import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";

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

    componentDidMount() {
        this.props.fetchBooks()
    }

    render() {
        return (
            <Fragment>
                <h3>Random books</h3>
                <List>
                    {this.renderBooks()}
                </List>

            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.books.books,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchBooks: () => dispatch(fetchBooks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomBooks)