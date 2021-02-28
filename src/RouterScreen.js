import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Teagan from './Pages/Teagan'
import Tyler from './Pages/Tyler'
import HomePage from './Pages/HomePage'

const RouterScreen = () => {
    return (
        <Router>
            <Switch>
                <Route path="/teagan">
                    <Teagan />
                </Route>
                <Route path="/tyler">
                    <Tyler />
                </Route>
                <Route path="/">
                    <HomePage />
                </Route>
            </Switch>
        </Router>
    );
}

export default RouterScreen
