import './AppRoot.css';
import React, {Fragment} from "react";
import {Route} from "react-router-dom";
import NavBar from '../components/NavBar';

import RandomBooks from '../components/books/RandomBooks'

function App() {

    return (
        <Fragment>
            <NavBar />
            <main>
                <Route exact path="/" component={RandomBooks} />
            </main>
        </Fragment>
    );
}

export default App;