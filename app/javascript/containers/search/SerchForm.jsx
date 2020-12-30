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
        this.state = { search_by: 'title' };
    }
    handleChange=(event)=>{
        this.setState({ search_by: event.target.value })
    }

    handleSearch(){
        console.log(`handle Search`)
    }

    render() {
        return <Fragment>

            <Card className={classes.root}>
                <CardContent>
                    <form className={classes.root} noValidate autoComplete="off">
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
                                    onChange={this.handleChange}
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
                            />
                            <Button
                                variant="outlined"
                                style={{
                                    margin: 13,
                                }}
                                onClick={this.handleSearch}
                            >
                                <label htmlFor="icon-button-search">
                                    <IconButton color="primary" aria-label="search picture" component="span">
                                        <Search />
                                    </IconButton>
                                </label>
                                Search
                            </Button>
                        </Box>

                    </form>
                </CardContent>
            </Card>

        </Fragment>
    }
}

export default SerchForm;