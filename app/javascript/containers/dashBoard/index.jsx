import React, {Component} from "react";
import SerchForm from "../search/SerchForm";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

class Dashboard extends Component {
    render() {
        return (
            <Container component="main" maxWidth="xl">
                <CssBaseline />
                <SerchForm/>
            </Container>
        )
    }
}



export default Dashboard